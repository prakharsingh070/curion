# Datasets

Disease knowledge base and symptom mapping data for Healytics AI (Curion).

---

## 📋 Status

**Phase:** Not yet implemented  
**Target:** Phase 3-4 of development roadmap

---

## 🎯 Purpose

This folder will contain:
- Disease database (20-30 common conditions)
- Symptom-to-disease mappings
- Symptom weight matrices
- Red-flag symptom definitions
- OTC medicine guidelines
- Home remedy recommendations

---

## 📁 Planned Structure

```
datasets/
├── diseases/
│   ├── viral_infections/
│   │   ├── common_cold.json
│   │   ├── flu.json
│   │   └── viral_fever.json
│   │
│   ├── gastrointestinal/
│   │   ├── gastritis.json
│   │   ├── food_poisoning.json
│   │   └── indigestion.json
│   │
│   ├── respiratory/
│   │   ├── allergic_rhinitis.json
│   │   └── sinusitis.json
│   │
│   └── neurological/
│       ├── migraine.json
│       └── tension_headache.json
│
├── symptoms/
│   ├── symptom_definitions.json    # All symptom definitions
│   └── symptom_synonyms.json       # Alternative terms
│
├── red_flags/
│   └── emergency_symptoms.json     # Critical symptoms
│
├── medicines/
│   └── otc_guidelines.json         # Safe OTC recommendations
│
└── scripts/
    ├── import_to_db.py/.js         # Import data to database
    └── validate_data.py/.js        # Data validation
```

---

## 📋 Disease Entry Format

Based on template in `/docs/DISEASE_DATABASE_TEMPLATE.md`

```json
{
  "_id": "disease_001",
  "name": "Viral Fever (Common Cold)",
  "category": "Respiratory Infection",
  "symptoms": [
    "fever",
    "cough",
    "runny_nose",
    "body_pain",
    "headache",
    "fatigue"
  ],
  "symptom_weights": {
    "fever": 0.7,
    "cough": 0.6,
    "runny_nose": 0.8,
    "body_pain": 0.5,
    "fatigue": 0.6
  },
  "typical_duration": "3-7 days",
  "severity_base": 2,
  "probability_base": 0.4,
  "questions_to_ask": [
    "How many days have you had the fever?",
    "What is your temperature?",
    "Do you have any difficulty breathing?",
    "Any chest pain?"
  ],
  "otc_guidance": [
    "Rest adequately",
    "Drink warm fluids frequently",
    "Paracetamol 500mg for fever if needed",
    "Steam inhalation 2-3 times daily"
  ],
  "home_remedies": [
    "Warm water with honey and lemon",
    "Gargle with warm salt water",
    "Vitamin C rich foods"
  ],
  "when_to_see_doctor": [
    "Fever persists >3 days",
    "Temperature >103°F (39.4°C)",
    "Difficulty breathing develops",
    "Chest pain occurs"
  ],
  "red_flags": [],
  "risk_groups_high_alert": [
    "elderly",
    "infants",
    "immunocompromised"
  ],
  "differential_diagnosis": [
    "seasonal_flu",
    "allergic_rhinitis"
  ]
}
```

---

## 🩺 Initial Disease List (30 Common Conditions)

### Respiratory (8)
1. Common Cold
2. Seasonal Flu
3. Allergic Rhinitis
4. Sinusitis
5. Sore Throat
6. Bronchitis (mild)
7. Asthma (mild episode)
8. COVID-19 (mild)

### Gastrointestinal (7)
9. Gastritis
10. Food Poisoning
11. Indigestion
12. Acid Reflux (GERD)
13. Constipation
14. Diarrhea
15. Nausea/Vomiting

### Neurological (4)
16. Tension Headache
17. Migraine
18. Dizziness (benign)
19. Vertigo

### Musculoskeletal (3)
20. Muscle Strain
21. Back Pain (non-specific)
22. Joint Pain

### General Health (4)
23. Dehydration
24. Fatigue/Weakness
25. Fever (unspecified)
26. Insomnia

