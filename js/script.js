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

  /* ── Mute toggle ── */
  const video = document.getElementById('heroVideo');
  const muteBtn = document.getElementById('muteBtn');
  const muteIcon = document.getElementById('muteIcon');
  const muteLabel = document.getElementById('muteLabel');
  let muted = true;

  muteBtn.addEventListener('click', () => {
    muted = !muted;
    video.muted = muted;
    muteIcon.textContent = muted ? '🔇' : '🔊';
    muteLabel.textContent = muted ? 'Sonido' : 'Silencio';
  });

  /* ── Scroll reveal ── */
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
