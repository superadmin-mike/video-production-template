  /* ── Cursor ── */
  const cur = document.getElementById('cursor');
  const ring = document.getElementById('cursor-ring');
  let mx=0, my=0, rx=0, ry=0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cur.style.left = mx+'px'; cur.style.top = my+'px';
  });
  (function animRing(){
    rx += (mx-rx)*0.1; ry += (my-ry)*0.1;
    ring.style.left = rx+'px'; ring.style.top = ry+'px';
    requestAnimationFrame(animRing);
  })();

  document.querySelectorAll('a,button,.work-item,.service-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cur.style.transform = 'translate(-50%,-50%) scale(2.5)';
      ring.style.width = '58px'; ring.style.height = '58px';
    });
    el.addEventListener('mouseleave', () => {
      cur.style.transform = 'translate(-50%,-50%) scale(1)';
      ring.style.width = '34px'; ring.style.height = '34px';
    });
  });

  /* ── Nav scroll behavior ── */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  /* ── Vimeo Hero Video ── */
  function initVimeoVideo() {
    if (typeof Vimeo === 'undefined') {
      // Vimeo API not loaded yet, try again
      setTimeout(initVimeoVideo, 100);
      return;
    }

    const container = document.getElementById('hero-vimeo');
    const iframe = document.createElement('iframe');
    iframe.src = 'https://player.vimeo.com/video/1197897448?autoplay=1&loop=1&badge=0&byline=0&portrait=0&title=0&controls=0';
    iframe.frameborder = '0';
    iframe.allow = 'autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share; xr-spatial-tracking';
    iframe.allowFullscreen = true;
    container.appendChild(iframe);

    const player = new Vimeo.Player(iframe);

    /* ── Mute toggle with Vimeo API ── */
    const muteBtn = document.getElementById('muteBtn');
    const muteIcon = document.getElementById('muteIcon');
    const muteLabel = document.getElementById('muteLabel');

    // Set initial volume to 0 (muted)
    player.setVolume(0);

    muteBtn.addEventListener('click', async () => {
      const vol = await player.getVolume();
      if (vol > 0) {
        await player.setVolume(0);
        muteIcon.textContent = '🔇';
        muteLabel.textContent = 'Sonido';
      } else {
        await player.setVolume(0.5);
        muteIcon.textContent = '🔊';
        muteLabel.textContent = 'Silencio';
      }
    });
  }

  // Initialize Vimeo when ready
  initVimeoVideo();

  /* ── Scroll reveal ── */
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
