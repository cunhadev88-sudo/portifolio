import { Project, TechCategory, ExperienceItem, HowIBuildStep, SqlQueryDemo } from '../types'

export const personalInfo = {
  name: 'Erick Cunha',
  role: 'Software Developer | Backend & Full Stack',
  tagline: 'Desenvolvo sistemas, APIs e automações que transformam processos complexos em soluções simples.',
  status: 'Currently building software & learning every day.',
  location: 'São Paulo, Brasil',
  education: {
    degree: 'Análise e Desenvolvimento de Sistemas',
    institution: 'Universidade São Francisco (USF)',
    status: 'Graduado',
  },
  experienceSince: 2022,
  socialLinks: {
    github: 'https://github.com/erick-cunha',
    linkedin: 'https://www.linkedin.com/in/erick-cunha-87079a239?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
    email: 'cunhadev88@gmail.com',
  },
  bioNarrative: [
    'Desenvolvedor de software com trajetória consolidada na criação de sistemas internos robustos, APIs de alto desempenho e automações de fluxos operacionais críticos.',
    'Minha experiência profissional começou em 2022, imerso na resolução de gargalos reais de empresas. Ao invés de apenas escrever código, meu trabalho foca em entender a raiz operacional do problema, modelar a regra de negócio com precisão e entregar softwares que eliminam retrabalho manual.',
    'Graduado em Análise e Desenvolvimento de Sistemas pela Universidade São Francisco (USF), domino o ecossistema backend com Python (FastAPI, Django, Flask) e Node.js/NestJS, além de interfaces fluidas com React, TypeScript e Tailwind CSS.',
    'Possuo forte experiência prática em bancos de dados relacionais (PostgreSQL, MySQL, modelagem complexa e CTEs), automações end-to-end com RPA/scraping e arquitetura de microsserviços.'
  ],
  journeyTimeline: [
    {
      year: '2022',
      title: 'Início da Trajetória Profissional',
      description: 'Ingresso formal no mercado de tecnologia focado em resolver problemas operacionais e criar ferramentas sob demanda.',
      icon: 'Rocket'
    },
    {
      year: '2022 - 2023',
      title: 'Automação e RPA em Escala',
      description: 'Desenvolvimento de múltiplos robôs de automação (9+ robôs fiscais e DP), web scraping, scripts Python e integração com sistemas legados.',
      icon: 'Bot'
    },
    {
      year: '2023 - 2024',
      title: 'Backend, APIs & Bancos Relacionais',
      description: 'Construção de APIs REST resilientes (FastAPI, Django, Flask, Express), autenticação segura (OAuth2/JWT) e queries SQL de alta complexidade.',
      icon: 'Server'
    },
    {
      year: '2024',
      title: 'Sistemas Internos Críticos',
      description: 'Arquitetura e entrega de plataformas corporativas de Field Service (FSM) e Gestão de Chão de Fábrica / PCP conectando equipes operacionais e administrativas.',
      icon: 'Layers'
    },
    {
      year: '2025',
      title: 'Full Stack & Experiência Integrada',
      description: 'Aplicações completas com React, TypeScript, PWA offline-first e visualizações de dados sob demanda para tomada de decisão ágil.',
      icon: 'Cpu'
    },
    {
      year: 'Hoje',
      title: 'Cloud, DevOps & Segurança de Software',
      description: 'Foco contínuo em conteinerização com Docker, Linux/Ubuntu, automação CI/CD, serviços AWS e arquitetura limpa de sistemas distribuídos.',
      icon: 'ShieldCheck'
    }
  ],
  interests: [
    'Arquitetura de Software & Microsserviços',
    'Design e Governança de APIs REST / gRPC',
    'Cloud Computing (AWS EC2, S3, RDS)',
    'Segurança e Criptografia (OAuth2, JWT, OWASP)',
    'Ambientes Linux / Ubuntu & Docker',
    'Sistemas Distribuídos & Filas de Mensageria'
  ]
}

