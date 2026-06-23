# CardCraft Architecture

## System Overview

```
┌─────────────────────────────────────────────────────────┐
│                     Client (Browser)                    │
│            Next.js Frontend (Port 3000)                 │
└──────────────────────┬──────────────────────────────────┘
                       │ HTTP/WebSocket
                       ↓
┌─────────────────────────────────────────────────────────┐
│                   API Gateway (CORS)                    │
│         Express Backend Server (Port 3001)              │
├─────────────────────────────────────────────────────────┤
│  Authentication │ Cards │ Users │ Templates │ Analytics │
└──────────────────────┬──────────────────────────────────┘
                       │
        ┌──────────────┼──────────────┐
        ↓              ↓              ↓
   ┌─────────┐   ┌──────────┐   ┌──────────┐
   │ Supabase│   │ Auth     │   │ Storage  │
   │Database │   │(OAuth)   │   │(Images)  │
   └─────────┘   └──────────┘   └──────────┘
```

## Component Architecture

### Frontend (Next.js)

```
frontend/src/
├── app/
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Homepage
│   ├── dashboard/
│   │   └── page.tsx         # User dashboard
│   ├── editor/
│   │   └── page.tsx         # Card editor
│   └── auth/
│       ├── login/
│       ├── register/
│       └── callback/
├── components/
│   ├── auth/
│   │   ├── LoginForm.tsx
│   │   ├── RegisterForm.tsx
│   │   └── OAuthButtons.tsx
│   ├── editor/
│   │   ├── Canvas.tsx
│   │   ├── Toolbar.tsx
│   │   ├── Sidebar.tsx
│   │   └── ElementPanel.tsx
│   ├── dashboard/
│   │   ├── CardGrid.tsx
│   │   ├── CardItem.tsx
│   │   └── CreateCardButton.tsx
│   └── common/
│       ├── Header.tsx
│       ├── Footer.tsx
│       └── Navigation.tsx
├── lib/
│   ├── supabase.ts          # Supabase client
│   ├── api.ts               # API client
│   ├── auth.ts              # Auth utilities
│   └── store.ts             # Zustand store
└── styles/
    └── globals.css          # Global styles
```

### Backend (Node.js/Express)

```
backend/src/
├── index.ts                 # Entry point
├── config/
│   ├── supabase.ts          # Supabase setup
│   └── constants.ts         # Constants
├── routes/
│   ├── auth.ts              # Auth endpoints
│   ├── cards.ts             # Card endpoints
│   └── users.ts             # User endpoints
├── controllers/
│   ├── authController.ts    # Auth logic
│   ├── cardController.ts    # Card logic
│   └── userController.ts    # User logic
├── middleware/
│   ├── auth.ts              # Auth middleware
│   ├── errorHandler.ts      # Error handling
│   └── validation.ts        # Input validation
├── models/
│   ├── User.ts              # User model
│   ├── Card.ts              # Card model
│   └── Template.ts          # Template model
└── utils/
    ├── jwt.ts               # JWT utilities
    ├── storage.ts           # File storage
    └── validators.ts        # Data validators
```

## Data Flow

### User Registration Flow

```
1. User submits form
   ↓
2. Frontend validates input
   ↓
3. POST /api/auth/register
   ↓
4. Backend validates input
   ↓
5. Backend calls Supabase Auth
   ↓
6. User created in auth.users table
   ↓
7. User profile created in users table
   ↓
8. JWT token returned
   ↓
9. Frontend stores token & redirects
```

### Card Creation Flow

```
1. User clicks "Create Card"
   ↓
2. Navigate to editor page
   ↓
3. Load templates from backend
   ↓
4. User selects template/customizes
   ↓
5. User saves card (POST /api/cards)
   ↓
6. Backend validates data
   ↓
7. Save to database & generate share token
   ↓
8. Return card ID & share URL
   ↓
9. Frontend shows success & redirect
```

## Database Schema

### Users Table
```sql
id (UUID, PK)
email (VARCHAR, UNIQUE)
full_name (VARCHAR)
avatar_url (TEXT)
subscription_tier (VARCHAR) - free|premium
created_at (TIMESTAMP)
updated_at (TIMESTAMP)
```

### Cards Table
```sql
id (UUID, PK)
user_id (UUID, FK → users)
title (VARCHAR)
description (TEXT)
occasion (VARCHAR)
template_id (UUID, FK → templates)
content (JSONB) - card design
cover_image_url (TEXT)
is_public (BOOLEAN)
share_token (VARCHAR, UNIQUE)
download_count (INT)
view_count (INT)
created_at (TIMESTAMP)
updated_at (TIMESTAMP)
deleted_at (TIMESTAMP)
```

### Templates Table
```sql
id (UUID, PK)
name (VARCHAR)
description (TEXT)
occasion (VARCHAR)
category (VARCHAR)
thumbnail_url (TEXT)
content (JSONB) - template structure
is_premium (BOOLEAN)
created_at (TIMESTAMP)
updated_at (TIMESTAMP)
```

## Authentication Flow

### OAuth (Google/Facebook)

```
1. User clicks "Login with Google"
   ↓
2. Frontend redirects to Google Auth
   ↓
3. User authenticates with Google
   ↓
4. Google redirects to callback URL
   ↓
5. Frontend receives auth code
   ↓
6. POST /api/auth/google with code
   ↓
7. Backend exchanges code for token
   ↓
8. Create or update user in Supabase
   ↓
9. Return JWT token
   ↓
10. Frontend stores token & redirects to dashboard
```

## Security Considerations

### Authentication
- JWT tokens stored in secure HTTP-only cookies
- Tokens expire after set duration
- Refresh token rotation

### Authorization
- Verify user owns resource before modification
- Admin-only endpoints protected
- CORS configured for allowed origins

### Data Protection
- Passwords hashed with bcrypt
- Sensitive data encrypted at rest (Supabase)
- HTTPS enforced in production
- Input validation on all endpoints

### File Upload
- File type validation
- Size limits enforced
- Secure storage with signed URLs

## Scalability Considerations

### Database
- Connection pooling
- Query optimization with indexes
- Caching layer (Redis - future)

### File Storage
- CDN distribution via Supabase Storage
- Image optimization & compression
- Lazy loading

### API
- Rate limiting per user
- Pagination for large datasets
- Compression (gzip)
- Load balancing (production)

### Frontend
- Code splitting
- Image optimization
- Service worker caching
- SSR for performance
