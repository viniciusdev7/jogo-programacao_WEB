/*
  casos.js — todo o conteúdo do jogo mora aqui.

  Para trocar os casos, edite apenas este arquivo. A lógica não muda.

  Formato de cada caso:
  {
    titulo:    nome da pasta
    local:     onde aconteceu
    briefing:  o que se sabe de cara (aparece antes de qualquer pista)
    suspeitos: exatamente 5, cada um com nome e uma descrição curta
    culpado:   o nome, escrito igualzinho ao da lista de suspeitos
    pistas:    3 pistas, da mais vaga para a mais reveladora
    solucao:   explicação mostrada quando o caso é encerrado
  }
*/

const CASOS = [
  {
    titulo: "O último ensaio",
    local: "Teatro Municipal — camarim 4",
    briefing: "A regente da orquestra foi encontrada caída no camarim, meia hora antes da estreia. A porta estava trancada por dentro e a chave reserva sumiu do quadro da produção.",
    suspeitos: [
      { nome: "Otávio Bran",     papel: "primeiro violino, preterido na indicação de solista" },
      { nome: "Célia Marques",   papel: "produtora do espetáculo, discutiu com a vítima na véspera" },
      { nome: "Ruy Tavares",     papel: "contrarregra, único com cópia das chaves" },
      { nome: "Inês Portela",    papel: "figurinista, entrou no camarim às 19h para o ajuste final" },
      { nome: "Damião Reis",     papel: "crítico musical, estava nos bastidores sem credencial" }
    ],
    culpado: "Inês Portela",
    pistas: [
      "A janela do camarim estava aberta, mas o parapeito de pó intacto — ninguém passou por ali.",
      "O ajuste de figurino das 19h não constava na agenda de produção. Foi marcado de última hora, por bilhete.",
      "A chave reserva apareceu no fundo da caixa de costura, entre carretéis do mesmo tom do vestido de estreia."
    ],
    solucao: "Inês forjou o chamado das 19h para ficar sozinha com a vítima, trancou a porta por dentro e saiu pelo corredor de serviço, levando a chave. Guardou-a onde só ela mexia."
  },
  {
    titulo: "Vinte e dois andares",
    local: "Edifício Aurora — cobertura",
    briefing: "Um investidor caiu da sacada durante a festa da própria empresa. Havia quarenta convidados no salão e ninguém viu nada. O celular dele nunca foi encontrado.",
    suspeitos: [
      { nome: "Berenice Alcântara", papel: "sócia, perdia o controle da empresa na segunda-feira" },
      { nome: "Tomás Vieira",       papel: "motorista particular, esperava na garagem há três horas" },
      { nome: "Nadir Fontes",       papel: "advogada da empresa, saiu da festa às 22h40" },
      { nome: "Elias Corvo",        papel: "irmão da vítima, beneficiário do seguro" },
      { nome: "Marlene Duque",      papel: "garçonete contratada pelo buffet naquela semana" }
    ],
    culpado: "Nadir Fontes",
    pistas: [
      "O elevador social registrou uma descida às 22h41 e outra às 22h58. A queda foi por volta das 22h50.",
      "A vítima tinha marcado uma reunião para as 23h com alguém que assinou apenas as iniciais no livro da portaria.",
      "O celular apareceu num contêiner a seis quadras — na rota que a advogada faz de casa para o escritório."
    ],
    solucao: "Nadir simulou a saída às 22h40, voltou pela escada e levou a vítima até a sacada com a desculpa da reunião. Desceu de novo às 22h58 com o celular no bolso."
  },
  {
    titulo: "Café da manhã de domingo",
    local: "Fazenda Santa Rita — casa principal",
    briefing: "O patriarca da família morreu envenenado no café da manhã. Todos comeram da mesma travessa. Apenas a xícara dele deu positivo.",
    suspeitos: [
      { nome: "Hilda Passos",   papel: "cozinheira da casa há trinta anos" },
      { nome: "Renan Sá",       papel: "neto mais velho, cortado do testamento no mês passado" },
      { nome: "Bruna Andrade",  papel: "enfermeira que aplicava a medicação diária" },
      { nome: "Ítalo Peçanha",  papel: "administrador da fazenda, contas irregulares" },
      { nome: "Sônia Vilar",    papel: "filha caçula, chegou na madrugada de sábado" }
    ],
    culpado: "Bruna Andrade",
    pistas: [
      "A xícara da vítima era a única de porcelana azul. Todos na casa sabiam que ninguém mais usava aquela.",
      "O veneno agiu rápido demais para ter sido posto no café: já estava no organismo antes da mesa.",
      "O frasco da medicação de sábado à noite foi descartado, mesmo estando pela metade."
    ],
    solucao: "O envenenamento veio na medicação da noite anterior, não no café. Bruna trocou o conteúdo do frasco e sumiu com ele. A xícara azul serviu só para apontar o dedo para a cozinha."
  },
  {
    titulo: "A carga que não chegou",
    local: "Porto de Itaguaí — pátio 7",
    briefing: "Um contêiner de eletrônicos sumiu entre a descarga e a conferência. O lacre estava intacto no sistema, mas o contêiner físico nunca existiu no pátio.",
    suspeitos: [
      { nome: "Jonas Ferrer",     papel: "conferente do turno da noite" },
      { nome: "Alice Rondon",     papel: "analista de sistema portuário" },
      { nome: "Vitor Camargo",    papel: "motorista de guindaste, hora extra não registrada" },
      { nome: "Selma Braga",      papel: "despachante aduaneira do importador" },
      { nome: "Otacílio Lemos",   papel: "segurança do portão 3" }
    ],
    culpado: "Alice Rondon",
    pistas: [
      "As câmeras do pátio 7 estavam operando. Nenhum caminhão saiu carregado naquela madrugada.",
      "O lacre foi registrado como conferido treze minutos antes de o navio atracar.",
      "O registro do lacre partiu de um terminal interno, não do coletor de mão usado no pátio."
    ],
    solucao: "A carga nunca desembarcou: foi desviada ainda na origem. Alice criou o registro do lacre pelo sistema para que o desvio aparecesse como perda no pátio brasileiro."
  },
  {
    titulo: "Sessão das nove",
    local: "Clínica Vértice — consultório 12",
    briefing: "Uma psicóloga foi encontrada morta entre duas consultas. A agenda daquele horário estava em branco, mas a sala de espera tinha alguém sentado às nove.",
    suspeitos: [
      { nome: "Pedro Assunção", papel: "paciente das dez, chegou cedo" },
      { nome: "Vera Nogueira",  papel: "sócia da clínica, brigava por prontuários" },
      { nome: "Caio Bittar",    papel: "ex-paciente com processo em andamento" },
      { nome: "Lúcia Amorim",   papel: "recepcionista, saiu para o banco às 9h05" },
      { nome: "Gustavo Rensi",  papel: "marido da vítima, deixou o carro no estacionamento da clínica" }
    ],
    culpado: "Vera Nogueira",
    pistas: [
      "O horário em branco não foi cancelado: foi apagado da agenda depois das nove.",
      "Só três pessoas tinham senha para editar a agenda, e a recepção estava fora do prédio.",
      "O prontuário em disputa saiu do arquivo naquela manhã e voltou no dia seguinte, sem duas folhas."
    ],
    solucao: "Vera marcou a si mesma no horário das nove para tratar dos prontuários, apagou o registro depois e levou o documento que queria. As folhas que faltam eram sobre ela."
  }
];
