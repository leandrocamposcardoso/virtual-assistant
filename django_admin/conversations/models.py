from django.db import models

class Conversation(models.Model):
    user_id = models.CharField(max_length=255)
    question = models.TextField()
    answer = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        managed = False
        verbose_name = "Conversas"
        verbose_name_plural = "Conversas"
        db_table = 'cosmos_conversation'

    def __str__(self):
        return f"Conversa de {self.user_id} em {self.created_at.strftime('%d/%m/%Y %H:%M')}"
