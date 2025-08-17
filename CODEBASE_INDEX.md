# RePlate Campus - Codebase Index

## Project Overview
**RePlate Campus** is a Next.js 15 application for campus food waste management, built with React 19, TypeScript, and Tailwind CSS. The platform connects college canteen surplus food with students through flash sales and NGOs through donations.

## Technology Stack
- **Framework**: Next.js 15.2.4 with App Router
- **Frontend**: React 19, TypeScript 5
- **Styling**: Tailwind CSS 4.1.9, Tailwind Animate
- **UI Components**: Radix UI primitives, shadcn/ui components
- **Authentication**: Civic Auth integration + Demo auth system
- **Charts**: Recharts for data visualization
- **Fonts**: Geist Sans/Mono, Work Sans, Open Sans
- **Forms**: React Hook Form with Zod validation
- **Package Manager**: pnpm

## Project Structure

### Root Configuration
```
├── package.json          # Dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── next.config.mjs       # Next.js config with Civic Auth plugin
├── middleware.ts         # Route middleware (demo mode)
├── postcss.config.mjs    # PostCSS configuration
├── components.json       # shadcn/ui configuration
└── pnpm-lock.yaml        # Package lock file
```

### Application Structure (`/app`)
```
app/
├── layout.tsx            # Root layout with providers
├── page.tsx              # Landing page with role navigation
├── not-found.tsx         # 404 error page
├── globals.css           # Global styles and CSS variables
├── admin/
│   └── page.tsx          # Admin portal entry
├── staff/
│   └── page.tsx          # Staff portal entry
├── student/
│   ├── page.tsx          # Student portal entry
│   └── loading.tsx       # Loading component
├── volunteer/
│   └── page.tsx          # Volunteer portal entry
├── auth/
│   └── login/
│       └── page.tsx      # Login page
└── api/
    └── auth/
        └── [...civicauth]/
            └── route.ts  # Civic Auth API handler
```

### Components (`/components`)
```
components/
├── ui/                   # Base UI components (shadcn/ui)
│   ├── alert.tsx
│   ├── badge.tsx
│   ├── button.tsx
│   ├── card.tsx
│   ├── input.tsx
│   ├── label.tsx
│   ├── progress.tsx
│   ├── select.tsx
│   ├── tabs.tsx
│   ├── textarea.tsx
│   ├── toast.tsx
│   └── toaster.tsx
├── auth/                 # Authentication components
│   ├── civic-login-button.tsx
│   ├── demo-login-form.tsx
│   └── protected-route.tsx
├── admin/
│   └── admin-dashboard-client.tsx    # Admin dashboard (695 lines)
├── staff/
│   └── staff-dashboard-client.tsx    # Staff dashboard (612 lines)
├── student/
│   └── student-dashboard-client.tsx  # Student dashboard (362 lines)
├── volunteer/
│   └── volunteer-dashboard-client.tsx # Volunteer dashboard (689 lines)
├── theme-provider.tsx    # Dark/light theme provider
├── theme-toggle.tsx      # Theme switcher component
└── loading-spinner.tsx   # Loading animation
```

### Utilities & Hooks (`/lib`, `/hooks`)
```
lib/
├── utils.ts              # Utility functions (cn, clsx)
├── demo-auth.tsx         # Demo authentication system
└── demo-data.ts          # Mock data structures (416 lines)

hooks/
└── use-toast.ts          # Toast notification hook (195 lines)
```

### Static Assets (`/public`, `/styles`)
```
public/
├── placeholder-logo.png/svg    # Logo assets
├── placeholder-user.jpg        # User avatar
├── placeholder.jpg/svg         # Generic placeholder
├── masala-dosa.png            # Food item images
├── colorful-fruit-smoothies.png
├── fresh-healthy-sandwiches.png
└── chicken-biryani.png

styles/
└── globals.css           # Additional global styles (124 lines)
```

## Core Features & User Roles

### 1. Admin Dashboard
- **File**: `components/admin/admin-dashboard-client.tsx`
- **Features**:
  - System overview and analytics
  - User management (staff, students, volunteers)
  - Canteen management
  - NGO partner management
  - Financial reports and insights
  - Real-time monitoring
