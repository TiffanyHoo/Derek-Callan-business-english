import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AppProvider } from './contexts/AppContext'
import Layout from './components/Layout'

const Dashboard = lazy(() => import('./pages/Dashboard'))
const LessonDetail = lazy(() => import('./pages/LessonDetail'))
const Quiz = lazy(() => import('./pages/Quiz'))
const QuizResult = lazy(() => import('./pages/QuizResult'))
const Review = lazy(() => import('./pages/Review'))
const Progress = lazy(() => import('./pages/Progress'))

function Loading() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="animate-spin rounded-full h-10 w-10 border-4 border-blue-600 border-t-transparent" />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/lesson/:id" element={<LessonDetail />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/quiz/result" element={<QuizResult />} />
              <Route path="/review" element={<Review />} />
              <Route path="/progress" element={<Progress />} />
            </Route>
          </Routes>
        </Suspense>
      </AppProvider>
    </BrowserRouter>
  )
}
