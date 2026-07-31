/* =========================================================
   DATA.JS — o único ficheiro que precisas de editar no dia-a-dia
   =========================================================

   Este ficheiro tem duas partes:

   1) SITE_CONFIG  → o teu nome, frase de apresentação, contactos e redes sociais.
   2) PROJECTS     → a lista dos teus projetos (produção, mistura, dança).

   Não precisas de mexer no index.html, style.css nem script.js.
   Basta editar os valores aqui em baixo e guardar o ficheiro.
   ========================================================= */


/* ---------------------------------------------------------
   1) INFORMAÇÃO GERAL DO SITE
   --------------------------------------------------------- */
const SITE_CONFIG = {
  name: "Nuno Cruz",
  role: "Music Producer · Mix Engineer",

  // Frase curta que aparece na primeira secção (hero)
  tagline: "A trip onto my life and work. Music and movement.",

  // Texto da secção "About Me" — pode ter várias frases
  about: "I'm a young aspiring artist, born in Portugal, in 2002, focused on the world of music, by producing, songwriting, dancing, etc. Each of my projects here reflect my passion, dedication and progress in this area throughout my life, something i wish to keep doing for as long as possible.",

  email: "nunocruz2002@gmail.com",
  location: "Porto, Portugal",

  // Redes sociais / plataformas — adiciona ou remove linhas livremente
  socials: [
    { label: "Instagram",  url: "https://instagram.com/yourname" }
  ]
};


/* ---------------------------------------------------------
   2) PROJETOS DO PORTFÓLIO
   ---------------------------------------------------------
   Copia um dos blocos { ... } abaixo para adicionares um projeto novo.

   Campos:
   - title       → nome do projeto/faixa/coreografia
   - category    → "production" | "mixing" | "dance"
   - year        → ano (número)
   - bpm         → opcional, deixa "" se não se aplicar
   - key         → tonalidade, opcional, deixa "" se não se aplicar
   - duration    → duração em texto, ex: "3:42"
   - description → 1-2 frases sobre o projeto
   - type        → de onde vem o ficheiro:
                     "audio"    → ficheiro de áudio local (mp3/wav) dentro da pasta /media
                     "video"    → ficheiro de vídeo local (mp4) dentro da pasta /media
                     "youtube"  → vídeo do YouTube (usa o ID do vídeo, não o link todo)
                     "soundcloud" → faixa do SoundCloud (usa o link de embed)
   - src         → caminho do ficheiro OU o ID/embed, consoante o "type" (ver exemplos)
   - cover       → imagem de capa opcional dentro de /media (deixa "" para usar o fundo padrão)

   Para adicionares ficheiros de áudio/vídeo:
   1. Coloca o ficheiro dentro da pasta "media" (ao lado deste ficheiro).
   2. No campo "src", escreve "media/nome-do-ficheiro.mp3" (ou .mp4, .wav, etc).
   --------------------------------------------------------- */
const PROJECTS = [
  {
    title: "Hand on Hand",
    category: "production",
    year: 2026,
    description: "Original production ballad for a final project in the Music Production course, featuring live-recorded instruments and a heartfelt vocal performance.",
    type: "audio",
    src: "media/Hand on Hand.wav",
    cover: "media/Capa - Hand on Hand.jpeg"
  },
  {
    title: "Sampling Project",
    category: "production",
    year: 2025,
    description: "Project for a module, that is only done by sampling parts from existing tracks",
    type: "audio",
    src: "media/2025-sampling.wav",
    cover: ""
  },
  {
    title: "Electronic Music Production",
    category: "production",
    year: 2026,
    description: "Project done on Ableton Live, using only sampling from random sources (such as chairs, pots, etc.), recorded by me, with my phone",
    type: "audio",
    src: "media/Nuno Cruz_projeto final_Música Eletrónica.wav",
    cover: ""
  },
  {
    title: "Comeback - Demo",
    category: "production",
    year: 2025/2026,
    description: "A demo of a song that i wrote and produced, presented in one of he modules of the Music Production course. A work in progress.",
    type: "audio",
    src: "media/Comeback - Demo.wav",
    cover: ""
  },
  {
    title: "Turn Around - mixing project",
    category: "mixing",
    year: 2025,
    description: "A mixing project for a student assignment, where they gave me the stems and i mixed them.",
    type: "audio",
    src: "media/Turn Around - mixing project - Nuno Cruz.wav",
    cover: ""
  },
  {
    title: "It's Time - remix",
    category: "mixing",
    year: 2025,
    description: "A remix of the popular track 'It's Time' by Imagine Dragons.",
    type: "audio",
    src: "media/20250723 - it's time - vf01.wav",
    cover: ""
  },
  {
    title: "Peace of Mind",
    category: "mixing",
    year: 2026,
    description: "A project done for a mixing module. The stems were given to me and i mixed them.",
    type: "audio",
    src: "media/Peace of Mind.wav",
    cover: ""
  },
  {
    title: "Use Me",
    category: "mixing",
    year: 2026,
    description: "A recording session conducted by me and my colleagues, where a band recorded the song 'Use Me' by Bill Withers. I was responsible for mixing the final track.",
    type: "audio",
    src: "media/Use Me-mix.wav",
    cover: ""
  }
];
