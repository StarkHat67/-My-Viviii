document.addEventListener("DOMContentLoaded", () => {
    const giftBox = document.querySelector('.gift-box');
    const btnCarinho = document.getElementById('btnCarinho');
    const btnEspecial = document.getElementById('btnEspecial');
    const surprise = document.querySelector('.surprise');

    giftBox.addEventListener('click', revelarMensagem);
    btnCarinho.addEventListener('click', mostrarOutroCarinho);
    btnEspecial.addEventListener('click', mostrarMensagemEspecial);
    surprise.addEventListener('click', mostrarSurpresa);
});

function revelarMensagem() {
    const mensagem = document.getElementById('mensagem');
    const poema = document.getElementById('poema');
    mensagem.classList.add('show-message');
    poema.classList.add('show-poem');
    ativarConfetti();
}

function ativarConfetti() {
    const confetti = document.getElementById('confetti');
    confetti.style.display = 'block';
    const cores = ['#FF1493', '#FFD700', '#00CED1', '#ADFF2F', '#FF69B4'];

    for (let i = 0; i < 100; i++) {
        let confetto = document.createElement('div');
        confetto.style.left = `${Math.random() * 100}%`;
        confetto.style.animationDelay = `${Math.random() * 2}s`;
        confetto.style.backgroundColor = cores[Math.floor(Math.random() * cores.length)];
        confetti.appendChild(confetto);
    }

    setTimeout(() => {
        confetti.style.display = 'none';
        confetti.innerHTML = '';
    }, 5000);
}

function mostrarOutroCarinho() {
    alert("Você é minha vida, meu maior tesouro! 💖");
}

function mostrarMensagemEspecial() {
    alert("Você me faz sentir completo, amor! Cada segundo ao seu lado é mágico. 💖");
}

function mostrarSurpresa() {
    alert("Você ilumina tudo ao seu redor! 💖");
}
