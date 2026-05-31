import { useParams, Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, ArrowRight, CheckCircle, Circle } from 'lucide-react'
import { lessons } from '../data/lessons'
import { useAppContext } from '../contexts/AppContext'
import VocabularyItem from '../components/VocabularyItem'

export default function LessonDetail() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { lessonCompletion, toggleLessonCompletion } = useAppContext()
  const lessonId = Number(id)
  const lesson = lessons.find(l => l.id === lessonId)
  const completed = lessonCompletion[lessonId]?.completed ?? false

  if (!lesson) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-gray-900">Lesson not found</h2>
        <Link to="/" className="mt-4 inline-block text-blue-600 hover:underline">Back to home</Link>
      </div>
    )
  }

  const prevLesson = lessons.find(l => l.id === lessonId - 1)
  const nextLesson = lessons.find(l => l.id === lessonId + 1)

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4">
        <Link to="/" className="text-gray-400 hover:text-gray-600 transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div>
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Lesson {lesson.id}</span>
          <h1 className="text-2xl font-bold text-gray-900">{lesson.title}</h1>
        </div>
      </div>

      {lesson.sections.map((section, idx) => (
        <div key={idx} className="space-y-4">
          {section.title && (
            <h2 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2">{section.title}</h2>
          )}
          <div className="grid gap-4">
            {section.items.map(item => (
              <VocabularyItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      ))}

      <div className="flex justify-center pt-4">
        <button
          onClick={() => toggleLessonCompletion(lessonId)}
          className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-lg transition-colors duration-200 ${
            completed
              ? 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              : 'bg-emerald-600 text-white hover:bg-emerald-700'
          }`}
        >
          {completed ? <Circle className="w-5 h-5" /> : <CheckCircle className="w-5 h-5" />}
          {completed ? 'Mark as Incomplete' : 'Mark as Completed'}
        </button>
      </div>

      <div className="flex justify-between pt-4 border-t border-gray-200">
        {prevLesson ? (
          <Link to={`/lesson/${prevLesson.id}`} className="flex items-center gap-2 text-blue-600 hover:underline">
            <ArrowLeft className="w-4 h-4" /> Lesson {prevLesson.id}: {prevLesson.title}
          </Link>
        ) : <div />}
        {nextLesson ? (
          <Link to={`/lesson/${nextLesson.id}`} className="flex items-center gap-2 text-blue-600 hover:underline">
            Lesson {nextLesson.id}: {nextLesson.title} <ArrowRight className="w-4 h-4" />
          </Link>
        ) : <div />}
      </div>
    </div>
  )
}
