import csv
from django.contrib import admin
from django.http import HttpResponse
from django.urls import path
from django.shortcuts import render
from azure.cosmos import CosmosClient
import os
from datetime import datetime
from django.contrib.admin.models import LogEntry

class CosmosConversationAdmin(admin.ModelAdmin):
    change_list_template = "admin/cosmos_conversations.html"

    def get_urls(self):
        urls = super().get_urls()
        my_urls = [
            path('', self.admin_site.admin_view(self.cosmos_view))
        ]
        return my_urls + urls

    def cosmos_view(self, request):
        cosmos_uri = os.getenv('COSMOSDB_URI')
        cosmos_key = os.getenv('COSMOSDB_KEY')
        client = CosmosClient(cosmos_uri, credential=cosmos_key)
        database = client.get_database_client('AssistenteDB')
        container = database.get_container_client('Conversations')

        user_id_filter = request.GET.get("user_id")
        query = "SELECT * FROM c ORDER BY c._ts DESC OFFSET 0 LIMIT 20"
        parameters = []

        if user_id_filter:
            query += " WHERE c.user_id = @user_id"
            parameters = [{"name": "@user_id", "value": user_id_filter}]

        items = list(container.query_items(
            query=query,
            parameters=parameters,
            enable_cross_partition_query=True
        ))

        for item in items:
            if "timestamp" in item:
                item["timestamp"] = datetime.fromisoformat(item["timestamp"])

        # Verifica se é exportação CSV
        if request.GET.get("export") == "csv":
            response = HttpResponse(content_type='text/csv')
            response['Content-Disposition'] = 'attachment; filename="conversas.csv"'

            writer = csv.writer(response)
            writer.writerow(["ID", "User ID", "Pergunta", "Resposta", "Timestamp"])
            for item in items:
                writer.writerow([
                    item.get("id", ""),
                    item.get("user_id", ""),
                    item.get("question", ""),
                    item.get("response", ""),
                    item.get("timestamp", "")
                ])
            return response


        page = int(request.GET.get("page", 1))
        per_page = 10
        start = (page - 1) * per_page
        end = start + per_page
        total_items = len(items)
        total_pages = (total_items + per_page - 1) // per_page
        paginated_items = items[start:end]

        return render(request, "admin/cosmos_conversations.html", {
            'items': paginated_items,
            'user_id_filter': user_id_filter,
            'page': page,
            'total_pages': total_pages
        })

admin.site.register(LogEntry, CosmosConversationAdmin)
