# 🚀 Quick Reference Guide - Curion Development

This is your go-to reference for key decisions and guidelines while building Curion.

---

## ⚠️ NEVER FORGET - Critical Rules

### 1. Language Rules (MANDATORY)
```
❌ NEVER SAY:
- "You have [disease]"
- "This is definitely..."
- "I diagnose you with..."

✅ ALWAYS SAY:
- "Based on your symptoms, one possible condition could be..."
- "This might indicate..."
- "Cannot confirm without proper examination"
```

### 2. Medicine Rules (MANDATORY)
```
✅ CAN SUGGEST:
- Paracetamol/Acetaminophen
- ORS (Oral Rehydration Solution)
- Basic antacid
- Steam inhalation
- Saline gargle

❌ NEVER SUGGEST:
- Antibiotics
- Steroids
- Prescription drugs
- Specific brand names
```

### 3. Emergency Detection (CRITICAL)
```
Red Flag Symptoms = IMMEDIATE STOP + EMERGENCY MESSAGE:
- Chest pain
- Difficulty breathing
- Fever >103°F (39.4°C)
- Blood in vomit/stool
- Loss of consciousness
- Sudden severe headache
- Confusion or altered mental state

Response Template:
"This could be serious. Please seek immediate emergency medical care or call emergency services."
```

### 4. Disclaimer (EVERY SESSION END)
```
"This assessment is informational and not a medical diagnosis. 
Please consult a qualified healthcare professional for accurate evaluation."
```

---

## 🎯 Core Features Priority

### Must Have (MVP):
1. ✨ Adaptive cross-questioning (3-4 dynamic questions)
2. 🚨 Emergency detection system
3. 📊 Probability-based reasoning
4. 🟢🟡🔴 Severity classification
5. 💊 OTC guidance only
6. ⚖️ Legal disclaimers
7. 💬 Chat interface

---

## 🧠 How Curion Thinks

### Conversation Flow:
```
1. Greeting
   └─> "How are you feeling today?"

2. Symptom Mention
   └─> Identify possible conditions internally
   └─> Ask 3-4 adaptive cross-questions

3. Probability Assessment (after 2-3 questions)
   └─> "Based on what you've described..."
   └─> Show most likely conditions
   └─> Ask 1-2 more clarifying questions

4. Final Assessment
   └─> Summary of symptoms
   └─> Ranked possible conditions (with %)
   └─> OTC guidance (if safe)
   └─> When to see doctor
   └─> Mandatory disclaimer
```

### Probability Calculation:
```python
# Simplified example
score = base_probability

for symptom in user_symptoms:
    if symptom in disease.symptoms:
        score += disease.symptom_weights[symptom]

if duration > 3_days:
    score += 0.2  # bacterial more likely

if user.is_high_risk:
    score *= 1.3

# Normalize across all conditions
probabilities = normalize(scores)
```

### Severity Scoring:
```python
GREEN (0-3):   Mild, home care safe
YELLOW (4-6):  Monitor, consider doctor
RED (7+):      Urgent medical care

Factors:
- Symptom intensity: +1 to +3 each
- Duration: ×1.5 if >3 days
- Risk groups: +2
- Red flags: Instant RED
```

---

## 💻 Tech Stack Quick Reference

### Frontend:
- **Framework:** React 18 + Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Routing:** React Router DOM v6
- **Icons:** Lucide React
- **Current:** Running locally

### Backend (To Add):
- **Recommended:** FastAPI (Python) or Express.js (Node)
- **AI:** OpenAI API or Open-source LLM
- **Database:** MongoDB or PostgreSQL
- **Auth:** JWT (optional for MVP)

### Deployment:
- **Frontend:** Vercel or Netlify (free tier)
- **Backend:** Railway or Render ($5-10/month)
- **Database:** MongoDB Atlas (free tier)

---

## 📁 Project Structure

```
curion/
├── docs/                          # 📚 All documentation
│   ├── AI_SYSTEM_PROMPT.md       # AI personality & rules
│   ├── FUNCTIONAL_BLUEPRINT.md    # Complete feature list
│   ├── PRD.md                     # Product requirements
│   ├── TRD.md                     # Technical requirements
│   ├── DISEASE_DATABASE_TEMPLATE.md
│   ├── IMPLEMENTATION_ROADMAP.md
│   └── QUICK_REFERENCE.md         # This file
│
├── src/
│   ├── components/
│   │   ├── chat/                  # Chat UI components
│   │   │   ├── ChatInput.tsx
│   │   │   ├── ChatMessage.tsx
│   │   │   ├── Disclaimer.tsx
│   │   │   └── TypingIndicator.tsx
│   │   └── layout/
│   │       └── Sidebar.tsx
│   │
│   ├── pages/
│   │   ├── Dashboard.tsx          # Main chat interface
│   │   ├── Index.tsx              # Landing page
│   │   └── Profile.tsx            # User profile (risk factors)
│   │
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
│
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## 🗄️ Database Schema (Planned)

### diseases collection:
```typescript
interface Disease {
  _id: string;
  name: string;
  category: string;
  symptoms: string[];
  symptom_weights: Record<string, number>;
  typical_duration: string;
  severity_base: number;
  probability_base: number;
  otc_guidance: string[];
  home_remedies: string[];
  when_to_see_doctor: string[];
  red_flags: string[];
  risk_groups_high_alert: string[];
}
```

### sessions collection:
```typescript
interface Session {
  _id: string;
  user_id?: string;
  timestamp: Date;
  symptoms_reported: string[];
  questions_asked: number;
  severity_level: 'green' | 'yellow' | 'red';
  conditions_suggested: {
    name: string;
    probability: number;
  }[];
  otc_suggested: string[];
  doctor_recommended: boolean;
  confidence_score: number;
}
```

---

## 🔌 API Endpoints (To Build)

```
POST   /api/chat/start              # Start new session
POST   /api/chat/message            # Send message, get response
GET    /api/chat/history            # Get session history
POST   /api/chat/feedback           # Submit feedback
GET    /api/diseases                # Get disease database
POST   /api/user/profile            # Save risk profile (optional)
GET    /api/emergency-check         # Check for red flags
```

---

## 🎨 UI/UX Guidelines

### Colors:
```css
/* Severity Colors */
--green: #10b981   /* Mild, safe */
--yellow: #f59e0b  /* Monitor */
--red: #ef4444     /* Emergency */

