# CardCraft Phase 1 - Setup Guide

## Overview

Phase 1 establishes the foundational structure for CardCraft with:
- **Frontend**: Next.js with TypeScript and Tailwind CSS
- **Backend**: Node.js/Express API
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth with OAuth providers

## Prerequisites

### Required
- Node.js 18+ (LTS recommended)
- npm or yarn
- Git

### Accounts & Credentials
- Supabase account (https://supabase.com)
- Google OAuth credentials (Google Cloud Console)
- Facebook OAuth credentials (Facebook Developers)
- Paystack account (https://paystack.com)

## Installation Steps

### 1. Clone Repository

```bash
git clone https://github.com/juliancamillusmensah/wizhkard.git
cd wizhkard
```

### 2. Environment Setup

Copy the example environment file:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your credentials from:
- Supabase Dashboard
- Google Cloud Console
- Facebook Developers
- Paystack Dashboard

### 3. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at: `http://localhost:3000`

### 4. Backend Setup

In a new terminal:

```bash
cd backend
npm install
npm run dev
```

Backend API runs at: `http://localhost:3001`

Test health endpoint:
```bash
curl http://localhost:3001/health
```

### 5. Supabase Database Setup

1. Create a new project in Supabase
2. Go to SQL Editor
3. Run migrations from `database/migrations/001_initial_schema.sql`
4. Copy your Supabase credentials to `.env.local`

## Project Structure

```
wizhkard/
├── frontend/                 # Next.js Frontend
│   ├── src/
│   │   ├── app/             # Next.js App Router
│   │   ├── components/      # React Components
│   │   ├── lib/             # Utilities & Helpers
│   │   └── styles/          # Global Styles
│   ├── public/              # Static Assets
│   └── package.json
├── backend/                  # Node.js/Express Backend
│   ├── src/
│   │   ├── routes/          # API Routes
│   │   ├── controllers/     # Route Controllers
│   │   ├── middleware/      # Custom Middleware
│   │   ├── config/          # Configuration Files
│   │   └── index.ts         # Entry Point
│   └── package.json
├── database/                 # Database Migrations
│   └── migrations/
├── docs/                     # Documentation
└── .env.example              # Environment Variables Template
```

## Tech Stack Details

### Frontend Dependencies
- **Next.js**: React framework
- **TypeScript**: Type safety
- **Tailwind CSS**: Styling
- **Framer Motion**: Animations
- **Supabase JS**: Client SDK
- **Zustand**: State management
- **Axios**: HTTP client
- **React Hot Toast**: Notifications
- **QRCode.React**: QR code generation

### Backend Dependencies
- **Express**: Web framework
- **TypeScript**: Type safety
- **Supabase JS**: Admin operations
- **JWT**: Token authentication
- **bcryptjs**: Password hashing
- **CORS**: Cross-origin requests
- **Sharp**: Image processing

## Available Scripts

### Frontend
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript check
```

### Backend
```bash
npm run dev          # Start development server with hot reload
npm run build        # Build TypeScript
npm start            # Start production server
npm run type-check   # Run TypeScript check
npm run lint         # Run ESLint
```

## API Endpoints (Phase 1)

### Health Check
- `GET /health` - API status

### Authentication (Ready for Implementation)
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `POST /api/auth/google` - Google OAuth
- `POST /api/auth/facebook` - Facebook OAuth

### Cards (Ready for Implementation)
- `GET /api/cards` - Get user's cards
- `GET /api/cards/:cardId` - Get single card
- `POST /api/cards` - Create new card
- `PUT /api/cards/:cardId` - Update card
- `DELETE /api/cards/:cardId` - Delete card
- `POST /api/cards/:cardId/duplicate` - Duplicate card
- `GET /api/cards/:cardId/download` - Download card

### Users (Ready for Implementation)
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile

## Database Schema

### Tables Created
- **users**: User accounts and profiles
- **cards**: Digital greeting cards
- **templates**: Card templates
- **ai_messages**: Generated AI messages
- **subscriptions**: User subscription plans

## Next Steps

1. Implement authentication routes
2. Create frontend pages (Home, Dashboard, Editor)
3. Build card editor component
4. Implement Supabase Auth integration
5. Set up OAuth providers

## Troubleshooting

### Environment Variables Not Loading
- Ensure `.env.local` is in root directory
- Restart dev servers after updating env vars
- Frontend vars must start with `NEXT_PUBLIC_`

### Database Connection Issues
- Verify Supabase URL and API keys
- Check database migration ran successfully
- Ensure network access to Supabase

### Port Already in Use
```bash
# Change frontend port
npm run dev -- -p 3002

# Change backend port
PORT=3002 npm run dev
```

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Express Documentation](https://expressjs.com)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion)

## Support

For issues or questions, create an issue in the GitHub repository.
