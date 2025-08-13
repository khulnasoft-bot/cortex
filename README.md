# CortexDev

A modern AI-powered development platform built with React, TypeScript, and Vite.

## Features

- 🧠 **AI-Powered Search**: Intelligent search across your development resources
- 📊 **Project Management**: Kanban-style project tracking and management
- 🔄 **Workflow Automation**: Create and manage custom development workflows
- 🎨 **Modern UI**: Built with shadcn/ui and Tailwind CSS
- 🌙 **Dark Mode**: Full dark mode support
- 📱 **Responsive**: Mobile-first responsive design

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, shadcn/ui
- **Routing**: React Router DOM
- **State Management**: TanStack Query
- **Icons**: Lucide React
- **Build Tool**: Vite

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd cortexdev
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Start the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

\`\`\`
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── landing/        # Landing page components
│   ├── manage/         # Management interface components
│   ├── search/         # Search functionality components
│   └── workflows/      # Workflow management components
├── contexts/           # React contexts
├── hooks/              # Custom React hooks
├── lib/                # Utility functions and configurations
├── pages/              # Page components
├── types/              # TypeScript type definitions
└── utils/              # Utility functions
\`\`\`

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## License

This project is licensed under the MIT License.
