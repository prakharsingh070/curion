# 🚀 Setup Guide

## Initial Setup

### 1. Prerequisites
- Node.js 18 or higher
- npm or yarn package manager
- A code editor (VS Code recommended)
- A Supabase account (free tier is sufficient)

### 2. Install Dependencies

```bash
npm install
```

This will install all required packages including:
- React & React DOM
- TypeScript
- Vite (build tool)
- Tailwind CSS (styling)
- Framer Motion (animations)
- Lucide React (icons)
- React Markdown (message formatting)

### 3. Configure Backend (Supabase)

#### Option A: Using Supabase (Recommended for quick start)

1. Go to [supabase.com](https://supabase.com) and create a free account
2. Create a new project
3. Go to Project Settings > API
4. Copy your Project URL and anon/public key
5. Update your `.env` file:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=your-anon-key-here
```

6. Create a Supabase Edge Function for the chat endpoint:

```bash
# Install Supabase CLI first
npm install -g supabase

# Initialize Supabase in your project
supabase init

# Create the edge function
supabase functions new curion-chat
```

7. Deploy your edge function with the AI system prompt from `docs/AI_SYSTEM_PROMPT.md`

#### Option B: Using Your Own Backend

If you want to use a different backend:

1. Create an API endpoint that accepts POST requests at `/chat`
2. The endpoint should:
   - Accept `{ messages: Array<{role: string, content: string}> }`
   - Return a streaming response using Server-Sent Events
   - Follow the OpenAI streaming format
3. Update `CHAT_URL` in [src/pages/Index.tsx](src/pages/Index.tsx#L11)

### 4. Start Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

---

## TypeScript Errors in VS Code

You might see some TypeScript errors in VS Code for module imports. These are **editor-only errors** and don't affect the running application. To resolve them:

1. **Restart VS Code** or reload the window:
   - Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (Mac)
   - Type "Reload Window" and press Enter

2. **Or restart the TypeScript server:**
   - Press `Ctrl+Shift+P` / `Cmd+Shift+P`
   - Type "TypeScript: Restart TS Server"
   - Press Enter

The errors should disappear after restarting.

---

## Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

To preview the production build locally:

```bash
npm run preview
```

---

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables in Vercel dashboard
5. Deploy

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Import your repository
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Add environment variables
7. Deploy

---

## Troubleshooting

### Port 5173 is already in use
```bash
# Kill the process using the port (Windows)
npx kill-port 5173

# Or use a different port
npm run dev -- --port 3000
```

### Module not found errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build errors
```bash
# Clear Vite cache
rm -rf node_modules/.vite
npm run dev
```

---

## Next Steps

1. Review the [AI System Prompt](docs/AI_SYSTEM_PROMPT.md) to understand the AI behavior
2. Check the [Functional Features](docs/FUNCTIONAL_FEATURES.md) to see what can be built
3. Read the [Technical Requirements](docs/TRD.md) for implementation details
4. Start implementing the core features!

---

## Need Help?

- Check the main [README.md](../README.md)
- Review the documentation in `/docs`
- Check for existing GitHub issues
- Create a new issue with your question
