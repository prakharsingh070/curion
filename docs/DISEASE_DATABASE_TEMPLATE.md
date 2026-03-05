# 🏥 Disease Database Template

This file contains the initial 20-30 common conditions that Curion should recognize and reason about.

---

## Database Schema

```json
{
  "_id": "unique_id",
  "name": "Disease Name",
  "category": "Category",
  "symptoms": ["symptom1", "symptom2"],
  "symptom_weights": {
    "symptom1": 0.8,
    "symptom2": 0.6
  },
  "typical_duration": "1-3 days",
  "severity_base": 2,
  "probability_base": 0.3,
  "questions_to_ask": [
    "How long have you had this symptom?",
    "Is the symptom getting worse or better?"
  ],
  "otc_guidance": [
    "Rest for 2-3 days",
    "Drink plenty of fluids (8-10 glasses/day)",
    "Paracetamol for fever (as per package instructions)"
  ],
  "home_remedies": [
    "Steam inhalation 2-3 times daily",
    "Warm water with honey"
  ],
  "when_to_see_doctor": [
    "Symptoms persist >3 days",
    "High fever >103°F",
    "Difficulty breathing"
  ],
  "red_flags": [],
  "risk_groups_high_alert": ["elderly", "pregnant", "immunocompromised"],
  "differential_diagnosis": ["similar_condition1", "similar_condition2"]
}
```

---

## 1. Viral Fever (Common Cold)

```json
{
  "name": "Viral Fever (Common Cold)",
  "category": "Respiratory Infection",
  "symptoms": ["fever", "cough", "runny_nose", "body_pain", "headache", "fatigue"],
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
    "Paracetamol 500mg (adults) for fever if needed",
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
  "risk_groups_high_alert": ["elderly", "infants", "immunocompromised"]
}
```

---

## 2. Seasonal Flu (Influenza)

```json
{
  "name": "Seasonal Flu",
  "category": "Respiratory Infection",
  "symptoms": ["high_fever", "severe_body_pain", "headache", "cough", "fatigue", "chills"],
  "symptom_weights": {
    "high_fever": 0.9,
    "severe_body_pain": 0.8,
    "cough": 0.7,
    "fatigue": 0.8,
    "chills": 0.7
  },
  "typical_duration": "5-7 days",
  "severity_base": 3,
  "probability_base": 0.35,
  "when_to_see_doctor": [
    "High fever >102°F for >3 days",
    "Severe weakness",
    "Breathing difficulty",
    "Chest pain"
  ],
  "risk_groups_high_alert": ["elderly", "pregnant", "chronic_respiratory_disease"]
}
```

---

## 3. Gastritis (Stomach Irritation)

```json
{
  "name": "Gastritis",
  "category": "Gastrointestinal",
  "symptoms": ["stomach_pain", "nausea", "bloating", "indigestion", "loss_of_appetite"],
  "symptom_weights": {
    "stomach_pain": 0.9,
    "nausea": 0.7,
    "bloating": 0.6,
    "indigestion": 0.7
  },
  "typical_duration": "1-3 days",
  "severity_base": 2,
  "otc_guidance": [
    "Avoid spicy and oily foods",
    "Eat light, bland foods (rice, banana, toast)",
    "Antacid as per package instructions",
    "Small frequent meals"
  ],
  "when_to_see_doctor": [
    "Severe pain persists >2 days",
    "Blood in vomit",
    "Black tarry stools",
    "Severe weakness"
  ],
  "red_flags": ["blood_in_vomit", "black_stool"]
}
```

---

## 4. Migraine

```json
{
  "name": "Migraine",
  "category": "Neurological",
  "symptoms": ["severe_headache", "nausea", "light_sensitivity", "sound_sensitivity", "visual_disturbances"],
  "symptom_weights": {
    "severe_headache": 0.9,
    "nausea": 0.6,
    "light_sensitivity": 0.8,
    "visual_disturbances": 0.7
  },
  "typical_duration": "4-72 hours",
  "severity_base": 3,
  "otc_guidance": [
    "Rest in dark, quiet room",
    "Paracetamol or ibuprofen (as per package)",
    "Cold compress on forehead",
    "Avoid trigger foods"
  ],
  "when_to_see_doctor": [
    "First time severe headache",
    "Sudden onset 'worst headache of life'",
    "Headache with fever and stiff neck",
    "Headache after head injury"
  ],
  "red_flags": ["sudden_severe_headache", "headache_with_fever_stiff_neck"]
}
```

