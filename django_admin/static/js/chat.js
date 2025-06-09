const cardNames = [
  "Cavaleiro", "Trevo", "Navio", "Casa", "Árvore", "Nuvens",
  "Cobra", "Caixão", "Bouquet", "Foice", "Chicote", "Pássaros",
  "Criança", "Raposa", "Urso", "Estrela", "Cegonha", "Cachorro",
  "Torre", "Jardim", "Montanhas", "Caminhos", "Ratos", "Coração",
  "Anel", "Livro", "Carta", "Homem", "Mulher", "Lírios",
  "Sol", "Lua", "Chave", "Peixes", "Âncora", "Cruz"
];

const cardDescriptions = {
  1: "Representa movimento, progresso e a chegada de novidades. É um símbolo de ação e dinamismo.",
  2: "Simboliza sorte, oportunidades e pequenos desafios. Indica que algo positivo pode surgir inesperadamente.",
  3: "Indica viagens, mudanças e exploração. Representa a busca por novos horizontes e aventuras.",
  4: "Representa segurança, família e estabilidade. É um símbolo de conforto e proteção.",
  5: "Simboliza crescimento, saúde e raízes profundas. Indica evolução pessoal e conexão com a natureza.",
  6: "Indica confusão, incertezas e obstáculos temporários. Representa momentos de dúvida e necessidade de clareza.",
  7: "Representa traição, engano e sabedoria. Pode indicar perigos ocultos ou a necessidade de agir com astúcia.",
  8: "Simboliza finais, transformações e novos começos. Representa o encerramento de ciclos e renascimento.",
  9: "Indica alegria, presentes e gratidão. É um símbolo de felicidade e celebração.",
  10: "Representa cortes, decisões e mudanças rápidas. Indica a necessidade de eliminar o que não serve mais.",
  11: "Simboliza conflitos, disciplina e repetição. Pode indicar tensões ou a necessidade de resolver questões pendentes.",
  12: "Indica comunicação, conversas e ansiedade. Representa trocas de ideias e interações sociais.",
  13: "Representa inocência, novos começos e simplicidade. Indica pureza e a necessidade de olhar o mundo com leveza.",
  14: "Simboliza astúcia, engano e inteligência. Representa a necessidade de agir com estratégia e cuidado.",
  15: "Representa força, proteção e autoridade. Indica poder e a necessidade de defender o que é importante.",
  16: "Indica esperança, inspiração e orientação. É um símbolo de luz e direção em momentos de dúvida.",
  17: "Simboliza mudanças, transições e novidades. Representa a chegada de algo novo e positivo.",
  18: "Representa lealdade, amizade e confiança. Indica relações de apoio e companheirismo.",
  19: "Indica isolamento, autoridade e estruturas. Representa a necessidade de introspecção ou proteção.",
  20: "Simboliza socialização, comunidade e eventos. Indica momentos de interação e celebração.",
  21: "Representa desafios, obstáculos e superação. Indica a necessidade de persistência para alcançar objetivos.",
  22: "Indica escolhas, decisões e direções. Representa a necessidade de tomar decisões importantes.",
  23: "Simboliza perdas, desgaste e preocupações. Indica a necessidade de atenção para evitar prejuízos.",
  24: "Representa amor, emoções e relacionamentos. Indica conexões profundas e sentimentos verdadeiros.",
  25: "Indica compromissos, contratos e uniões. Representa parcerias e acordos importantes.",
  26: "Simboliza segredos, conhecimento e aprendizado. Indica a necessidade de buscar informações ou estudar.",
  27: "Indica mensagens, comunicação e informações. Representa notícias ou trocas de correspondências.",
  28: "Representa uma figura masculina ou o consulente. Indica energia masculina ou foco em um homem específico.",
  29: "Representa uma figura feminina ou a consulente. Indica energia feminina ou foco em uma mulher específica.",
  30: "Simboliza paz, harmonia e virtude. Indica momentos de tranquilidade e equilíbrio.",
  31: "Indica sucesso, energia e positividade. Representa conquistas e vitalidade.",
  32: "Representa intuição, emoções e reconhecimento. Indica sensibilidade e conexão com o inconsciente.",
  33: "Simboliza soluções, respostas e oportunidades. Indica a abertura de caminhos e resolução de problemas.",
  34: "Indica abundância, finanças e liberdade. Representa prosperidade e independência.",
  35: "Representa estabilidade, segurança e perseverança. Indica a necessidade de manter-se firme em seus objetivos.",
  36: "Simboliza destino, desafios e espiritualidade. Representa lições importantes e superação de dificuldades."
};