export const techCategories: TechCategory[] = [
  {
    id: 'backend',
    label: 'Backend & APIs',
    description: 'Construção de serviços seguros, performáticos e com modelagem de domínio sólida.',
    items: [
      { name: 'Python', category: 'backend', familiarity: 'Produção Diária', usageContext: 'Linguagem base para FastAPI, automações pesadas, análise de dados e scripts operacionais.', highlight: true },
      { name: 'FastAPI', category: 'backend', familiarity: 'Produção Diária', usageContext: 'Framework principal para APIs assíncronas de alta performance com tipagem estrita Pydantic.', highlight: true },
      { name: 'Node.js', category: 'backend', familiarity: 'Avançado', usageContext: 'Serviços backend assíncronos, bots de mensageria e ferramentas CLI.', highlight: true },
      { name: 'NestJS', category: 'backend', familiarity: 'Arquitetura', usageContext: 'Estruturação modular empresarial com TypeScript, injeção de dependência e DTOs.' },
      { name: 'Django', category: 'backend', familiarity: 'Avançado', usageContext: 'Sistemas corporativos robustos com ORM robusto, painéis administrativos e segurança nativa.' },
      { name: 'Flask', category: 'backend', familiarity: 'Sólido', usageContext: 'Microsserviços leves, endpoints utilitários e prototipagem ágil de regras de negócio.' },
      { name: 'PHP', category: 'backend', familiarity: 'Sólido', usageContext: 'Manutenção e integração com sistemas legados e portais corporativos.' },
      { name: 'REST APIs', category: 'backend', familiarity: 'Produção Diária', usageContext: 'Design padronizado com paginação, rate limiting, HATEOAS e documentação OpenAPI.', highlight: true },
      { name: 'OAuth2 & JWT', category: 'backend', familiarity: 'Avançado', usageContext: 'Fluxos de autenticação stateless, refresh tokens e controle de acesso baseado em papéis (RBAC).' },
    ]
  },
  {
    id: 'frontend',
    label: 'Frontend',
    description: 'Interfaces limpas, ergonômicas e responsivas pensadas para o usuário final de negócios.',
    items: [
      { name: 'React', category: 'frontend', familiarity: 'Produção Diária', usageContext: 'Desenvolvimento de SPAs e painéis corporativos dinâmicos com hooks modernos e modularização.', highlight: true },
      { name: 'TypeScript', category: 'frontend', familiarity: 'Produção Diária', usageContext: 'Tipagem estática rigorosa compartilhada entre contratos de API e componentes de tela.', highlight: true },
      { name: 'Vite', category: 'frontend', familiarity: 'Produção Diária', usageContext: 'Build tool rápida para bundler moderno, HMR instantâneo e otimização de assets.', highlight: true },
      { name: 'Tailwind CSS', category: 'frontend', familiarity: 'Produção Diária', usageContext: 'Estilização utilitária ágil, sistemas de design consistentes e dark mode nativo.' },
      { name: 'JavaScript (ES6+)', category: 'frontend', familiarity: 'Produção Diária', usageContext: 'Domínio dos fundamentos da linguagem, event loop, promises e manipulação de DOM.' },
      { name: 'Vue.js', category: 'frontend', familiarity: 'Sólido', usageContext: 'Criação de componentes reativos e interfaces em ecossistemas de projetos existentes.' },
      { name: 'PWA', category: 'frontend', familiarity: 'Avançado', usageContext: 'Aplicações web progressivas com suporte offline e cache estratégico para técnicos em campo.', highlight: true },
    ]
  },
  {
    id: 'database',
    label: 'Database & SQL',
    description: 'Modelagem relacional, integridade referencial e consultas analíticas avançadas.',
    items: [
      { name: 'PostgreSQL', category: 'database', familiarity: 'Produção Diária', usageContext: 'Banco principal para sistemas transacionais complexos, tipos JSONB e índices parciais.', highlight: true },
      { name: 'MySQL', category: 'database', familiarity: 'Avançado', usageContext: 'Bancos relacionais operacionais para rotinas contábeis, logs de execução e sistemas internos.', highlight: true },
      { name: 'SQL Avançado', category: 'database', familiarity: 'Produção Diária', usageContext: 'CTEs (WITH), Window Functions, Subqueries correlacionadas, Joins complexos e agregação.', highlight: true },
      { name: 'SQLModel', category: 'database', familiarity: 'Avançado', usageContext: 'ORM moderno unificando Pydantic e SQLAlchemy para FastAPI com tipagem completa.' },
    ]
  },
  {
    id: 'automation',
    label: 'Automação & RPA',
    description: 'Eliminação sistemática de tarefas repetitivas, extração de dados e orquestração de rotinas.',
    items: [
      { name: 'Python Automation', category: 'automation', familiarity: 'Produção Diária', usageContext: 'Orquestração de scripts para processamento de arquivos em lote, validação e alertas.', highlight: true },
      { name: 'Selenium', category: 'automation', familiarity: 'Avançado', usageContext: 'Automação web de portais governamentais, prefeituras e sistemas sem API pública.', highlight: true },
      { name: 'UiPath', category: 'automation', familiarity: 'Avançado', usageContext: 'Fluxos RPA enterprise para departamentos contábeis e fiscais com tratamento de exceções.' },
      { name: 'Web Scraping', category: 'automation', familiarity: 'Produção Diária', usageContext: 'Extração resiliente de dados com BeautifulSoup, requests e rotinas de retry.', highlight: true },
      { name: 'RPA Engineering', category: 'automation', familiarity: 'Produção Diária', usageContext: 'Construção de arquiteturas tolerantes a falhas, com logs auditáveis e filas de trabalho.', highlight: true },
    ]
  },
  {
    id: 'cloud',
    label: 'Cloud & DevOps',
    description: 'Ambientes estáveis, conteinerização e pipelines de entrega confiáveis.',
    items: [
      { name: 'Docker', category: 'cloud', familiarity: 'Avançado', usageContext: 'Criação de imagens otimizadas multi-stage e orquestração com Docker Compose.', highlight: true },
      { name: 'Linux / Ubuntu', category: 'cloud', familiarity: 'Avançado', usageContext: 'Gerenciamento de servidores, criação de daemons systemd, cronjobs e shell scripting.', highlight: true },
      { name: 'AWS EC2', category: 'cloud', familiarity: 'Sólido', usageContext: 'Provisionamento de instâncias para hospedar APIs FastAPI, bots de scraping e bancos de dados.' },
      { name: 'AWS S3', category: 'cloud', familiarity: 'Sólido', usageContext: 'Armazenamento de anexos de chamados, relatórios gerados e backups de bancos de dados.' },
      { name: 'Git & GitHub', category: 'cloud', familiarity: 'Produção Diária', usageContext: 'Controle de versão rigoroso, conventional commits, code review e pull requests.' },
      { name: 'CI/CD Pipelines', category: 'cloud', familiarity: 'Sólido', usageContext: 'Automação de testes e deploy contínuo em servidores de homologação e produção.' },
    ]
  },
  {
    id: 'tools',
    label: 'Ferramentas & Libs',
    description: 'Utilitários para manipulação de arquivos, APIs de IA e testes de engenharia.',
    items: [
      { name: 'OpenAI API', category: 'tools', familiarity: 'Avançado', usageContext: 'Integração de LLMs para extração semântica de regras de editais e sumarização de textos.', highlight: true },
      { name: 'Postman', category: 'tools', familiarity: 'Produção Diária', usageContext: 'Design de coleções, testes automatizados de endpoints e documentação de APIs.' },
      { name: 'PyMuPDF', category: 'tools', familiarity: 'Avançado', usageContext: 'Extração de alta velocidade de textos e metadados de documentos PDF governamentais.' },
      { name: 'python-docx', category: 'tools', familiarity: 'Avançado', usageContext: 'Geração automatizada e preenchimento dinâmico de documentos Word e relatórios.' },
      { name: 'PyQt5', category: 'tools', familiarity: 'Sólido', usageContext: 'Desenvolvimento de interfaces desktop nativas para operadores que exigem ferramentas locais.' },
    ]
  }
]

