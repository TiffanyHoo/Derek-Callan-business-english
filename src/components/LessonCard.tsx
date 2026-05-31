import { Link } from 'react-router-dom'
import { CheckCircle } from 'lucide-react'

interface LessonCardProps {
  lesson: { id: number; title: string }
  completed: boolean
  vocabCount: number
}

export default function LessonCard({ lesson, completed, vocabCount }: LessonCardProps) {
  return (
    <Link
      to={`/lesson/${lesson.id}`}
      className={`block bg-white rounded-xl shadow-sm border p-5 transition-all duration-200 hover:shadow-md ${
        completed ? 'border-l-4 border-l-emerald-500 border-t-gray-100 border-r-gray-100 border-b-gray-100' : 'border-gray-100'
      }`}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
            Lesson {lesson.id}
          </span>
          <h3 className="mt-1 text-base font-semibold text-gray-900 line-clamp-2">
            {lesson.title}
          </h3>
          <p className="mt-1 text-sm text-gray-500">{vocabCount} words</p>
        </div>
        {completed && (
          <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0 ml-3" />
        )}
      </div>
    </Link>
  )
}
