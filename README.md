# 🐾 PawSanctuary - Pet Adoption & Animal Rescue Platform

A comprehensive full-stack web application for pet adoption, animal rescue services, veterinary clinic appointments, and volunteer management.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Live Demo](#live-demo)
- [Technology Stack](#technology-stack)
- [Features](#features)
- [Project Structure](#project-structure)
- [Database Schema](#database-schema)
- [Authentication & Authorization](#authentication--authorization)
- [API & Backend](#api--backend)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)

---

## 🌟 Overview

PawSanctuary is a modern, responsive web application designed to connect pets in need with loving homes. The platform provides a seamless experience for:

- **Adopters**: Browse available pets, save favorites, and submit adoption applications
- **Volunteers**: Register to help with animal care and rescue operations
- **Pet Owners**: Book veterinary clinic appointments
- **Administrators**: Manage all submissions with a real-time dashboard
- **Community**: Report animal emergencies and subscribe to newsletters

---

## 🛠️ Technology Stack

### Frontend

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 18.3.1 | UI Component Library |
| **TypeScript** | Latest | Type-safe JavaScript |
| **Vite** | Latest | Build Tool & Dev Server |
| **Tailwind CSS** | Latest | Utility-first CSS Framework |
| **shadcn/ui** | Latest | Accessible UI Components |
| **React Router DOM** | 6.30.1 | Client-side Routing |
| **TanStack React Query** | 5.83.0 | Server State Management |
| **Lucide React** | 0.462.0 | Icon Library |
| **Framer Motion** | - | Animations (via Tailwind) |
| **React Hook Form** | 7.61.1 | Form Management |
| **Zod** | 3.25.76 | Schema Validation |
| **date-fns** | 3.6.0 | Date Utilities |
| **Recharts** | 2.15.4 | Data Visualization |
| **Sonner** | 1.7.4 | Toast Notifications |
| **next-themes** | 0.3.0 | Theme Management |

### Backend (Lovable Cloud)

| Technology | Purpose |
|------------|---------|
| **PostgreSQL** | Relational Database |
| **Row Level Security (RLS)** | Data Access Control |
| **Supabase Auth** | User Authentication |
| **Supabase Realtime** | Live Data Subscriptions |
| **Edge Functions** | Serverless Backend Logic |

---

## ✨ Features

### 🏠 Core Features

#### Pet Adoption System
- Browse available pets with images and details
- Filter pets by type (dogs, cats, etc.)
- Save favorite pets (requires authentication)
- Submit adoption applications
- Track application status

#### 🚑 Animal Rescue
- Emergency rescue request form
- Multiple emergency types supported
- Real-time status tracking
- Admin management of rescue operations

#### 🏥 Veterinary Clinic
- Browse partner clinics in Pune
- View clinic details (hours, services, ratings)
- Book appointments online
- Appointment status tracking

#### 🤝 Volunteer Program
- Volunteer registration form
- Availability scheduling
- Application status tracking
- Admin approval workflow

#### 📰 Newsletter
- Email subscription system
- Admin management of subscribers
- Subscription status control

### 👤 User Features

- **Authentication**: Email/password signup and login
- **Profile Management**: User profiles with contact information
- **Favorites**: Save and manage favorite pets
- **Dashboard**: View personal submissions and their status

### 🛡️ Admin Features

- **Real-time Dashboard**: Live updates for all submissions
- **Role-based Access**: Admin-only protected routes
- **Status Management**: Update status of all requests
- **Statistics Overview**: View counts of all submissions
- **Tabs Interface**: Organized view of different submission types

---

## 📁 Project Structure

```
├── public/
│   ├── favicon.ico
│   ├── placeholder.svg
│   └── robots.txt
│
├── src/
│   ├── assets/
│   │   ├── blogs/                 # Blog post images
│   │   ├── pets/                  # Pet listing images
│   │   └── hero-pets.jpg          # Hero section image
│   │
│   ├── components/
│   │   ├── ui/                    # shadcn/ui components
│   │   │   ├── accordion.tsx
│   │   │   ├── alert-dialog.tsx
│   │   │   ├── avatar.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── dropdown-menu.tsx
│   │   │   ├── form.tsx
│   │   │   ├── input.tsx
│   │   │   ├── select.tsx
│   │   │   ├── tabs.tsx
│   │   │   ├── toast.tsx
│   │   │   └── ... (40+ components)
│   │   │
│   │   ├── CallToAction.tsx       # CTA section component
│   │   ├── FeaturedPets.tsx       # Pet showcase component
│   │   ├── Footer.tsx             # Site footer
│   │   ├── Hero.tsx               # Hero section
│   │   ├── HowItWorks.tsx         # Process explanation
│   │   ├── Navbar.tsx             # Navigation bar
│   │   ├── NavLink.tsx            # Navigation link helper
│   │   ├── Services.tsx           # Services showcase
│   │   ├── StatsCounter.tsx       # Statistics display
│   │   ├── ThemeProvider.tsx      # Theme context provider
│   │   └── ThemeToggle.tsx        # Dark/light mode toggle
│   │
│   ├── hooks/
│   │   ├── use-mobile.tsx         # Mobile detection hook
│   │   ├── use-toast.ts           # Toast notification hook
│   │   ├── useAdmin.tsx           # Admin role check hook
│   │   ├── useAuth.tsx            # Authentication context & hook
│   │   └── useFavorites.tsx       # Favorites management hook
│   │
│   ├── integrations/
│   │   └── supabase/
│   │       ├── client.ts          # Supabase client instance
│   │       └── types.ts           # Auto-generated TypeScript types
│   │
│   ├── lib/
│   │   └── utils.ts               # Utility functions (cn, etc.)
│   │
│   ├── pages/
│   │   ├── About.tsx              # About us page
│   │   ├── Admin.tsx              # Admin dashboard
│   │   ├── Adoption.tsx           # Pet adoption listings
│   │   ├── Auth.tsx               # Login/Signup page
│   │   ├── BlogDetail.tsx         # Individual blog post
│   │   ├── Blogs.tsx              # Blog listing page
│   │   ├── Clinic.tsx             # Veterinary clinics page
│   │   ├── Favorites.tsx          # User favorites page
│   │   ├── Index.tsx              # Homepage
│   │   ├── NotFound.tsx           # 404 page
│   │   └── Rescue.tsx             # Rescue request page
│   │
│   ├── App.css                    # Global styles
│   ├── App.tsx                    # Main app component with routes
│   ├── index.css                  # Tailwind & CSS variables
│   ├── main.tsx                   # App entry point
│   └── vite-env.d.ts              # Vite type declarations
│
├── supabase/
│   ├── config.toml                # Supabase configuration
│   └── migrations/                # Database migrations
│
├── .env                           # Environment variables
├── eslint.config.js               # ESLint configuration
├── index.html                     # HTML entry point
├── package.json                   # Dependencies & scripts
├── tailwind.config.ts             # Tailwind configuration
├── tsconfig.json                  # TypeScript configuration
└── vite.config.ts                 # Vite configuration
```

---

## 🗄️ Database Schema

### Tables Overview

| Table | Description | RLS |
|-------|-------------|-----|
| `profiles` | User profile information | ✅ User-owned |
| `adoption_requests` | Pet adoption applications | ✅ User + Admin |
| `clinic_appointments` | Vet clinic bookings | ✅ User + Admin |
| `favorites` | User's saved pets | ✅ User-owned |
| `newsletter_subscriptions` | Email subscribers | ✅ Admin-only view |
| `rescue_requests` | Emergency rescue reports | ✅ User + Admin |
| `volunteer_requests` | Volunteer applications | ✅ User + Admin |
| `user_roles` | Role assignments (admin, moderator) | ✅ Admin-only |

### Detailed Schema

#### `profiles`
```sql
- id: UUID (Primary Key)
- user_id: UUID (References auth.users)
- full_name: TEXT
- phone: TEXT
- avatar_url: TEXT
- created_at: TIMESTAMPTZ
- updated_at: TIMESTAMPTZ
```

#### `adoption_requests`
```sql
- id: UUID (Primary Key)
- user_id: UUID
- pet_id: TEXT
- pet_name: TEXT
- pet_image: TEXT
- applicant_name: TEXT
- applicant_email: TEXT
- applicant_phone: TEXT
- message: TEXT
- status: TEXT ('pending', 'approved', 'rejected')
- created_at: TIMESTAMPTZ
- updated_at: TIMESTAMPTZ
```

#### `clinic_appointments`
```sql
- id: UUID (Primary Key)
- user_id: UUID
- clinic_name: TEXT
- patient_name: TEXT
- email: TEXT
- phone: TEXT
- appointment_date: DATE
- appointment_time: TIME
- reason: TEXT
- status: TEXT ('pending', 'confirmed', 'cancelled')
- created_at: TIMESTAMPTZ
- updated_at: TIMESTAMPTZ
```

#### `favorites`
```sql
- id: UUID (Primary Key)
- user_id: UUID
- pet_id: TEXT
- pet_name: TEXT
- pet_type: TEXT
- pet_image: TEXT
- created_at: TIMESTAMPTZ
```

#### `rescue_requests`
```sql
- id: UUID (Primary Key)
- user_id: UUID
- reporter_name: TEXT
- reporter_email: TEXT
- reporter_phone: TEXT
- location: TEXT
- emergency_type: TEXT
- description: TEXT
- status: TEXT ('pending', 'in_progress', 'resolved')
- created_at: TIMESTAMPTZ
- updated_at: TIMESTAMPTZ
```

#### `volunteer_requests`
```sql
- id: UUID (Primary Key)
- user_id: UUID
- name: TEXT
- email: TEXT
- phone: TEXT
- message: TEXT
- availability: TEXT
- status: TEXT ('pending', 'approved', 'rejected')
- created_at: TIMESTAMPTZ
- updated_at: TIMESTAMPTZ
```

#### `user_roles`
```sql
- id: UUID (Primary Key)
- user_id: UUID
- role: ENUM ('admin', 'moderator', 'user')
- created_at: TIMESTAMPTZ
```

---

## 🔐 Authentication & Authorization

### Authentication Flow
1. Users can sign up with email and password
2. Auto-confirm is enabled for seamless onboarding
3. Session persists across browser refreshes
4. JWT tokens managed by Supabase Auth

### Authorization Levels

| Role | Capabilities |
|------|-------------|
| **Anonymous** | View public pages, submit rescue requests, book appointments |
| **Authenticated User** | All anonymous + favorites, adoption requests, volunteer applications |
| **Admin** | All user + access admin dashboard, update all request statuses |

### Role Check Implementation
```typescript
// Using the has_role database function
const { data } = await supabase.rpc('has_role', {
  _user_id: user.id,
  _role: 'admin'
});
```

---

## 🔌 API & Backend

### Real-time Subscriptions
The admin dashboard uses Supabase Realtime for live updates:

```typescript
const channel = supabase
  .channel('admin-adoptions')
  .on('postgres_changes', 
    { event: '*', schema: 'public', table: 'adoption_requests' },
    (payload) => {
      // Handle INSERT, UPDATE, DELETE events
    }
  )
  .subscribe();
```

### Database Functions
- `has_role(user_id, role)`: Check if user has specific role

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or bun package manager

### Installation

```bash
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to project directory
cd <YOUR_PROJECT_NAME>

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

---

## 🔧 Environment Variables

The following environment variables are automatically configured:

```env
VITE_SUPABASE_URL=<your-supabase-url>
VITE_SUPABASE_PUBLISHABLE_KEY=<your-anon-key>
VITE_SUPABASE_PROJECT_ID=<your-project-id>
```

> **Note**: These are managed automatically by Lovable Cloud. Do not modify `.env` directly.

---

## 🌐 Deployment

### Lovable Deployment
1. Click the **Publish** button in the Lovable editor
2. Your app will be deployed to a `.lovable.app` subdomain

### Custom Domain
1. Navigate to Project → Settings → Domains
2. Click "Connect Domain"
3. Follow DNS configuration instructions

---

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

---

## 🎨 Theming

The app supports light and dark modes:
- Theme toggle in navigation
- CSS variables for consistent theming
- Persisted preference in localStorage

### Color Palette (HSL)
```css
--primary: 280 85% 65%        /* Purple accent */
--secondary: 240 5% 96%       /* Light gray */
--background: 0 0% 100%       /* White */
--foreground: 240 10% 10%     /* Dark text */
--accent: 280 85% 95%         /* Light purple */
```

---

## 📄 License

This project is private and proprietary.

---

## 🤝 Support

For questions or issues, use the Lovable chat interface or visit the [Lovable Documentation](https://docs.lovable.dev/).

---

Built with ❤️ using [Lovable](https://lovable.dev)