export const projects: Project[] = [
  {
    id: 'dynamic-air-fsm',
    title: 'Dynamic Air FSM',
    subtitle: 'Field Service Management & Gestão de Chamados Técnicos',
    category: 'Internal Software / Field Service Management',
    tags: ['React', 'Vite', 'Tailwind CSS', 'FastAPI', 'REST API', 'PWA', 'PostgreSQL'],
    description: 'Sistema completo para gestão de chamados e atendimento técnico em campo, conectando a coordenação operacional aos técnicos de serviço com suporte offline.',
    longDescription: 'Desenvolvido sob medida para solucionar a falta de visibilidade entre o escritório central e as equipes técnicas que atendem clientes em plantas industriais. O sistema atua como uma aplicação progressiva (PWA), permitindo que técnicos realizem atendimentos mesmo em ambientes fabris com sinal intermitente de internet.',
    businessImpact: 'Eliminou relatórios manuais em papel, reduziu o tempo de fechamento de chamados em 70% e garantiu rastreabilidade completa com fotos e assinaturas digitais.',
    architectureFlow: [
      'Frontend (React PWA com cache offline)',
      'Gateway & API REST (FastAPI assíncrono)',
      'Autenticação JWT & Perfis (Admin, Operador, Técnico)',
      'Camada de Negócio & Uploads S3',
      'Database Relacional (PostgreSQL)'
    ],
    features: [
      'Abertura e triagem de chamados em tempo real',
      'Identificação rápida de equipamentos industriais via QR/código',
      'Descrição detalhada de anomalias com categorização técnica',
      'Upload seguro de fotos de antes e depois do serviço',
      'Controle rigoroso de Check-in e Check-out com geolocalização',
      'Geração instantânea de Relatório Técnico de Visita em PDF',
      'Documentação unificada de manuais e histórico do equipamento',
      'Painel de acompanhamento de SLA e status de chamados para coordenadores'
    ],
    technologies: ['React', 'Vite', 'Tailwind CSS', 'FastAPI', 'Python', 'PostgreSQL', 'PWA', 'Docker'],
    highlights: [
      'Sincronização offline-first para técnicos em campo',
      'Tempo de resposta de API inferior a 45ms',
      'Conexão direta entre escritório central e chão de fábrica'
    ],
    demoType: 'fsm'
  },
  {
    id: 'pcp-aps-system',
    title: 'PCP / APS Management System',
    subtitle: 'Planejamento e Controle de Produção Sob Demanda',
    category: 'Manufacturing / Production Planning',
    tags: ['React', 'SQL Avançado', 'FastAPI', 'Data Visualization', 'Hierarchical Tree'],
    description: 'Plataforma para facilitar a visualização hierárquica e o acompanhamento analítico de estoques, ordens de produção, pedidos de compra e necessidades de materiais.',
    longDescription: 'Sistemas tradicionais de manufatura sofrem com planilhas desconexas onde planejar uma Ordem de Produção exige cruzar manualmente múltiplos relatórios. Este sistema foi desenhado para estruturar toda a cadeia produtiva em uma árvore hierárquica sob demanda, onde cada nível revela exatamente onde estão os gargalos.',
    businessImpact: 'Transformou horas diárias de cruzamento manual de planilhas em consultas instantâneas, evitando paradas de linha por falta de insumos e otimizando compras.',
    architectureFlow: [
      'Cliente',
      'Pedido de Venda',
      'Ordem de Produção (OP)',
      'Operação Fabril',
      'Item / Matéria-Prima',
      'Estoque / Necessidade / Falta',
      'Ordem de Compra (OC)'
    ],
    features: [
      'Explosão multinível de lista de materiais (BOM) sob demanda',
      'Cálculo dinâmico de saldo de estoque vs necessidade de fabricação',
      'Alerta imediato de falta de peças para compra antecipada',
      'Rastreamento do pedido do cliente até o lote da matéria-prima',
      'Filtros analíticos com agregação via CTEs SQL de alto desempenho',
      'Interface limpa orientada a tomada de decisão para planejadores'
    ],
    technologies: ['React', 'TypeScript', 'SQL (PostgreSQL)', 'FastAPI', 'Tailwind CSS'],
    highlights: [
      'Visualização sob demanda que não sobrecarrega o banco de dados',
      'Algoritmo hierárquico de árvore produtiva',
      'Impacto direto no cumprimento de prazos fabris'
    ],
    demoType: 'pcp'
  },
  {
    id: 'accounting-rpa',
    title: 'Accounting RPA',
    subtitle: 'Automação Fiscal e de Departamento Pessoal',
    category: 'Automation / RPA',
    tags: ['Python', 'Node.js', 'MySQL', 'UiPath', 'Selenium', 'RPA'],
    description: 'Ecossistema de 9 robôs de automação para processos contábeis, tributários e de departamento pessoal, eliminando tarefas repetitivas e erros manuais.',
    longDescription: 'No setor contábil, profissionais qualificados gastavam centenas de horas mensais baixando certidões negativas em prefeituras, emitindo guias de recolhimento, gerando relatórios de folha e confrontando valores. Desenvolvi uma esteira autônoma de robôs inteligentes que operam 24/7 de forma auditada.',
    businessImpact: 'Criação de 9 robôs RPA em produção contínua, redução drástica de trabalho manual repetitivo, eliminação de multas por atraso e 100% de precisão nos dados fiscais.',
    architectureFlow: [
      'Agendador de Tarefas / Fila de Execução',
      'Robôs de Coleta (Selenium / UiPath / Requests)',
      'Parser & Validação de Documentos Fiscais',
      'Persistência em Banco MySQL com Logs de Auditoria',
      'Notificação Automática com Relatório de Sucesso/Falha'
    ],
    features: [
      'Emissão automática de certidões negativas municipais, estaduais e federais',
      'Conferência cruzada de guias e recolhimento de tributos',
      'Extração e sanitização de dados de relatórios bancários e contábeis',
      'Integração com sistemas legados de contabilidade via automação de interface',
      'Mecanismo de retry e tolerância a lentidão em portais públicos instáveis',
      'Painel de controle com status operacional e logs detalhados de cada execução'
    ],
    technologies: ['Python', 'Node.js', 'MySQL', 'UiPath', 'Selenium', 'Web Scraping'],
    highlights: [
      '9 robôs autônomos operando simultaneamente',
      'Eliminação de erros de digitação humana em guias fiscais',
      'Centenas de horas humanas mensais recuperadas para análise estratégica'
    ],
    demoType: 'rpa'
  },
  {
    id: 'gdl-ai-automation',
    title: 'GDL — Licitações Inteligentes',
    subtitle: 'Extração com IA & Geração Automatizada de Propostas',
    category: 'AI / Automation',
    tags: ['Python', 'OpenAI API', 'WhatsApp API', 'python-docx', 'PyMuPDF', 'Automation'],
    description: 'Sistema inteligente para automação de processos de licitações, combinando mensageria via WhatsApp, processamento de editais com IA e geração de propostas em DOCX.',
    longDescription: 'O processo de participação em editais públicos é burocrático e consome dias na leitura de centenas de páginas em busca de requisitos técnicos e restrições. O GDL automatiza o ciclo completo: o usuário encaminha o edital pelo WhatsApp, o motor de IA sintetiza exigências críticas e preenche automaticamente o documento formal de proposta.',
    businessImpact: 'Reduziu o tempo de triagem de editais de dias para minutos, permitindo à empresa participar de 4x mais concorrências com conformidade documental rigorosa.',
    architectureFlow: [
      'WhatsApp (Entrada de Documentos)',
      'Recebimento & Download Seguro',
      'Processamento & Extração de Texto (PyMuPDF)',
      'Camada de IA (OpenAI API - Análise de Requisitos)',
      'Extração / Validação dos Parâmetros Críticos',
      'Geração Automatizada de Documento (.DOCX)',
      'Envio do Resultado Final ao Operador'
    ],
    features: [
      'Interface conversacional simples pelo WhatsApp para equipes de vendas',
      'Parser de alta velocidade para editais em PDF com mais de 300 páginas',
      'Prompt engineering especializado em termos jurídicos e licitatórios',
      'Identificação automática de datas limite, garantias e especificações técnicas',
      'Montagem de proposta comercial customizada no padrão corporativo em Word (.docx)',
      'Histórico centralizado de concorrências analisadas'
    ],
    technologies: ['Python', 'OpenAI API', 'WhatsApp', 'PyMuPDF', 'python-docx', 'FastAPI'],
    highlights: [
      'Fluxo de ponta a ponta sem necessidade de instalar softwares extras',
      'Análise semântica profunda de termos de referência',
      'Geração de documentos 100% formatados e prontos para assinatura'
    ],
    demoType: 'gdl'
  },
  {
    id: 'oficinazap-saas',
    title: 'OficinaZap',
    subtitle: 'SaaS de Gestão e Comunicação para Oficinas',
    category: 'SaaS / Business Automation',
    tags: ['Node.js', 'Python', 'WhatsApp API', 'React', 'Relational DB'],
    description: 'Conceito de plataforma SaaS que moderniza oficinas mecânicas através de automação e comunicação ativa no WhatsApp para fidelização e aprovação de ordens de serviço.',
    longDescription: 'Dores crônicas de oficinas mecânicas envolvem clientes ligando para saber status do veículo, orçamentos perdidos em papéis e falta de comprovação de serviços. O OficinaZap conecta a ordem de serviço ao canal mais utilizado pelo cliente: o WhatsApp, enviando atualizações em tempo real com fotos e aprovações interativas.',
    businessImpact: 'Acelera a aprovação de orçamentos mecânicos, reduz o tempo gasto em ligações de status e aumenta a confiança do cliente com transparência fotográfica.',
    architectureFlow: [
      'Cliente (WhatsApp)',
      'Bot de Comunicação & Alertas',
      'Painel da Oficina (Ordem de Serviço)',
      'Upload de Diagnóstico & Peças',
      'Aprovação Digital do Orçamento',
      'Atualizações Automáticas de Status'
    ],
    features: [
      'Abertura digital de Ordem de Serviço com checklist de entrada',
      'Envio automático de orçamento detalhado direto no WhatsApp do cliente',
      'Botão de aprovação e recusa com registro de aceite legal',
      'Notificações de mudança de status: "Em análise", "Aguardando peças", "Pronto"',
      'Histórico de manutenções preventivas do veículo para retenção do cliente',
      'Interface intuitiva para mecânicos e atendentes'
    ],
    technologies: ['React', 'Node.js', 'Python', 'WhatsApp API', 'PostgreSQL'],
    highlights: [
      'Comunicação direta sem fricção para o cliente final',
      'Ciclo de vida completo da Ordem de Serviço automatizado',
      'Foco em retorno financeiro rápido para pequenas e médias oficinas'
    ],
    demoType: 'oficinazap'
  },
  {
    id: 'apis-backend-showcase',
    title: 'APIs & Backend Architecture',
    subtitle: 'Serviços REST de Alta Performance, Auth & Resiliência',
    category: 'Backend & System Architecture',
    tags: ['FastAPI', 'Django', 'Flask', 'NestJS', 'PostgreSQL', 'OAuth2', 'JWT', 'Docker'],
    description: 'Showcase prático de engenharia de backend, demonstrando padrões de arquitetura em camadas, autenticação stateless, tratamento centralizado de erros e ORM seguro.',
    longDescription: 'Construir APIs profissionais vai muito além de conectar um endpoint a um banco de dados. Envolve criar camadas de abstração bem definidas, validação de payloads com esquemas estritos, políticas de retry, rate limiting, hashing criptográfico de senhas e instrumentação de logs para observabilidade.',
    businessImpact: 'Garante sistemas escaláveis com tempo de resposta estável (<50ms), tolerância a picos de tráfego e contratos de API claros para integração com frontends e parceiros.',
    architectureFlow: [
      'Client (Web, Mobile, Bot)',
      'API Gateway / Router',
      'Authentication (OAuth2 / JWT / RBAC)',
      'Business Logic (Services & Domain Rules)',
      'Data Access Layer (SQLModel / SQLAlchemy)',
      'Database (PostgreSQL com Pool de Conexões)'
    ],
    features: [
      'Documentação Swagger / OpenAPI gerada automaticamente e interativa',
      'Validação de dados rigorosa com Pydantic / DTOs impedindo injeção de dados espúrios',
      'Controle de permissões granular por papéis de usuário (Role-Based Access Control)',
      'Healthchecks, métricas de latência e tratamento de exceções amigáveis',
      'Conexões gerenciadas com pooling eficiente evitando exaustão do banco',
      'Isolamento completo através de contêineres Docker'
    ],
    technologies: ['FastAPI', 'Django', 'Flask', 'NestJS', 'OAuth2', 'JWT', 'PostgreSQL', 'SQLModel', 'Docker', 'Postman'],
    highlights: [
      'Arquitetura limpa com separação de responsabilidades',
      'Testes de carga e validação contínua com Postman',
      'Padrão enterprise pronto para produção contínua'
    ],
    demoType: 'api'
  }
]

