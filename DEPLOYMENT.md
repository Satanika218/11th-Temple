# Deployment Guide - 11th Temple Solutions Website

## 🚀 Quick Deployment Options

### **1. GitHub Pages (Recommended)**

```bash
# 1. Create GitHub repository
git init
git add .
git commit -m "Initial commit: 11th Temple Solutions website"
git branch -M main
git remote add origin https://github.com/[username]/11th-temple-solutions-website.git
git push -u origin main

# 2. Enable GitHub Pages
# Go to repository Settings → Pages
# Source: Deploy from a branch
# Branch: main / (root)
# Your site will be available at: https://[username].github.io/11th-temple-solutions-website/
```

### **2. Netlify (Drag & Drop)**

1. Visit [netlify.com](https://netlify.com)
2. Drag the entire project folder to Netlify
3. Your site will be live instantly with a custom URL
4. Optional: Connect to GitHub for automatic deployments

### **3. Vercel**

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts - site will be live in seconds
```

### **4. Firebase Hosting**

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login and initialize
firebase login
firebase init hosting

# Deploy
firebase deploy
```

## 🖥️ Local Development

### **Option 1: Python Server (Recommended)**
```bash
# Navigate to project directory
cd 11th-temple-solutions-website

# Start server
python3 -m http.server 8000

# Visit: http://localhost:8000
```

### **Option 2: Node.js Server**
```bash
# Install dependencies
npm install

# Start development server
npm run serve

# Visit: http://localhost:8000
```

### **Option 3: Live Server (VS Code)**
1. Install "Live Server" extension
2. Right-click `index.html`
3. Select "Open with Live Server"

## 🔧 Configuration

### **Custom Domain Setup**

**For GitHub Pages:**
1. Add `CNAME` file with your domain
2. Configure DNS A records:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```

**For Netlify:**
1. Go to Domain settings
2. Add custom domain
3. Configure DNS as instructed

### **Environment Variables**

Create `.env` file for any API keys:
```env
# Example - not currently used but ready for future integrations
GOOGLE_ANALYTICS_ID=your_ga_id
CONTACT_FORM_ENDPOINT=your_form_endpoint
```

## 📊 Analytics Setup

### **Google Analytics 4**
Add to `<head>` section of `index.html`:
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### **Google Tag Manager**
Add to `<head>`:
```html
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXXX');</script>
<!-- End Google Tag Manager -->
```

## 🔒 Security Headers

### **Netlify (_headers file)**
```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin
  Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com; style-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com; img-src 'self' data: https:; font-src 'self' https://cdnjs.cloudflare.com;
```

### **Apache (.htaccess)**
```apache
# Security Headers
Header always set X-Frame-Options "DENY"
Header always set X-Content-Type-Options "nosniff"
Header always set X-XSS-Protection "1; mode=block"
Header always set Referrer-Policy "strict-origin-when-cross-origin"

# Cache Control
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
</IfModule>
```

## 📱 PWA Setup (Optional)

### **manifest.json**
```json
{
  "name": "11th Temple Solutions",
  "short_name": "11th Temple",
  "description": "AI automation and digital services for Welsh border counties",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#1e3c72",
  "theme_color": "#1e3c72",
  "icons": [
    {
      "src": "logo.png",
      "sizes": "192x192",
      "type": "image/png"
    }
  ]
}
```

### **Service Worker (sw.js)**
```javascript
const CACHE_NAME = '11th-temple-v1';
const urlsToCache = [
  '/',
  '/styles.css',
  '/script.js',
  '/logo.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
```

## 🔍 SEO Optimization

### **Meta Tags Checklist**
- ✅ Title tag (unique for each page)
- ✅ Meta description
- ✅ Open Graph tags
- ✅ Twitter Card tags
- ✅ Canonical URL
- ✅ Schema markup

### **Performance Optimization**
- ✅ Minify CSS/JS (optional for this size)
- ✅ Optimize images
- ✅ Enable compression
- ✅ Use CDN for external libraries
- ✅ Lazy loading for images

## 📧 Contact Form Integration

### **Netlify Forms**
Add to form tag:
```html
<form name="contact" method="POST" data-netlify="true">
```

### **Formspree**
```html
<form action="https://formspree.io/f/your-form-id" method="POST">
```

### **EmailJS**
```javascript
// Add to script.js
emailjs.send("service_id", "template_id", {
    name: formData.name,
    email: formData.email,
    message: formData.message
});
```

## 🚨 Troubleshooting

### **Common Issues**

**1. CSS/JS not loading:**
- Check file paths are relative
- Ensure files are in same directory
- Check for typos in filenames

**2. Images not displaying:**
- Verify image file exists
- Check file extension matches
- Ensure proper file permissions

**3. Chatbot not working:**
- Check browser console for errors
- Verify JavaScript is enabled
- Test in different browsers

**4. PDF export failing:**
- Ensure jsPDF library is loaded
- Check for JavaScript errors
- Test with different browsers

### **Browser Compatibility**
- Chrome: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Edge: ✅ Full support
- IE11: ⚠️ Limited support (consider polyfills)

## 📞 Support

For deployment issues or questions:
- Check browser console for errors
- Verify all files are uploaded
- Test locally first
- Contact hosting provider support if needed

---

**Ready to deploy?** Choose your preferred method above and get your 11th Temple Solutions website live in minutes!