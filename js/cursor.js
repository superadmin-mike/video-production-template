// Cursor system
const cursor = document.getElementById('cursor');
const cursorRing = document.getElementById('cursor-ring');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', (e) => {
  mx = e.clientX;
  my = e.clientY;
  cursor.style.left = mx + 'px';
  cursor.style.top = my + 'px';
});

(function animateRing() {
  rx += (mx - rx) * 0.1;
  ry += (my - ry) * 0.1;
  cursorRing.style.left = rx + 'px';
  cursorRing.style.top = ry + 'px';
  requestAnimationFrame(animateRing);
})();

// Scale cursor on hover
document.querySelectorAll('a, button, .work-item, .service-card, input, textarea, select').forEach((el) => {
  el.addEventListener('mouseenter', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(2.5)';
    cursorRing.style.width = '58px';
    cursorRing.style.height = '58px';
  });

  el.addEventListener('mouseleave', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    cursorRing.style.width = '34px';
    cursorRing.style.height = '34px';
  });
});

// Hide cursor ring on leave
document.addEventListener('mouseleave', () => {
  cursor.style.opacity = '0';
  cursorRing.style.opacity = '0';
});

document.addEventListener('mouseenter', () => {
  cursor.style.opacity = '1';
  cursorRing.style.opacity = '1';
});