### Dermatological (2)
27. Skin Rash
28. Sunburn

### Other (2)
29. Urinary Tract Infection (mild)
30. Allergic Reaction (mild)

---

## 🚨 Red-Flag Symptoms

Emergency symptoms requiring immediate medical care:

```json
{
  "red_flags": [
    {
      "id": "chest_pain",
      "symptom": "Chest Pain",
      "keywords": ["chest pain", "heart pain", "chest pressure"],
      "severity": "EMERGENCY",
      "message": "Chest pain can indicate a heart attack or other serious condition. Please seek immediate emergency medical care.",
      "call_emergency": true
    },
    {
      "id": "breathing_difficulty",
      "symptom": "Difficulty Breathing",
      "keywords": ["can't breathe", "difficulty breathing", "shortness of breath", "gasping"],
      "severity": "EMERGENCY",
      "message": "Difficulty breathing is a medical emergency. Please seek immediate medical attention.",
      "call_emergency": true
    },
    {
      "id": "high_fever",
      "symptom": "Very High Fever",
      "keywords": ["fever over 103", "fever 104", "very high fever"],
      "severity": "URGENT",
      "message": "Very high fever (>103°F/39.4°C) requires medical evaluation.",
      "call_emergency": false
    }
  ]
}
```

---

## 💊 OTC Medicine Guidelines

Safe over-the-counter recommendations:

```json
{
  "otc_medicines": [
    {
      "name": "Paracetamol (Acetaminophen)",
      "uses": ["fever", "pain", "headache"],
      "dosage_adult": "500-1000mg every 4-6 hours",
      "max_daily": "4000mg",
      "warnings": [
        "Do not exceed recommended dose",
        "Avoid alcohol while taking",
        "Not for liver disease patients"
      ],
      "disclaimer": "Always read package instructions. Consult pharmacist if unsure."
    },
    {
      "name": "ORS (Oral Rehydration Solution)",
      "uses": ["dehydration", "diarrhea", "vomiting"],
      "dosage_adult": "As needed to maintain hydration",
      "warnings": [
        "Seek medical care if unable to keep fluids down",
        "Monitor for severe dehydration"
      ]
    },
    {
      "name": "Antacid",
      "uses": ["indigestion", "acid reflux", "heartburn"],
      "dosage_adult": "As per package instructions",
      "warnings": [
        "Do not use for >2 weeks without doctor advice",
        "See doctor if symptoms persist"
      ]
    }
  ]
}
```

---

## 📚 Data Sources (Legal & Free)

All data must come from:
- ✅ World Health Organization (WHO)
- ✅ Centers for Disease Control and Prevention (CDC)
- ✅ National Health Service (NHS) UK
- ✅ MedlinePlus (NIH)
- ✅ Mayo Clinic public resources
- ✅ PubMed open-access articles

**Avoid:**
- ❌ Copyrighted medical textbooks
- ❌ Proprietary clinical databases
- ❌ Patient records

---

## ✅ Data Validation

Before importing to database:
1. Schema validation (correct JSON structure)
2. Required fields present
3. Symptom weight sum reasonable
4. No prescription medications listed
5. Clear disclaimers included
6. Medical accuracy review

---

## 🔄 Import Process

```bash
# Validate all data files
python scripts/validate_data.py

# Import to MongoDB
python scripts/import_to_db.py --database curion --collection diseases

# Or import to PostgreSQL
python scripts/import_to_db.py --database curion --format sql
```

---

## 📊 Quality Metrics

- **Completeness:** All 30 common conditions covered
- **Accuracy:** Medical information verified against sources
- **Safety:** No dangerous recommendations
- **Clarity:** Simple, understandable language
- **Legal:** Proper disclaimers included

---

## 🔄 Next Steps

1. Create disease JSON files (start with 10)
2. Define symptom vocabulary
3. Create red-flag database
4. Add OTC medicine guidelines
5. Validate all data
6. Import to database
7. Test with AI engine

---

**Implementation Timeline:** Week 4-5 of roadmap  
**Last Updated:** March 5, 2026