/* Theme */
--primary: #3b82f6    /* Blue */
--background: #f9fafb /* Light gray */
--text: #111827       /* Near black */
```

### Tone:
- Calm and reassuring
- Professional but friendly
- Simple language, no jargon
- Empathetic and supportive

### Message Format:
```
✅ Good:
"Based on your symptoms (fever for 2 days, mild cough, 
no breathing difficulty), this could possibly be a viral 
infection. Let me ask one more thing..."

❌ Bad:
"You have a viral infection. Take paracetamol."
```

---

## 🧪 Testing Scenarios

### Test Cases to Always Check:

1. **Emergency Detection:**
   - User mentions chest pain → Immediate emergency response
   - User mentions breathing difficulty → Emergency
   - User mentions "worst headache ever" → Emergency

2. **Adaptive Questioning:**
   - Fever mentioned → Ask duration, temperature, other symptoms
   - Questions change based on responses
   - Different flow for different symptoms

3. **Probability Ranking:**
   - Same symptoms → Same ranking
   - Additional symptoms → Updated ranking
   - High risk user → Adjusted severity

4. **No Prescription:**
   - User asks "What antibiotic should I take?"
   - Response: "I cannot recommend prescription medications..."

5. **Disclaimer:**
   - Every session ends with disclaimer
   - Visible and clear

---

## 📝 Environment Variables

```bash
# .env file
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_key

# Future additions:
OPENAI_API_KEY=your_key           # If using OpenAI
DATABASE_URL=your_mongodb_url     # Database
JWT_SECRET=your_secret            # Auth (optional)
```

---

## 🚨 Common Pitfalls to Avoid

1. **❌ Making diagnosis claims**
   - Use probability language always

2. **❌ Suggesting prescription drugs**
   - Only OTC medications allowed

3. **❌ Ignoring emergency symptoms**
   - Red flags = immediate alert

4. **❌ Fixed question patterns**
   - Questions must adapt to responses

5. **❌ No disclaimer**
   - Mandatory at end of every session

6. **❌ Storing sensitive data unencrypted**
   - Encrypt all health data

7. **❌ No rate limiting**
   - Prevents API abuse

8. **❌ Not testing edge cases**
   - Test emergency scenarios thoroughly

---

## 📚 Knowledge Sources (Legal & Free)

Use ONLY these for medical knowledge:
- ✅ World Health Organization (WHO)
- ✅ Centers for Disease Control (CDC)
- ✅ National Health Service (NHS) UK
- ✅ MedlinePlus (NIH)
- ✅ Mayo Clinic public resources
- ✅ PubMed open-access articles

Avoid:
- ❌ Copyrighted medical textbooks
- ❌ Proprietary clinical databases
- ❌ Patient records (HIPAA violation)

---

## 🎯 Next Steps (Immediate)

1. **Set up backend API**
   - Choose: FastAPI or Express.js
   - Create `/api/chat/message` endpoint
   - Set up MongoDB connection

2. **Integrate LLM**
   - Get API key (OpenAI or alternative)
   - Implement system prompt
   - Test basic conversation

3. **Build symptom database**
   - Create MongoDB collection
   - Import 10 common diseases first
   - Test probability calculation

4. **Implement emergency detection**
   - Create red flag checker function
   - Test thoroughly
   - Add to message processing pipeline

---

## 💡 Pro Tips

1. **Start Small:** Implement 5-10 diseases first, then expand
2. **Test Often:** Test emergency detection after every code change
3. **Real Users:** Get feedback from friends/family early
4. **Document Everything:** Keep notes on probability weight tuning
5. **Version Control:** Commit to GitHub frequently
6. **Privacy First:** Design with privacy in mind from day one

---

## 📞 Quick Commands

```bash
# Development
npm run dev              # Start dev server
npm run build           # Build for production
npm run preview         # Preview production build

# Git
git add .
git commit -m "message"
git push origin main

# Future: Backend
python main.py          # Start FastAPI backend
npm start               # Start Express.js backend
```

---

## 🎓 Learning Resources

- **React:** reactjs.org/docs
- **TypeScript:** typescriptlang.org/docs
- **Tailwind CSS:** tailwindcss.com/docs
- **FastAPI:** fastapi.tiangolo.com
- **MongoDB:** mongodb.com/docs
- **LLM APIs:** platform.openai.com/docs

---

**Last Updated:** March 5, 2026  
**GitHub Repo:** https://github.com/prakharsingh070/curion.git  
**Keep This Handy!** 📌
