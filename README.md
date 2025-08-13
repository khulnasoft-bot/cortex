# CortexDev - AI-Powered Development Platform

Transform your development workflow with AI-powered tools, intelligent search, and seamless project management.

## 🚀 Features

- **AI-Powered Search**: Intelligent code and project search capabilities
- **Project Management**: Comprehensive project tracking and management
- **Workflow Automation**: Streamlined development workflows
- **Real-time Collaboration**: Team collaboration tools
- **Dark/Light Theme**: Beautiful UI with theme switching
- **Responsive Design**: Works perfectly on all devices

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, shadcn/ui
- **Routing**: React Router v6
- **State Management**: React Query, Context API
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite

## 📦 Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/yourusername/cortexdev.git
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

## 🏗️ Build for Production

\`\`\`bash
npm run build
\`\`\`

## 🚀 Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/cortexdev)

## 📁 Project Structure

\`\`\`
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── landing/        # Landing page components
│   ├── manage/         # Management interface
│   ├── search/         # Search functionality
│   └── workflows/      # Workflow components
├── contexts/           # React contexts
├── hooks/              # Custom React hooks
├── lib/                # Utility functions and types
├── pages/              # Page components
├── types/              # TypeScript type definitions
└── utils/              # Helper utilities
\`\`\`

## 🎨 Customization

The project uses Tailwind CSS with custom CSS variables for theming. You can customize colors, spacing, and other design tokens in:

- `tailwind.config.ts` - Tailwind configuration
- `src/index.css` - CSS variables and custom styles

## 📱 Responsive Design

The application is built with a mobile-first approach and works seamlessly across:

- 📱 Mobile devices (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large screens (1440px+)

## 🔧 Environment Variables

Create a `.env.local` file in the root directory:

\`\`\`env
VITE_APP_TITLE=CortexDev
VITE_API_URL=https://api.cortexdev.com
\`\`\`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Lucide](https://lucide.dev/) for the icon library
- [Framer Motion](https://www.framer.com/motion/) for animations

---

Built with ❤️ by the CortexDev team
