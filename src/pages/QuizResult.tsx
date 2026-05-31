import { useEffect } from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import { Trophy, RotateCcw, Home } from 'lucide-react'
import { addQuizRecord } from '../utils/storage'

export default function QuizResult() {
  const location = useLocation()
  const navigate = useNavigate()
  const state = location.state as { score: number; total: number; answers: { question: { type: string; prompt: string; correctAnswer: string }; userAnswer: string; isCorrect: boolean }[] } | null

  useEffect(() => {
    if (state) {
      addQuizRecord({
        date: new Date().toISOString(),
        score: state.score,
        total: state.total,
        lessonIds: [],
      })
    }
  }, [state])

  if (!state) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-gray-900">No quiz results</h2>
        <Link to="/quiz" className="mt-4 inline-block text-blue-600 hover:underline">Take a quiz</Link>
      </div>
    )
  }

  const { score, total, answers } = state
  const percentage = Math.round((score / total) * 100)

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div className="card text-center space-y-4">
        <Trophy className={`w-16 h-16 mx-auto ${percentage >= 70 ? 'text-amber-500' : 'text-gray-400'}`} />
        <h1 className="text-3xl font-bold text-gray-900">Quiz Complete!</h1>
        <div className="text-5xl font-bold text-blue-600">{percentage}%</div>
        <p className="text-gray-600">{score} out of {total} correct</p>
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div
            className={`h-4 rounded-full transition-all duration-500 ${percentage >= 70 ? 'bg-emerald-500' : percentage >= 40 ? 'bg-amber-500' : 'bg-red-500'}`}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-800">Review Answers</h2>
        {answers.map((answer, idx) => (
          <div key={idx} className={`card border-l-4 ${answer.isCorrect ? 'border-l-emerald-500' : 'border-l-red-500'}`}>
            <p className="font-medium text-gray-900">{idx + 1}. {answer.question.prompt}</p>
            <p className={`mt-1 text-sm ${answer.isCorrect ? 'text-emerald-600' : 'text-red-600'}`}>
              Your answer: {answer.userAnswer}
            </p>
            {!answer.isCorrect && (
              <p className="mt-1 text-sm text-emerald-600">Correct answer: {answer.question.correctAnswer}</p>
            )}
          </div>
        ))}
      </div>

      <div className="flex gap-4 justify-center">
        <button onClick={() => navigate('/quiz')} className="btn-primary flex items-center gap-2">
          <RotateCcw className="w-4 h-4" /> Try Again
        </button>
        <Link to="/" className="btn-secondary flex items-center gap-2">
          <Home className="w-4 h-4" /> Home
        </Link>
      </div>
    </div>
  )
}