const buzios ={
  0:'https://i.ibb.co/N2TKL5VR/aberto-removebg-preview.png',
  1:'https://i.ibb.co/23GvN74c/fechado-removebg-preview.png'
}
// Cards UrL
const cardImagePath = {
     1: 'https://static.wixstatic.com/media/f481dd_e50c5289af784d71bc79dc52b3022fc8~mv2.webp/v1/fill/w_120,h_190,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f481dd_e50c5289af784d71bc79dc52b3022fc8~mv2.webp',
     2: 'https://static.wixstatic.com/media/f481dd_f3df4b4af1d84defa2a0e47d18c6efa1~mv2.webp/v1/fill/w_120,h_190,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f481dd_f3df4b4af1d84defa2a0e47d18c6efa1~mv2.webp',
     3: 'https://static.wixstatic.com/media/f481dd_975c174e51b84f2488a891468433f6eb~mv2.webp/v1/fill/w_120,h_190,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f481dd_975c174e51b84f2488a891468433f6eb~mv2.webp',
     4: 'https://static.wixstatic.com/media/f481dd_af49110af76c4fdab6838a4b6a65aa29~mv2.webp/v1/fill/w_120,h_190,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f481dd_af49110af76c4fdab6838a4b6a65aa29~mv2.webp',
     5: 'https://static.wixstatic.com/media/f481dd_b93c706c881c4ddb81a2d5a4437ea4cb~mv2.webp/v1/fill/w_120,h_190,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f481dd_b93c706c881c4ddb81a2d5a4437ea4cb~mv2.webp',
     6: 'https://static.wixstatic.com/media/f481dd_4b66370625fa4ca18f7a1847bdb9c63a~mv2.webp/v1/fill/w_120,h_190,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f481dd_4b66370625fa4ca18f7a1847bdb9c63a~mv2.webp',
     7: 'https://static.wixstatic.com/media/f481dd_492984579aeb4d46a3dd8a808bb66c24~mv2.webp/v1/fill/w_120,h_190,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f481dd_492984579aeb4d46a3dd8a808bb66c24~mv2.webp',
     8: 'https://static.wixstatic.com/media/f481dd_2a7779c16850429e8596998a18b4759f~mv2.webp/v1/fill/w_120,h_190,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f481dd_2a7779c16850429e8596998a18b4759f~mv2.webp',
     9: 'https://static.wixstatic.com/media/f481dd_a27a5207fbec417b8a7f488c40de05be~mv2.webp/v1/fill/w_120,h_190,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f481dd_a27a5207fbec417b8a7f488c40de05be~mv2.webp',
     10: 'https://static.wixstatic.com/media/f481dd_32a1d58dc1aa448b8779e88fb25599f0~mv2.webp/v1/fill/w_120,h_190,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f481dd_32a1d58dc1aa448b8779e88fb25599f0~mv2.webp',
     11: 'https://static.wixstatic.com/media/f481dd_8842ec44500747bebcd573ad382a83f0~mv2.webp/v1/fill/w_120,h_190,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f481dd_8842ec44500747bebcd573ad382a83f0~mv2.webp',
     12: 'https://static.wixstatic.com/media/f481dd_086d4532d469413fbf13a8a6ae6a5d21~mv2.webp/v1/fill/w_120,h_190,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f481dd_086d4532d469413fbf13a8a6ae6a5d21~mv2.webp',
     13: 'https://static.wixstatic.com/media/f481dd_715c0915e16c4f5eb6ca3b2b7832217a~mv2.webp/v1/fill/w_120,h_190,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f481dd_715c0915e16c4f5eb6ca3b2b7832217a~mv2.webp',
     14: 'https://static.wixstatic.com/media/f481dd_c4e187184e87411abad5f9859746c9ea~mv2.jpg/v1/fill/w_120,h_190,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f481dd_c4e187184e87411abad5f9859746c9ea~mv2.jpg',
     15: 'https://static.wixstatic.com/media/f481dd_2f08cf55130340c99e2fed7d409d4d92~mv2.webp/v1/fill/w_120,h_190,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f481dd_2f08cf55130340c99e2fed7d409d4d92~mv2.webp',
     16: 'https://static.wixstatic.com/media/f481dd_c6967f029c514a70b8453d273d4df24f~mv2.webp/v1/fill/w_120,h_190,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f481dd_c6967f029c514a70b8453d273d4df24f~mv2.webp',
     17: 'https://static.wixstatic.com/media/f481dd_29aa9212e52847d3820eb84f13ceadab~mv2.webp/v1/fill/w_120,h_190,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f481dd_29aa9212e52847d3820eb84f13ceadab~mv2.webp',
     18: 'https://static.wixstatic.com/media/f481dd_cba7d01a465f4293bbcb3c6a832ef4dd~mv2.webp/v1/fill/w_120,h_190,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f481dd_cba7d01a465f4293bbcb3c6a832ef4dd~mv2.webp',
     19: 'https://static.wixstatic.com/media/f481dd_f915d433ac934618bcd3f98c6cb54867~mv2.webp/v1/fill/w_120,h_190,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f481dd_f915d433ac934618bcd3f98c6cb54867~mv2.webp',
     20: 'https://static.wixstatic.com/media/f481dd_2b54819a3af4466d80980cd20ce1c125~mv2.webp/v1/fill/w_120,h_190,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f481dd_2b54819a3af4466d80980cd20ce1c125~mv2.webp',
     21: 'https://static.wixstatic.com/media/f481dd_261ee564ea8746d5a2e20a1b1d24b359~mv2.webp/v1/fill/w_120,h_190,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f481dd_261ee564ea8746d5a2e20a1b1d24b359~mv2.webp',
     22: 'https://static.wixstatic.com/media/f481dd_ff3bb5a19e744e07bdd7977bed618f74~mv2.webp/v1/fill/w_120,h_190,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f481dd_ff3bb5a19e744e07bdd7977bed618f74~mv2.webp',
     23: 'https://static.wixstatic.com/media/f481dd_efa35e64fb384541a856d6330d3f2ac6~mv2.webp/v1/fill/w_120,h_190,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f481dd_efa35e64fb384541a856d6330d3f2ac6~mv2.webp',
     24: 'https://static.wixstatic.com/media/f481dd_59788934ccb44e85ba2c3ec160e8a2ac~mv2.png/v1/fill/w_120,h_190,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f481dd_59788934ccb44e85ba2c3ec160e8a2ac~mv2.png',
     25: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnvRf16YNLDrJ48t7JDCR0uikvCpguGnBfPA&s',
     26: 'https://static.wixstatic.com/media/f481dd_102c6a7931664c6186a3f7985ddfde60~mv2.webp/v1/fill/w_120,h_190,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f481dd_102c6a7931664c6186a3f7985ddfde60~mv2.webp',
     27: 'https://static.wixstatic.com/media/f481dd_3348d4f825594aa9b0fc4be24a29ee61~mv2.webp/v1/fill/w_120,h_190,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f481dd_3348d4f825594aa9b0fc4be24a29ee61~mv2.webp',
     28: 'https://static.wixstatic.com/media/f481dd_bd41fab1772b40eda0af40b061a71819~mv2.webp/v1/fill/w_120,h_190,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f481dd_bd41fab1772b40eda0af40b061a71819~mv2.webp',
     29: 'https://static.wixstatic.com/media/f481dd_c297f327e4f14be281b8a50cc64b8432~mv2.webp/v1/fill/w_120,h_190,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f481dd_c297f327e4f14be281b8a50cc64b8432~mv2.webp',
     30: 'https://static.wixstatic.com/media/f481dd_6f166d53cd6c48eaac798331854991a6~mv2.webp/v1/fill/w_120,h_190,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f481dd_6f166d53cd6c48eaac798331854991a6~mv2.webp',
     31: 'https://static.wixstatic.com/media/f481dd_1d76f69e58c44bd3a4058fd3ab811e04~mv2.webp/v1/fill/w_120,h_190,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f481dd_1d76f69e58c44bd3a4058fd3ab811e04~mv2.webp',
     32: 'https://static.wixstatic.com/media/f481dd_19a595320acc45cd9ea4f2e5db9c3429~mv2.webp/v1/fill/w_120,h_190,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f481dd_19a595320acc45cd9ea4f2e5db9c3429~mv2.webp',
     33: 'https://static.wixstatic.com/media/f481dd_4d4e530df0874ba8a69cc5cb6face152~mv2.webp/v1/fill/w_120,h_190,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f481dd_4d4e530df0874ba8a69cc5cb6face152~mv2.webp',
     34: 'https://static.wixstatic.com/media/f481dd_51c701b3e28a4a1191008dfeba6a220c~mv2.webp/v1/fill/w_120,h_190,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f481dd_51c701b3e28a4a1191008dfeba6a220c~mv2.webp',
     35: 'https://static.wixstatic.com/media/f481dd_55c74eba510a4f1c98bd904854ab1843~mv2.webp/v1/fill/w_120,h_190,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f481dd_55c74eba510a4f1c98bd904854ab1843~mv2.webp',
     36: 'https://static.wixstatic.com/media/f481dd_66fc3cacf5db49069be2beeaba5f74bf~mv2.webp/v1/fill/w_120,h_190,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f481dd_66fc3cacf5db49069be2beeaba5f74bf~mv2.webp'
}
// Função para processar as mensagens e substituir os códigos [n] por cartas
function processMessages() {
  const messageBubbles = document.querySelectorAll('.message-assistant .message-bubble');

  messageBubbles.forEach(bubble => {
    let content = bubble.innerHTML;

    // Salvar as tags de tempo para restaurar depois
    const timeTag = bubble.querySelector('.message-time');
    const timeHTML = timeTag ? timeTag.outerHTML : '';

    // Remover as tags de tempo temporariamente
    if (timeTag) {
      content = content.replace(timeTag.outerHTML, '');
    }

    // Substituir texto entre ** ** por tags <strong>
    content = content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

    // Substituir \n por <br> (se ainda existir)
    content = content.replace(/\\n/g, '<br>');

    // Substituir [a] e [f] pelas imagens de búzios
    content = content.replace(/\[a\]/g, function() {
      return `<img src="${buzios[1]}" alt="Búzios Aberto" style="width: 25px; height: 25px;">`;
    });

    content = content.replace(/\[f\]/g, function() {
      return `<img src="${buzios[0]}" alt="Búzios Fechado" style="width: 25px; height: 25px;">`;
    });

    // Substituir [n] pelos elementos de carta
    content = content.replace(/\[(\d+)\]/g, function(match, cardNumber) {
      const cardIndex = parseInt(cardNumber);
      const cardUrl = cardImagePath[cardIndex]; // Obter a URL da carta pelo índice
      const cardName = cardNames[cardIndex - 1]; // Obter o nome da carta pelo índice

      if (cardUrl) {
        return `<div class="tarot-card" onclick="showCardModal(${cardIndex})">
                  <img src="${cardUrl}" alt="Carta ${cardNumber}" onerror="this.src='${cardImagePath[1]}'">
                  <div class="tarot-card-name">${cardIndex}. ${cardName}</div>
                </div>`;
      }
      return match; // Se não houver URL, mantém o texto original
    });

    // Restaurar as tags de tempo
    if (timeTag) {
      content = content + timeHTML;
    }

    bubble.innerHTML = content;
  });
}

