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
const label = document.getElementById('label-contador');
const total = document.getElementById('carta-contador');

const estilo = ['newspaper', 'magazine1', 'magazine2'];
const tamanho = ['medium', 'big', 'reallybig'];
const rotacao = ['rotateleft', 'rotateright'];
const inclinacao = ['skewleft', 'skewright'];

const classes = [estilo, tamanho, rotacao, inclinacao];

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
  label.style.color = 'black';
  total.style.color = 'black';
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
  label.style.color = white;
  total.style.color = white;
}

function ascenderLuz() {
  if (luz.checked === true) {
    ascende();
  } else {
    apaga();
  }
}

luz.addEventListener('change', ascenderLuz);

function escolheGrupos() {
  const grupos = [classes[Math.floor(Math.random() * 4)], classes[Math.floor(Math.random() * 4)]];

  for (grupos[1]; grupos[1] === grupos[0];) {
    if (grupos[0] === grupos[1]) {
      grupos[1] = classes[Math.floor(Math.random() * 4)];
    }
  }

  return grupos;
}

function escolheClasses() {
  const grupos = escolheGrupos();

  const classe = [grupos[0][Math.floor(Math.random() * 3)],
    grupos[1][Math.floor(Math.random() * 3)]];

  for (let i = 0; i < classe.length; i += 1) {
    if (classe[i] === undefined) {
      classe[i] = grupos[i][Math.floor(Math.random() * 2)];
    }
  }

  return classe;
}

function atribuiClasse() {
  const classe = escolheClasses();
  const atribuir = `${classe[0]} ${classe[1]}`;

  return atribuir;
}

function trocaClasse(evento) {
  const palavra = evento.target;

  palavra.className = atribuiClasse();
}

function escreveCarta() {
  const palavras = texto.value.split(' ');

  carta.textContent = '';

  for (let i = 0; i < palavras.length; i += 1) {
    const span = document.createElement('span');

    span.textContent = `${palavras[i]}`;
    span.className = atribuiClasse();
    span.addEventListener('click', trocaClasse);

    carta.appendChild(span);
  }

  label.textContent = 'O total de palavras é: ';
  total.textContent = palavras.length;
}

function verificaTexto() {
  if (!texto.value.trim()) {
    carta.textContent = 'Por favor, digite o conteúdo da carta.';
  } else {
    escreveCarta();
  }
}

botao.addEventListener('click', verificaTexto);
