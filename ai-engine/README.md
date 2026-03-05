# AI Engine

LLM integration and intelligent symptom reasoning engine for Healytics AI (Curion).

---

## 📋 Status

**Phase:** Not yet implemented  
**Target:** Phase 4 of development roadmap

---

## 🎯 Purpose

The AI engine is the brain of Curion, responsible for:
- LLM integration (OpenAI/Claude/Open-source)
- Adaptive cross-questioning logic
- Symptom-to-disease probability calculation
- Emergency red-flag detection
- Severity classification
- Explainable reasoning generation

---

## 🧠 Core Components

### 1. LLM Integration Layer
Handles communication with language models:
- OpenAI GPT-4/GPT-3.5
- Anthropic Claude
- Open-source models (Llama, Mistral)

### 2. Symptom Reasoning Engine
Custom logic for:
- Probability scoring
- Disease ranking
- Adaptive questioning
- Confidence calculation

### 3. Safety Systems
- Emergency detection
- Severity classification
- Red-flag triggers
- Risk profile adjustments

---

## 📁 Planned Structure

```
ai-engine/
├── src/
│   ├── llm/
│   │   ├── openai_client.py/.ts      # OpenAI integration
│   │   ├── anthropic_client.py/.ts   # Claude integration
│   │   └── local_model.py/.ts        # Open-source LLM
│   │
│   ├── reasoning/
│   │   ├── probability.py/.ts        # Probability calculator
│   │   ├── questioning.py/.ts        # Cross-question generator
│   │   ├── severity.py/.ts           # Severity classifier
│   │   └── emergency.py/.ts          # Red-flag detector
│   │
│   ├── prompts/
│   │   ├── system_prompt.txt         # Main Curion prompt
│   │   ├── emergency_prompt.txt      # Emergency detection
│   │   └── reasoning_prompt.txt      # Explainable AI
│   │
│   └── utils/
│       ├── symptom_parser.py/.ts     # Parse symptoms from text
│       └── context_manager.py/.ts    # Manage conversation context
│
├── tests/                            # Unit tests
├── config/                           # Configuration files
└── README.md                         # This file
```

---

## 🔧 Planned Algorithms

### Probability Calculation
```python
def calculate_disease_probability(symptoms, duration, risk_profile):
    """
    Calculate probability for each disease based on symptoms.
    
    Returns: Dict[str, float] - Disease name to probability mapping
    """
    probabilities = {}
    
    for disease in disease_database:
        score = disease.base_probability
        
        # Symptom matching with weights
        for symptom in symptoms:
            if symptom in disease.symptoms:
                score += disease.symptom_weights[symptom]
        
        # Duration adjustment
        if duration > 3:
            if disease.type == "bacterial":
                score += 0.2
        
        # Risk profile adjustment
        if risk_profile.is_high_risk():
            score *= 1.3
        
        probabilities[disease.name] = min(score, 1.0)
    
    # Normalize probabilities
    total = sum(probabilities.values())
    return {k: v/total for k, v in probabilities.items()}
```

### Severity Classification
```python
def classify_severity(symptoms, duration, risk_profile):
    """
    Classify severity: GREEN (0-3), YELLOW (4-6), RED (7+)
    """
    score = 0
    
    # Base symptom severity
    severity_map = {
        "high_fever": 3,
        "chest_pain": 5,
        "breathing_difficulty": 5,
        "fever": 1,
        "cough": 1
    }
    
    for symptom in symptoms:
        score += severity_map.get(symptom, 0)
    
    # Duration multiplier
    if duration > 4:
        score *= 1.5
    
    # Risk groups
    if risk_profile.is_high_risk():
        score += 2
    
    # Classification
    if score >= 7:
        return "RED"
    elif score >= 4:
        return "YELLOW"
    else:
        return "GREEN"
```

