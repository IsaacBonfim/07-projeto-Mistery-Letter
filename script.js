const corpo = document.getElementById('body');
const cabecalho = document.getElementById('header');
const titulo = document.getElementById('title');
const footer = document.getElementById('footer');
const rodaPe = document.getElementById('rodape');
const luz = document.getElementById('light');
const luzes = document.getElementById('label');

const darkJungleGreen = 'rgba(0, 21, 20, 1)';
const white = 'rgba(255, 255, 255, 1)';
const bloodRed = 'rgba(107, 5, 4, 1)';
const chineseRed = 'rgba(163, 50, 11, 1)';
const goldenRod = 'rgba(230, 175, 46, 1)';

const botao = document.getElementById('criar-carta');
const texto = document.getElementById('carta-texto');
const carta = document.getElementById('carta-gerada');

const classes1 = ['newspaper', 'magazine1', 'magazine2'];
const classes2 = ['medium', 'big', 'reallybig'];
const classes3 = ['rotateleft', 'rotateright', 'skewleft', 'skewright'];

function ascende() {
  corpo.style.backgroundColor = white;
  cabecalho.style.backgroundColor = goldenRod;
  cabecalho.style.borderColor = darkJungleGreen;
  footer.style.backgroundColor = goldenRod;
  footer.style.borderColor = darkJungleGreen;
  titulo.style.color = chineseRed;
  titulo.style.textShadow = `2px 2px 2px ${bloodRed}`;
  rodaPe.style.textShadow = `2px 2px 2px ${bloodRed}`;
  luzes.style.color = 'black';
  carta.style.color = 'black';
}

function apaga() {
  corpo.style.backgroundColor = darkJungleGreen;
  cabecalho.style.backgroundColor = darkJungleGreen;
  cabecalho.style.borderColor = chineseRed;
  footer.style.backgroundColor = darkJungleGreen;
  footer.style.borderColor = chineseRed;
  titulo.style.color = bloodRed;
  titulo.style.textShadow = `2px 2px 2px ${white}`;
  rodaPe.style.textShadow = `2px 2px 2px ${goldenRod}`;
  luzes.style.color = white;
  carta.style.color = white;
}

function ascenderLuz() {
  if (luz.checked === true) {
    ascende();
  } else {
    apaga();
  }
}

luz.addEventListener('change', ascenderLuz);

function escreveCarta() {
  const palavras = texto.value.split(' ');

  carta.textContent = '';

  for (let i = 0; i < palavras.length; i += 1) {
    const span = document.createElement('span');

    span.textContent = `${palavras[i]}`;
    span.className = `${classes1[Math.floor(Math.random() * 3)]} 
      ${classes2[Math.floor(Math.random() * 3)]} 
      ${classes3[Math.floor(Math.random() * 4)]}`;

    carta.appendChild(span);
  }
}

function verificaTexto() {
  if (!texto.value.trim()) {
    carta.textContent = 'Por favor, digite o conteúdo da carta.';
  } else {
    escreveCarta();
  }
}

botao.addEventListener('click', verificaTexto);
