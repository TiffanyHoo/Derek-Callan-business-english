import { Link } from 'react-router-dom'
import { Brain, AlertCircle } from 'lucide-react'
import { lessons } from '../data/lessons'
import { useAppContext } from '../contexts/AppContext'
import { getUpcomingReviewCount } from '../utils/spacedRepetition'
import ProgressBar from '../components/ProgressBar'
import LessonCard from '../components/LessonCard'

export default function Dashboard() {
  const { lessonCompletion } = useAppContext()
  const completedCount = Object.values(lessonCompletion).filter(v => v.completed).length
  const reviewCount = getUpcomingReviewCount()

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Business English Learning</h1>
        <p className="mt-2 text-gray-600">Master business English vocabulary, phrases and communication skills</p>
      </div>

      <div className="card">
        <ProgressBar current={completedCount} total={lessons.length} />
        <p className="mt-2 text-sm text-gray-500">{completedCount} of {lessons.length} lessons completed</p>
      </div>

      {reviewCount > 0 && (
        <Link to="/review" className="block card border-l-4 border-l-amber-400 bg-amber-50 hover:bg-amber-100 transition-colors">
          <div className="flex items-center gap-3">
            <AlertCircle className="w-6 h-6 text-amber-600" />
            <div>
              <p className="font-semibold text-amber-800">{reviewCount} words to review today</p>
              <p className="text-sm text-amber-600">Click to start your review session</p>
            </div>
          </div>
        </Link>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {lessons.map(lesson => {
          const vocabCount = lesson.sections.reduce((sum, s) => sum + s.items.length, 0)
          const completed = lessonCompletion[lesson.id]?.completed ?? false
          return (
            <LessonCard
              key={lesson.id}
              lesson={{ id: lesson.id, title: lesson.title }}
              completed={completed}
              vocabCount={vocabCount}
            />
          )
        })}
      </div>
    </div>
  )
}
