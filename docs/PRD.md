# 🏥 PRODUCT REQUIREMENTS DOCUMENT (PRD)

**Project Name:** Curion  
**Tagline:** Intelligent Symptom Reasoning for Safer Health Decisions

---

## 1️⃣ Product Overview

Curion is an AI-powered health companion that:
- Conducts intelligent cross-questioning
- Uses probabilistic symptom reasoning
- Identifies mild vs serious conditions
- Suggests OTC remedies only
- Detects emergency red flags
- Encourages medical consultation responsibly

### It does NOT:
- Provide confirmed diagnosis
- Replace doctors
- Prescribe restricted medications

---

## 2️⃣ Problem Statement

**Many people:**
- Ignore early symptoms
- Google randomly and panic
- Self-diagnose incorrectly
- Delay doctor visits

**Curion solves this by:**
- Structured questioning
- Guided reasoning
- Safe health education
- Risk awareness

---

## 3️⃣ Target Users

- Students
- Working professionals
- Rural users with limited access
- People seeking first-level guidance

---

## 4️⃣ Core Features

### 🧠 A. Intelligent Cross-Questioning Engine
- 3–4 adaptive follow-up questions
- Dynamic question generation
- Based on prior responses

### 📊 B. Probability-Based Disease Ranking

**Output example:**
> Based on your symptoms:
> 1. Viral Fever – High probability
> 2. Seasonal Flu – Moderate probability
> 3. Bacterial Infection – Low probability

Never 100% confirmed.

### 🚨 C. Emergency Detection System

**Red-flag symptoms:**
- Severe chest pain
- Breathing difficulty
- High fever >103°F
- Confusion
- Blood vomiting
- Unconsciousness

**Immediate alert mode:**
> "Please seek urgent medical care."

### 🌿 D. Mild Case Guidance

If safe:
- Home remedies
- Rest guidance
- Hydration advice
- OTC medicines (Paracetamol, ORS etc.)

### 📈 E. Risk Profiling

Adjust severity if user mentions:
- Pregnancy
- Diabetes
- Heart disease
- Elderly age

### 🗂 F. Session Memory
- Track symptoms within session
- Compare new symptoms
- Detect inconsistencies

### 🔒 G. Privacy First
- No unnecessary personal data
- No selling data
- Local storage or encrypted DB

---

## 5️⃣ Non-Functional Requirements

- Fast response (<2 seconds)
- Secure backend
- Explainable reasoning
- Scalable architecture
- Legally compliant disclaimer

---

## 6️⃣ Future Enhancements

- Symptom history tracking
- Health trend dashboard
- Voice input
- Regional language support
- AI learning feedback loop
