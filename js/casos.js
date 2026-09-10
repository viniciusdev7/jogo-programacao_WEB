/*
  casos.js — todo o conteúdo do jogo mora aqui.

  Casos baseados no arco central da série "O Mentalista" (The Mentalist),
  de Bruno Heller. Textos escritos com palavras próprias; nenhuma imagem,
  trilha ou diálogo original foi reproduzido.

  ATENÇÃO: confira os nomes marcados com [VERIFICAR] antes de publicar.

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
    briefing: "A equipe de Sam Bosco foi assassinada dentro do próprio prédio do CBI, junto com as provas que ela tinha reunido sobre Red John. Ninguém forçou entrada. Quem fez isso conhecia o andar, os horários e a senha — e continua trabalhando ao lado de vocês todos os dias.",
    suspeitos: [
      { nome: "J.J. LaRoche",     papel: "Assuntos Internos. Investiga a própria casa e faz questão de que todos saibam disso." },
      { nome: "Brenda Shettrick", papel: "assessoria de imprensa. Sabe de tudo antes de virar boletim." },
      { nome: "Virgil Minelli",   papel: "diretor do CBI. Autorizou o acesso de Bosco ao material de Red John." },
      { nome: "Craig O'Laughlin", papel: "agente do FBI. Noivo de Grace Van Pelt, apressou o casamento sem explicar o motivo." },
      { nome: "Kimball Cho",      papel: "agente da equipe de Lisbon. Foi um dos primeiros a chegar à cena." }
    ],
    culpado: "Craig O'Laughlin",
    pistas: [
      "Red John raramente age sozinho. Ele recruta pessoas comuns, com vidas comuns, e as coloca perto de quem o investiga — não dentro da cena do crime, mas dentro da vida das pessoas que trabalham nela.",
      "Quem entrou não procurava documento nenhum: sabia exatamente o que levar. Isso reduz a lista a quem acompanhou a investigação de Bosco de perto e sem levantar suspeita.",
      "O casamento foi antecipado logo depois do ataque. Quem tem pressa de mudar de posição na estrutura da equipe ganha algo com isso — acesso, confiança, e uma testemunha permanente ao lado."
    ],
    solucao: "O'Laughlin era o homem de Red John dentro do círculo da equipe. Aproximou-se por Van Pelt, não por acaso, e usou a posição para entregar tudo o que Bosco havia reunido. Foi ela quem o desmascarou e o deteve, no dia em que ele finalmente agiu abertamente.",
    arco: "Um detalhe fica: ele não agia por dinheiro nem por medo. Falava de Red John com admiração. Isso não é cumplicidade — é devoção, e devoção se cultiva por muito tempo, de perto."
  },

  {
    titulo: "A organização",
    local: "Instituto de perícia — Sacramento",
    briefing: "Brett Partridge, perito que trabalhou em cenas atribuídas a Red John desde o começo, foi morto pouco depois de dizer que sabia de algo. A investigação sobre ele é abafada em tempo recorde, por gente com autoridade para abafar. Não é mais um homem sozinho: é uma estrutura.",
    suspeitos: [
      { nome: "Gale Bertram",     papel: "diretor do CBI. Controla quais casos chegam a quem." },
      { nome: "Bret Stiles",      papel: "líder da Visualize. Sabe mais do que diz, por profissão." },
      { nome: "Bob Kirkland",     papel: "Segurança Interna. Aparece em investigações que não são dele." },
      { nome: "Reede Smith",      papel: "agente do FBI. Assumiu a apuração da morte de Partridge e a encerrou rápido." },
      { nome: "Ray Haffner",      papel: "ex-CBI, hoje na iniciativa privada. Passou pela Visualize." }
    ],
    culpado: "Reede Smith",
    pistas: [
      "Partridge não foi morto por saber quem era Red John. Foi morto por estar prestes a dizer o nome da estrutura que o protege.",
      "Quem encerra uma investigação decide o que nunca será perguntado. Procure entre os que tiveram autoridade sobre o caso, não entre os que tiveram motivo.",
      "A organização se reconhece por um cumprimento e por uma frase de identificação entre membros. Quem participa dela precisa estar em posição de apagar rastros dentro da própria polícia federal."
    ],
    solucao: "Smith pertencia à Blake Association, uma rede de policiais e agentes que se protegem mutuamente e à qual Red John também estava ligado. Silenciou Partridge e enterrou a apuração de dentro, usando o cargo como ferramenta.",
    arco: "A Blake explica os anos de investigação travada: Red John nunca foi um homem escondido do sistema. Ele estava dentro dele, e o sistema o cobria."
  },

  {
    titulo: "O empresário",
    local: "Sacramento — negócios internacionais",
    briefing: "Uma jornalista que investigava um contrato de mineração na América do Sul apareceu morta. Antes dela, morreram testemunhas de uma comunidade inteira deslocada pelo mesmo negócio. Nenhuma das mortes se parece com as outras, e nenhuma encosta no homem que lucra com todas.",
    suspeitos: [
      { nome: "Marcus Kehl",      papel: "advogado do grupo. Assina tudo, decide pouco." },
      { nome: "Tommy Volker",     papel: "empresário. Aparece em galas beneficentes e conhece meio governo." },
      { nome: "Dana Aguiar",      papel: "chefe de segurança da empresa. Ex-polícia." },
      { nome: "Peter Lund",       papel: "sócio minoritário. Seria diluído se o contrato saísse." },
      { nome: "Helen Vasquez",    papel: "lobista do projeto em Washington." }
    ],
    culpado: "Tommy Volker",
    pistas: [
      "As mortes não se parecem umas com as outras justamente porque foram encomendadas separadamente. O padrão não está no método: está em quem lucra com cada silêncio.",
      "Todas as vítimas ameaçavam a mesma coisa — não a reputação da empresa, mas a assinatura do contrato. Procure quem perde o negócio inteiro, não quem perde o emprego.",
      "O culpado nunca esteve perto de nenhuma cena. É alguém que trata pessoas como etapas de um processo e que, quando enfim é confrontado, se irrita mais com a ousadia da acusação do que com o peso dela."
    ],
    solucao: "Volker. Ele não matou ninguém com as próprias mãos e por isso passou anos intocável: cada morte foi terceirizada e isolada das demais. Só encaixa quando as mortes deixam de ser investigadas separadamente e passam a ser lidas como um único projeto.",
    arco: "Volker é o retrato do que Red John explora: gente poderosa acostumada a ser protegida por quem deveria investigá-la."
  },

  {
    titulo: "A lista",
    local: "Escritório improvisado — Sacramento",
    briefing: "Depois de anos, Patrick Jane reduz Red John a um nome entre poucos. Todos os que sobraram têm cargo, distintivo e álibi institucional. A lista é curta o bastante para caber num papel e perigosa o bastante para matar quem a carrega — e Red John sabe que ela existe.",
    suspeitos: [
      { nome: "Gale Bertram",      papel: "diretor do CBI." },
      { nome: "Reede Smith",       papel: "agente do FBI, membro da Blake Association." },
      { nome: "Ray Haffner",       papel: "ex-CBI, ligado à Visualize." },
      { nome: "Bob Kirkland",      papel: "Segurança Interna, com interesse pessoal no caso." },
      { nome: "Thomas McAllister", papel: "xerife do condado de Napa." }
    ],
    culpado: "Thomas McAllister",
    pistas: [
      "Red John não é o suspeito mais poderoso da lista. Ele é o que ninguém considera importante o bastante para investigar — a vaidade dele está em ser subestimado, não em ser temido.",
      "Ele conheceu Jane pessoalmente muitos anos antes e nunca foi lembrado. Isso só é possível para quem estava lá com um motivo perfeitamente comum.",
      "Ao ouvir a lista ser lida em voz alta, ele reagiu como quem já sabia o que viria. E é o único cujo cargo explica presença legítima em cena de crime, acesso a laudo e autoridade sobre perito."
    ],
    solucao: "O xerife McAllister. O cargo lhe dava tudo o que o método exigia: entrar em qualquer cena sem ser questionado, acompanhar a própria investigação por dentro e contar com a rede da Blake para o resto.",
    arco: "Resta uma pergunta que a lista não responde: quem, dentro da polícia, sabia e escolheu não ver."
  },

  {
    titulo: "Depois do fim",
    local: "Sem jurisdição definida",
    briefing: "Com Red John morto, o CBI é desfeito e os processos vêm à tona. A pergunta que sobra não é mais quem matou, e sim como um homem operou por tanto tempo sem ser tocado. A resposta não é um assassino: é o que existia em volta dele.",
    suspeitos: [
      { nome: "A imprensa",            papel: "transformou o caso em espetáculo por uma década." },
      { nome: "A Visualize",           papel: "organização de Bret Stiles, com influência sobre gente de poder." },
      { nome: "A Blake Association",   papel: "rede de policiais e agentes que se protegem entre si." },
      { nome: "Patrick Jane",          papel: "o consultor que provocou Red John na televisão, no começo de tudo." },
      { nome: "O próprio CBI",         papel: "a instituição onde a investigação nasceu e travou." }
    ],
    culpado: "A Blake Association",
    pistas: [
      "A pergunta não é sobre culpa moral, e sim sobre mecanismo: o que impedia, na prática, que a investigação avançasse.",
      "Provocação atrai um assassino, mas não o protege por dez anos. Espetáculo midiático atrapalha, mas não apaga laudo.",
      "Um dos itens da lista não é uma instituição que falhou por incompetência: é uma estrutura desenhada para proteger seus próprios membros de qualquer apuração, dentro da polícia."
    ],
    solucao: "A Blake Association. Red John não sobreviveu por ser genial — sobreviveu porque estava dentro de uma rede feita para blindar quem pertence a ela. Cada laudo travado, cada investigação encerrada cedo, cada perito silenciado passou por ali.",
    arco: "Cinco pastas fechadas. A última não tinha um culpado com nome: tinha uma estrutura, e essa é a parte que continua de pé."
  }
];