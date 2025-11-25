import React from "react";
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HabilidadesSociaisEnfermagem() {
  const group = {
    course: "Enfermagem",
    institution: "Universidade Unaerp Ribeirão Preto",
    members: [
      "Alice Barcellos",
      "Ana Carolina Campos",
      "Isadora de Morais Gomes",
      "Kátia Capelari",
      "Lincoln Antônio Costa Ferracioli",
      "Luiza Eduarda Remundini Lopes"
    ]
  };

  const cards = [
    {
      title: "Habilidades Sociais e Competência Social",
      content: "Conceitos centrais: diferenças entre habilidades sociais (comportamentos valorizados) e competência social (desempenho eficaz em tarefas interpessoais).",
      tags: ["Conceito"],
      example: "Ex.: Pedir informações ao paciente e ser atendido com clareza e respeito.",
      definition: "Habilidades sociais são repertórios comportamentais aprendidos que facilitam interações sociais positivas; competência social é a avaliação funcional do desempenho do indivíduo em contextos sociais, considerando objetivos, situação e critérios éticos.",
      characteristics: "Contextualidade (varia conforme cultura e situação), mensurabilidade (observável), e adaptabilidade (ajuste do comportamento ao interlocutor).",
      applications: "Avaliar e melhorar entrevistas com pacientes, trabalho em equipe multiprofissional e comunicação de más notícias com sensibilidade.",
      commonMistakes: "Confundir simpatia com empatia; aplicar um comportamento em todas as situações sem ajustar ao contexto cultural ou situacional.",
      howToDevelop: "Treinamentos com role-play, feedback estruturado, observação de modelos e prática supervisionada em estágio clínico."
    },
    {
      title: "Teoria das Múltiplas Inteligências",
      content: "Resumo das inteligências (linguística, lógico-matemática, espacial, musical, corporal-cinestésica, interpessoal, intrapessoal, naturalista e pictórica) e aplicações no ensino e na prática clínica.",
      tags: ["Teoria"],
      example: "Ex.: Usar recursos visuais com pacientes que apresentam predominância espacial.",
      definition: "Modelo que propõe que a inteligência não é única, mas composta por diferentes modalidades cognitivas independentes que podem ser desenvolvidas separadamente.",
      characteristics: "Diversidade de habilidades (linguística, lógico-matemática, etc.), plasticidade (podem ser estimuladas) e relevância educacional (ensino multimodal).",
      applications: "Adaptar educação em saúde para estilos distintos (ex.: materiais visuais, atividades práticas, discussões em grupo).",
      commonMistakes: "Rotular pacientes ou alunos rigidamente ('ele é só lógico'), negligenciar a combinação de inteligências em intervenções práticas.",
      howToDevelop: "Mapear preferências (questionários), diversificar estratégias de ensino e oferecer atividades que estimulem inteligências menos desenvolvidas."
    },
    {
      title: "Aprendizagem Histórico-Social",
      content: "Princípios da visão sócio-histórica: linguagem como mediação, interação, zona de desenvolvimento proximal e construção coletiva do conhecimento.",
      tags: ["Teoria"],
      example: "Ex.: Estudo em grupo entre alunos de enfermagem, mediado por professor, para resolução de caso clínico.",
      definition: "Abordagem que vê o indivíduo como produto das relações sociais e históricas, enfatizando que o aprendizado ocorre por mediação social e linguagem.",
      characteristics: "Interatividade (diálogo), mediação simbólica (linguagem), e ênfase no contexto cultural e histórico do aprendiz.",
      applications: "Planejamento de aulas colaborativas, tutoria entre pares e uso de situações reais para construção de sentido clínico.",
      commonMistakes: "Tratar o ensino como transmissão unilateral de conteúdo; ignorar influências culturais e sociais na aprendizagem.",
      howToDevelop: "Promover atividades dialógicas, projetos colaborativos e usar a ZDP (auxílio de colegas/mentores) para ampliar competências."
    },
    {
      title: "Automonitoria",
      content: "Automonitoria envolve observar, acompanhar e ajustar o próprio comportamento, pensamentos e sentimentos, incluindo autocontrole, antecipação de consequências, regulação de impulsos e adaptação ao contexto.",
      tags: ["Habilidade"],
      example: "Ex.: Profissional que percebe nervosismo antes de um procedimento e ajusta sua postura e tom de voz para transmitir segurança.",
      definition: "Automonitoria é o processo contínuo de observar, descrever e interpretar o próprio comportamento, emoções e pensamentos, ajustando respostas futuras conforme o impacto percebido em si e no ambiente.",
      characteristics: "Inclui autocontrole (reprimir impulsos e adiar gratificação), conscientização de emoções, previsão de consequências e adaptação às demandas sociais.",
      applications: "Permite melhorar relações com pacientes e equipe, ajustar comportamentos inadequados, prevenir conflitos, aprimorar comunicação e regular emoções em ambientes de alta pressão.",
      commonMistakes: "Excesso de autocrítica, interpretar emoções sem evidências, ignorar como seu comportamento influencia outras pessoas, ou não considerar o impacto social das próprias ações.",
      howToDevelop: "Registrar situações emocionais, praticar reflexão após atendimentos, pedir feedback, identificar gatilhos emocionais, treinar autocontrole e desenvolver habilidades sociais para melhor interpretar consequências do próprio comportamento."
    },
    {
      title: "Conhecimento e Autoconhecimento",
      content: "O conhecimento sobre si e sobre os outros é essencial para relações interpessoais saudáveis. Envolve reconhecer características próprias, identificar o comportamento alheio e interpretar o ambiente social de maneira consciente.",
      tags: ["Conceito"],
      example: "Ex.: Perceber que certas situações aumentam sua ansiedade e adaptar sua comunicação para manter a calma ao atender o paciente.",
      definition: "Autoconhecimento é a capacidade de observar, reconhecer e compreender as próprias atitudes, emoções, pensamentos e expectativas. Inclui também perceber como esses elementos influenciam decisões, comportamentos e interações sociais.",
      characteristics: "Compreende avaliar emoções, reconhecer padrões internos, interpretar o ambiente social, identificar expectativas culturais e entender como a personalidade do outro afeta as interações.",
      applications: "Melhora convivência social, fortalece comunicação, favorece comportamento empático, aumenta clareza na expressão de sentimentos, auxilia no manejo de insegurança e ansiedade e promove maturidade emocional no cuidado em saúde.",
      commonMistakes: "Acreditar que se conhece totalmente; ignorar sinais emocionais; não considerar o impacto do ambiente; interpretar o comportamento do outro sem observar o contexto; confundir autoconhecimento com autocrítica exagerada.",
      howToDevelop: "Observar e refletir sobre ações e emoções diárias; praticar escuta ativa; analisar consequências das próprias escolhas; buscar feedbacks de colegas; registrar experiências que gerem insegurança ou ansiedade; desenvolver empatia por meio da compreensão do comportamento alheio."
    },
    {
      title: "Habilidades Sociais de Comunicação",
      content: "Componentes verbais, paralinguísticos e não verbais da comunicação eficaz: clareza, escuta ativa, feedback e adaptação ao interlocutor.",
      tags: ["Habilidade"],
      example: "Ex.: Explicar um procedimento em linguagem acessível e checar compreensão do paciente.",
      definition: "Conjunto de competências que permitem transmitir e receber mensagens com precisão, sensibilidade e eficácia, envolvendo fala, tom, postura e escuta.",
      characteristics: "Clareza verbal, congruência entre verbal e não verbal, escuta ativa, e uso adequado do paralinguístico (tom, ritmo).",
      applications: "Realização de anamnese, educação em saúde, comunicação de más notícias e transferências de plantão (handover).",
      commonMistakes: "Usar jargão técnico sem explicação; não verificar se o paciente compreendeu; incongruência entre linguagem corporal e fala.",
      howToDevelop: "Treinos de comunicação (role-play), gravação de atendimentos para autoavaliação, e cursos de comunicação clínica."
    },
    {
      title: "Empatia",
      content: "Capacidade de compreender o estado emocional do outro e responder de forma acolhedora; papel na relação enfermeiro-paciente e na humanização do cuidado.",
      tags: ["Habilidade"],
      example: "Ex.: Ouvir paciente angustiado, validar sentimento e oferecer suporte prático.",
      definition: "Habilidade de perceber, compreender e responder às emoções alheias de forma adequada, sem assumir ou minimizar o sofrimento do outro.",
      characteristics: "Escuta afetiva, validação emocional, postura não julgadora e capacidade de estabelecer limites profissionais.",
      applications: "Apoio emocional a pacientes e familiares, gerenciamento de crises e construção de vínculo terapêutico efetivo.",
      commonMistakes: "Confundir empatia com simpatia (sentir pena) ou com assumir problemas alheios (excesso de envolvimento emocional).",
      howToDevelop: "Treinamento em escuta ativa, supervisão reflexiva, role-play com foco em validação emocional e exercício de distanciamento profissional quando necessário."
    },
    {
      title: "Civilidade",
      content: "Comportamentos corteses e respeitosos que facilitam interações sociais saudáveis e reduzem conflitos no ambiente de trabalho e assistência.",
      tags: ["Habilidade"],
      example: "Ex.: Cumprimentar colegas e pacientes, manter tratamento cortês mesmo em situações estressantes.",
      definition: "Conjunto de práticas de cortesia, respeito e civilidade que regulam a convivência em ambientes profissionais e sociais.",
      characteristics: "Pontualidade, linguagem cortês, reconhecimento do outro, respeito por regras e normas e manutenção de padrões éticos.",
      applications: "Melhoria do clima organizacional, redução de conflitos e promoção de ambientes de atenção mais seguros e acolhedores.",
      commonMistakes: "Tratar cortesia como superficialidade; ignorar microagressões ou permitir comportamentos desrespeitosos pela rotina e estresse.",
      howToDevelop: "Programas de cultura organizacional, códigos de conduta, treinamentos sobre respeito e intervenções para lidar com microconflitos."
    },
    {
      title: "Habilidades Assertivas de Enfrentamento",
      content: "Técnicas para expressar necessidades, estabelecer limites, lidar com críticas e enfrentar situações adversas com postura firme e ética.",
      tags: ["Habilidade"],
      example: "Ex.: Negociar horários com a equipe ao identificar carga excessiva e propor solução prática.",
      definition: "Capacidade de comunicar de forma clara, direta e respeitosa as próprias necessidades e limites, preservando a relação e buscando soluções.",
      characteristics: "Comunicação direta, respeito mútuo, habilidade de negociação e tolerância à frustração.",
      applications: "Gerenciar conflitos de plantão, negociar limites de atuação com colegas e lidar com feedbacks e críticas construtivas.",
      commonMistakes: "Confundir assertividade com agressividade; recuar diante de críticas por medo de confronto; usar tom passivo ou passivo-agressivo.",
      howToDevelop: "Treinamento em técnicas assertivas (disco rígido/azeitonas?), scripts práticos, role-play e supervisão com feedback específico."
    }
  ];

  const references = [
    "DEL PRETTE, Z. A. P.; DEL PRETTE, A. Competência social e habilidades sociais: manual teórico-prático. Editora Vozes, 2018.",
    "GOUVEIA, T. G.; PALYDORO, S. A. J. Programas de habilidades sociais para universitários: revisão de literatura. Revista Educação, Psicologia e Interfaces, 2020.",
    "LIMA, C. de A.; SOARES, A. B.; SOUZA, M. S. de. Treinamento de habilidades sociais para universitários. Psic. Clín, 2019."
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-rose-50 to-amber-50 text-gray-900 p-6 md:p-12">
      <header className="max-w-6xl mx-auto mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">Habilidades Sociais na Enfermagem</h1>
            <p className="mt-2 text-sm md:text-base text-gray-600">Projeto do grupo: conteúdo teórico, exemplos práticos, entrevista e referências.</p>
          </div>

          <nav className="flex gap-3">
            <a href="#apresentacao" className="text-sm px-3 py-2 rounded-full bg-white/90 border border-rose-200 shadow-sm text-rose-700">Apresentação</a>
            <a href="#conceitos" className="text-sm px-3 py-2 rounded-full bg-white/90 border border-sky-200 shadow-sm text-sky-700">Conceitos</a>
            <a href="#habilidades" className="text-sm px-3 py-2 rounded-full bg-white/90 border border-amber-200 shadow-sm text-amber-700">Habilidades</a>
            <a href="#entrevista" className="text-sm px-3 py-2 rounded-full bg-white/90 border border-emerald-200 shadow-sm text-emerald-700">Entrevista</a>
            <a href="#referencias" className="text-sm px-3 py-2 rounded-full bg-white/90 border border-violet-200 shadow-sm text-violet-700">Referências</a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto space-y-12">
        {/* APRESENTAÇÃO */}
        <section id="apresentacao" className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-2xl font-semibold">Apresentação do Site</h2>
          <p className="mt-3 text-gray-600">Este site nasceu das nossas conversas em sala, dos estágios, dos medos e das descobertas que vivemos como estudantes de Enfermagem. Não é só um trabalho: é um jeito de organizar o que aprendemos sobre como cuidar de pessoas com técnica, mas também com olhar, escuta e respeito.</p>
          <p className="mt-3 text-gray-600">Aqui você vai encontrar conceitos importantes, exemplos do dia a dia, reflexões e uma entrevista que nos fez pensar sobre nossa prática e sobre o tipo de profissional que queremos ser.</p>
          <ul className="mt-4 list-disc list-inside text-gray-700">
            {group.members.length === 0 ? (
              <li className="text-sm text-gray-400">Adicione os nomes dos componentes do grupo no código para que apareçam aqui.</li>
            ) : (
              group.members.map((m, i) => <li key={i}>{m}</li>)
            )}
          </ul>
          <p className="mt-4 text-sm text-gray-500">Curso: {group.course} • Instituição: {group.institution || '—'}</p>
        </section>

        {/* FRASE DE IMPACTO */}
        <section className="bg-gradient-to-r from-rose-100 via-amber-100 to-sky-100 p-6 rounded-2xl shadow text-center">
          <h2 className="text-xl font-semibold text-gray-800">“Cuidar vai muito além de executar: é conectar, compreender e estar presente.”</h2>
          <p className="mt-2 text-sm text-gray-700">Essa frase representa o que acreditamos que a Enfermagem significa: técnica com humanidade.</p>
        </section>

        {/* REFLEXÕES DO GRUPO */}
        <section className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-2xl font-semibold">O que essa disciplina mudou na nossa visão de Enfermagem</h2>
          <p className="mt-3 text-gray-600">Durante o semestre, percebemos que habilidades sociais não são apenas conteúdos — são parte essencial da prática do cuidado. A seguir, registramos algumas percepções que surgiram em nossas discussões:</p>

          <ul className="mt-4 list-disc list-inside text-gray-700 space-y-2 text-sm">
            <li>“Aprendi que comunicação não é só falar — é ouvir profundamente.”</li>
            <li>“Percebi que empatia também envolve saber estabelecer limites saudáveis.”</li>
            <li>“Entendi que a forma como eu me comporto afeta todo o ambiente de trabalho.”</li>
            <li>“A automonitoria me fez olhar para minha postura profissional com mais consciência.”</li>
            <li>“Hoje vejo que ser enfermeiro é se comunicar, se adaptar e crescer todos os dias.”</li>
          </ul>
        </section>

        {/* CONCEITOS E IMPORTÂNCIA */}
        <section id="conceitos" className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-2xl font-semibold">Habilidades e Competências Sociais</h2>
          <p className="mt-3 text-gray-600 leading-relaxed">As habilidades sociais são conjuntos de comportamentos valorizados socialmente que aumentam a probabilidade de resultados positivos nas interações. A competência social é uma avaliação do desempenho interpessoal que considera objetivos, situação e critérios éticos. Na enfermagem, essas competências são vitais para a comunicação eficaz, segurança do paciente, trabalho em equipe e humanização do cuidado.</p>

          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold">Por que é importante?</h3>
              <ul className="mt-2 list-disc list-inside text-gray-700 text-sm">
                <li>Melhora a relação enfermeiro-paciente.</li>
                <li>Reduz erros por falhas de comunicação.</li>
                <li>Facilita resolução de conflitos na equipe.</li>
                <li>Contribui para a humanização e satisfação do cuidado.</li>
              </ul>
            </div>

            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold">Como são aprendidas?</h3>
              <p className="text-sm text-gray-700 mt-2">Por instruções, imitação, prática em situações reais ou simuladas, e pelo manejo de consequências (feedback e reforço).</p>
            </div>
          </div>
        </section>

        {/* HABILIDADES: GRID DE CARDS COM EXEMPLOS */}
        <section id="habilidades" className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-2xl font-semibold">Habilidades estudadas — Exemplos práticos</h2>
          <p className="mt-2 text-sm text-gray-600">Abaixo estão as habilidades abordadas na disciplina com exemplos práticos do cotidiano na enfermagem.</p>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((c, i) => (
              <motion.article key={i} whileHover={{ y: -6 }} className="p-5 rounded-2xl shadow border transform transition hover:scale-[1.02]" style={{background: 'linear-gradient(135deg, rgba(255,255,255,0.9), rgba(255,240,245,0.6))'}}>
                <div className="flex items-start justify-between">
                  <div style={{flex:1}}>
                    <h3 className="text-lg font-semibold">{c.title}</h3>
                    <p className="mt-2 text-sm text-gray-700">{c.content}</p>
                    <p className="mt-3 text-sm text-gray-600"><strong>Exemplo:</strong> {c.example}</p>

                    <div className="mt-3 border-t pt-3">
                      <h4 className="text-sm font-semibold">Definição</h4>
                      <p className="text-sm text-gray-700 mt-1">{c.definition}</p>
                    </div>

                    <div className="mt-3">
                      <h4 className="text-sm font-semibold">Características</h4>
                      <p className="text-sm text-gray-700 mt-1">{c.characteristics}</p>
                    </div>

                    <div className="mt-3">
                      <h4 className="text-sm font-semibold">Aplicações na Enfermagem</h4>
                      <p className="text-sm text-gray-700 mt-1">{c.applications}</p>
                    </div>

                    <div className="mt-3">
                      <h4 className="text-sm font-semibold">Erros comuns</h4>
                      <p className="text-sm text-gray-700 mt-1">{c.commonMistakes}</p>
                    </div>

                    <div className="mt-3">
                      <h4 className="text-sm font-semibold">Como desenvolver</h4>
                      <p className="text-sm text-gray-700 mt-1">{c.howToDevelop}</p>
                    </div>

                  </div>
                  <span className="ml-3 inline-block text-xs px-2 py-1 rounded-full bg-gradient-to-r from-sky-100 via-rose-100 to-amber-100 text-sky-800">{c.tags[0]}</span>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <small className="text-xs text-gray-400">Aplicação clínica</small>
                  <button className="text-sm px-3 py-1 rounded-lg text-white" style={{background: 'linear-gradient(90deg, #06b6d4, #8b5cf6)'}}>Atividade</button>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* ENTREVISTA */}
        <section id="entrevista" className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-2xl font-semibold">Entrevista realizada</h2>
          <p className="mt-3 text-sm text-gray-600">A entrevista foi um momento de escuta e troca: alguém que vive a prática pôde compartilhar como enxerga as habilidades sociais na rotina da saúde. Este espaço é para registrar essa conversa e o que ela despertou em nós como futuros profissionais.</p>

          <div className="mt-4">
            <div className="p-4 border rounded-lg bg-gray-50">
              <h3 className="font-semibold">Transcrição (colar aqui)</h3>
              <p className="mt-2 text-sm text-gray-500">[Aqui entra a transcrição da entrevista: falas, perguntas e momentos que vocês acharam mais marcantes.]</p>
            </div>

            <div className="mt-4 p-4 border rounded-lg">
              <h3 className="font-semibold">Análise do grupo</h3>
              <p className="mt-2 text-sm text-gray-700">[Aqui o grupo comenta a entrevista: o que mais chamou atenção, o que dialoga com a teoria de habilidades sociais e como isso inspira a prática em Enfermagem.]</p>
            </div>
          </div>
        </section>

        {/* REFERÊNCIAS */}
        <section id="referencias" className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-2xl font-semibold">Referências e Leituras Recomendadas</h2>
          <p className="mt-3 text-sm text-gray-600">Fontes usadas na elaboração do site e sugestões para aprofundamento.</p>

          <ul className="mt-4 list-disc list-inside text-gray-700 text-sm">
            {references.map((r, i) => <li key={i}>{r}</li>)}
          </ul>

          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold">Sites e Testes</h4>
              <p className="text-sm text-gray-700 mt-2">IDR Labs — teste das múltiplas inteligências (exemplo de recurso online).</p>
            </div>

            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold">Vídeos e Cursos</h4>
              <p className="text-sm text-gray-700 mt-2">Sugestão: procurar conteúdos sobre comunicação em saúde, empatia clínica e automonitoria no YouTube e em plataformas de educação continuada.</p>
            </div>
          </div>
        </section>

      </main>

      <footer className="max-w-6xl mx-auto mt-12 text-center text-sm text-gray-500">Projeto desenvolvido como atividade acadêmica. Para incluir nomes do grupo ou a entrevista, cole os dados no código ou envie os arquivos que eu insiro para você.</footer>
    </div>
  );
}

function Card({ title, content }) {
  return null;
}