export const experiences: ExperienceItem[] = [
  {
    company: 'DYNAMIC AIR',
    role: 'Analista de Sistemas e Inovação',
    period: '2024 — Presente',
    location: 'Brasil',
    type: 'CLT / Presencial & Híbrido',
    highlights: [
      'Desenvolvimento do Dynamic Air FSM: sistema próprio de Field Service Management com PWA e FastAPI conectando técnicos de campo e coordenadores.',
      'Construção e sustentação de sistemas internos essenciais para as operações da fábrica e atendimento ao cliente.',
      'Análise profunda de processos de chão de fábrica e colaboração direta com áreas estratégicas como PCP (Planejamento e Controle de Produção) e Operações.',
      'Desenvolvimento de APIs REST assíncronas em Python/FastAPI e interfaces ricas com React e Tailwind CSS.',
      'Elaboração de consultas SQL avançadas em PostgreSQL, otimizando relatórios de acompanhamento de inventário e status de ordens de fabricação.',
      'Criação de automações de processos eliminando tarefas manuais entre sistemas legados e novas ferramentas digitais.'
    ],
    technologies: ['FastAPI', 'Python', 'React', 'TypeScript', 'PostgreSQL', 'SQL Avançado', 'PWA', 'Docker', 'Tailwind CSS'],
    businessImpact: 'Digitalização completa do atendimento técnico em campo e centralização dos dados de PCP, aumentando a visibilidade executiva e cortando desperdícios operacionais.'
  },
  {
    company: 'EXPONENCIAL CTI/TI',
    role: 'Backend Developer',
    period: '2023 — 2024',
    location: 'Brasil',
    type: 'Profissional',
    highlights: [
      'Desenvolvimento de microsserviços e APIs RESTful em ambientes backend estruturados.',
      'Modelagem, normalização e otimização de bancos de dados relacionais para suportar altos volumes de transações.',
      'Criação de scripts de automação de rotinas de manutenção de dados e sincronizações periódicas.',
      'Manutenção evolutiva de sistemas em produção, reduzindo taxas de erro e aprimorando a velocidade de resposta.',
      'Documentação técnica de contratos de API e colaboração ágil em equipe.'
    ],
    technologies: ['Node.js', 'Python', 'REST APIs', 'PostgreSQL', 'MySQL', 'Docker', 'Git'],
    businessImpact: 'Aumento da estabilidade dos serviços legados e criação de novas rotas de integração sem interrupção de sistemas em produção.'
  },
  {
    company: 'ÁPICE CONTABILIDADE',
    role: 'Software Developer / Técnico de Informática',
    period: '2022 — 2023',
    location: 'Brasil',
    type: 'Profissional',
    highlights: [
      'Criação e sustentação de 9 robôs RPA autônomos dedicados a processos fiscais e de departamento pessoal.',
      'Automação de rotinas manuais com Python, Selenium, UiPath e Node.js sobre bases de dados MySQL.',
      'Extração automatizada de certidões negativas, guias tributárias municipais/federais e conciliações contábeis.',
      'Integração direta de planilhas e relatórios legados a bases de dados centralizadas.',
      'Suporte técnico e modernização da infraestrutura de tecnologia interna do escritório contábil.'
    ],
    technologies: ['Python', 'Node.js', 'MySQL', 'Selenium', 'UiPath', 'Web Scraping', 'RPA'],
    businessImpact: 'Concepção de 9 robôs que eliminaram centenas de horas humanas de digitação repetitiva mensal, garantindo pontualidade fiscal estrita e mitigando riscos de multas.'
  },
  {
    company: 'Tribunal de Justiça',
    role: 'Jovem Aprendiz Administrativo',
    period: '2021 — 2022',
    location: 'Brasil',
    type: 'Início de Carreira',
    highlights: [
      'Gerenciamento e estruturação de planilhas de controle avançadas em Excel para acompanhamento administrativo.',
      'Apoio nos processos de compras internas, controle de estoque de equipamentos e suporte operacional.',
      'Desenvolvimento de disciplina analítica, organização corporativa e comunicação com diferentes níveis hierárquicos.',
      'Identificação das primeiras oportunidades de automação de fluxos burocráticos repetitivos.'
    ],
    technologies: ['Excel Avançado', 'Processos Administrativos', 'Organização de Fluxos', 'Gestão de Equipamentos'],
    businessImpact: 'Base sólida de entendimento sobre como empresas operam internamente, alimentando a visão de negócio que hoje direciona o desenvolvimento de software.'
  }
]

