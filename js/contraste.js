const botaoContraste = document.getElementById('modo-contraste');
botaoContraste.addEventListener('click', () => {
    document.body.classList.toggle('alto-contraste');
});

const modoLeituraButton = document.getElementById('modo-leitura');

function lerTexto(texto) {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(texto);
    utterance.lang = 'pt-BR';
    synth.speak(utterance);
}

modoLeituraButton.addEventListener('click', () => {
    const textoParaLer = document.body.innerText;
    lerTexto(textoParaLer);
});