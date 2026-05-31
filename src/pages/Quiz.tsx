import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { Brain, Play } from 'lucide-react'
import { lessons, type VocabularyItem } from '../data/lessons'
import { addToReviewQueue } from '../utils/storage'

interface Question {
  type: 'definition-match' | 'word-match' | 'true-false'
  itemId: string
  prompt: string
  options: string[]
  correctIndex: number
  correctAnswer: string
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function generateQuestions(items: VocabularyItem[], count: number): Question[] {
  const pool = shuffle(items).slice(0, count)
  return pool.map(item => {
    const typeRoll = Math.random()
    const allItems = items

    if (typeRoll < 0.35) {
      const distractors = shuffle(allItems.filter(i => i.id !== item.id)).slice(0, 3).map(i => i.definition || i.word)
      const options = shuffle([item.definition || item.word, ...distractors])
      return {
        type: 'definition-match' as const,
        itemId: item.id,
        prompt: item.word,
        options,
        correctIndex: options.indexOf(item.definition || item.word),
        correctAnswer: item.definition || item.word,
      }
    } else if (typeRoll < 0.7) {
      const distractors = shuffle(allItems.filter(i => i.id !== item.id)).slice(0, 3).map(i => i.word)
      const options = shuffle([item.word, ...distractors])
      return {
        type: 'word-match' as const,
        itemId: item.id,
        prompt: item.definition || item.word,
        options,
        correctIndex: options.indexOf(item.word),
        correctAnswer: item.word,
      }
    } else {
      const isCorrect = Math.random() > 0.5
      const wrongItem = shuffle(allItems.filter(i => i.id !== item.id))[0]
      const shownDefinition = isCorrect ? item.definition : (wrongItem?.definition || item.definition)
      return {
        type: 'true-false' as const,
        itemId: item.id,
        prompt: `${item.word} — ${shownDefinition}`,
        options: ['True', 'False'],
        correctIndex: isCorrect ? 0 : 1,
        correctAnswer: isCorrect ? 'True' : 'False',
      }
    }
  })
}

export default function Quiz() {
  const navigate = useNavigate()
  const [selectedLessons, setSelectedLessons] = useState<number[]>([])
  const [questionCount, setQuestionCount] = useState(10)
  const [started, setStarted] = useState(false)
  const [questions, setQuestions] = useState<Question[]>([])
  const [currentQ, setCurrentQ] = useState(0)
  const [answers, setAnswers] = useState<{ question: Question; userAnswer: string; isCorrect: boolean }[]>([])
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)

  const allItems = useMemo(() => {
    return lessons
      .filter(l => selectedLessons.includes(l.id))
      .flatMap(l => l.sections.flatMap(s => s.items))
  }, [selectedLessons])

  const toggleLesson = (id: number) => {
    setSelectedLessons(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    )
  }

  const selectAll = () => {
    setSelectedLessons(lessons.map(l => l.id))
  }

  const startQuiz = () => {
    if (allItems.length === 0) return
    const qs = generateQuestions(allItems, Math.min(questionCount, allItems.length))
    setQuestions(qs)
    setStarted(true)
    setCurrentQ(0)
    setAnswers([])
    setSelectedOption(null)
    setShowFeedback(false)
  }

  const handleAnswer = (optionIndex: number) => {
    if (showFeedback) return
    setSelectedOption(optionIndex)
    setShowFeedback(true)
    const q = questions[currentQ]
    const isCorrect = optionIndex === q.correctIndex
    if (!isCorrect) {
      addToReviewQueue(q.itemId)
    }
    setAnswers(prev => [...prev, { question: q, userAnswer: q.options[optionIndex], isCorrect }])
  }

  const nextQuestion = () => {
    if (currentQ + 1 < questions.length) {
      setCurrentQ(prev => prev + 1)
      setSelectedOption(null)
      setShowFeedback(false)
    } else {
      const score = answers.filter(a => a.isCorrect).length
      navigate('/quiz/result', {
        state: { score, total: questions.length, answers },
      })
    }
  }

  if (!started) {
    return (
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="flex items-center gap-3">
          <Brain className="w-8 h-8 text-blue-600" />
          <h1 className="text-2xl font-bold text-gray-900">Quiz</h1>
        </div>

        <div className="card space-y-4">
          <h2 className="font-semibold text-gray-800">Select lessons</h2>
          <button onClick={selectAll} className="btn-secondary text-sm">Select All</button>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-64 overflow-y-auto">
            {lessons.map(l => (
              <label key={l.id} className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedLessons.includes(l.id)}
                  onChange={() => toggleLesson(l.id)}
                  className="w-4 h-4 text-blue-600 rounded"
                />
                <span className="text-sm">Lesson {l.id}: {l.title}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="card space-y-4">
          <h2 className="font-semibold text-gray-800">Number of questions</h2>
          <div className="flex gap-3">
            {[10, 15, 20].map(n => (
              <button
                key={n}
                onClick={() => setQuestionCount(n)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  questionCount === n ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {n}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={startQuiz}
          disabled={selectedLessons.length === 0}
          className="btn-primary flex items-center gap-2 text-lg px-8 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Play className="w-5 h-5" /> Start Quiz
        </button>
      </div>
    )
  }

  const q = questions[currentQ]
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-gray-500">Question {currentQ + 1} of {questions.length}</span>
        <span className="text-sm font-medium text-blue-600">{answers.filter(a => a.isCorrect).length} correct</span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-2">
        <div className="bg-blue-600 h-2 rounded-full transition-all duration-300" style={{ width: `${((currentQ + 1) / questions.length) * 100}%` }} />
      </div>

      <div className="card space-y-6">
        <div>
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
            {q.type === 'definition-match' ? 'Match the definition' : q.type === 'word-match' ? 'Match the word' : 'True or False'}
          </span>
          <p className="mt-2 text-xl font-semibold text-gray-900">{q.prompt}</p>
        </div>

        <div className="space-y-3">
          {q.options.map((option, idx) => {
            let btnClass = 'bg-white border-2 border-gray-200 hover:border-blue-400 hover:bg-blue-50'
            if (showFeedback) {
              if (idx === q.correctIndex) {
                btnClass = 'bg-emerald-50 border-2 border-emerald-500 text-emerald-800'
              } else if (idx === selectedOption && idx !== q.correctIndex) {
                btnClass = 'bg-red-50 border-2 border-red-500 text-red-800'
              } else {
                btnClass = 'bg-white border-2 border-gray-100 text-gray-400'
              }
            } else if (idx === selectedOption) {
              btnClass = 'bg-blue-50 border-2 border-blue-500'
            }
            return (
              <button
                key={idx}
                onClick={() => handleAnswer(idx)}
                disabled={showFeedback}
                className={`w-full text-left p-4 rounded-xl font-medium transition-all duration-200 ${btnClass}`}
              >
                {option}
              </button>
            )
          })}
        </div>
      </div>

      {showFeedback && (
        <button onClick={nextQuestion} className="btn-primary w-full">
          {currentQ + 1 < questions.length ? 'Next Question' : 'See Results'}
        </button>
      )}
    </div>
  )
}
