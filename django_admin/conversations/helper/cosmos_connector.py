import os
from azure.cosmos import CosmosClient, PartitionKey, exceptions
from typing import Dict, List, Any, Optional
from dotenv import load_dotenv
import logging
logger = logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

# Carregar variáveis do arquivo .env
load_dotenv()

class CosmosDBConnector:
    def __init__(self, connection_string: Optional[str] = None, database_name: str = 'AssistenteDB',
                 container_name: str = 'Conversations'):
        endpoint = os.getenv("COSMOSDB_URI")
        key = os.getenv("COSMOSDB_KEY")

        if not endpoint or not key:
            raise ValueError("Variáveis COSMOSDB_URI ou COSMOSDB_KEY não encontradas no .env")

        self.connection_string = f"AccountEndpoint={endpoint};AccountKey={key};"
        self.database_name = database_name
        self.container_name = container_name

        self.client = CosmosClient.from_connection_string(self.connection_string)
        self.database = self.client.get_database_client(self.database_name)
        self.container = self.database.get_container_client(self.container_name)

    def create_database_if_not_exists(self) -> None:
        try:
            self.client.create_database(self.database_name)
            logger.info(f"Banco de dados '{self.database_name}' criado com sucesso.")
        except exceptions.CosmosResourceExistsError:
            logger.info(f"Banco de dados '{self.database_name}' já existe.")

    def create_container_if_not_exists(self, partition_key: str = '/id') -> None:
        try:
            self.database.create_container(
                id=self.container_name,
                partition_key=PartitionKey(path=partition_key)
            )
            logger.info(f"Container '{self.container_name}' criado com sucesso.")
        except exceptions.CosmosResourceExistsError:
            logger.info(f"Container '{self.container_name}' já existe.")

    def create_item(self, item: Dict[str, Any]) -> Dict[str, Any]:
        return self.container.create_item(body=item)

    def get_item(self, item_id: str, partition_key: Optional[str] = None) -> Dict[str, Any]:
        partition_key = partition_key or item_id
        return self.container.read_item(item=item_id, partition_key=partition_key)

    def query_items(self, query: str, parameters: Optional[Dict[str, Any]] = None) -> List[Dict[str, Any]]:
        return list(
            self.container.query_items(
                query=query,
                parameters=parameters,
                enable_cross_partition_query=True,
            )
        )

    def update_item(self, item_id: str, updated_item: Dict[str, Any],
                    partition_key: Optional[str] = None) -> Dict[str, Any]:
        partition_key = partition_key or item_id

        if 'id' not in updated_item:
            updated_item['id'] = item_id
        return self.container.replace_item(item=item_id, body=updated_item, partition_key=partition_key)

    def delete_item(self, item_id: str, partition_key: Optional[str] = None) -> None:
        partition_key = partition_key or item_id
        self.container.delete_item(item=item_id, partition_key=partition_key)

    def upsert_item(self, item: Dict[str, Any]) -> Dict[str, Any]:
        return self.container.upsert_item(body=item)
