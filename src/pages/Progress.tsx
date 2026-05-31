import { Link } from 'react-router-dom'
import { BarChart3, CheckCircle, Circle, Brain, RotateCcw, Calendar } from 'lucide-react'
import { lessons } from '../data/lessons'
import { useAppContext } from '../contexts/AppContext'
import { getQuizHistory } from '../utils/storage'
import { getReviewStats } from '../utils/spacedRepetition'
import ProgressBar from '../components/ProgressBar'

export default function Progress() {
  const { lessonCompletion } = useAppContext()
  const completedCount = Object.values(lessonCompletion).filter(v => v.completed).length
  const totalVocab = lessons.reduce((sum, l) => sum + l.sections.reduce((s, sec) => s + sec.items.length, 0), 0)
  const quizHistory = getQuizHistory()
  const reviewStats = getReviewStats()

  const last10Quizzes = quizHistory.slice(-10).reverse()

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div className="flex items-center gap-3">
        <BarChart3 className="w-8 h-8 text-blue-600" />
        <h1 className="text-2xl font-bold text-gray-900">Progress</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="card text-center">
          <p className="text-3xl font-bold text-blue-600">{completedCount}</p>
          <p className="text-sm text-gray-500">Lessons Completed</p>
        </div>
        <div className="card text-center">
          <p className="text-3xl font-bold text-emerald-600">{totalVocab}</p>
          <p className="text-sm text-gray-500">Total Vocabulary</p>
        </div>
        <div className="card text-center">
          <p className="text-3xl font-bold text-amber-600">{quizHistory.length}</p>
          <p className="text-sm text-gray-500">Quizzes Taken</p>
        </div>
      </div>

      <div className="card">
        <ProgressBar current={completedCount} total={lessons.length} />
      </div>

      <div className="card space-y-4">
        <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
          <RotateCcw className="w-5 h-5" /> Review Statistics
        </h2>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-gray-900">{reviewStats.total}</p>
            <p className="text-xs text-gray-500">In Queue</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-amber-600">{reviewStats.due}</p>
            <p className="text-xs text-gray-500">Due Today</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-blue-600">{reviewStats.upcoming}</p>
            <p className="text-xs text-gray-500">This Week</p>
          </div>
        </div>
      </div>

      <div className="card space-y-4">
        <h2 className="text-lg font-semibold text-gray-800">Lesson Completion</h2>
        <div className="space-y-2">
          {lessons.map(lesson => {
            const completed = lessonCompletion[lesson.id]?.completed ?? false
            const completedAt = lessonCompletion[lesson.id]?.completedAt
            return (
              <Link
                key={lesson.id}
                to={`/lesson/${lesson.id}`}
                className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  {completed ? <CheckCircle className="w-5 h-5 text-emerald-500" /> : <Circle className="w-5 h-5 text-gray-300" />}
                  <span className={`text-sm font-medium ${completed ? 'text-gray-900' : 'text-gray-500'}`}>
                    Lesson {lesson.id}: {lesson.title}
                  </span>
                </div>
                {completedAt && (
                  <span className="text-xs text-gray-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(completedAt).toLocaleDateString()}
                  </span>
                )}
              </Link>
            )
          })}
        </div>
      </div>

      {last10Quizzes.length > 0 && (
        <div className="card space-y-4">
          <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
            <Brain className="w-5 h-5" /> Recent Quizzes
          </h2>
          <div className="space-y-2">
            {last10Quizzes.map((quiz, idx) => {
              const pct = Math.round((quiz.score / quiz.total) * 100)
              return (
                <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                  <span className="text-sm text-gray-600">{new Date(quiz.date).toLocaleDateString()}</span>
                  <div className="flex items-center gap-3">
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${pct >= 70 ? 'bg-emerald-500' : pct >= 40 ? 'bg-amber-500' : 'bg-red-500'}`}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-700">{quiz.score}/{quiz.total}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
