# Database

Database schemas, migrations, and configuration for Healytics AI (Curion).

---

## 📋 Status

**Phase:** Not yet implemented  
**Target:** Phase 3 of development roadmap

---

## 🎯 Purpose

This folder will contain:
- Database schemas
- Migration scripts
- Seed data
- Database configuration
- Backup/restore scripts

---

## 🗄️ Database Options

### Option A: MongoDB (Recommended for MVP)
**Pros:**
- Flexible schema (good for rapid development)
- JSON-like documents
- Easy to scale
- Good for medical data (nested structures)

**Cons:**
- Less strict data validation
- Joins can be complex

**Cost:** Free tier available (MongoDB Atlas)

### Option B: PostgreSQL
**Pros:**
- Strict schema validation
- Excellent for relational data
- ACID compliance
- Strong data integrity

**Cons:**
- Less flexible for schema changes
- Requires more planning upfront

**Cost:** Free tier available (Supabase, Neon)

---

## 📁 Planned Structure

```
database/
├── schemas/
│   ├── mongodb/
│   │   ├── diseases.json         # Disease collection schema
│   │   ├── sessions.json         # Chat sessions schema
│   │   ├── users.json            # User profiles schema
│   │   └── red_flags.json        # Emergency symptoms schema
│   │
│   └── postgresql/
│       ├── diseases.sql          # Disease table schema
│       ├── sessions.sql          # Sessions table schema
│       └── users.sql             # Users table schema
│
├── migrations/
│   ├── 001_initial_schema.sql/.js
│   ├── 002_add_indexes.sql/.js
│   └── 003_add_risk_profile.sql/.js
│
├── seeds/
│   ├── diseases_seed.json        # Initial disease data
│   └── red_flags_seed.json       # Emergency symptoms data
│
├── scripts/
│   ├── setup_db.py/.js           # Database setup script
│   ├── backup.py/.js             # Backup script
│   └── restore.py/.js            # Restore script
│
└── README.md                     # This file
```

---

## 📊 MongoDB Schema Design

### diseases Collection

```javascript
{
  _id: ObjectId("..."),
  name: "Viral Fever",
  category: "Respiratory Infection",
  symptoms: ["fever", "cough", "runny_nose"],
  symptom_weights: {
    fever: 0.7,
    cough: 0.6,
    runny_nose: 0.8
  },
  typical_duration: "3-7 days",
  severity_base: 2,
  probability_base: 0.4,
  otc_guidance: [
    "Rest adequately",
    "Drink warm fluids"
  ],
  home_remedies: [
    "Warm water with honey"
  ],
  when_to_see_doctor: [
    "Fever persists >3 days"
  ],
  red_flags: [],
  risk_groups_high_alert: ["elderly", "infants"],
  differential_diagnosis: ["seasonal_flu"],
  created_at: ISODate("2026-03-05"),
  updated_at: ISODate("2026-03-05")
}
```

### sessions Collection

```javascript
{
  _id: ObjectId("..."),
  user_id: "optional_uuid",          // null for anonymous
  session_id: "uuid",
  started_at: ISODate("2026-03-05T10:00:00Z"),
  ended_at: ISODate("2026-03-05T10:15:00Z"),
  
  messages: [
    {
      role: "user",
      content: "I have fever and cough",
      timestamp: ISODate("...")
    },
    {
      role: "assistant",
      content: "How long have you had the fever?",
      timestamp: ISODate("...")
    }
  ],
  
  symptoms_reported: ["fever", "cough"],
  duration: 2,                        // days
  questions_asked: 4,
  
  conditions_suggested: [
    {
      name: "Viral Fever",
      probability: 0.65,
      confidence: 0.68
    },
    {
      name: "Seasonal Flu",
      probability: 0.25,
      confidence: 0.68
    }
  ],
  
  severity_level: "yellow",           // green, yellow, red
  severity_score: 4,
  
  emergency_detected: false,
  
  otc_suggested: ["paracetamol", "rest", "fluids"],
  doctor_recommended: true,
  
  user_feedback: {
    helpful: true,
    rating: 4,
    comment: "Very helpful guidance"
  },
  
  metadata: {
    ip_address: "hashed",
    user_agent: "...",
    version: "0.1.0"
  }
}
```

### users Collection (Optional)

```javascript
{
  _id: ObjectId("..."),
  user_uuid: "uuid",
  email: "encrypted",                 // if provided
  
  risk_profile: {
    age: 28,
    gender: "female",
    chronic_diseases: ["diabetes"],
    allergies: ["penicillin"],
    medications: ["metformin"],
    pregnancy: false,
    smoker: false
  },
  
  preferences: {
    anonymous_mode: false,
    save_history: true,
    language: "en"
  },
  
  statistics: {
    total_sessions: 5,
    last_session: ISODate("2026-03-05"),
    avg_severity: "yellow"
  },
  
  created_at: ISODate("2026-03-01"),
  updated_at: ISODate("2026-03-05")
}
```

### red_flags Collection