---

## 5. Food Poisoning

```json
{
  "name": "Food Poisoning",
  "category": "Gastrointestinal",
  "symptoms": ["nausea", "vomiting", "diarrhea", "stomach_cramps", "fever"],
  "symptom_weights": {
    "vomiting": 0.8,
    "diarrhea": 0.9,
    "stomach_cramps": 0.7,
    "nausea": 0.8
  },
  "typical_duration": "1-3 days",
  "severity_base": 3,
  "otc_guidance": [
    "Stay hydrated - ORS (Oral Rehydration Solution)",
    "Avoid solid food initially",
    "Gradually reintroduce bland foods",
    "Avoid dairy temporarily"
  ],
  "when_to_see_doctor": [
    "Severe dehydration",
    "Blood in vomit or stool",
    "High fever >101.5°F",
    "Symptoms persist >3 days",
    "Unable to keep fluids down"
  ],
  "red_flags": ["severe_dehydration", "blood_in_stool", "persistent_vomiting"]
}
```

---

## 6. Allergic Rhinitis (Hay Fever)

```json
{
  "name": "Allergic Rhinitis",
  "category": "Allergic",
  "symptoms": ["sneezing", "runny_nose", "itchy_eyes", "nasal_congestion", "itchy_throat"],
  "symptom_weights": {
    "sneezing": 0.9,
    "runny_nose": 0.9,
    "itchy_eyes": 0.8,
    "nasal_congestion": 0.7
  },
  "typical_duration": "Seasonal or ongoing",
  "severity_base": 1,
  "otc_guidance": [
    "Antihistamine as per package instructions",
    "Avoid known allergens",
    "Saline nasal rinse",
    "Keep windows closed during high pollen days"
  ],
  "when_to_see_doctor": [
    "Symptoms affect daily life",
    "OTC medications not helping",
    "Wheezing or breathing difficulty"
  ],
  "red_flags": ["breathing_difficulty", "wheezing"]
}
```

---

## 7. Dehydration

```json
{
  "name": "Dehydration",
  "category": "General Health",
  "symptoms": ["dry_mouth", "dizziness", "dark_urine", "fatigue", "headache"],
  "symptom_weights": {
    "dry_mouth": 0.8,
    "dark_urine": 0.9,
    "dizziness": 0.7,
    "fatigue": 0.6
  },
  "severity_base": 2,
  "otc_guidance": [
    "Drink water immediately - small sips frequently",
    "ORS (Oral Rehydration Solution)",
    "Avoid caffeine and alcohol",
    "Rest in cool place"
  ],
  "when_to_see_doctor": [
    "Severe dizziness or confusion",
    "Unable to keep fluids down",
    "No urination for 8+ hours",
    "Rapid heartbeat"
  ],
  "red_flags": ["confusion", "no_urination", "rapid_heartbeat", "severe_dizziness"]
}
```

---

## 8. Tension Headache

```json
{
  "name": "Tension Headache",
  "category": "Neurological",
  "symptoms": ["dull_headache", "pressure_around_head", "neck_pain", "shoulder_tension"],
  "symptom_weights": {
    "dull_headache": 0.8,
    "pressure_around_head": 0.9,
    "neck_pain": 0.6
  },
  "typical_duration": "30 minutes to 7 days",
  "severity_base": 2,
  "otc_guidance": [
    "Paracetamol or ibuprofen",
    "Rest and relaxation",
    "Gentle neck stretches",
    "Warm compress on neck/shoulders"
  ]
}
```

---

## 9. Urinary Tract Infection (UTI) - Mild

