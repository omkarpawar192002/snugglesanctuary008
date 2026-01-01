# 🐾 PawSanctuary - Pet Adoption & Animal Rescue Platform

A comprehensive full-stack web application for pet adoption, animal rescue services, veterinary clinic appointments, and volunteer management.

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Technology Stack](#️-technology-stack)
- [Features](#-features)
- [Project Structure](#-project-structure)
- [Prerequisites](#-prerequisites)
- [Local Development Setup](#-local-development-setup)
- [Environment Variables](#-environment-variables)
- [Database Schema](#️-database-schema)
- [Deployment Guides](#-deployment-guides)
  - [Lovable (Recommended)](#lovable-deployment-recommended)
  - [Vercel](#vercel-deployment)
  - [Netlify](#netlify-deployment)
  - [Render](#render-deployment)
  - [Railway](#railway-deployment)
  - [Docker](#docker-deployment)
  - [DigitalOcean](#digitalocean-deployment)
  - [AWS Amplify](#aws-amplify-deployment)
  - [Self-Hosted (VPS)](#self-hosted-vps-deployment)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)
- [License](#-license)

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

- **Pet Adoption System**: Browse pets, filter by type, save favorites, submit applications
- **🚑 Animal Rescue**: Emergency rescue request form with real-time status tracking
- **🏥 Veterinary Clinic**: Browse clinics, view details, book appointments online
- **🤝 Volunteer Program**: Registration, availability scheduling, application tracking
- **📰 Newsletter**: Email subscription system with admin management

### 👤 User Features

- **Authentication**: Email/password signup and login
- **Profile Management**: User profiles with contact information
- **Favorites**: Save and manage favorite pets
- **Dashboard**: View personal submissions and their status
- **🌓 Dark/Light Mode**: Theme toggle with persistent preference

### 🛡️ Admin Features

- **Real-time Dashboard**: Live updates for all submissions
- **Role-based Access**: Admin-only protected routes
- **Status Management**: Update status of all requests
- **Statistics Overview**: View counts of all submissions

---

## 📁 Project Structure

```
pawsanctuary/
├── public/                     # Static assets
│   ├── favicon.ico
│   ├── robots.txt
│   └── _redirects             # Netlify SPA redirects
├── src/
│   ├── assets/                # Images and media
│   │   ├── blogs/            # Blog post images
│   │   └── pets/             # Pet images
│   ├── components/            # React components
│   │   ├── ui/               # shadcn/ui components (40+)
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   └── ...
│   ├── hooks/                 # Custom React hooks
│   │   ├── useAuth.tsx       # Authentication hook
│   │   ├── useAdmin.tsx      # Admin role check
│   │   ├── useFavorites.tsx  # Favorites management
│   │   └── ...
│   ├── integrations/          # External integrations
│   │   └── supabase/
│   │       ├── client.ts     # Supabase client
│   │       └── types.ts      # Generated types
│   ├── lib/
│   │   └── utils.ts          # Utility functions
│   ├── pages/                 # Page components
│   │   ├── Index.tsx         # Homepage
│   │   ├── Adoption.tsx      # Pet listings
│   │   ├── Admin.tsx         # Admin dashboard
│   │   └── ...
│   ├── App.tsx               # Root component
│   ├── index.css             # Global styles & tokens
│   └── main.tsx              # Entry point
├── supabase/
│   ├── config.toml           # Supabase configuration
│   └── migrations/           # Database migrations
├── .env.example              # Environment template
├── docker-compose.yml        # Docker Compose config
├── Dockerfile               # Production Dockerfile
├── nginx.conf               # Nginx configuration
├── netlify.toml             # Netlify configuration
├── vercel.json              # Vercel configuration
├── render.yaml              # Render Blueprint
├── tailwind.config.ts       # Tailwind configuration
├── vite.config.ts           # Vite configuration
└── package.json             # Dependencies
```

---

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

| Software | Minimum Version | Download |
|----------|----------------|----------|
| Node.js | 18.0.0 | [nodejs.org](https://nodejs.org/) |
| npm | 9.0.0 | Included with Node.js |
| Git | 2.x | [git-scm.com](https://git-scm.com/) |

**Optional (for Docker deployment):**

| Software | Version | Download |
|----------|---------|----------|
| Docker | 24.x | [docker.com](https://www.docker.com/) |
| Docker Compose | 2.x | Included with Docker Desktop |

---

## 💻 Local Development Setup

### Step 1: Clone the Repository

```bash
# Clone via HTTPS
git clone https://github.com/yourusername/pawsanctuary.git

# OR Clone via SSH
git clone git@github.com:yourusername/pawsanctuary.git

# Navigate to project directory
cd pawsanctuary
```

### Step 2: Install Dependencies

```bash
# Using npm
npm install

# OR using bun (faster)
bun install

# OR using yarn
yarn install
```

### Step 3: Set Up Environment Variables

```bash
# Copy the example environment file
cp .env.example .env

# Edit the .env file with your values
nano .env  # or use any text editor
```

Required environment variables:
```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=your-anon-key-here
VITE_SUPABASE_PROJECT_ID=your-project-id
```

### Step 4: Start the Development Server

```bash
# Start the dev server
npm run dev

# The app will be available at:
# ➜  Local:   http://localhost:8080/
# ➜  Network: http://192.168.x.x:8080/
```

### Step 5: Build for Production (Optional)

```bash
# Create production build
npm run build

# Preview the production build locally
npm run preview
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on port 8080 |
| `npm run build` | Create production build in `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality |

---

## 🔐 Environment Variables

### Required Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_SUPABASE_URL` | Your Supabase project URL | `https://abc123.supabase.co` |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | Supabase anon/public key | `eyJhbGciOiJIUzI1...` |
| `VITE_SUPABASE_PROJECT_ID` | Supabase project ID | `abc123` |

> ⚠️ **Security Note**: These are PUBLIC keys safe for frontend use. Never expose your `SUPABASE_SERVICE_ROLE_KEY` in the frontend!

### Where to Get These Values

1. Go to your Supabase Dashboard
2. Select your project
3. Navigate to **Settings** → **API**
4. Copy the values:
   - **URL** → `VITE_SUPABASE_URL`
   - **anon public** key → `VITE_SUPABASE_PUBLISHABLE_KEY`
   - **Reference ID** → `VITE_SUPABASE_PROJECT_ID`

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

### Authentication & Authorization

| Role | Capabilities |
|------|-------------|
| **Anonymous** | View public pages, submit rescue requests, book appointments |
| **Authenticated User** | All anonymous + favorites, adoption requests, volunteer applications |
| **Admin** | All user + access admin dashboard, update all request statuses |

---

## 🚀 Deployment Guides

### Lovable Deployment (Recommended)

The easiest way to deploy - built-in with zero configuration!

**Steps:**
1. Click the **Publish** button in the Lovable editor (top right)
2. Your app will be deployed to a `.lovable.app` subdomain
3. For custom domains: Project → Settings → Domains

---

### Vercel Deployment

#### Option 1: One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/pawsanctuary)

#### Option 2: CLI Deployment

**Step 1: Install Vercel CLI**
```bash
npm install -g vercel
```

**Step 2: Login to Vercel**
```bash
vercel login
```

**Step 3: Deploy**
```bash
# From project root directory
vercel

# Follow the prompts:
# ? Set up and deploy? Yes
# ? Which scope? Select your account
# ? Link to existing project? No
# ? What's your project's name? pawsanctuary
# ? In which directory is your code located? ./
# ? Want to modify settings? No
```

**Step 4: Set Environment Variables**
```bash
vercel env add VITE_SUPABASE_URL
vercel env add VITE_SUPABASE_PUBLISHABLE_KEY
vercel env add VITE_SUPABASE_PROJECT_ID
```

**Step 5: Deploy to Production**
```bash
vercel --prod
```

#### Via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click **"Add New Project"**
3. Import your GitHub repository
4. Configure:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Add environment variables in **Settings → Environment Variables**
6. Click **Deploy**

---

### Netlify Deployment

#### Option 1: One-Click Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/yourusername/pawsanctuary)

#### Option 2: CLI Deployment

**Step 1: Install Netlify CLI**
```bash
npm install -g netlify-cli
```

**Step 2: Login to Netlify**
```bash
netlify login
```

**Step 3: Initialize and Deploy**
```bash
# Initialize new site
netlify init

# Follow prompts:
# ? What would you like to do? Create & configure a new site
# ? Team: Select your team
# ? Site name: pawsanctuary

# Build the project
npm run build

# Deploy to Netlify
netlify deploy --prod --dir=dist
```

**Step 4: Set Environment Variables**

Via CLI:
```bash
netlify env:set VITE_SUPABASE_URL "your-value"
netlify env:set VITE_SUPABASE_PUBLISHABLE_KEY "your-value"
netlify env:set VITE_SUPABASE_PROJECT_ID "your-value"
```

Or via Dashboard: Site Settings → Build & Deploy → Environment

---

### Render Deployment

#### Option 1: Blueprint Deploy (Recommended)

1. Fork this repository
2. Go to [Render Dashboard](https://dashboard.render.com)
3. Click **"New"** → **"Blueprint"**
4. Connect your GitHub repository
5. Render will detect `render.yaml` and configure automatically
6. Add environment variables when prompted
7. Click **"Apply"**

#### Option 2: Manual Deployment

**Step 1: Create Static Site**

1. Go to [Render Dashboard](https://dashboard.render.com)
2. Click **"New +"** → **"Static Site"**
3. Connect your repository

**Step 2: Configure Build Settings**

| Setting | Value |
|---------|-------|
| Name | `pawsanctuary` |
| Branch | `main` |
| Build Command | `npm ci && npm run build` |
| Publish Directory | `dist` |

**Step 3: Add Environment Variables**

In **Environment** tab, add your Supabase variables.

**Step 4: Add Rewrite Rule**

In **Redirects/Rewrites** tab:
| Source | Destination | Action |
|--------|-------------|--------|
| `/*` | `/index.html` | Rewrite |

---

### Railway Deployment

**Step 1: Install Railway CLI**
```bash
npm install -g @railway/cli
```

**Step 2: Login and Initialize**
```bash
railway login
railway init
```

**Step 3: Add Environment Variables**
```bash
railway variables set VITE_SUPABASE_URL="your-value"
railway variables set VITE_SUPABASE_PUBLISHABLE_KEY="your-value"
railway variables set VITE_SUPABASE_PROJECT_ID="your-value"
```

**Step 4: Configure Start Command**

In Railway Dashboard → Settings → Deploy:
- **Build Command**: `npm run build`
- **Start Command**: `npx serve dist -s`

**Step 5: Deploy**
```bash
railway up
```

---

### Docker Deployment

#### Build and Run Locally

**Step 1: Build the Docker Image**
```bash
docker build \
  --build-arg VITE_SUPABASE_URL="your-value" \
  --build-arg VITE_SUPABASE_PUBLISHABLE_KEY="your-value" \
  --build-arg VITE_SUPABASE_PROJECT_ID="your-value" \
  -t pawsanctuary:latest .
```

**Step 2: Run the Container**
```bash
docker run -d \
  --name pawsanctuary \
  -p 80:80 \
  pawsanctuary:latest
```

**Step 3: Verify**
```bash
# Check container is running
docker ps

# View logs
docker logs pawsanctuary

# Access the app at http://localhost
```

#### Using Docker Compose

**Step 1: Set Environment Variables**
```bash
export VITE_SUPABASE_URL="your-value"
export VITE_SUPABASE_PUBLISHABLE_KEY="your-value"
export VITE_SUPABASE_PROJECT_ID="your-value"
```

**Step 2: Build and Run**
```bash
# Production mode
docker-compose up -d --build

# View logs
docker-compose logs -f

# Stop
docker-compose down
```

**Step 3: Development Mode (Optional)**
```bash
docker-compose --profile dev up pawsanctuary-dev
```

#### Docker Commands Reference

| Command | Description |
|---------|-------------|
| `docker-compose up -d` | Start in background |
| `docker-compose down` | Stop and remove containers |
| `docker-compose logs -f` | View live logs |
| `docker-compose build --no-cache` | Rebuild without cache |
| `docker-compose restart` | Restart containers |

---

### DigitalOcean Deployment

#### App Platform

1. Go to [DigitalOcean App Platform](https://cloud.digitalocean.com/apps)
2. Click **"Create App"**
3. Connect your GitHub repository
4. Configure:
   - **Type**: Static Site
   - **Build Command**: `npm ci && npm run build`
   - **Output Directory**: `dist`
5. Add environment variables
6. Add catch-all route for SPA: `/*` → `/index.html`
7. Click **"Create Resources"**

---

### AWS Amplify Deployment

**Step 1: Install Amplify CLI**
```bash
npm install -g @aws-amplify/cli
amplify configure
```

**Step 2: Initialize and Add Hosting**
```bash
amplify init
amplify add hosting
```

**Step 3: Configure Build (amplify.yml)**
```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: dist
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

**Step 4: Add SPA Redirect**

In Amplify Console → App settings → Rewrites and redirects:
| Source | Target | Type |
|--------|--------|------|
| `</^[^.]+$\|\.(?!(css\|gif\|ico\|jpg\|js\|png\|txt\|svg\|woff\|woff2\|ttf\|map\|json)$)([^.]+$)/>` | `/index.html` | 200 |

---

### Self-Hosted (VPS) Deployment

For Ubuntu 20.04+ on DigitalOcean Droplet, AWS EC2, Linode, etc.

#### Step 1: Update System
```bash
sudo apt update && sudo apt upgrade -y
```

#### Step 2: Install Node.js
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs
node --version
```

#### Step 3: Install Nginx
```bash
sudo apt install nginx -y
sudo systemctl enable nginx
sudo systemctl start nginx
```

#### Step 4: Clone and Build
```bash
sudo mkdir -p /var/www/pawsanctuary
sudo chown $USER:$USER /var/www/pawsanctuary
cd /var/www
git clone https://github.com/yourusername/pawsanctuary.git
cd pawsanctuary
npm ci
cp .env.example .env
nano .env  # Add your values
npm run build
```

#### Step 5: Configure Nginx
```bash
sudo nano /etc/nginx/sites-available/pawsanctuary
```

Add configuration:
```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;
    root /var/www/pawsanctuary/dist;
    index index.html;

    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml image/svg+xml;

    add_header X-Frame-Options "DENY" always;
    add_header X-Content-Type-Options "nosniff" always;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location /assets/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

Enable and reload:
```bash
sudo ln -s /etc/nginx/sites-available/pawsanctuary /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

#### Step 6: SSL with Let's Encrypt
```bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

---

## 🔧 Troubleshooting

### Common Issues

#### Blank Page After Deployment
**Cause**: SPA routing not configured
**Solution**: Ensure catch-all redirects to `index.html`:
- Vercel: `vercel.json` with rewrites
- Netlify: `_redirects` or `netlify.toml`
- Nginx: `try_files $uri $uri/ /index.html`

#### Environment Variables Not Working
**Cause**: Variables not available at build time
**Solution**: 
- Ensure variables are prefixed with `VITE_`
- Set variables BEFORE building
- Trigger a new build after adding variables

#### API Requests Failing (CORS)
**Cause**: Supabase URL mismatch or domain not whitelisted
**Solution**:
1. Verify `VITE_SUPABASE_URL` is correct
2. Add your domain to Supabase → Authentication → URL Configuration

#### Build Fails with Memory Error
**Solution**:
```bash
export NODE_OPTIONS="--max-old-space-size=4096"
npm run build
```

#### Authentication Not Working
**Solution**:
1. Go to Supabase Dashboard → Authentication → URL Configuration
2. Add production URLs to **Redirect URLs**

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## 📄 License

This project is private and proprietary. All rights reserved.

---

## 🙏 Support

- Check [Lovable Documentation](https://docs.lovable.dev/)
- Use the Lovable chat interface for questions

---

**Made with ❤️ for animals in need | Built with [Lovable](https://lovable.dev)**