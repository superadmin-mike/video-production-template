// Load data.json and inject into existing HTML
fetch('data.json')
  .then(r => r.json())
  .then(data => {
    // Update page title
    document.title = `${data.client.name} — ${data.tagline}`;

    // Update hero video if provided
    if (data.hero && data.hero.videoSrc) {
      const video = document.getElementById('heroVideo');
      if (video) {
        const source = document.createElement('source');
        source.src = data.hero.videoSrc;
        source.type = 'video/mp4';
        video.appendChild(source);
      }
    }
  })
  .catch(e => console.log('Note: data.json not loaded. Using HTML defaults.'));
