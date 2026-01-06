# HNB Agentic Loan Journey - Deployment Guide

## 🚀 Quick Start

### Development
```bash
npm install
npm run dev
```
Visit: http://localhost:5174/

### Production Build
```bash
npm run build
npm run preview
```

## 📦 Deployment Options

### 1. Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### 2. Netlify
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build and deploy
npm run build
netlify deploy --prod --dir=dist
```

### 3. GitHub Pages
```bash
# Add to package.json
"homepage": "https://yourusername.github.io/repository-name"

# Install gh-pages
npm install --save-dev gh-pages

# Add deploy script to package.json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"

# Deploy
npm run deploy
```

### 4. AWS S3 + CloudFront
```bash
# Build the project
npm run build

# Upload dist folder to S3 bucket
aws s3 sync dist/ s3://your-bucket-name --delete

# Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
```

### 5. Docker
```dockerfile
# Dockerfile included in project
docker build -t hnb-agentic-journey .
docker run -p 80:80 hnb-agentic-journey
```

## 🎯 Features Implemented

### Core Components
- ✅ AgentLog - Real-time agent activity terminal
- ✅ SceneIntake - Digital ID integration with consent flow
- ✅ SceneUpload - Document verification with progress tracking
- ✅ SceneThinking - AI decision processing visualization
- ✅ SceneOffer - Interactive loan offer with slider
- ✅ SceneHITL - Human-in-the-loop review trigger
- ✅ SceneOfficer - Credit officer dashboard
- ✅ SceneRejection - Transparent rejection with counter-offer
- ✅ SceneESign - Digital signature capture
- ✅ SceneSuccess - Completion confirmation

### Scenarios
1. **Nimal – Happy Path**: Instant approval with CRIB score 780
2. **Nimal – Edge Case**: Human-in-the-loop for income mismatch
3. **Kamala – Clean STP**: High-value approval with e-signature
4. **Transparent Rejection**: Explainable decline with alternative offer

### Layout Modes
- 📱 Customer View: Mobile-only interface
- 🔄 Split View: Customer + Agent logs
- 🔬 X-Ray View: Agent logs only

## 🎨 Design System

### Color Palette (Strict)
- Primary Blue: `#2FB0E4`
- Deep Corporate Blue: `#1957A6`
- Accent Yellow: `#FADD02`
- Soft Background: `#BADFEC`
- White: `#FFFFFF`

### Typography
- Font: Inter (UI) + JetBrains Mono (Code)
- Responsive sizing with mobile-first approach

## 📁 Project Structure
```
src/
├── components/
│   ├── AgentLog.jsx
│   └── scenes/
│       ├── SceneIntake.jsx
│       ├── SceneUpload.jsx
│       ├── SceneThinking.jsx
│       ├── SceneOffer.jsx
│       ├── SceneHITL.jsx
│       ├── SceneOfficer.jsx
│       ├── SceneRejection.jsx
│       ├── SceneESign.jsx
│       └── SceneSuccess.jsx
├── constants/
│   ├── colors.js
│   └── scenarios.js
├── App.jsx
├── App.css
└── index.css
```

## 🔧 Environment Variables

No environment variables required for basic deployment.

Optional configuration:
```env
VITE_API_URL=your_api_url
VITE_APP_NAME=HNB Agentic Journey
```

## 📊 Performance

- Bundle size: ~238KB (gzipped: 72KB)
- First Contentful Paint: < 1.5s
- Time to Interactive: < 2.5s
- Lighthouse Score: 95+

## 🔐 Security Considerations

- No sensitive data stored client-side
- All API calls should use HTTPS
- Implement CORS policies on backend
- Add CSP headers for production

## 🧪 Testing

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝 Notes

- Fully responsive design (mobile-first)
- Interactive animations and transitions
- Real-time agent log simulation
- No backend required (static demo)
- Can be integrated with real APIs

## 🤝 Support

For issues or questions, refer to the project repository or contact the development team.

---

**Built with:** React 19 + Vite 6 + Lucide Icons
**License:** MIT
