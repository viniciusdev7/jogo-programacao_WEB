/*
  jogo.js — toda a lógica da partida.

  Estado da partida: quatro variáveis controlam tudo.
    casoAtual        -> índice do caso na lista CASOS (0 a 4)
    pistasReveladas  -> quantas pistas extras o jogador pediu neste caso (0 a 3)
    credibilidade    -> começa em 3, cai a cada acusação errada
    pontuacao        -> soma dos casos resolvidos
*/

// ---------- Configuração ----------
const VALORES = [100, 70, 40, 20];   // valor do caso conforme as pistas pedidas
const CREDIBILIDADE_INICIAL = 3;

// ---------- Estado ----------
let casoAtual = 0;
let pistasReveladas = 0;
let credibilidade = CREDIBILIDADE_INICIAL;
let pontuacao = 0;
let suspeitosQueimados = [];   // nomes já acusados sem sucesso neste caso
let travado = false;           // trava os cliques enquanto mostra o resultado

// ---------- Atalhos para elementos ----------
const $ = (id) => document.getElementById(id);

const telas = {
  inicio: $("tela-inicio"),
  jogo:   $("tela-jogo"),
  fim:    $("tela-fim")
};

// ---------- Troca de telas ----------
function mostrarTela(nome) {
  Object.values(telas).forEach((t) => t.classList.remove("tela--ativa"));
  telas[nome].classList.add("tela--ativa");
  window.scrollTo(0, 0);
}

// ---------- Início / reinício ----------
function iniciarPartida() {
  casoAtual = 0;
  credibilidade = CREDIBILIDADE_INICIAL;
  pontuacao = 0;
  carregarCaso();
  mostrarTela("jogo");
}

function carregarCaso() {
  pistasReveladas = 0;
  suspeitosQueimados = [];
  travado = false;

  const caso = CASOS[casoAtual];

  $("caso-numero").textContent = "Pasta " + String(casoAtual + 1).padStart(2, "0");
  $("caso-titulo").textContent = caso.titulo;
  $("caso-local").textContent = caso.local;
  $("caso-briefing").textContent = caso.briefing;

  $("pistas").innerHTML = "";
  $("aviso").className = "aviso";
  $("aviso").innerHTML = "";
  $("btn-pista").disabled = false;
  $("btn-pista").textContent = "Pedir mais uma pista";

  desenharSuspeitos();
  atualizarPlacar();
}

// ---------- Suspeitos ----------
function desenharSuspeitos() {
  const lista = $("lista-suspeitos");
  lista.innerHTML = "";

  CASOS[casoAtual].suspeitos.forEach((suspeito) => {
    const queimado = suspeitosQueimados.includes(suspeito.nome);

    const item = document.createElement("li");
    const botao = document.createElement("button");

    botao.className = "suspeito" + (queimado ? " suspeito--queimado" : "");
    botao.disabled = queimado || travado;
    botao.innerHTML =
      '<span class="suspeito__nome">' + suspeito.nome + "</span>" +
      '<span class="suspeito__papel">' + suspeito.papel + "</span>";

    botao.addEventListener("click", () => acusar(suspeito.nome));

    item.appendChild(botao);
    lista.appendChild(item);
  });
}

// ---------- Pistas ----------
function pedirPista() {
  if (travado) return;
  if (pistasReveladas >= CASOS[casoAtual].pistas.length) return;

  const texto = CASOS[casoAtual].pistas[pistasReveladas];
  pistasReveladas++;

  const p = document.createElement("p");
  p.className = "pista";
  p.textContent = texto;
  $("pistas").appendChild(p);

  if (pistasReveladas >= CASOS[casoAtual].pistas.length) {
    $("btn-pista").disabled = true;
    $("btn-pista").textContent = "Sem mais pistas nesta pasta";
  }

  atualizarPlacar();
}

// ---------- Acusação ----------
function acusar(nome) {
  if (travado) return;

  if (nome === CASOS[casoAtual].culpado) {
    const ganho = VALORES[pistasReveladas];
    pontuacao += ganho;
    travado = true;
    desenharSuspeitos();
    atualizarPlacar();

    mostrarAviso(
      "acerto",
      "É ele. +" + ganho + " pontos.",
      CASOS[casoAtual].solucao,
      casoAtual + 1 < CASOS.length ? "Próxima pasta" : "Ver resultado final",
      proximoCaso
    );
  } else {
    credibilidade--;
    suspeitosQueimados.push(nome);
    atualizarPlacar();

    if (credibilidade <= 0) {
      travado = true;
      desenharSuspeitos();
      encerrar(false);
    } else {
      desenharSuspeitos();
      mostrarAviso(
        "erro",
        "Não foi " + nome + ".",
        "Você perdeu uma credibilidade. Restam " + credibilidade + ".",
        null,
        null
      );
    }
  }
}

function proximoCaso() {
  casoAtual++;
  if (casoAtual >= CASOS.length) {
    encerrar(true);
  } else {
    carregarCaso();
  }
}

// ---------- Aviso de acerto/erro ----------
function mostrarAviso(tipo, titulo, texto, rotuloBotao, aoClicar) {
  const aviso = $("aviso");
  aviso.className = "aviso aviso--visivel aviso--" + tipo;
  aviso.innerHTML =
    '<p class="aviso__titulo">' + titulo + "</p>" +
    '<p class="aviso__texto">' + texto + "</p>";

  if (rotuloBotao) {
    const botao = document.createElement("button");
    botao.className = "botao botao--principal";
    botao.textContent = rotuloBotao;
    botao.addEventListener("click", aoClicar);
    aviso.appendChild(botao);
    botao.focus();
  }
}

// ---------- Placar ----------
function atualizarPlacar() {
  $("placar-caso").textContent = casoAtual + 1;
  $("placar-total").textContent = CASOS.length;
  $("placar-pontos").textContent = pontuacao;
  $("valor-atual").textContent = VALORES[pistasReveladas];

  // credibilidade desenhada como marcas: cheias e gastas
  let marcas = "";
  for (let i = 0; i < CREDIBILIDADE_INICIAL; i++) {
    marcas += i < credibilidade
      ? '<span class="marca"></span>'
      : '<span class="marca marca--gasta"></span>';
  }
  $("placar-credibilidade").innerHTML = marcas;
}

// ---------- Fim de jogo ----------
function encerrar(venceu) {
  if (venceu) {
    $("fim-selo").textContent = "Arquivo encerrado";
    $("fim-titulo").textContent = "Cinco de cinco";
    $("fim-texto").textContent =
      "Você fechou todas as pastas com " + credibilidade + " credibilidade" +
      (credibilidade > 1 ? "s" : "") + " de sobra.";
  } else {
    $("fim-selo").textContent = "Afastado do caso";
    $("fim-titulo").textContent = "Fora da investigação";
    $("fim-texto").textContent =
      "Acusações erradas demais na pasta " + (casoAtual + 1) +
      ". O culpado era " + CASOS[casoAtual].culpado + ".";
  }

  $("fim-pontos").textContent = pontuacao;
  mostrarTela("fim");
}

// ---------- Ligações de eventos ----------
$("btn-comecar").addEventListener("click", iniciarPartida);
$("btn-pista").addEventListener("click", pedirPista);
$("btn-reiniciar-jogo").addEventListener("click", iniciarPartida);
$("btn-reiniciar-fim").addEventListener("click", iniciarPartida);
