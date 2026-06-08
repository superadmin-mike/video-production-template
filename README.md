# Video Production Template

A professional, reusable website template for video production agencies. Built with HTML5, CSS3, and vanilla JavaScript. Fully customizable via `data.json`.

## Quick Start

### 1. Edit `data.json`
All content lives in one file:
- Client name, tagline, contact
- Services & descriptions
- Portfolio with video links
- About section & stats

### 2. Add Videos
- YouTube: Get video ID from URL, add to `portfolio[].videoId`
- Self-hosted: Use direct MP4 URL in `portfolio[].videoUrl`

### 3. Deploy
```bash
git add .
git commit -m "Customize for [Client]"
git push
# Visit vercel.com → Import Project → Select repo → Deploy
```

## File Structure

```
video-production-template/
├── index.html              (template)
├── data.json              (ALL content here)
├── css/
│   ├── main.css
│   └── animations.css
├── js/
│   ├── app.js             (loads JSON, renders page)
│   └── cursor.js
├── assets/images/
└── README.md
```

## Customizing Content

### data.json Structure
```json
{
  "client": {
    "name": "TEMPLUM",
    "tagline": "Video Production · México",
    "yearsActive": "10+",
    "whatsappNumber": "+525512345678",
    "email": "hello@templum.tv",
    "phone": "+525512345679",
    "linkedin": "https://linkedin.com/company/templum",
    "instagram": "https://instagram.com/templum.tv"
  },
  "hero": {
    "videoId": "youtube-video-id",
    "fallbackGradient": "linear-gradient(...)"
  },
  "about": {
    "title": "Production of<br>world-class quality",
    "description1": "We bridge...",
    "stats": [
      { "number": "10+", "label": "Years of experience" }
    ]
  },
  "services": [
    {
      "number": "01",
      "title": "Video Production",
      "description": "Commercials, corporate videos, digital content..."
    },
    {
      "number": "02",
      "title": "Photography",
      "description": "Professional shoots..."
    },
    {
      "number": "03",
      "title": "Drone Services",
      "description": "Aerial filming..."
    }
  ],
  "clients": ["Volkswagen", "Samsung", "GNC", "Kotex"],
  "portfolio": [
    {
      "title": "Project Name<br>Subtitle",
      "client": "Brand Name · Category",
      "tag": "Commercial",
      "videoId": "youtube-id-or-url"
    }
  ],
  "amplify": {
    "title": "Premium Quality.<br>Global Reach.",
    "partners": ["YouTube", "Vimeo", "Netflix"]
  }
}
```

## Adding Videos

### YouTube (Recommended)
1. Upload to your YouTube channel
2. Make "Unlisted" (not public, not private)
3. Get video ID: `https://youtube.com/watch?v=**abc123xyz**`
4. Add to data.json: `"videoId": "abc123xyz"`

### Cloudinary (Self-hosted)
1. Create account at cloudinary.com (free tier)
2. Upload video
3. Copy public URL
4. Add to data.json: `"videoUrl": "https://res.cloudinary.com/..."`

## Customizing Colors

Edit `css/main.css` root variables:
```css
:root {
  --terracota: #B85C3C;    /* Primary */
  --teal: #1B8B8B;         /* Secondary */
  --orange: #E67E22;       /* Accent */
  --gold: #D4AF37;
  --mint: #5FB85F;
  --cyan: #17A697;
}
```

## Deployment

### Vercel (Recommended - Free, Auto-deploy)
1. Push code to GitHub
2. Go to vercel.com
3. Click "New Project"
4. Select this repo
5. Click "Deploy"
6. Get live URL + auto-updates on push

### Netlify (Free, Auto-deploy)
1. netlify.com → New site from Git
2. Connect GitHub repo
3. Deploy

### Manual Deploy
Upload these files to your hosting:
- index.html
- data.json
- css/ directory
- js/ directory
- assets/ directory

## Features

✨ Smooth animations (scroll reveal, custom cursor)
🎬 Video-ready (portfolio grid, hero video)
📱 100% responsive (mobile, tablet, desktop)
⚡ Fast & optimized (vanilla JS, no frameworks)
🔧 Easy to customize (single data.json file)
🌙 Dark mode optimized

## Using for Multiple Clients

### Quick Method
```bash
# Copy template
cp -r video-production-template client-name
cd client-name

# Edit data.json for new client
nano data.json

# Create new GitHub repo for this client (optional)
git remote set-url origin https://github.com/superadmin-mike/client-name.git
git push -u origin main

# Deploy to Vercel
vercel
```

## Performance Tips

**Video Optimization**
- Use YouTube (CDN included, no setup)
- Or upload to Cloudinary (free tier)
- Target: 1080p, H.264, 5-15MB max

**Image Optimization**
- WebP format preferred
- Max width: 1920px
- Use TinyPNG or Squoosh to compress

**Monitoring**
- Google PageSpeed Insights
- GTmetrix
- Lighthouse audit (Chrome DevTools)

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Troubleshooting

**Videos not playing?**
- Verify YouTube video ID (no `v=` prefix)
- Check if video is public or unlisted
- Open browser console (F12 → Console) for errors

**Styles look broken?**
- Clear browser cache (Ctrl+Shift+Delete on Windows, Cmd+Shift+Delete on Mac)
- Hard refresh (Ctrl+F5 or Cmd+Shift+R)

**Data not loading?**
- Validate data.json at jsonlint.com
- Ensure data.json is in root directory
- Check browser console for fetch errors

**Mobile looks off?**
- Test on actual device or Chrome DevTools
- Resize viewport to 375px width
- Check for CSS media queries in main.css

## Support

For issues:
1. Check data.json is valid JSON
2. Verify file paths are correct
3. Check browser console (F12)
4. Open issue on GitHub with error details

## License

MIT — Use for personal and commercial projects

---

**Built for video production agencies. Deploy in minutes, customize in seconds.**

Updated: 2025-06-07
