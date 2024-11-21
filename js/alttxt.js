const botaoContraste = document.getElementById('modo-contraste');
botaoContraste.addEventListener('click', () => {
    document.body.classList.toggle('alto-contraste');
});