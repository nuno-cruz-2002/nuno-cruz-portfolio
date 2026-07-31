/* =========================================================
   SCRIPT.JS — não precisas de editar este ficheiro.
   Lê tudo a partir de data.js (SITE_CONFIG e PROJECTS).
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {
  applySiteConfig();
  renderProjects('all');
  setupFilters();
  setupNav();
  setupContactForm();
  document.getElementById('year').textContent = new Date().getFullYear();
});

/* ---------- SITE CONFIG (nome, bio, contactos) ---------- */
function applySiteConfig(){
  document.querySelectorAll('[data-field="name"]').forEach(el => el.textContent = SITE_CONFIG.name);
  document.querySelectorAll('[data-field="role"]').forEach(el => el.textContent = SITE_CONFIG.role);
  document.querySelectorAll('[data-field="tagline"]').forEach(el => el.textContent = SITE_CONFIG.tagline);
  document.querySelectorAll('[data-field="about"]').forEach(el => el.textContent = SITE_CONFIG.about);
  document.querySelectorAll('[data-field="email"]').forEach(el => el.textContent = SITE_CONFIG.email);
  document.querySelectorAll('[data-field="emailHref"]').forEach(el => el.href = `mailto:${SITE_CONFIG.email}`);
  document.querySelectorAll('[data-field="location"]').forEach(el => el.textContent = SITE_CONFIG.location);

  const socialsEl = document.getElementById('socials');
  socialsEl.innerHTML = '';
  (SITE_CONFIG.socials || []).forEach(s => {
    const a = document.createElement('a');
    a.href = s.url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.textContent = s.label;
    socialsEl.appendChild(a);
  });

  document.title = `${SITE_CONFIG.name} — Music Production, Mixing & Dance`;
}

/* ---------- PROJECT GRID ---------- */
function renderProjects(filter){
  const grid = document.getElementById('project-grid');
  const emptyState = document.getElementById('empty-state');
  grid.innerHTML = '';

  const list = (PROJECTS || []).filter(p => filter === 'all' || p.category === filter);

  if (list.length === 0){
    emptyState.hidden = false;
    return;
  }
  emptyState.hidden = true;

  list.forEach((project, index) => {
    grid.appendChild(buildCard(project, index));
  });
}

function buildCard(project, index){
  const card = document.createElement('article');
  card.className = 'card';
  card.dataset.category = project.category;

  const specs = [];
  if (project.bpm)      specs.push(spec('BPM', project.bpm));
  if (project.key)      specs.push(spec('Key', project.key));
  if (project.duration) specs.push(spec('Dur', project.duration));
  if (project.year)     specs.push(spec('Year', project.year));

  card.innerHTML = `
    <div class="card-cover">
      ${project.cover
        ? `<img src="${project.cover}" alt="${escapeHtml(project.title)} cover">`
        : `<span class="cover-fallback">${escapeHtml(categoryLabel(project.category))}</span>`}
      <button class="play-btn" aria-label="Play ${escapeHtml(project.title)}" data-index="${index}">
        ${playIcon()}
      </button>
    </div>
    <div class="card-body">
      <div class="card-top">
        <h3 class="card-title">${escapeHtml(project.title)}</h3>
        <span class="tag tag-${project.category}">${categoryLabel(project.category)}</span>
      </div>
      <p class="card-desc">${escapeHtml(project.description || '')}</p>
      <div class="spec-strip">${specs.join('')}</div>
    </div>
    <div class="card-player" hidden></div>
  `;

  const playBtn = card.querySelector('.play-btn');
  const playerWrap = card.querySelector('.card-player');
  playBtn.addEventListener('click', () => togglePlayer(project, playerWrap, playBtn));

  return card;
}

function spec(label, value){
  return `<span>${label}<b>${escapeHtml(String(value))}</b></span>`;
}

function categoryLabel(cat){
  return { production: 'Production', mixing: 'Mixing', dance: 'Dance' }[cat] || cat;
}

function togglePlayer(project, wrap, btn){
  const isOpen = !wrap.hidden;
  // close any other open players first
  document.querySelectorAll('.card-player').forEach(el => { el.hidden = true; el.innerHTML = ''; });

  if (isOpen){
    wrap.hidden = true;
    wrap.innerHTML = '';
    return;
  }

  wrap.innerHTML = buildMediaEl(project);
  wrap.hidden = false;
}

function buildMediaEl(project){
  switch(project.type){
    case 'audio':
      return `<audio controls src="${project.src}"></audio>`;
    case 'video':
      return `<video controls src="${project.src}"></video>`;
    case 'youtube':
      return `<iframe src="https://www.youtube.com/embed/${project.src}" title="${escapeHtml(project.title)}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    case 'soundcloud':
      return `<iframe src="${project.src}" title="${escapeHtml(project.title)}" allow="autoplay"></iframe>`;
    default:
      return `<p style="color:var(--text-faint); font-family:var(--font-mono); font-size:13px;">No media source set for this project.</p>`;
  }
}

function playIcon(){
  return `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>`;
}

function escapeHtml(str){
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

/* ---------- FILTERS ---------- */
function setupFilters(){
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected','false'); });
      btn.classList.add('active');
      btn.setAttribute('aria-selected','true');
      renderProjects(btn.dataset.filter);
    });
  });
}

/* ---------- MOBILE NAV ---------- */
function setupNav(){
  const toggle = document.getElementById('nav-toggle');
  const links = document.getElementById('nav-links');
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    links.classList.remove('open');
    toggle.setAttribute('aria-expanded','false');
  }));
}

/* ---------- CONTACT FORM ----------
   Sem servidor próprio, o formulário abre o teu programa de email
   com a mensagem já preenchida. Se preferires que as mensagens
   cheguem diretamente ao teu email sem abrir o Mail, substitui este
   bloco por um serviço como Formspree ou EmailJS (ambos gratuitos
   para uso pessoal) — basta seguir as instruções deles.
------------------------------------------------------------- */
function setupContactForm(){
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = data.get('name');
    const email = data.get('email');
    const message = data.get('message');

    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${SITE_CONFIG.email}?subject=${subject}&body=${body}`;
  });
}
