# PopX App

A modern React application built with TypeScript, Zustand, Tailwind CSS, and Mantine UI.

## Features

- 🎨 Modern UI with Tailwind CSS and Mantine UI components
- 🗂️ State management with Zustand
- 📱 Responsive design
- ✅ Form validation with Mantine Form
- 🎯 Type-safe with TypeScript

## Project Structure

```
src/
├── components/          # Reusable UI components
│   └── Navigation.tsx  # Navigation controls
├── pages/              # Page components
│   ├── WelcomePage.tsx
│   ├── SignInPage.tsx
│   ├── CreateAccountPage.tsx
│   ├── AccountSettingsPage.tsx
│   ├── SuccessPage.tsx
│   └── index.ts
├── store/              # Zustand stores
│   └── useNavigationStore.ts
├── types/              # TypeScript type definitions
│   └── index.ts
├── utils/              # Utility functions
├── App.tsx             # Main App component
├── main.tsx            # Entry point
└── index.css           # Global styles
```

## Getting Started

### Prerequisites

- Node.js (v20.19.0 or higher recommended)
- npm or pnpm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Zustand** - State management
- **Tailwind CSS** - Utility-first CSS
- **Mantine UI** - Component library

## Pages

1. **Welcome Page** - Landing page with account creation and login options
2. **Sign In Page** - User authentication form
3. **Create Account Page** - New user registration form
4. **Account Settings Page** - User profile and settings
5. **Success Page** - Login success confirmation

