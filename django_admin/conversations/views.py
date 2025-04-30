from django.shortcuts import render
import os

from dotenv import load_dotenv
import requests

from .helper.cosmos_connector import CosmosDBConnector


load_dotenv()

# Configurações do banco de dados
DATABASE_NAME = 'AssistenteDB'
CONTAINER_NAME = 'Conversations'
FASTAPI_URL = os.getenv("FASTAPI_URL", "http://127.0.0.1:8000/ask")

connector = CosmosDBConnector(database_name=DATABASE_NAME, container_name=CONTAINER_NAME)
def chat_view(request):
    user_id = request.GET.get("user_id", "teste2")
    resposta = None

    if request.method == "POST":
        question = request.POST.get("question")

        try:
            response = requests.post(FASTAPI_URL, json={
                "question": question,
                "user_id": user_id
            })
            if response.status_code == 200:
                resposta = response.json().get("resposta")
            else:
                resposta = f"[Erro FastAPI: {response.status_code}]"
        except Exception as e:
            resposta = f"[Erro de conexão com FastAPI: {str(e)}]"

    conversas = list(
        connector.query_items(
            query="SELECT * FROM c WHERE c.user_id = @user_id ORDER BY c._ts ASC",
            parameters=[{"name": "@user_id", "value": user_id}],
        )
    )


    return render(request, "chat.html", {
        "conversas": conversas,
        "user_id": user_id,
        "resposta": resposta,
    })