```json
{
  "name": "Urinary Tract Infection (Mild)",
  "category": "Urogenital",
  "symptoms": ["burning_urination", "frequent_urination", "cloudy_urine", "lower_abdominal_discomfort"],
  "symptom_weights": {
    "burning_urination": 0.9,
    "frequent_urination": 0.8,
    "cloudy_urine": 0.7
  },
  "severity_base": 3,
  "otc_guidance": [
    "Drink plenty of water (2-3 liters/day)",
    "Cranberry juice may help",
    "Avoid caffeine and alcohol"
  ],
  "when_to_see_doctor": [
    "Symptoms persist >2 days",
    "Blood in urine",
    "Fever or back pain develops",
    "Severe pain"
  ],
  "red_flags": ["blood_in_urine", "fever_with_back_pain"],
  "note": "UTIs often require antibiotics - doctor consultation recommended"
}
```

---

## 10. Muscle Strain

```json
{
  "name": "Muscle Strain",
  "category": "Musculoskeletal",
  "symptoms": ["localized_pain", "muscle_stiffness", "swelling", "limited_movement"],
  "symptom_weights": {
    "localized_pain": 0.9,
    "muscle_stiffness": 0.8,
    "limited_movement": 0.7
  },
  "typical_duration": "3-7 days",
  "severity_base": 2,
  "otc_guidance": [
    "Rest the affected muscle",
    "Ice pack for first 48 hours (20 min)",
    "Gentle stretching after 48 hours",
    "Ibuprofen for pain/inflammation",
    "Avoid strenuous activity"
  ],
  "when_to_see_doctor": [
    "Severe swelling or bruising",
    "Inability to use the muscle",
    "No improvement after 1 week",
    "Sudden pop sound heard"
  ]
}
```

---

## Red Flag Conditions (Emergencies)

### These should trigger immediate medical care advice:

```json
{
  "red_flag_symptoms": [
    {
      "symptom": "chest_pain",
      "message": "Chest pain can indicate a heart attack or other serious condition. Please seek immediate emergency medical care.",
      "severity": "EMERGENCY"
    },
    {
      "symptom": "difficulty_breathing",
      "message": "Difficulty breathing is a medical emergency. Please seek immediate medical attention.",
      "severity": "EMERGENCY"
    },
    {
      "symptom": "sudden_severe_headache",
      "message": "Sudden severe headache (worst headache of your life) could indicate a stroke or aneurysm. Seek emergency care immediately.",
      "severity": "EMERGENCY"
    },
    {
      "symptom": "loss_of_consciousness",
      "message": "Loss of consciousness requires immediate medical evaluation. Call emergency services.",
      "severity": "EMERGENCY"
    },
    {
      "symptom": "blood_in_vomit",
      "message": "Blood in vomit requires urgent medical evaluation. Please seek immediate care.",
      "severity": "EMERGENCY"
    },
    {
      "symptom": "severe_abdominal_pain",
      "message": "Severe abdominal pain could indicate appendicitis or other serious conditions. Seek medical care urgently.",
      "severity": "URGENT"
    },
    {
      "symptom": "confusion_or_altered_consciousness",
      "message": "Confusion or altered mental state requires immediate medical evaluation.",
      "severity": "EMERGENCY"
    },
    {
      "symptom": "high_fever_over_103",
      "message": "Fever over 103°F (39.4°C) requires medical evaluation, especially if persistent.",
      "severity": "URGENT"
    }
  ]
}
```

---

## Additional Common Conditions to Add

11. Acid Reflux (GERD)
12. Sinusitis
13. Conjunctivitis (Pink Eye)
14. Contact Dermatitis
15. Constipation
16. Diarrhea (non-food poisoning)
17. Insomnia
18. Anxiety-related symptoms
19. Back Pain (non-specific)
20. Sore Throat
21. Ear Pain
22. Toothache
23. Sunburn
24. Minor Burns
25. Insect Bites/Stings
26. Vertigo/Dizziness (benign)
27. Nosebleed
28. Heat Exhaustion
29. Motion Sickness
30. Premenstrual Syndrome (PMS)

---

## Knowledge Sources

All information should be based on:
- World Health Organization (WHO) guidelines
- Centers for Disease Control and Prevention (CDC)
- National Health Service (NHS) UK
- Mayo Clinic public resources
- MedlinePlus (NIH)

**Note:** This is for educational and informational purposes only. Always consult licensed healthcare professionals for medical advice.
