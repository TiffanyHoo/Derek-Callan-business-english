# Business English Learning App

A web application for learning business English vocabulary, built with React, TypeScript, and Vite.

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite 6
- **Routing**: React Router DOM 6
- **Styling**: Tailwind CSS 3 + PostCSS + Autoprefixer
- **Icons**: Lucide React

## Project Structure

```
business-english-app/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Layout.tsx       # Main layout wrapper with Navbar
│   │   ├── LessonCard.tsx   # Lesson card display
│   │   ├── Navbar.tsx       # Navigation bar
│   │   ├── ProgressBar.tsx  # Progress indicator
│   │   └── VocabularyItem.tsx # Vocabulary word display
│   ├── contexts/
│   │   └── AppContext.tsx   # Global state management
│   ├── data/
│   │   └── lessons.ts      # Lesson content data
│   ├── pages/
│   │   ├── Dashboard.tsx    # Home page
│   │   ├── LessonDetail.tsx # Individual lesson view
│   │   ├── Progress.tsx     # Learning progress page
│   │   ├── Quiz.tsx         # Quiz page
│   │   ├── QuizResult.tsx   # Quiz results page
│   │   └── Review.tsx       # Vocabulary review page
│   ├── utils/
│   │   ├── spacedRepetition.ts # Spaced repetition algorithm
│   │   └── storage.ts      # LocalStorage utilities
│   ├── App.tsx              # Root component with routes
│   ├── index.css            # Global styles
│   └── main.tsx             # Entry point
├── dist/                    # Production build output
├── package.json             # Dependencies and scripts
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
├── tsconfig.json            # TypeScript configuration
└── vite.config.ts           # Vite configuration
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173` (default Vite port).

To specify a custom host/port:

```bash
npx vite --host --port 5180
```

### Build for Production

```bash
npm run build
```

The production build will be output to the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Features

- **Dashboard**: Browse all available lessons
- **Lesson Detail**: View vocabulary with definitions and example sentences
- **Quiz**: Test your knowledge with vocabulary quizzes
- **Review**: Spaced repetition-based vocabulary review
- **Progress**: Track your learning progress
