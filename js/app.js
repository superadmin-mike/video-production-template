// Load and render data
fetch('data.json')
  .then(r => r.json())
  .then(renderApp)
  .catch(e => console.error('Error loading data:', e));

function renderApp(data) {
  // Set page title and logo
  const clientName = data.client.name;
  document.title = `${clientName} — Video Production`;
  document.getElementById('navLogo').textContent = clientName;
  document.getElementById('footerLogo').textContent = clientName;
  document.getElementById('footerCopy').textContent = `© ${new Date().getFullYear()} ${clientName}. Video Production.`;

  // Hero wordmark - multicolor letters
  const wordmarkDiv = document.getElementById('wordmark');
  const letters = clientName.split('');
  const colors = ['terracota', 'gold', 'cyan', 'teal', 'mint', 'gold', 'orange'];

  wordmarkDiv.innerHTML = letters
    .map((letter, i) => `<span style="color: var(--${colors[i % colors.length]});">${letter}</span>`)
    .join('');
  wordmarkDiv.style.display = 'flex';
  wordmarkDiv.style.gap = '0';

  // Hero tagline
  document.getElementById('heroTagline').textContent = data.client.tagline;

  // Hero fallback gradient
  const heroFallback = document.getElementById('heroFallback');
  heroFallback.style.background = data.hero.fallbackGradient;

  // Hero video
  const heroVideo = document.getElementById('heroVideo');
  if (data.hero.videoId) {
    heroVideo.src = `https://www.youtube.com/embed/${data.hero.videoId}`;
  }

  // About section
  document.getElementById('aboutLabel').textContent = data.about.label;
  document.getElementById('aboutTitle').innerHTML = data.about.title;
  document.getElementById('aboutDesc1').innerHTML = data.about.description1;
  document.getElementById('aboutDesc2').innerHTML = data.about.description2;

  // Stats
  const statGrid = document.getElementById('statGrid');
  statGrid.innerHTML = data.about.stats
    .map(stat => `
      <div class="stat-box">
        <div class="stat-number">${stat.number}</div>
        <div class="stat-label">${stat.label}</div>
      </div>
    `)
    .join('');

  // Clients scroll
  const clientsTrack = document.getElementById('clientsTrack');
  const clientsHTML = data.clients
    .map(c => `<span class="client-name">${c}</span>`)
    .join('');
  // Duplicate for seamless scroll
  clientsTrack.innerHTML = clientsHTML + clientsHTML;

  // Services grid
  const servicesGrid = document.getElementById('servicesGrid');
  servicesGrid.innerHTML = data.services
    .map((svc, i) => `
      <div class="service-card reveal ${i > 0 ? `reveal-delay-${Math.min(i, 3)}` : ''}">
        <div class="service-number">${svc.number}</div>
        <h3 class="service-title">${svc.title}</h3>
        <p class="service-desc">${svc.description}</p>
      </div>
    `)
    .join('');

  // Portfolio grid
  const workGrid = document.getElementById('workGrid');
  workGrid.innerHTML = data.portfolio
    .map((work, i) => `
      <div class="work-item reveal ${i > 0 ? `reveal-delay-${Math.min(i % 3 + 1, 3)}` : ''}">
        <div class="work-video-wrap">
          ${work.videoId ? `<video class="work-video" autoplay muted loop playsinline src="${work.videoId}"></video>` : ''}
          <div class="work-placeholder"></div>
        </div>
        <div class="work-play" aria-hidden="true">
          <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
        </div>
        <div class="work-reel" aria-hidden="true">
          <div class="reel-dot"></div>
          <span class="reel-label">Reel</span>
        </div>
        <div class="work-item-inner">
          <div class="work-tag">${work.tag}</div>
          <h3 class="work-title">${work.title}</h3>
          <p class="work-client">${work.client}</p>
        </div>
      </div>
    `)
    .join('');

  // Amplify section
  document.getElementById('amplifyTitle').innerHTML = data.amplify.title;
  document.getElementById('amplifyDesc').textContent = data.amplify.description;

  const amplifyPartners = document.getElementById('amplifyPartners');
  amplifyPartners.innerHTML = data.amplify.partners
    .map(p => `<span class="partner-pill">${p}</span>`)
    .join('');

  // Contact section
  document.getElementById('contactTitle').innerHTML = data.contact.title;
  document.getElementById('contactDesc').innerHTML = data.contact.description;

  // Contact channels
  const contactChannels = document.getElementById('contactChannels');
  const channels = [
    { label: 'Email', value: data.client.email, href: `mailto:${data.client.email}`, class: 'ch-email' },
    { label: 'WhatsApp', value: data.client.whatsappNumber, href: `https://wa.me/${data.client.whatsappNumber}`, class: 'ch-whatsapp' },
    { label: 'Phone', value: data.client.phone, href: `tel:${data.client.phone}`, class: 'ch-phone' },
    { label: 'LinkedIn', value: 'Profile', href: data.client.linkedin, class: 'ch-linkedin' },
  ];

  contactChannels.innerHTML = channels
    .map(ch => `
      <a href="${ch.href}" class="contact-channel ${ch.class}">
        <div>
          <div class="channel-label">${ch.label}</div>
          <div class="channel-value">${ch.value}</div>
        </div>
        <span class="channel-arrow">→</span>
      </a>
    `)
    .join('');

  // Footer Instagram
  document.getElementById('footerIg').href = data.client.instagram;

  // Initialize animations after rendering
  initScrollReveal();
  initNavScroll();
  initVideoControls();
}

// Scroll reveal animation
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach((el) => {
    observer.observe(el);
  });
}

// Nav scroll behavior
function initNavScroll() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });
}

// Video controls
function initVideoControls() {
  const video = document.getElementById('heroVideo');
  const muteBtn = document.getElementById('muteBtn');
  const muteIcon = document.getElementById('muteIcon');
  const muteLabel = document.getElementById('muteLabel');
  let muted = true;

  muteBtn.addEventListener('click', () => {
    muted = !muted;
    video.muted = muted;
    muteIcon.textContent = muted ? '🔇' : '🔊';
    muteLabel.textContent = muted ? 'Sound' : 'Mute';
  });
}
