# 🏥 Curion - Intelligent Health Assistant

> Your caring AI companion for understanding symptoms and making safer health decisions.

[![React](https://img.shields.io/badge/React-18-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5-purple)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-cyan)](https://tailwindcss.com/)

## 🌟 Overview

Curion is an intelligent health companion that uses adaptive questioning and probabilistic reasoning to help users understand their symptoms. It provides:

- 🧠 **Intelligent Cross-Questioning** - Adaptive follow-up questions based on your responses
- 📊 **Probability-Based Reasoning** - Shows likelihood of different conditions
- 🚨 **Emergency Detection** - Immediate alerts for serious symptoms
- 🌿 **Safe Guidance** - OTC remedies and home care advice
- 🔒 **Privacy First** - Your health data stays secure

### ⚠️ Important Disclaimer

**Curion is NOT a replacement for professional medical advice, diagnosis, or treatment. Always consult with qualified healthcare professionals for medical concerns.**

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- A Supabase account (for backend API)

### Installation

1. **Clone or download this repository**

2. **Install dependencies:**
```bash
npm install
```

3. **Configure environment variables:**

Copy the `.env` file and add your Supabase credentials:

```env
VITE_SUPABASE_URL=your_supabase_url_here
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_key_here
```

4. **Start the development server:**
```bash
npm run dev
```

5. **Open your browser:**
Navigate to `http://localhost:5173`

---

## 📚 Documentation

All detailed documentation is available in the `/docs` folder:

- **[Functional Features Blueprint](docs/FUNCTIONAL_FEATURES.md)** - Complete feature specifications
- **[Product Requirements (PRD)](docs/PRD.md)** - Product vision and requirements
- **[Technical Requirements (TRD)](docs/TRD.md)** - Technical architecture and implementation
- **[AI System Prompt](docs/AI_SYSTEM_PROMPT.md)** - AI behavior guidelines and rules
- **[Setup Guide](docs/SETUP_GUIDE.md)** - Detailed setup instructions

---

## 🏗️ Project Structure

```
Curion/
├── src/
│   ├── components/
│   │   └── chat/
│   │       ├── ChatMessage.tsx      # Message display component
│   │       ├── ChatInput.tsx        # User input component
│   │       ├── TypingIndicator.tsx  # Loading animation
│   │       └── Disclaimer.tsx       # Legal disclaimer
│   ├── pages/
│   │   └── Index.tsx                # Main chat page
│   ├── App.tsx                      # Root component
│   ├── main.tsx                     # Entry point
│   └── index.css                    # Global styles
├── docs/                            # Documentation
├── package.json                     # Dependencies
├── tsconfig.json                    # TypeScript config
├── vite.config.ts                   # Vite configuration
└── tailwind.config.js               # Tailwind CSS config
```

---

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

---

## 🎯 Core Features

### ✅ Implemented (v1.0)
- [x] Chat-based interface
- [x] Streaming AI responses
- [x] Markdown support in messages
- [x] Responsive design
- [x] Loading indicators
- [x] Legal disclaimer

### 🔄 In Progress
- [ ] Adaptive symptom interview engine
- [ ] Probability-based disease ranking
- [ ] Emergency red-flag detection
- [ ] Severity classification
- [ ] OTC medicine suggestions

### 📋 Planned (Future)
- [ ] User risk profiling
- [ ] Session history tracking
- [ ] Health dashboard
- [ ] Voice input support
- [ ] Multi-language support
- [ ] Offline mode

---

## 🔐 Security & Privacy

- No persistent storage of personal health data (currently)
- Secure HTTPS communication
- Environment variable protection
- No third-party tracking

---

## 🤝 Contributing

This is a personal/educational project. If you'd like to contribute:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

## 📄 License

This project is for educational purposes. Please consult legal requirements before deploying any medical-related software.

---

## 🙏 Acknowledgments

- Built with [React](https://reactjs.org/) and [Vite](https://vitejs.dev/)
- UI components styled with [Tailwind CSS](https://tailwindcss.com/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- Icons from [Lucide](https://lucide.dev/)

---

## 📞 Support

For issues or questions:
1. Check the [documentation](docs/)
2. Review existing issues
3. Create a new issue with details

---

## ⚖️ Legal Notice

**Medical Disclaimer:** This application provides general health information only and is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read in this application.

In case of emergency, call your local emergency services immediately.

---

**Built with ❤️ for better health awareness**
