/*
  Formato de cada caso:
  {
    titulo, local, briefing,
    suspeitos: 5 objetos com nome e papel,
    culpado:   nome idêntico ao da lista,
    pistas:    3, da mais vaga para a mais reveladora,
    solucao:   como se chega ao culpado,
    arco:      o fio que liga os cinco casos ("" para desligar)
  }
*/

const CASOS = [
  {
    titulo: "O informante",
    local: "CBI — Sacramento, Califórnia",
    briefing: "A equipe de Sam Bosco foi morta dentro do prédio do CBI, num andar com crachá, câmera e senha. Levaram só o que interessava: o material que Bosco tinha juntado sobre Red John em dois anos de trabalho. Nenhuma porta arrombada, nenhum alarme, ninguém no corredor estranhando a presença de quem fez isso. O assassino não invadiu o CBI. Ele foi recebido.",
    suspeitos: [
      { nome: "J.J. LaRoche",     papel: "Assuntos Internos. Investiga a própria casa há anos e trata todo mundo do andar como suspeito — inclusive você." },
      { nome: "Brenda Shettrick", papel: "Assessoria de imprensa. Sabe o conteúdo dos casos antes de virarem boletim, porque é ela quem escreve o boletim." },
      { nome: "Virgil Minelli",   papel: "Diretor do CBI. Foi ele quem autorizou Bosco a guardar o material de Red John dentro do prédio." },
      { nome: "Craig O'Laughlin", papel: "Agente do FBI. Noivo de Grace Van Pelt, da equipe de Lisbon. Circula pelo andar como visita e é tratado como um dos nossos." },
      { nome: "Kimball Cho",      papel: "Agente da equipe de Lisbon. Conhece a rotina daquele andar de cor e foi o primeiro a chegar à cena." }
    ],
    culpado: "Craig O'Laughlin",
    pistas: [
      "Red John não arromba nada. Ele encontra alguém sem ficha, sem dívida e sem motivo aparente, e planta essa pessoa ao lado de quem o investiga. O crachá vem depois. O convite vem antes.",
      "Nada foi revirado: as gavetas erradas continuaram fechadas e uma única pasta saiu do andar. Quem entrou já sabia o que ia levar — e isso não se aprende no organograma nem no boletim interno. Se aprende acompanhando a investigação de perto, sem fazer parte dela.",
      "Duas semanas depois do ataque, um dos cinco antecipou o próprio casamento sem explicar o motivo. Pressa assim raramente é romance: é alguém garantindo um lugar permanente dentro da equipe antes que a equipe recomece a olhar para dentro."
    ],
    solucao: "Craig O'Laughlin. Ele não era um agente do FBI que se apaixonou por Van Pelt — era o homem de Red John, e ela foi a porta. O noivado deu a ele o que nenhum crachá daria: presença natural no andar, conversa de corredor sobre o caso e paciência para esperar Bosco reunir tudo num lugar só. Foi a própria Van Pelt quem o desmascarou e o derrubou, no dia em que ele finalmente agiu às claras.",
    arco: "Um detalhe não fecha. O'Laughlin não pedia dinheiro e não parecia com medo: falava de Red John como quem fala de alguém que admira. Isso não se compra em alguns meses, e ninguém cultiva devoção assim sozinho."
  },

  {
    titulo: "A organização",
    local: "Instituto de perícia — Sacramento",
    briefing: "Brett Partridge esteve em quase toda cena atribuída a Red John desde o primeiro corpo. Na semana em que disse ter entendido alguma coisa, apareceu morto, com a assinatura do próprio Red John desenhada na parede. A apuração da morte dele começa, anda dois dias e é encerrada: relatório assinado, pasta fechada, ninguém reclamando. Matar um perito, um homem sozinho consegue. Enterrar a investigação depois, não.",
    suspeitos: [
      { nome: "Gale Bertram",     papel: "Diretor do CBI. Decide qual caso chega a qual equipe, e quando." },
      { nome: "Bret Stiles",      papel: "Líder da Visualize. Guarda segredo de gente poderosa por profissão." },
      { nome: "Bob Kirkland",     papel: "Segurança Interna. Aparece em investigações que não são dele e nunca explica por quê." },
      { nome: "Reede Smith",      papel: "Agente do FBI. Assumiu a apuração da morte de Partridge e a encerrou em dois dias." },
      { nome: "Ray Haffner",      papel: "Ex-CBI, hoje na segurança privada. Passou pela Visualize antes de virar polícia." }
    ],
    culpado: "Reede Smith",
    pistas: [
      "Partridge não morreu por saber quem é Red John. Morreu por estar a uma frase de dizer o nome do que protege Red John.",
      "Olhe para o que o crime produziu, não para quem tinha motivo: uma investigação que nasceu morta. Isso não é sorte do assassino — é decisão de alguém com autoridade formal sobre o caso.",
      "A rede se reconhece por um aperto de mão e por uma frase trocada entre membros. Para servir a ela não basta ter poder: é preciso estar dentro do aparato que produz laudo, prazo e arquivamento."
    ],
    solucao: "Reede Smith. Ele pertence à Blake Association, uma rede de policiais e agentes federais que se protegem entre si e que abrigava Red John havia anos. Não precisou esconder nada: bastou ficar com o caso, cumprir o rito e fechar a pasta dentro do prazo.",
    arco: "Isso explica a década perdida. Red John nunca esteve escondido do sistema — estava dentro dele, e o sistema o cobria com papel timbrado."
  },

  {
    titulo: "O empresário",
    local: "Sacramento — negócios internacionais",
    briefing: "Uma jornalista que investigava um contrato de mineração na América do Sul apareceu morta num assalto. Antes dela morreram um engenheiro num acidente de carro, um tradutor afogado e as testemunhas de uma comunidade inteira removida pelo mesmo negócio. Cinco mortes, cinco causas diferentes, cinco delegacias diferentes. Separadas, nenhuma encosta em ninguém. Juntas, todas apontam para a mesma assinatura no fim do contrato.",
    suspeitos: [
      { nome: "Marcus Kehl",   papel: "Advogado do grupo. Assina tudo, decide pouco, sabe demais." },
      { nome: "Tommy Volker",  papel: "Empresário. Financia ala de hospital, aparece em gala beneficente, conhece meio governo pelo primeiro nome." },
      { nome: "Dana Aguiar",   papel: "Chefe de segurança da empresa. Ex-polícia, sabe como uma cena é lida." },
      { nome: "Peter Lund",    papel: "Sócio minoritário. Seria diluído a quase nada se o contrato fosse adiante." },
      { nome: "Helen Vasquez", papel: "Lobista do projeto em Washington. Perde o maior cliente da carreira se o negócio cair." }
    ],
    culpado: "Tommy Volker",
    pistas: [
      "Os métodos são diferentes porque as mortes foram compradas separadamente, de gente diferente, em lugares diferentes. O padrão não está no como. Está em quem ganha com cada silêncio.",
      "Nenhuma das vítimas ameaçava a reputação da empresa. Todas ameaçavam a assinatura do contrato. Procure quem perderia o negócio inteiro, não quem perderia o emprego.",
      "O culpado nunca esteve perto de nenhuma das cenas, e é o único da lista para quem aquelas pessoas nunca foram pessoas: foram etapas. Quando enfim é confrontado, o que o ofende não é a acusação. É a ousadia de alguém pequeno acusá-lo."
    ],
    solucao: "Tommy Volker. Ele não encostou em nenhuma das vítimas, e foi por isso que passou anos intocável: cada morte foi terceirizada, isolada e entregue a uma jurisdição diferente. O caso só fecha quando alguém para de investigar cinco homicídios e passa a investigar um único projeto.",
    arco: "Volker não tem ligação com Red John, e é justamente por isso que a pasta está aqui: ele mostra o tipo de homem que essa rede aprendeu a proteger — e como isso sai barato."
  },

  {
    titulo: "A lista",
    local: "Escritório improvisado — Sacramento",
    briefing: "Anos de investigação cabem agora numa folha de papel: cinco nomes, e Red John é um deles. Todos têm cargo, distintivo e álibi institucional para estar onde estiveram. Patrick Jane leu a lista em voz alta na frente dos cinco, de propósito, só para ver quem piscava. Um deles piscou.",
    suspeitos: [
      { nome: "Gale Bertram",      papel: "Diretor do CBI. Esteve acima de toda a investigação desde o começo." },
      { nome: "Reede Smith",       papel: "Agente do FBI, membro da Blake Association." },
      { nome: "Ray Haffner",       papel: "Ex-CBI ligado à Visualize, hoje fora do alcance de qualquer corregedoria." },
      { nome: "Bob Kirkland",      papel: "Segurança Interna. Persegue o caso por um motivo pessoal que não divide com ninguém." },
      { nome: "Thomas McAllister", papel: "Xerife do condado de Napa. Sorridente, prestativo, eleito três vezes." }
    ],
    culpado: "Thomas McAllister",
    pistas: [
      "Red John não é o nome mais poderoso da lista. É o que ninguém achou importante o bastante para investigar — e é assim que ele gosta: subestimado, não temido.",
      "Ele e Jane já se falaram, anos atrás, num dia comum, e Jane não guardou o rosto. Só passa despercebido assim quem tinha um motivo perfeitamente banal para estar ali.",
      "O método exige três coisas ao mesmo tempo: entrar numa cena de crime sem que ninguém pergunte nada, acompanhar o laudo por dentro e ter autoridade sobre quem o assina. Um dos cargos da lista dá as três de uma vez, e não é o mais alto deles."
    ],
    solucao: "O xerife Thomas McAllister. O distintivo de condado entregava tudo o que o método pedia: presença legítima em qualquer cena, acesso ao laudo, autoridade sobre o perito — e a invisibilidade de quem parece pequeno demais para ser ele. A Blake cobria o resto.",
    arco: "O nome estava respondido. Sobrava a pergunta maior: quantos, dentro da polícia, sabiam e escolheram não ver."
  },

  {
    titulo: "Depois do fim",
    local: "Sem jurisdição definida",
    briefing: "Red John está morto e o CBI foi dissolvido. Nas audiências que vêm depois ninguém pergunta mais quem matou; perguntam como um homem operou por dez anos, em cena aberta, com perito, laudo e delegacia por perto, sem nunca ser tocado. Desta vez o culpado não é uma pessoa. Cinco respostas estão sobre a mesa, e só uma explica o mecanismo.",
    suspeitos: [
      { nome: "A imprensa",          papel: "Transformou o caso em espetáculo por uma década e alimentou a vaidade dele." },
      { nome: "A Visualize",         papel: "Organização de Bret Stiles, com influência sobre gente de poder e sobre alguns dos suspeitos." },
      { nome: "A Blake Association", papel: "Rede de policiais e agentes federais que se protegem entre si." },
      { nome: "Patrick Jane",        papel: "Provocou Red John na televisão, no começo de tudo, e pagou o preço mais alto por isso." },
      { nome: "O próprio CBI",       papel: "A instituição onde a investigação nasceu, travou e morreu." }
    ],
    culpado: "A Blake Association",
    pistas: [
      "A pergunta não é de quem é a culpa moral. É de mecânica: o que, na prática, impedia a investigação de andar.",
      "Provocação atrai um assassino, mas não o protege por dez anos. Espetáculo atrapalha uma investigação, mas não apaga um laudo. Incompetência perde um caso, mas não perde todos, sempre, na mesma direção.",
      "Quatro itens da lista falharam. Um não falhou: fez exatamente aquilo para que foi desenhado — proteger os próprios membros de qualquer apuração, de dentro da polícia."
    ],
    solucao: "A Blake Association. Red John não sobreviveu por ser genial. Sobreviveu porque pertencia a uma estrutura feita para blindar quem pertence a ela. Cada laudo travado, cada perito silenciado e cada investigação encerrada no prazo passou por ali.",
    arco: "Cinco pastas fechadas. A última não tinha um culpado com nome: tinha um desenho institucional, e essa é a parte que continua de pé."
  }
];
