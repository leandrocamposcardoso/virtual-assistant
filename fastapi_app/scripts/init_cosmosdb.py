from app.services.cosmos_connector import CosmosDBConnector

DATABASE_NAME = 'AssistenteDB'
CONTAINER_NAME = 'Conversations'
PARTITION_KEY = '/user_id'

connector = CosmosDBConnector(database_name=DATABASE_NAME, container_name=CONTAINER_NAME)
connector.create_database_if_not_exists()
connector.create_container_if_not_exists(partition_key=PARTITION_KEY)

print(f"Banco de dados '{DATABASE_NAME}' e container '{CONTAINER_NAME}' prontos!")
