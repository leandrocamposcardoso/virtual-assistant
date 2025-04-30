from app.services.cosmos_connector import CosmosDBConnector
from datetime import datetime

# Configurações do banco de dados
DATABASE_NAME = 'AssistenteDB'
CONTAINER_NAME = 'Conversations'

# Inicializar o conector
connector = CosmosDBConnector(database_name=DATABASE_NAME, container_name=CONTAINER_NAME)

async def save_conversation(user_id: str, question: str, response: str) -> None:
    item = {
        "id": f"{user_id}-{datetime.utcnow().isoformat()}",
        "user_id": user_id,
        "question": question,
        "response": response,
        "timestamp": datetime.utcnow().isoformat()
    }
    connector.upsert_item(item)
