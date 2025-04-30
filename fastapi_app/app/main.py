from fastapi import FastAPI
from pydantic import BaseModel
from app.services.langchain_service import ask_gpt
from app.services.cosmos_service import save_conversation

app = FastAPI()

class QuestionRequest(BaseModel):
    user_id: str
    question: str



@app.post("/ask")
async def ask(request: QuestionRequest):
    resposta = await ask_gpt(request.user_id, request.question)
    return {"resposta": resposta}

    return {"response": response}
