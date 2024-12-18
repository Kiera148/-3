// Definindo as perguntas e respostas
const perguntas = [
    {
        pergunta: "Qual é a NOSSA data?",
        resposta: "17",
        respostasErradas: {
            "15": "Não exato.",
            "16": "Sério?",
            "18": "Agora você está apenas brincando, né?",
            "1": "Faltou algo."
        }
    },
    {
        pergunta: "Você esteve lá, no início. Me diga, o que nos uniu?",
        resposta: "RPG",
        respostasErradas: {
            "rpg": "Maiúsculo...",
            "Fox": "...",
            "fox": "..."
        }
    },
    {
        pergunta: "Já que estamos falando sobre isso, veremos se tem uma boa memória... Qual o nome da minha primeira personagem?",
        resposta: "Kahori",
        respostasErradas: {
            "Kah": "Um apelido?",
            "kah": "Um apelido, em minúsculo?",
            "kahori": "Em maiúsculo...",
            "Kiera": "Ainda não.",
            "kiera": "Pare de digitar nomes em minúsculo",
            "Kie": "Ainda não...",
            "kie": "Pare de digitar nomes em minúsculo"
        }
    },
    {
        pergunta: "Uhh, esse é o nome da sua deusa, não é? Mas qual o apelido?",
        resposta: "Kiera",
        respostasErradas: {
            "Kah": "O outro.",
            "Kahzinha": "Ninguém mais me chama assim.",
            "Kaori": "Você fez de piada.",
            "kiera": "Maiúsculo...",
            "Aurora": "Adorável!"
        }
    },
    {
        pergunta: "E o seu...?",
        resposta: "Sattela",
        respostasErradas: {
            "Sele": "Você não se lembra...?"
        }
    }
];

let perguntaIndex = 0; // Começa com a primeira pergunta

// Função para validar a resposta e avançar para a próxima pergunta
function validarResposta() {
    const respostaInput = document.getElementById("resposta").value.trim();
    const responseMessage = document.getElementById("response-message");
    const perguntaElement = document.getElementById("pergunta");
    const respostaCerta = perguntas[perguntaIndex].resposta;
    const respostasErradas = perguntas[perguntaIndex].respostasErradas;

    // Limpa a mensagem de resposta anterior
    responseMessage.textContent = "";

    if (respostaInput === respostaCerta) {
        // Resposta correta, avançando para a próxima pergunta
        perguntaIndex++;
        
        if (perguntaIndex < perguntas.length) {
            // Atualiza a pergunta
            perguntaElement.textContent = perguntas[perguntaIndex].pergunta;
            document.getElementById("resposta").value = ""; // Limpa a caixa de resposta
        } else {
            // Fim do jogo
            perguntaElement.textContent = "Parabéns! A primeira senha é: 4321";
            document.getElementById("resposta").style.display = "none"; // Esconde o input
            document.querySelector(".submit").style.display = "none"; // Esconde o botão submit
        }
    } else {
        // Resposta errada, mostrando a reação correspondente
        if (respostasErradas[respostaInput]) {
            responseMessage.textContent = respostasErradas[respostaInput];
        } else {
            responseMessage.textContent = "Acho que se confundiu..."; // Para respostas não especificadas
        }
    }
}