- **Charts**: Bar charts, line charts, pie charts for analytics

### 2. Staff Dashboard
- **File**: `components/staff/staff-dashboard-client.tsx`
- **Features**:
  - Food inventory management
  - Surplus food logging
  - Flash sale creation
  - Donation coordination
  - Analytics and reporting

### 3. Student Dashboard
- **File**: `components/student/student-dashboard-client.tsx`
- **Features**:
  - Available flash sales browsing
  - Food item purchasing
  - Order history
  - Savings tracking

### 4. Volunteer Dashboard
- **File**: `components/volunteer/volunteer-dashboard-client.tsx`
- **Features**:
  - NGO operations management
  - Donation coordination
  - Volunteer scheduling
  - Impact tracking

## Data Models

### Core Interfaces (from `lib/demo-data.ts`)
```typescript
- DemoFoodItem: Food inventory with pricing, status, expiry
- DemoCanteen: Canteen locations and operating hours
- DemoNGO: NGO partner information and capacity
- DemoAnalytics: Performance metrics and reporting
- DemoDonation: Donation tracking and coordination
- DemoFlashSale: Flash sale campaigns and discounts
- DemoUser: User profiles with role-based access
```

## Authentication System

### Demo Authentication
- **File**: `lib/demo-auth.tsx`
- **Users**:
  - `staff@replate.com` (Sarah Johnson)
  - `student@replate.com` (Alex Chen)
  - `volunteer@replate.com` (Maria Rodriguez)
  - `admin@replate.com` (David Kim)
- **Password**: "demo" for all users

### Civic Authentication
- **Integration**: `@civic/auth` package
- **Configuration**: Next.js plugin in `next.config.mjs`
- **Component**: `components/auth/civic-login-button.tsx`

## Styling & Theming

### Design System
- **Base**: Tailwind CSS with custom CSS variables
- **Theme**: Light/dark mode support via `next-themes`
- **Components**: Radix UI primitives with custom styling
- **Typography**: Geist font family with fallbacks
- **Colors**: Custom color palette for charts and UI

### Key Design Features
- Responsive design (mobile-first)
- Modern glassmorphism effects
- Gradient backgrounds
- Icon system (Lucide React)
- Animation support (tailwindcss-animate)

## Development Setup

### Scripts
```json
{
  "dev": "next dev",
  "build": "next build", 
  "start": "next start",
  "lint": "next lint"
}
```

### Build Configuration
- ESLint: Ignored during builds
- TypeScript: Build errors ignored (demo setup)
- Images: Unoptimized for demo deployment

## Key Dependencies

### Core Framework
- Next.js 15.2.4 (App Router)
- React 19 + React DOM 19
- TypeScript 5

### UI & Styling
- Tailwind CSS 4.1.9
- Radix UI components (extensive set)
- Lucide React icons
- next-themes for theme switching

### Data & Forms
- React Hook Form 7.60.0
- Zod 3.25.67 validation
- Recharts for data visualization
- date-fns for date handling

### Authentication
- @civic/auth for Web3 authentication
- Custom demo auth system

## File Statistics
- **Total Files**: ~50+ source files
- **Large Components**: 
  - Admin Dashboard: 695 lines
  - Volunteer Dashboard: 689 lines
  - Staff Dashboard: 612 lines
  - Demo Data: 416 lines
- **UI Components**: 12 shadcn/ui components
- **Pages**: 8 application routes
- **Exported Functions/Components**: 41 across 27 files

## API Surface
The application exports 41 functions/components across 27 files, providing a comprehensive interface for:
- User authentication and authorization
- Food inventory management
- Flash sale operations
- Donation coordination
- Analytics and reporting
- UI component library

## Notable Features
1. **Role-based Access Control**: Four distinct user roles with dedicated dashboards
2. **Real-time Data**: Live campus activity feeds and notifications
3. **Responsive Design**: Mobile-optimized interface
4. **Theme Support**: Light/dark mode switching
5. **Demo Mode**: Complete demo authentication system for testing
6. **Analytics**: Comprehensive charts and data visualization
7. **Modern Stack**: Latest React/Next.js features with TypeScript