export const howIBuildSoftwareSteps: HowIBuildStep[] = [
  {
    stepNumber: 1,
    title: 'Problema & Diagnóstico',
    subtitle: 'Ouvir quem opera a dor antes de tocar em código',
    description: 'Nenhum software eficiente nasce de suposições. Converso diretamente com os operadores de PCP, técnicos de campo ou contadores para mapear os gargalos reais, pontos de atrito e tempo desperdiçado.',
    deliverable: 'Mapeamento das dores e objetivos mensuráveis',
    iconName: 'Search'
  },
  {
    stepNumber: 2,
    title: 'Entendimento do Processo',
    subtitle: 'Desenhar o fluxo antes de digitalizar a bagunça',
    description: 'Automatizar um processo confuso só cria confusão mais rápida. Mapeio as regras de negócio, exceções, caminhos felizes e entradas/saídas necessárias para simplificar o fluxo operacional.',
    deliverable: 'Fluxograma de negócio validado com stakeholders',
    iconName: 'Workflow'
  },
  {
    stepNumber: 3,
    title: 'Modelagem de Dados',
    subtitle: 'A fundação que garante a integridade do sistema',
    description: 'Estruturação das entidades, chaves primárias, relacionamentos 1:N / N:M e restrições de integridade. Escolha de tipos de dados eficientes para evitar retrabalhos estruturais no futuro.',
    deliverable: 'Diagrama de Entidade-Relacionamento (DER) e dicionário de dados',
    iconName: 'Database'
  },
  {
    stepNumber: 4,
    title: 'Arquitetura de Software',
    subtitle: 'Decisões técnicas ponderadas pelo contexto real',
    description: 'Definição da stack tecnológica (FastAPI vs NestJS vs Django), desenho de microsserviços vs monolito modular, estratégias de cache, autenticação stateless e comunicação entre módulos.',
    deliverable: 'Documento de arquitetura e contratos de interfaces',
    iconName: 'Layers'
  },
  {
    stepNumber: 5,
    title: 'Backend & APIs',
    subtitle: 'Construção da lógica de domínio com tipagem estrita',
    description: 'Desenvolvimento das rotas RESTful, validação rigorosa de payloads (Pydantic/DTOs), tratamento unificado de erros, políticas de autenticação (OAuth2/JWT) e segurança contra injeções.',
    deliverable: 'API documentada via OpenAPI/Swagger com contratos claros',
    iconName: 'Server'
  },
  {
    stepNumber: 6,
    title: 'Database & Otimização',
    subtitle: 'Consultas performáticas e indexação cirúrgica',
    description: 'Implementação de migrations limpas, índices para consultas críticas, queries analíticas com CTEs e pooling de conexões para assegurar latências mínimas em picos de concorrência.',
    deliverable: 'Schema versionado, índices criados e queries otimizadas',
    iconName: 'Cpu'
  },
  {
    stepNumber: 7,
    title: 'Frontend & Ergonomia',
    subtitle: 'Interfaces pensadas para quem precisa ser produtivo',
    description: 'Construção com React, TypeScript e Tailwind CSS. Foco em telas responsivas, feedback visual imediato para ações, estados de loading transparentes e usabilidade para técnicos e analistas.',
    deliverable: 'Aplicação web ágil, responsiva e acessível',
    iconName: 'Layout'
  },
  {
    stepNumber: 8,
    title: 'Testes & Validação',
    subtitle: 'Prevenção de regressões e garantia de contratos',
    description: 'Testes de integração de endpoints via Postman, validação de regras de cálculo fabris/fiscais e testes com usuários chave simulando o estresse do dia a dia da operação.',
    deliverable: 'Bateria de testes aprovada e validação de aceitação',
    iconName: 'CheckCircle2'
  },
  {
    stepNumber: 9,
    title: 'Deploy & Conteinerização',
    subtitle: 'Entrega reprodutível e isolada em contêineres',
    description: 'Empacotamento das aplicações em contêineres Docker, configuração de servidores Linux/Ubuntu (systemd, Nginx reverse proxy) e provisionamento de serviços em nuvem (AWS S3/EC2).',
    deliverable: 'Deploy estável com rollback facilitado',
    iconName: 'CloudUpload'
  },
  {
    stepNumber: 10,
    title: 'Monitoramento & Melhoria Contínua',
    subtitle: 'Software vivo com observabilidade e evolução',
    description: 'Acompanhamento de logs de erro, monitoramento de tempos de resposta e coleta contínua de feedback com quem usa o sistema para iterar e criar melhorias que gerem mais valor.',
    deliverable: 'Dashboards operacionais, logs estruturados e roadmap ativo',
    iconName: 'Activity'
  }
]

