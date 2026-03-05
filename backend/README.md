# Backend

API server for Healytics AI (Curion).

---

## 📋 Status

**Phase:** Not yet implemented  
**Target:** Phase 3 of development roadmap

---

## 🎯 Purpose

The backend will handle:
- API endpoints for chat communication
- LLM integration and orchestration
- Database operations
- Authentication & authorization
- Session management
- Rate limiting & security

---

## 🛠️ Planned Tech Stack

### Option A: Python (FastAPI)
- **FastAPI** - High-performance async API framework
- **Pydantic** - Data validation
- **SQLAlchemy** - ORM (if using SQL database)
- **Motor** - Async MongoDB driver
- **Python-jose** - JWT authentication
- **Passlib** - Password hashing

### Option B: Node.js (Express)
- **Express.js** - Web framework
- **TypeScript** - Type safety
- **Mongoose** - MongoDB ODM
- **Prisma** - Modern ORM (for SQL)
- **jsonwebtoken** - JWT auth
- **bcrypt** - Password hashing

---

## 📁 Planned Structure

```
backend/
├── src/
│   ├── api/
│   │   ├── routes/
│   │   │   ├── chat.py/.ts      # Chat endpoints
│   │   │   ├── auth.py/.ts      # Authentication
│   │   │   └── health.py/.ts    # Health checks
│   │   └── middleware/
│   │       ├── auth.py/.ts      # Auth middleware
│   │       └── rate_limit.py/.ts # Rate limiting
│   │
│   ├── core/
│   │   ├── config.py/.ts        # Configuration
│   │   └── security.py/.ts      # Security utilities
│   │
│   ├── models/
│   │   ├── user.py/.ts          # User model
│   │   └── session.py/.ts       # Session model
│   │
│   ├── services/
│   │   ├── ai_service.py/.ts    # AI integration
│   │   └── db_service.py/.ts    # Database service
│   │
│   └── main.py/.ts              # Application entry point
│
├── tests/                       # Unit & integration tests
├── requirements.txt             # Python dependencies
│   or
├── package.json                 # Node.js dependencies
└── README.md                    # This file
```

---

## 🔌 Planned API Endpoints

### Chat Endpoints
```
POST   /api/chat/start          # Start new conversation
POST   /api/chat/message        # Send message, get response
GET    /api/chat/history        # Get session history
POST   /api/chat/feedback       # Submit feedback
```

### User Endpoints
```
POST   /api/user/profile        # Save/update risk profile
GET    /api/user/profile        # Get user profile
GET    /api/user/sessions       # Get user sessions
DELETE /api/user/sessions/:id   # Delete session
```

### Health & Admin
```
GET    /api/health              # Health check
GET    /api/emergency-check     # Check for red flags
GET    /api/diseases            # Get disease database
```

---

## 🗄️ Database Integration

Will connect to the database defined in `/database` folder.

Planned collections/tables:
- **users** - User profiles & risk factors
- **sessions** - Chat sessions & history
- **diseases** - Disease knowledge base
- **red_flags** - Emergency symptoms database

---

## 🔒 Security Features

To implement:
- ✅ HTTPS only
- ✅ JWT authentication
- ✅ Rate limiting (prevent abuse)
- ✅ Input sanitization
- ✅ CORS configuration
- ✅ Request validation
- ✅ Secure headers
- ✅ API key authentication (for LLM)

---

## 🚀 Getting Started (Coming Soon)

### Python (FastAPI)
```bash
# Create virtual environment
python -m venv venv
source venv/bin/activate  # or `venv\Scripts\activate` on Windows

# Install dependencies
pip install -r requirements.txt

# Run development server
uvicorn src.main:app --reload
```

### Node.js (Express)
```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

---

## 🧪 Testing (Planned)

```bash
# Python
pytest tests/

# Node.js
npm test
```

---

## 📝 Environment Variables

Will require:
```env
# Database
DATABASE_URL=mongodb://localhost:27017/curion
# or
DATABASE_URL=postgresql://user:pass@localhost:5432/curion

# LLM API
OPENAI_API_KEY=your_key_here
# or
ANTHROPIC_API_KEY=your_key_here

# Security
JWT_SECRET=your_secret_key
API_SECRET=your_api_secret

# Server
PORT=8000
HOST=0.0.0.0
DEBUG=false
```

---

## 📚 Development Guidelines

1. **API Design**: RESTful principles
2. **Error Handling**: Consistent error responses
3. **Validation**: Validate all inputs
4. **Documentation**: OpenAPI/Swagger docs
5. **Testing**: Unit tests for all endpoints
6. **Logging**: Structured logging for debugging

---

## 🔄 Next Steps

1. Choose tech stack (FastAPI vs Express)
2. Set up basic server
3. Create database connection
4. Implement chat endpoint
5. Integrate with AI engine
6. Add authentication
7. Deploy to cloud

---

**Implementation Timeline:** Week 3-4 of roadmap  
**Last Updated:** March 5, 2026
