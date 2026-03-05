# 🏗 TECHNICAL REQUIREMENTS DOCUMENT (TRD)

---

## 1️⃣ System Architecture Overview

```
Frontend (React / Next.js)
        ↓
Backend API (FastAPI / Flask)
        ↓
AI Engine Layer
   - Open-source LLM
   - Prompt system
        ↓
Symptom Reasoning Engine
        ↓
Disease Knowledge Base (Database)
```

---

## 2️⃣ Core Technical Components

### 🧠 A. AI Layer

**Option:**
- Open-source LLM from Hugging Face
- Fine-tuned lightweight medical model
- Prompt-engineered response control

**System Prompt = Curion brain rules.**

### 📊 B. Symptom Reasoning Engine (Custom Logic)

You will implement:
- Symptom-weight matrix
- Probability scoring
- Severity scoring
- Red-flag trigger system

**Example logic:**
```python
if fever > 3 days:
    increase bacterial_probability += 0.2

if breathing_difficulty == True:
    severity = RED
```

### 🗄 C. Database Design (MongoDB Example)

**Collections:**

#### Diseases
```json
{
  "name": "Viral Fever",
  "symptoms": ["fever", "body pain", "cough"],
  "otc_guidance": ["paracetamol", "rest"],
  "red_flags": []
}
```

#### Sessions
- User logs (optional)

### 🔐 D. Security

- HTTPS only
- JWT authentication
- Rate limiting
- Input sanitization

---

## 3️⃣ Severity Classification Algorithm

**Severity Score:**
- 🟢 Green → 0–3
- 🟡 Yellow → 4–6
- 🔴 Red → 7+

**Factors:**
- Symptom intensity
- Duration
- Risk group
- Red flags

---

## 4️⃣ Legal Compliance Layer

Every response ends with:
> "This assessment is informational and not a medical diagnosis. Please consult a qualified healthcare professional."

**Follow open guidelines from:**
- World Health Organization
- Centers for Disease Control and Prevention

---

## 5️⃣ Technology Stack

### Frontend
- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion (animations)
- Lucide React (icons)

### Backend (To be implemented)
- FastAPI / Express.js
- OpenAI API / Open-source LLM
- PostgreSQL / MongoDB
- Redis (caching)

### Infrastructure
- Supabase (current)
- Vercel / Railway (deployment)

---

## 6️⃣ API Endpoints

### `/api/chat`
- POST: Send message and receive AI response
- Stream responses using Server-Sent Events

### `/api/sessions` (Future)
- GET: Retrieve user session history
- POST: Create new session
- DELETE: Delete session

### `/api/health` (Future)
- GET: Health check

---

## 7️⃣ Environment Variables

Required:
```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_key
```

---

## 8️⃣ Development Setup

1. Install dependencies: `npm install`
2. Configure environment variables in `.env`
3. Run development server: `npm run dev`
4. Build for production: `npm run build`

---

## 9️⃣ Deployment Strategy

- Frontend: Vercel / Netlify
- Backend: Railway / Render / AWS Lambda
- Database: Supabase / MongoDB Atlas
- CI/CD: GitHub Actions