export const sqlQueryDemos: SqlQueryDemo[] = [
  {
    id: 'pcp-cte-bom',
    title: 'Cálculo de Necessidade e Falta de Matéria-Prima (PCP)',
    database: 'PostgreSQL',
    concept: 'WITH (CTE) + JOINs Múltiplos + Agrupamento Condicional',
    description: 'Consulta avançada utilizada no PCP para cruzar a lista de materiais (BOM) das ordens de produção ativas com o estoque físico atual e ordens de compra em trânsito, identificando instantaneamente quais componentes faltarão na linha.',
    query: `WITH OrdemProducaoAtiva AS (
    SELECT 
        op.id AS op_id,
        op.codigo_op,
        op.produto_final_id,
        op.quantidade_planejada
    FROM ordens_producao op
    WHERE op.status IN ('PLANEJADA', 'EM_PRODUCAO')
),
NecessidadeExplodida AS (
    SELECT 
        opa.op_id,
        opa.codigo_op,
        bom.item_insumo_id,
        i.codigo AS codigo_item,
        i.descricao AS descricao_item,
        (opa.quantidade_planejada * bom.quantidade_por_unidade) AS qtd_necessaria
    FROM OrdemProducaoAtiva opa
    INNER JOIN estrutura_produtos bom ON bom.produto_pai_id = opa.produto_final_id
    INNER JOIN itens i ON i.id = bom.item_insumo_id
),
EstoqueConsolidado AS (
    SELECT 
        e.item_id,
        COALESCE(SUM(e.quantidade_fisica), 0) AS saldo_estoque,
        COALESCE(SUM(e.quantidade_em_compra), 0) AS saldo_em_transito
    FROM estoque_armazem e
    GROUP BY e.item_id
)
SELECT 
    ne.codigo_op,
    ne.codigo_item,
    ne.descricao_item,
    ne.qtd_necessaria,
    ec.saldo_estoque,
    ec.saldo_em_transito,
    CASE 
        WHEN (ne.qtd_necessaria - ec.saldo_estoque - ec.saldo_em_transito) > 0 
        THEN (ne.qtd_necessaria - ec.saldo_estoque - ec.saldo_em_transito)
        ELSE 0
    END AS falta_real,
    CASE 
        WHEN ec.saldo_estoque >= ne.qtd_necessaria THEN 'DISPONIVEL'
        WHEN (ec.saldo_estoque + ec.saldo_em_transito) >= ne.qtd_necessaria THEN 'EM_CHEGADA'
        ELSE 'CRITICO_COMPRA_URGENTE'
    END AS status_abastecimento
FROM NecessidadeExplodida ne
LEFT JOIN EstoqueConsolidado ec ON ec.item_id = ne.item_insumo_id
ORDER BY falta_real DESC, ne.codigo_op ASC;`,
    columns: ['codigo_op', 'codigo_item', 'descricao_item', 'qtd_necessaria', 'saldo_estoque', 'falta_real', 'status_abastecimento'],
    rows: [
      { codigo_op: 'OP-2025-084', codigo_item: 'INS-4012', descricao_item: 'Válvula Reguladora 1/2" Inox', qtd_necessaria: 120, saldo_estoque: 45, falta_real: 75, status_abastecimento: 'CRITICO_COMPRA_URGENTE' },
      { codigo_op: 'OP-2025-084', codigo_item: 'INS-1090', descricao_item: 'Parafuso Allen M8x35 Aço 316', qtd_necessaria: 480, saldo_estoque: 1200, falta_real: 0, status_abastecimento: 'DISPONIVEL' },
      { codigo_op: 'OP-2025-091', codigo_item: 'INS-7821', descricao_item: 'Sensor de Pressão Digital 0-10 Bar', qtd_necessaria: 35, saldo_estoque: 10, falta_real: 5, status_abastecimento: 'EM_CHEGADA' },
      { codigo_op: 'OP-2025-095', codigo_item: 'INS-3320', descricao_item: 'Mangueira Termoplástica Alta Pressão', qtd_necessaria: 250, saldo_estoque: 300, falta_real: 0, status_abastecimento: 'DISPONIVEL' },
      { codigo_op: 'OP-2025-102', codigo_item: 'INS-9904', descricao_item: 'Manômetro de Precisão com Glicerina', qtd_necessaria: 60, saldo_estoque: 12, falta_real: 48, status_abastecimento: 'CRITICO_COMPRA_URGENTE' }
    ]
  },
  {
    id: 'fsm-sla-productivity',
    title: 'Produtividade Técnica e Cumprimento de SLA (Dynamic Air FSM)',
    database: 'PostgreSQL',
    concept: 'Window Functions (DENSE_RANK) + Interval + Subqueries',
    description: 'Consulta analítica utilizada para medir a performance de técnicos em campo: calcula tempo médio de atendimento, cumprimento de prazos contratuais e quantidade de atendimentos concluídos com relatório aprovado.',
    query: `SELECT 
    t.id AS tecnico_id,
    t.nome AS tecnico_nome,
    COUNT(c.id) AS total_chamados_atendidos,
    ROUND(AVG(EXTRACT(EPOCH FROM (c.data_checkout - c.data_checkin)) / 3600)::numeric, 2) AS media_horas_por_atendimento,
    SUM(CASE WHEN c.data_checkout <= c.data_sla_limite THEN 1 ELSE 0 END) AS chamados_dentro_sla,
    ROUND((SUM(CASE WHEN c.data_checkout <= c.data_sla_limite THEN 1 ELSE 0 END)::numeric / NULLIF(COUNT(c.id), 0) * 100), 1) AS percentual_sla,
    DENSE_RANK() OVER (
        ORDER BY (SUM(CASE WHEN c.data_checkout <= c.data_sla_limite THEN 1 ELSE 0 END)::numeric / NULLIF(COUNT(c.id), 0) * 100) DESC
    ) AS ranking_produtividade
FROM tecnicos t
INNER JOIN chamados c ON c.tecnico_id = t.id
WHERE c.status = 'CONCLUIDO'
  AND c.data_checkout >= CURRENT_DATE - INTERVAL '30 days'
GROUP BY t.id, t.nome
HAVING COUNT(c.id) >= 5
ORDER BY ranking_produtividade ASC, total_chamados_atendidos DESC;`,
    columns: ['tecnico_nome', 'total_chamados_atendidos', 'media_horas_por_atendimento', 'chamados_dentro_sla', 'percentual_sla', 'ranking_produtividade'],
    rows: [
      { tecnico_nome: 'Marcos Silveira (Campo SP)', total_chamados_atendidos: 28, media_horas_por_atendimento: '2.45h', chamados_dentro_sla: 27, percentual_sla: '96.4%', ranking_produtividade: 1 },
      { tecnico_nome: 'Carlos Eduardo (Sul & PR)', total_chamados_atendidos: 24, media_horas_por_atendimento: '3.10h', chamados_dentro_sla: 23, percentual_sla: '95.8%', ranking_produtividade: 2 },
      { tecnico_nome: 'Juliana Mendes (Industrial RJ)', total_chamados_atendidos: 22, media_horas_por_atendimento: '2.80h', chamados_dentro_sla: 20, percentual_sla: '90.9%', ranking_produtividade: 3 },
      { tecnico_nome: 'Roberto Antunes (Minas Gerais)', total_chamados_atendidos: 19, media_horas_por_atendimento: '3.50h', chamados_dentro_sla: 17, percentual_sla: '89.5%', ranking_produtividade: 4 }
    ]
  },
  {
    id: 'rpa-metrics-audit',
    title: 'Auditoria e Desempenho dos Robôs de Automação (RPA)',
    database: 'MySQL',
    concept: 'Group By + Subconsultas de Taxa de Sucesso e Horas Economizadas',
    description: 'Relatório diário de telemetria dos 9 robôs de automação contábil para acompanhar lotes processados, tempo total de máquina e estimativa de horas humanas poupadas.',
    query: `SELECT 
    r.nome_robo,
    r.departamento,
    COUNT(l.id) AS total_execucoes,
    SUM(CASE WHEN l.status_resultado = 'SUCESSO' THEN 1 ELSE 0 END) AS execucoes_sucesso,
    SUM(CASE WHEN l.status_resultado = 'ERRO' THEN 1 ELSE 0 END) AS falhas_identificadas,
    ROUND((SUM(CASE WHEN l.status_resultado = 'SUCESSO' THEN 1 ELSE 0 END) / COUNT(l.id)) * 100, 2) AS taxa_sucesso_pct,
    ROUND(SUM(l.itens_processados * r.minutos_manuais_estimados) / 60, 1) AS horas_manuais_economizadas
FROM robos_catalogo r
INNER JOIN logs_execucao l ON l.robo_id = r.id
WHERE l.data_execucao >= CURDATE() - INTERVAL 7 DAY
GROUP BY r.id, r.nome_robo, r.departamento
ORDER BY horas_manuais_economizadas DESC;`,
    columns: ['nome_robo', 'departamento', 'total_execucoes', 'execucoes_sucesso', 'taxa_sucesso_pct', 'horas_manuais_economizadas'],
    rows: [
      { nome_robo: 'Robô 01 - Certidões Negativas Municipais', departamento: 'Fiscal', total_execucoes: 340, execucoes_sucesso: 334, taxa_sucesso_pct: '98.24%', horas_manuais_economizadas: '56.7h' },
      { nome_robo: 'Robô 04 - Emissão de Guias de Arrecadação', departamento: 'Tributário', total_execucoes: 215, execucoes_sucesso: 211, taxa_sucesso_pct: '98.14%', horas_manuais_economizadas: '42.3h' },
      { nome_robo: 'Robô 07 - Conciliação de Folha e Encargos', departamento: 'DP', total_execucoes: 180, execucoes_sucesso: 178, taxa_sucesso_pct: '98.89%', horas_manuais_economizadas: '38.5h' },
      { nome_robo: 'Robô 09 - Auditoria de SPED Fiscal', departamento: 'Auditoria', total_execucoes: 95, execucoes_sucesso: 93, taxa_sucesso_pct: '97.89%', horas_manuais_economizadas: '31.2h' }
    ]
  }
]

