# Frontend

React + Vite + TypeScript user interface for Healytics AI (Curion).

---

## 📁 Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── chat/                   # Chat interface components
│   │   │   ├── ChatMessage.tsx     # Display messages
│   │   │   ├── ChatInput.tsx       # User input field
│   │   │   ├── TypingIndicator.tsx # Loading animation
│   │   │   └── Disclaimer.tsx      # Legal disclaimer
│   │   └── layout/
│   │       └── Sidebar.tsx         # Navigation sidebar
│   │
│   ├── pages/
│   │   ├── Dashboard.tsx           # Main chat interface
│   │   ├── Index.tsx               # Landing/home page
│   │   └── Profile.tsx             # User risk profile
│   │
│   ├── App.tsx                     # Root component
│   ├── main.tsx                    # Entry point
│   ├── index.css                   # Global styles
│   └── vite-env.d.ts              # Vite type definitions
│
├── index.html                      # HTML template
├── package.json                    # Dependencies
├── tsconfig.json                   # TypeScript config
├── vite.config.ts                  # Vite configuration
├── tailwind.config.js              # Tailwind CSS config
└── postcss.config.js              # PostCSS config
```

---

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Utility-first styling
- **React Router DOM** - Client-side routing
- **Framer Motion** - Animations
- **Lucide React** - Icon library

---

## 🚀 Development

### Install Dependencies

```bash
npm install
```

### Start Dev Server

```bash
npm run dev
```

Runs on: http://localhost:5173

### Build for Production

```bash
npm run build
```

Outputs to: `dist/`

### Preview Production Build

```bash
npm run preview
```

---

## 🎨 Key Components

### ChatMessage Component
Displays user and AI messages with proper formatting and styling.

### ChatInput Component
Handles user input with:
- Text area that grows with content
- Send button
- Enter to send (Shift+Enter for new line)

### TypingIndicator Component
Shows animated dots while AI is thinking/responding.

### Disclaimer Component
Legal disclaimer displayed in chat to ensure users understand limitations.

---

## 📝 Environment Variables

Create a `.env` file with:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_key
```

---

## 🎯 Current Features

- ✅ Chat-based interface
- ✅ Real-time messaging
- ✅ Markdown support in messages
- ✅ Responsive design (mobile-friendly)
- ✅ Loading indicators
- ✅ Legal disclaimer
- ✅ Sidebar navigation
- ✅ Multiple pages (Home, Chat, Dashboard, Profile)

---

## 🔄 Upcoming Features

- [ ] Session history display
- [ ] Severity color coding (Green/Yellow/Red)
- [ ] Confidence score display
- [ ] OTC medicine formatting
- [ ] Emergency alert styling
- [ ] User risk profile form
- [ ] Health dashboard charts

---

## 📦 Dependencies

Main dependencies:
- `react` & `react-dom` - UI library
- `react-router-dom` - Routing
- `framer-motion` - Animations
- `lucide-react` - Icons
- `tailwindcss` - Styling

Dev dependencies:
- `vite` - Build tool
- `typescript` - Type checking
- `@vitejs/plugin-react` - React support
- `eslint` - Code linting

---

## 🐛 Troubleshooting

### Port already in use
```bash
# Kill process on port 5173
npx kill-port 5173
# Or use a different port
npm run dev -- --port 3000
```

### Module not found errors
```bash
npm install
```

### TypeScript errors
```bash
# Check TypeScript config
npx tsc --noEmit
```

---

**Last Updated:** March 5, 2026
