# O teu portfólio — guia rápido

Site simples em HTML/CSS/JS puro (sem instalações, sem plataformas) para
mostrares os teus projetos de **Produção Musical**, **Mistura** e **Dança**.

## Estrutura dos ficheiros

```
portfolio-site/
├── index.html   ← estrutura da página (não precisas de mexer)
├── style.css    ← todo o design (não precisas de mexer)
├── script.js    ← lógica do site (não precisas de mexer)
├── data.js      ← ⭐ O FICHEIRO QUE VAIS EDITAR
├── media/       ← onde colocas os teus ficheiros de áudio e vídeo
└── README.md    ← este ficheiro
```

## Como editar o conteúdo

Abre o ficheiro **`data.js`** num editor de texto simples (o Bloco de Notas
serve, mas recomendo o [VS Code](https://code.visualstudio.com), que é
gratuito e mais confortável). Lá dentro encontras:

1. **`SITE_CONFIG`** — o teu nome, frase de apresentação, texto do "About Me",
   email, localização e redes sociais.
2. **`PROJECTS`** — a lista de projetos do portfólio.

Basta mudar os textos entre aspas `" "` e guardar o ficheiro. Não precisas de
saber programar.

## Como adicionar um novo projeto (com áudio ou vídeo)

1. Copia o teu ficheiro de áudio (`.mp3`, `.wav`) ou vídeo (`.mp4`) para
   dentro da pasta **`media/`**.
2. Em `data.js`, copia um dos blocos `{ ... }` dentro de `PROJECTS` e cola-o
   antes do `];` final.
3. Preenche os campos:
   - `title` — nome do projeto
   - `category` — `"production"`, `"mixing"` ou `"dance"`
   - `type` — `"audio"` ou `"video"` para ficheiros locais; `"youtube"` para
     vídeos do YouTube; `"soundcloud"` para faixas do SoundCloud
   - `src` — o caminho do ficheiro (ex: `"media/o-meu-tema.mp3"`) ou, no caso
     do YouTube, apenas o ID do vídeo (a parte depois de `v=` no link)
4. Guarda o ficheiro e atualiza a página no browser.

Cada projeto aparece automaticamente na secção **Portfolio**, com os filtros
"Production / Mixing / Dance" já a funcionar.

> **Nota sobre tamanho de ficheiros:** ficheiros de vídeo pesados tornam o
> site lento a carregar. Se um vídeo passar de ~30-40MB, considera fazer
> upload para o YouTube (mesmo que "não listado") e usar `type: "youtube"`
> em vez de carregares o ficheiro diretamente.

## Como ver o site no teu computador

A forma mais simples: clica duas vezes em `index.html` — abre no browser.

Se os áudios/vídeos não carregarem dessa forma (alguns browsers bloqueiam
ficheiros locais por segurança), usa uma destas alternativas gratuitas:
- Extensão **"Live Server"** no VS Code (botão direito → "Open with Live Server")
- Arrastar a pasta toda para [netlify.com/drop](https://app.netlify.com/drop)
  para pré-visualizar e publicar ao mesmo tempo

## Como publicar o site online (gratuito)

**Opção mais simples — Netlify Drop:**
1. Vai a [app.netlify.com/drop](https://app.netlify.com/drop)
2. Arrasta a pasta `portfolio-site` completa para a página
3. Recebes um link público em segundos (podes depois configurar um domínio próprio)

**Alternativa — GitHub Pages:**
1. Cria um repositório no GitHub e envia estes ficheiros
2. Em *Settings → Pages*, ativa o GitHub Pages para o branch principal
3. O site fica disponível em `teu-utilizador.github.io/nome-do-repositorio`

## Personalizar o formulário de contacto

O formulário de contacto, por não haver servidor próprio, abre o teu
programa de email com a mensagem já escrita. Se preferires receber as
mensagens diretamente sem o visitante ter de enviar um email manualmente,
podes ligar o formulário a um serviço gratuito como o
[Formspree](https://formspree.io) ou [EmailJS](https://www.emailjs.com) —
ambos têm instruções simples de copiar e colar, e só precisas de alterar
a função `setupContactForm` em `script.js`.