// Função para mostrar o modal da carta ampliada
function showCardModal(cardIndex) {
  const modal = document.getElementById('cardModal');
  const modalImg = document.getElementById('modalCardImage');
  const modalName = document.getElementById('modalCardName');
  const modalDescription = document.getElementById('modalCardDescription');
  const cardNumber = cardIndex;

  // Obter a URL da carta pelo índice
  const cardUrl = cardImagePath[cardNumber];
  const cardName = cardNames[cardIndex - 1]; // Nome da carta
  const cardDescription = cardDescriptions[cardNumber]; // Descrição da carta

  if (cardUrl) {
    modalImg.src = cardUrl;
    modalImg.alt = `${cardNumber}. ${cardName}`;
    modalImg.onerror = function () {
      this.src = cardImagePath[1]; // Fallback para a carta 1 se a imagem não carregar
    };

    // Adicionar o nome e a descrição da carta
    modalName.textContent = cardName || "Nome não disponível";
    modalDescription.textContent = cardDescription || "Descrição não disponível.";

    modal.style.display = 'flex';

    // Prevenir rolagem do corpo quando o modal estiver aberto
    document.body.style.overflow = 'hidden';
  } else {
    console.warn(`URL da carta ${cardNumber} não encontrada no dicionário.`);
  }
}

