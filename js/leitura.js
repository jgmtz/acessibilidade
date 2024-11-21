const botaoContraste = document.getElementById('modo-contraste');
botaoContraste.addEventListener('click', () => {
    document.body.classList.toggle('alto-contraste');
});
// Seleciona o botão de ativar modo leitura
const modoLeituraButton = document.getElementById('modo-leitura');

// Função para ler o texto da página
function lerTexto(texto) {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(texto);
    utterance.lang = 'pt-BR'; // Define o idioma como português do Brasil
    synth.speak(utterance);
}

// Evento de clique para o botão "Ouvir Página"
modoLeituraButton.addEventListener('click', () => {
    // Seleciona todo o texto da página que deve ser lido
    const textoParaLer = document.body.innerText;
    lerTexto(textoParaLer);
});