```javascript
{
  _id: ObjectId("..."),
  symptom_id: "chest_pain",
  symptom_name: "Chest Pain",
  keywords: ["chest pain", "heart pain", "chest pressure"],
  synonyms: ["cardiac pain", "angina"],
  severity: "EMERGENCY",
  emergency_message: "Chest pain can indicate a heart attack. Seek immediate emergency care.",
  call_emergency: true,
  priority: 1
}
```

---

## 🗂️ PostgreSQL Schema Design

### diseases Table

```sql
CREATE TABLE diseases (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL UNIQUE,
  category VARCHAR(100) NOT NULL,
  symptoms TEXT[] NOT NULL,
  symptom_weights JSONB NOT NULL,
  typical_duration VARCHAR(50),
  severity_base INTEGER NOT NULL,
  probability_base DECIMAL(3,2) NOT NULL,
  otc_guidance TEXT[] NOT NULL,
  home_remedies TEXT[],
  when_to_see_doctor TEXT[] NOT NULL,
  red_flags TEXT[] DEFAULT '{}',
  risk_groups_high_alert TEXT[] DEFAULT '{}',
  differential_diagnosis TEXT[] DEFAULT '{}',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_diseases_category ON diseases(category);
CREATE INDEX idx_diseases_symptoms ON diseases USING GIN(symptoms);
```

### sessions Table

```sql
CREATE TABLE sessions (
  id SERIAL PRIMARY KEY,
  session_uuid UUID NOT NULL UNIQUE DEFAULT gen_random_uuid(),
  user_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
  started_at TIMESTAMP NOT NULL DEFAULT NOW(),
  ended_at TIMESTAMP,
  symptoms_reported TEXT[] NOT NULL,
  duration_days INTEGER,
  questions_asked INTEGER NOT NULL DEFAULT 0,
  severity_level VARCHAR(10) NOT NULL CHECK (severity_level IN ('green', 'yellow', 'red')),
  severity_score INTEGER NOT NULL,
  emergency_detected BOOLEAN NOT NULL DEFAULT false,
  doctor_recommended BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_sessions_user ON sessions(user_id);
CREATE INDEX idx_sessions_severity ON sessions(severity_level);
CREATE INDEX idx_sessions_date ON sessions(started_at);
```

---

## 🔧 Setup Scripts

### MongoDB Setup

```javascript
// scripts/setup_mongodb.js
const { MongoClient } = require('mongodb');

async function setupDatabase() {
  const client = new MongoClient(process.env.MONGODB_URL);
  
  try {
    await client.connect();
    const db = client.db('curion');
    
    // Create collections
    await db.createCollection('diseases');
    await db.createCollection('sessions');
    await db.createCollection('users');
    await db.createCollection('red_flags');
    
    // Create indexes
    await db.collection('diseases').createIndex({ name: 1 }, { unique: true });
    await db.collection('diseases').createIndex({ category: 1 });
    await db.collection('sessions').createIndex({ started_at: -1 });
    await db.collection('red_flags').createIndex({ symptom_id: 1 }, { unique: true });
    
    console.log('✅ Database setup complete');
  } finally {
    await client.close();
  }
}

setupDatabase();
```

---

## 🔒 Security

- **Encryption:** All sensitive data encrypted at rest
- **Access Control:** Role-based access
- **Anonymization:** Option for anonymous sessions
- **Backup:** Regular automated backups
- **Audit Logs:** Track all data access

---

## 📊 Indexes

Critical indexes for performance:
- Disease name (unique)
- Categories
- Symptoms (for searching)
- Session timestamps
- User ID references

---

## 🔄 Migration Strategy

1. Version control all schema changes
2. Test migrations on staging first
3. Backup before migrations
4. Rollback plan for each migration
5. Document all schema changes

---

## 🚀 Getting Started (Coming Soon)

### MongoDB

```bash
# Install MongoDB locally or use Atlas
# https://www.mongodb.com/atlas

# Set connection string
export MONGODB_URL="mongodb://localhost:27017/curion"
# or
export MONGODB_URL="mongodb+srv://user:pass@cluster.mongodb.net/curion"

# Run setup script
node scripts/setup_mongodb.js

# Import seed data
mongoimport --db curion --collection diseases --file seeds/diseases_seed.json
```

### PostgreSQL

```bash
# Install PostgreSQL locally or use Supabase
# https://supabase.com

# Set connection string
export DATABASE_URL="postgresql://user:pass@localhost:5432/curion"

# Run migrations
psql -d curion -f schemas/postgresql/diseases.sql
psql -d curion -f schemas/postgresql/sessions.sql

# Import seed data
psql -d curion -c "\copy diseases FROM 'seeds/diseases_seed.csv' WITH CSV HEADER"
```

---

## 📈 Scaling Considerations

- **Indexing:** Optimize for common queries
- **Caching:** Redis for frequent reads
- **Sharding:** If data grows large (unlikely for MVP)
- **Replication:** For high availability
- **Archiving:** Archive old sessions

---

## 🔄 Next Steps

1. Choose database (MongoDB vs PostgreSQL)
2. Design final schemas
3. Create setup scripts
4. Import disease data
5. Test queries
6. Set up backups
7. Configure security

---

**Implementation Timeline:** Week 3 of roadmap  
**Last Updated:** March 5, 2026
