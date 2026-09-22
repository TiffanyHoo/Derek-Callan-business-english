import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
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

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-20 gap-4">
      <h1 className="text-4xl font-bold text-gray-800">404</h1>
      <p className="text-gray-600">页面不存在</p>
      <Link to="/" className="text-blue-600 hover:underline">返回首页</Link>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter basename="/Derek-Callan-business-english">
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
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </AppProvider>
    </BrowserRouter>
  )
}