export const automationFlowSteps = [
  { step: '01', title: 'Manual Process', desc: 'Identificação de gargalos operacionais e tarefas de digitação e cruzamento manual com alto risco de falha humana.' },
  { step: '02', title: 'Identification', desc: 'Análise de regras, fluxos de exceção, dados de entrada e validação dos sistemas alvos.' },
  { step: '03', title: 'Automation Bot', desc: 'Construção do robô (Python/Selenium/UiPath/Requests) com retries automáticos e tratamento de instabilidade.' },
  { step: '04', title: 'API / Database', desc: 'Persistência estruturada em PostgreSQL/MySQL e disparo de webhooks ou consumo de endpoints.' },
  { step: '05', title: 'Validation', desc: 'Checagem de consistência, hashes de integridade e auditoria de cada documento ou linha processada.' },
  { step: '06', title: 'Output', desc: 'Relatório entregue pronto no destino final (ERP, e-mail, WhatsApp ou pasta compartilhada).' }
]

export const currentlyLearningItems = [
  {
    name: 'NestJS',
    category: 'Backend Architecture',
    focus: 'Injeção de dependência avançada, Microservices com Redis/RabbitMQ e modularidade empresarial.',
    status: 'Em progresso contínuo',
    icon: 'Layers'
  },
  {
    name: 'Advanced Backend Architecture',
    category: 'Software Engineering',
    focus: 'Domain-Driven Design (DDD), Clean Architecture, CQRS e eventos assíncronos desacoplados.',
    status: 'Estudo ativo',
    icon: 'Cpu'
  },
  {
    name: 'Linux & Kernel Internals',
    category: 'System & Infra',
    focus: 'Configuração aprofundada de daemons systemd, networking Linux, iptables e shell scripting produtivo.',
    status: 'Prática diária',
    icon: 'Terminal'
  },
  {
    name: 'Docker & Multi-Stage Builds',
    category: 'DevOps',
    focus: 'Otimização de imagens leves para Python/Node, segurança de contêineres e orquestração ágil.',
    status: 'Aplicação contínua',
    icon: 'Box'
  },
  {
    name: 'AWS Cloud Services',
    category: 'Cloud Infrastructure',
    focus: 'Aprofundamento em S3, EC2, RDS, IAM com least privilege e monitoramento via CloudWatch.',
    status: 'Em evolução',
    icon: 'Cloud'
  },
  {
    name: 'Cloud Security & OWASP',
    category: 'Cybersecurity',
    focus: 'Boas práticas de proteção contra Top 10 OWASP, sanitização de inputs e rotação segura de segredos.',
    status: 'Estudo ativo',
    icon: 'ShieldCheck'
  },
  {
    name: 'API Design & Protocols',
    category: 'API Engineering',
    focus: 'Padrões de design de APIs RESTful, gRPC com protobuf, idempotência e rate limiting resiliente.',
    status: 'Em evolução',
    icon: 'Network'
  },
  {
    name: 'English for Tech Communication',
    category: 'Professional Fluency',
    focus: 'Comunicação técnica internacional, documentações em inglês e expansão global.',
    status: 'Estudo diário',
    icon: 'Globe'
  }
]

