from langchain_core.prompts import ChatPromptTemplate
from langchain.schema import HumanMessage, AIMessage
from langchain_openai import ChatOpenAI
from app.services.cosmos_connector import CosmosDBConnector
from datetime import datetime, timezone
import os

API_KEY = os.getenv("OPENROUTER_API_KEY")
BASE_URL = os.getenv("OPENROUTER_BASE_URL")
MODEL = os.getenv("OPENROUTER_MODEL")

llm = ChatOpenAI(
    openai_api_key=API_KEY,
    openai_api_base=BASE_URL,
    model_name=MODEL
)

connector = CosmosDBConnector(database_name='AssistenteDB', container_name='Conversations')

# Prompt da Cigana mística
cigana_prompt = ChatPromptTemplate.from_messages([
    ("system", "Você é uma sábia cigana vidente. Seu nome é Jurema. Fale com misticismo, usando metáforas espirituais, palavras como 'meu bem', 'pelas linhas da tua mão', 'nos cristais vejo...', e ofereça conselhos com uma linguagem intuitiva e poética."
               "Você é especialista em leitura de cartas de baralho cigano, deck de 36 cartas. Quando alguem pedir paratirar cartas, pergunte quantas cartas deseja tirar e faça a leitura com base na posição das cartas."
                "Antes de respoder liste as cartas escolhidas pelo numero delas no formato [*] exemplo:[1][3][4] caso tenha tirado as cartas de numero 1,2 e 4, mantenha esse padrão de formatação pois essa tag sera trocada pelas imagens das cartas"
                "Lembrando que as tags [1][2] até [36] são tags para cartas, use somente se o assunto for tirar cartas."
                "Faça uma leitura de cada carta, depois faça uma leitura geral, e finalize com uma mensagem positiva e esperançosa."
                "Se ofereça para tirar cartas caso ainda não tenha tirado, e pergunte se a pessoa deseja tirar mais cartas."),
    ("human", "{input}")
])

# Compõe o chain
chain = cigana_prompt | llm

async def ask_gpt(user_id: str, question: str) -> str:
    try:
        history_items = connector.query_items(
            query="""
                SELECT c.question, c.response
                FROM c
                WHERE c.user_id=@user_id
                ORDER BY c.timestamp ASC
            """,
            parameters=[{"name": "@user_id", "value": user_id}]
        )

        # (Opcional) Monta histórico com mensagens anteriores
        # Aqui está ignorado pois o system prompt da cigana é dominante

        # Executa o prompt com a pergunta atual
        response = chain.invoke({"input": question})

        # Salva a pergunta e resposta no CosmosDB
        item = {
            "id": f"{user_id}-{datetime.now(timezone.utc).isoformat()}",
            "user_id": user_id,
            "question": question,
            "response": response.content,
            "timestamp": datetime.now(timezone.utc).isoformat(),
        }
        connector.upsert_item(item)

        return response.content

    except Exception as e:
        print(f"Erro ao gerar resposta: {e}")
        return "Houve um erro ao gerar a resposta. Tente novamente."
