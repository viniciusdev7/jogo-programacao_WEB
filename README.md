# Arquivo Morto

Jogo de dedução para navegador, feito com HTML, CSS e JavaScript puro.
Trabalho da disciplina GAC116 — Programação Web.

**Jogar:** https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/

---

## Objetivo

Você é um investigador da Divisão de Casos Não Resolvidos. São cinco pastas
arquivadas, cada uma com um crime e cinco suspeitos. Sua missão é apontar o
culpado de todas as cinco — e fazer isso com o mínimo de ajuda possível.

## Regras

**Acusar cedo vale mais.** Cada caso começa valendo 100 pontos. Toda pista extra
que você pedir derruba o valor:

| Pistas pedidas | Valor do caso |
|---|---|
| Nenhuma | 100 pontos |
| 1 | 70 pontos |
| 2 | 40 pontos |
| 3 | 20 pontos |

**Errar não encerra a pasta.** Uma acusação errada custa uma das suas três
credibilidades e queima aquele suspeito, que não pode mais ser acusado. Você
continua no mesmo caso, com um suspeito a menos.

**Você perde quando zera a credibilidade.** Três erros em qualquer ponto da
investigação e você é afastado do caso.

**Você vence** ao fechar as cinco pastas com pelo menos uma credibilidade.

A partida pode ser reiniciada a qualquer momento pelo botão "Recomeçar do zero".

## Como executar localmente

Não há instalação nem dependências. Baixe o repositório e abra o arquivo
`index.html` em qualquer navegador.

```
git clone https://github.com/SEU-USUARIO/NOME-DO-REPOSITORIO.git
cd NOME-DO-REPOSITORIO
```

## Tecnologias utilizadas

- HTML5 — estruturação semântica das três telas do jogo
- CSS3 — Grid, Flexbox, variáveis CSS, layout responsivo
- JavaScript (ES6, sem bibliotecas) — manipulação do DOM, tratamento de eventos
  e controle do estado da partida

## Estrutura do projeto

```
├── index.html          Estrutura das telas: abertura, jogo e fim
├── css/
│   └── estilo.css      Identidade visual
├── js/
│   ├── casos.js        Conteúdo dos cinco casos
│   └── jogo.js         Lógica: estado, pontuação, credibilidade
├── LICENSE             Licença MIT
└── README.md
```

O conteúdo dos casos fica separado da lógica em `js/casos.js`. Para trocar um
caso, basta editar esse arquivo — nada na lógica precisa mudar.

## Licença

MIT. Veja o arquivo [LICENSE](LICENSE).

---

```json
{
"nome": "Arquivo Morto",
"descricao": "Jogo de dedução em cinco casos. Aponte o culpado usando o mínimo de pistas: quanto antes você acusa, mais pontos ganha. Três acusações erradas e você é afastado da investigação.",
"autores": "SEU NOME COMPLETO",
"turma": "SUA TURMA",
}
```
