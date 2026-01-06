# HNB Agentic Loan Journey

A sophisticated React-based demonstration of an AI-powered loan application journey showcasing multiple customer scenarios and real-time agent activity visualization.

## 🎯 Features

- **Interactive Loan Scenarios**: Experience 4 different customer journeys
- **Real-time Agent Logs**: Watch AI agents process applications in real-time
- **Multiple View Modes**: Customer view, Split view, and X-Ray (agent-only) view
- **Responsive Design**: Optimized for all screen sizes
- **Modern UI/UX**: Clean, professional interface with smooth animations

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📋 Available Scenarios

### 1. Nimal – Happy Path
Instant approval scenario with CRIB score 780
- Digital ID verification
- Document upload
- Automated credit check
- Instant loan offer
- Success confirmation

### 2. Nimal – Edge Case
Human-in-the-loop review for income mismatch
- Triggers manual review
- Credit officer intervention
- Decision override capability

### 3. Kamala – Clean STP
High-value approval with e-signature flow
- Premium CRIB score (850)
- Digital signature capture
- Blockchain verification

### 4. Transparent Rejection
Explainable decline with alternative offer
- Clear rejection reasons
- Smart counter-offer
- Debt-to-income analysis

## 🎨 Technology Stack

- **React 19**: Latest React features
- **Vite 6**: Lightning-fast build tool
- **Lucide React**: Beautiful icon library
- **TailwindCSS utilities**: Custom color system
- **CSS3**: Modern animations and transitions

## 📁 Project Structure

```
src/
├── components/
│   ├── AgentLog.jsx              # Real-time agent activity terminal
│   └── scenes/                    # All journey scenes
│       ├── SceneIntake.jsx        # Initial data collection
│       ├── SceneUpload.jsx        # Document verification
│       ├── SceneThinking.jsx      # AI processing
│       ├── SceneOffer.jsx         # Loan offer presentation
│       ├── SceneHITL.jsx          # Human review trigger
│       ├── SceneOfficer.jsx       # Officer dashboard
│       ├── SceneRejection.jsx     # Rejection with counter-offer
│       ├── SceneESign.jsx         # Digital signature
│       └── SceneSuccess.jsx       # Success confirmation
├── constants/
│   ├── colors.js                  # Brand color palette
│   └── scenarios.js               # Journey configurations
├── App.jsx                        # Main application
├── App.css                        # Application styles
└── index.css                      # Global styles
```

## 🎨 Design System

### Color Palette
- Primary Blue: `#2FB0E4`
- Deep Corporate Blue: `#1957A6`
- Accent Yellow: `#FADD02`
- Soft Background: `#BADFEC`
- White: `#FFFFFF`

### Typography
- UI Font: Inter
- Monospace: JetBrains Mono

## 🔧 Configuration

### Vite Config
The project uses Vite with React plugin for fast development and optimized builds.

### Build Output
- Optimized bundle size
- Code splitting
- Asset optimization
- Minification

## 📊 Performance

- Bundle size: ~238KB (gzipped: 72KB)
- Fast load times with code splitting
- Smooth animations (60fps)
- Responsive on all devices

## 🚢 Deployment

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment instructions including:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Docker

## 📝 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 🤝 Contributing

This is a demonstration project. For production use, consider:
- Integrating with real backend APIs
- Adding authentication
- Implementing error boundaries
- Adding unit and integration tests
- Setting up CI/CD pipelines

## 📄 License

MIT License - feel free to use this project for learning and demonstration purposes.

## 🙏 Acknowledgments

- Hatton National Bank (HNB) for the conceptual framework
- Lucide Icons for beautiful iconography
- React and Vite teams for amazing tools

---

**Built with ❤️ using React + Vite**