// Função para fechar o modal
function closeCardModal() {
  document.getElementById('cardModal').style.display = 'none';
  document.body.style.overflow = 'auto';
}
function scrollToBottom() {
  const chatArea = document.getElementById('chat-area');
  chatArea.scrollTop = chatArea.scrollHeight;
}

// Fechar o modal ao clicar fora da imagem
window.onclick = function(event) {
  const modal = document.getElementById('cardModal');
  if (event.target === modal) {
    closeCardModal();
  }
}

// Rolar para o final do chat ao carregar a página
window.onload = function() {
  const chatArea = document.getElementById('chat-area');
  chatArea.scrollTop = 999999999;

  // Processar o texto e as cartas após o carregamento
  processMessages();
};

// Ajustar altura do textarea automaticamente
const textarea = document.querySelector('textarea');
textarea.addEventListener('input', function() {
  this.style.height = 'auto';
  this.style.height = (this.scrollHeight < 100) ? this.scrollHeight + 'px' : '100px';
});

// Enviar mensagem ao pressionar Enter (Shift+Enter para quebra de linha)
textarea.addEventListener('keydown', function(e) {
  if (e.key === 'Enter' && !e.shiftKey) {


     // Mostrar a mensagem de "Cigana Jurema está digitando..."
    typingIndicator.style.display = 'flex';

    // Mostrar o spinner e desativar o botão
    sendButton.querySelector('.send-icon').style.display = 'none';
    sendButton.querySelector('.loading-spinner').style.display = 'inline-block';
    sendButton.disabled = true;

     // Rolar para o final da área de chat
     scrollToBottom()

    // Submeter o formulário
    this.form.submit();
  }
});

const sendButton = document.getElementById('sendButton');
const form = document.querySelector('form');
const typingIndicator = document.getElementById('typingIndicator');

form.addEventListener('submit', function (e) {
  // Mostrar o spinner e desativar o botão
  sendButton.querySelector('.send-icon').style.display = 'none';
  sendButton.querySelector('.loading-spinner').style.display = 'inline-block';
  sendButton.disabled = true;

  // Mostrar a mensagem de "Cigana Jurema está digitando..."
  typingIndicator.style.display = 'flex';

  // Rolar para o final da área de chat
  scrollToBottom()
});

window.addEventListener('load', function () {
  scrollToBottom()
})