export const githubShowcase = {
  username: 'erick-cunha',
  profileUrl: 'https://github.com/erick-cunha',
  totalCommitsYear: '850+',
  cleanCodeScore: 'A+',
  favoriteLanguages: [
    { name: 'Python', percentage: 48, color: '#38bdf8' },
    { name: 'TypeScript', percentage: 26, color: '#818cf8' },
    { name: 'SQL (PostgreSQL/MySQL)', percentage: 16, color: '#34d399' },
    { name: 'JavaScript & Shell', percentage: 10, color: '#f59e0b' },
  ],
  featuredRepos: [
    {
      name: 'dynamic-air-fsm-api',
      description: 'API assíncrona em FastAPI com autenticação JWT, sincronização de chamados e suporte a PWA para técnicos.',
      stars: 18,
      forks: 4,
      language: 'Python / FastAPI',
      tags: ['FastAPI', 'PWA', 'PostgreSQL', 'Docker']
    },
    {
      name: 'pcp-manufacturing-hierarchy',
      description: 'Engine para explosão e rastreamento de lista de materiais (BOM) e cálculo de necessidade de matéria-prima.',
      stars: 24,
      forks: 6,
      language: 'TypeScript / SQL',
      tags: ['React', 'SQL CTE', 'Industrial', 'APIs']
    },
    {
      name: 'accounting-rpa-suite',
      description: 'Módulo de orquestração de 9 robôs para automação de certidões negativas, guias e conciliações fiscais.',
      stars: 31,
      forks: 9,
      language: 'Python / Selenium',
      tags: ['RPA', 'Python', 'UiPath', 'MySQL']
    },
    {
      name: 'gdl-tender-ai-parser',
      description: 'Pipeline de extração com LLMs para editais públicos e geração automatizada de propostas comerciais em DOCX.',
      stars: 15,
      forks: 3,
      language: 'Python',
      tags: ['OpenAI', 'PyMuPDF', 'python-docx', 'AI']
    }
  ]
}

export const simulatedEndpoints = [
  {
    method: 'GET',
    endpoint: '/api/v1/fsm/tickets/active',
    summary: 'Lista chamados em aberto para técnicos com status de geolocalização',
    sampleResponse: {
      status: 'success',
      count: 2,
      data: [
        {
          ticket_id: 'TCK-2025-901',
          equipment_code: 'COMPR-IND-04',
          client: 'Dynamic Air Brasil',
          priority: 'HIGH',
          status: 'IN_PROGRESS',
          technician: 'Marcos Silveira',
          checkin_time: '2025-09-22T08:14:00Z',
          photos_uploaded: 3
        },
        {
          ticket_id: 'TCK-2025-904',
          equipment_code: 'VALV-PILOT-12',
          client: 'Manufatura Sul Ltda',
          priority: 'MEDIUM',
          status: 'PENDING_CHECKIN',
          technician: 'Carlos Eduardo',
          checkin_time: null,
          photos_uploaded: 0
        }
      ]
    }
  },
  {
    method: 'POST',
    endpoint: '/api/v1/auth/token',
    summary: 'Autenticação de operador via OAuth2 Password Flow com JWT bearer token',
    samplePayload: {
      username: 'erick.developer@company.com',
      password: '••••••••••••'
    },
    sampleResponse: {
      access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJlcm9jayIsInJvbGUiOiJkZXZlbG9wZXIifQ...',
      token_type: 'bearer',
      expires_in_minutes: 480,
      user: {
        id: 1,
        name: 'Erick Cunha',
        role: 'SOFTWARE_ENGINEER'
      }
    }
  },
  {
    method: 'GET',
    endpoint: '/api/v1/pcp/orders/hierarchy?order_id=OP-2025-084',
    summary: 'Retorna a árvore explodida da OP com status de estoque e falta real',
    sampleResponse: {
      order_id: 'OP-2025-084',
      product: 'Sistema de Transporte Pneumático Mod. 4',
      status: 'PLANEJADA',
      materials_summary: {
        total_items: 28,
        available_items: 26,
        critical_shortage: [
          {
            item_code: 'INS-4012',
            description: 'Válvula Reguladora 1/2" Inox',
            quantity_required: 120,
            stock_current: 45,
            shortage: 75,
            recommended_action: 'EMITIR_ORDEM_COMPRA_URGENTE'
          }
        ]
      }
    }
  }
]
