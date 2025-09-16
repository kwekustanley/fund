# Ghana National Research Fund Portal

A comprehensive web platform for managing research funding applications, reviews, and project tracking for the Ghana National Research Fund.

## Features

### For Researchers
- Browse and search funding opportunities
- Submit and manage grant applications
- Track application status and reviews
- Access resources and templates
- View funded projects for inspiration

### For Reviewers
- Review assigned applications
- Provide detailed feedback and scoring
- Manage review deadlines
- Access review guidelines and criteria

### For Administrators
- Manage funding calls and opportunities
- Oversee application review process
- Generate reports and analytics
- Manage users and system settings

## Technology Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Package Manager**: npm

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd gnrf-portal
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.example .env
# Edit .env with your configuration
```

4. Start the development server
```bash
npm run dev
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── common/         # Layout components (Header, Footer)
│   ├── forms/          # Form components
│   └── ui/             # Basic UI components (Button, Card, Modal)
├── contexts/           # React contexts (Auth, etc.)
├── hooks/              # Custom React hooks
├── pages/              # Page components
│   ├── admin/          # Admin dashboard pages
│   ├── researcher/     # Researcher dashboard pages
│   └── reviewer/       # Reviewer dashboard pages
├── services/           # API services and utilities
├── types/              # TypeScript type definitions
└── utils/              # Utility functions
```

## Development Guidelines

### Code Style
- Use TypeScript for all new code
- Follow React functional component patterns
- Use custom hooks for reusable logic
- Implement proper error handling
- Write meaningful commit messages

### API Integration
- All API calls should go through the `apiService`
- Use the `useApi` hook for data fetching
- Implement proper loading and error states
- Handle authentication tokens properly

### UI/UX Guidelines
- Follow the existing design system
- Ensure responsive design for all components
- Implement proper accessibility features
- Use consistent spacing and typography

## Backend Integration

This frontend is designed to work with a REST API backend. Key endpoints expected:

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `POST /api/auth/logout` - User logout

### Funding Calls
- `GET /api/funding-calls` - List funding opportunities
- `GET /api/funding-calls/:id` - Get specific funding call

### Applications
- `GET /api/applications` - List applications
- `POST /api/applications` - Create new application
- `PUT /api/applications/:id` - Update application
- `GET /api/applications/:id` - Get specific application

### Projects
- `GET /api/funded-projects` - List funded projects

### Admin
- `GET /api/admin/stats` - Admin dashboard statistics
- `GET /api/admin/recent-applications` - Recent applications

## Deployment

### Build for Production
```bash
npm run build
```

### Environment Variables
Set the following environment variables for production:
- `REACT_APP_API_URL` - Backend API URL
- `REACT_APP_ENVIRONMENT` - Environment (production/staging)

## Contributing

1. Create a feature branch from `main`
2. Make your changes following the coding guidelines
3. Test your changes thoroughly
4. Submit a pull request with a clear description

## License

This project is proprietary software for the Ghana National Research Fund.

## Support

For technical support or questions, contact the development team.