### Emergency Detection
```python
def check_emergency(symptoms, user_message):
    """
    Check for red-flag emergency symptoms.
    
    Returns: Tuple[bool, str] - (is_emergency, emergency_message)
    """
    red_flags = [
        "chest_pain",
        "breathing_difficulty",
        "loss_of_consciousness",
        "severe_headache_sudden",
        "blood_in_vomit",
        "confusion"
    ]
    
    for flag in red_flags:
        if detect_symptom(user_message, flag):
            return True, get_emergency_message(flag)
    
    return False, ""
```

---

## 🤖 LLM Options

### Option A: OpenAI (Recommended for MVP)
**Pros:**
- High quality responses
- Easy to integrate
- Good documentation
- Reliable

**Cons:**
- Cost per request
- API dependency
- Rate limits

**Cost:** ~$0.002 per 1K tokens (GPT-3.5)

### Option B: Anthropic Claude
**Pros:**
- Excellent reasoning
- Safety-focused
- Long context window

**Cons:**
- Similar cost to OpenAI
- API dependency

**Cost:** ~$0.008 per 1K tokens (Claude Instant)

### Option C: Open-Source (Llama, Mistral)
**Pros:**
- No per-request cost
- Full control
- Privacy

**Cons:**
- Requires GPU/infrastructure
- More setup complexity
- Quality may vary

**Cost:** Infrastructure only (~$50-200/month)

---

## 📝 System Prompt Design

The core system prompt defines Curion's personality and behavior.

Key sections:
1. **Identity & Purpose**
2. **Critical Rules** (never diagnose, never prescribe)
3. **Conversation Flow**
4. **Emergency Detection**
5. **Language Guidelines**
6. **Ethical Disclaimers**

Located in: `/docs/AI_SYSTEM_PROMPT.md`

---

## 🔍 Symptom Parsing

Use NLP to extract symptoms from user messages:
```python
def parse_symptoms(user_message):
    """
    Extract symptoms from natural language.
    
    Input: "I have fever and cough for 2 days"
    Output: {
        "symptoms": ["fever", "cough"],
        "duration": 2,
        "unit": "days"
    }
    """
    # Use regex, NER, or LLM extraction
    pass
```

---

## 🎯 Adaptive Questioning

Generate smart follow-up questions based on context:
```python
def generate_next_question(conversation_history, current_probabilities):
    """
    Generate the most informative next question.
    
    Strategy:
    1. Identify top 2-3 likely conditions
    2. Find distinguishing symptoms
    3. Ask about symptom that best differentiates them
    """
    top_conditions = get_top_conditions(current_probabilities, n=3)
    distinguishing_symptoms = find_distinguishing_symptoms(top_conditions)
    
    # Ask about most informative symptom
    for symptom in distinguishing_symptoms:
        if not already_asked(symptom, conversation_history):
            return generate_question_for_symptom(symptom)
```

---

## 🧪 Testing Strategy

### Unit Tests
- Test probability calculations
- Test severity classification
- Test emergency detection
- Test question generation

### Integration Tests
- Test LLM integration
- Test full reasoning pipeline
- Test edge cases

### Safety Tests
- Emergency scenarios (must detect 100%)
- No misdiagnosis language
- No prescription suggestions

---

## 📊 Performance Metrics

Track:
- Response time (<2 seconds target)
- LLM token usage (cost optimization)
- Emergency detection accuracy (100% target)
- Confidence calibration (accuracy vs. confidence)
- User satisfaction ratings

---

## 🚀 Getting Started (Coming Soon)

```bash
# Install dependencies
pip install openai anthropic langchain

# Set up environment
export OPENAI_API_KEY="your_key"

# Run tests
pytest tests/
```

---

## 🔄 Next Steps

1. Choose LLM provider
2. Implement basic LLM integration
3. Build probability calculator
4. Implement emergency detection
5. Create question generator
6. Integrate with backend API
7. Test thoroughly

---

**Implementation Timeline:** Week 5-6 of roadmap  
**Last Updated:** March 5, 2026
