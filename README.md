# Multi-Role Web Application

A modern Next.js web application built with TypeScript, featuring role-based access control and a beautiful UI powered by Radix UI components and Tailwind CSS.

## 🚀 Features

- **Multi-Role System**: Support for Admin, Staff, Student, and Volunteer roles
- **Authentication**: Secure authentication system with Civic Auth integration
- **Modern UI**: Beautiful, accessible components built with Radix UI
- **Dark/Light Mode**: Theme switching with next-themes
- **Form Handling**: Robust form validation with React Hook Form and Zod
- **Responsive Design**: Mobile-first responsive design with Tailwind CSS
- **TypeScript**: Full type safety throughout the application

## 🛠️ Tech Stack

- **Framework**: Next.js 15.2.4
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom animations
- **UI Components**: Radix UI primitives
- **Authentication**: Civic Auth
- **Forms**: React Hook Form with Zod validation
- **Charts**: Recharts for data visualization
- **Icons**: Lucide React icons
- **Package Manager**: pnpm

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── admin/             # Admin dashboard pages
│   ├── staff/             # Staff portal pages
│   ├── student/           # Student portal pages
│   ├── volunteer/         # Volunteer portal pages
│   ├── auth/              # Authentication pages
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Homepage
├── components/            # Reusable components
│   ├── ui/                # Base UI components
│   ├── admin/             # Admin-specific components
│   ├── staff/             # Staff-specific components
│   ├── student/           # Student-specific components
│   ├── volunteer/         # Volunteer-specific components
│   └── auth/              # Authentication components
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions and configurations
├── public/                # Static assets
└── styles/                # Additional stylesheets
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd <project-name>
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Fill in your environment variables in `.env.local`

4. **Run the development server**
   ```bash
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## 🎨 UI Components

This project uses a comprehensive set of UI components built on top of Radix UI:

- **Layout**: Accordion, Collapsible, Separator, Tabs
- **Navigation**: Navigation Menu, Dropdown Menu, Context Menu
- **Forms**: Input, Select, Checkbox, Radio Group, Switch, Slider
- **Feedback**: Alert Dialog, Toast, Progress, Tooltip
- **Data Display**: Avatar, Badge, Card, Table
- **Overlays**: Dialog, Popover, Hover Card, Sheet

## 🔐 Authentication & Authorization

The application implements role-based access control with the following user types:

- **Admin**: Full system access and management capabilities
- **Staff**: Staff-specific features and moderate permissions  
- **Student**: Student portal with learning and progress tracking
- **Volunteer**: Volunteer coordination and activity management

## 🎯 Key Features by Role

### Admin Dashboard
- User management and role assignment
- System configuration and settings
- Analytics and reporting
- Content management

### Staff Portal
- Student progress monitoring
- Resource management
- Communication tools
- Scheduling and planning

### Student Portal
- Personal dashboard and progress tracking
- Learning materials and resources
- Assignment submission
- Communication with staff

### Volunteer Portal
- Activity coordination
- Time tracking and logging
- Resource access
- Communication hub

## 🚀 Deployment

This project is optimized for deployment on Vercel:

1. **Connect your repository** to Vercel
2. **Configure environment variables** in the Vercel dashboard
3. **Deploy** - Vercel will automatically build and deploy your application

For other deployment platforms, run `pnpm build` to generate the production build in the `.next` directory.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions, please:

1. Check the [documentation](docs/)
2. Search [existing issues](issues/)
3. Create a [new issue](issues/new) if needed

---

Built with ❤️ using Next.js and modern web technologies.
