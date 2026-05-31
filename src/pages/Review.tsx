import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { RotateCcw, Eye, ThumbsDown, Minus, ThumbsUp, PartyPopper } from 'lucide-react'
import { lessons, type VocabularyItem } from '../data/lessons'
import { getTodayReviewItems, scheduleReview, type Quality } from '../utils/spacedRepetition'
import { useAppContext } from '../contexts/AppContext'

export default function Review() {
  const { refreshReviewData } = useAppContext()
  const [revealed, setRevealed] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [reviewedCount, setReviewedCount] = useState(0)

  const reviewIds = useMemo(() => getTodayReviewItems(), [])

  const allItems = useMemo(() => {
    const map = new Map<string, VocabularyItem>()
    lessons.forEach(l => l.sections.forEach(s => s.items.forEach(item => map.set(item.id, item))))
    return map
  }, [])

  const currentItem = reviewIds.length > 0 ? allItems.get(reviewIds[currentIndex]) : null
  const isComplete = currentIndex >= reviewIds.length && reviewedCount > 0

  const handleQuality = (quality: Quality) => {
    if (!currentItem) return
    scheduleReview(currentItem.id, quality)
    refreshReviewData()
    setReviewedCount(prev => prev + 1)
    setCurrentIndex(prev => prev + 1)
    setRevealed(false)
  }

  if (reviewIds.length === 0 && !isComplete) {
    return (
      <div className="max-w-lg mx-auto text-center py-20 space-y-4">
        <RotateCcw className="w-16 h-16 text-gray-300 mx-auto" />
        <h1 className="text-2xl font-bold text-gray-900">No Reviews Today</h1>
        <p className="text-gray-600">You're all caught up! Complete lessons and quizzes to add words to your review queue.</p>
        <Link to="/" className="btn-primary inline-block">Back to Home</Link>
      </div>
    )
  }

  if (isComplete) {
    return (
      <div className="max-w-lg mx-auto text-center py-20 space-y-4">
        <PartyPopper className="w-16 h-16 text-amber-500 mx-auto" />
        <h1 className="text-2xl font-bold text-gray-900">Review Complete!</h1>
        <p className="text-gray-600">You reviewed {reviewedCount} words today. Great job!</p>
        <Link to="/" className="btn-primary inline-block">Back to Home</Link>
      </div>
    )
  }

  if (!currentItem) {
    return (
      <div className="max-w-lg mx-auto text-center py-20 space-y-4">
        <p className="text-gray-600">No more items to review.</p>
        <Link to="/" className="btn-primary inline-block">Back to Home</Link>
      </div>
    )
  }

  return (
    <div className="max-w-lg mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <RotateCcw className="w-6 h-6 text-blue-600" />
          <h1 className="text-2xl font-bold text-gray-900">Review</h1>
        </div>
        <span className="text-sm text-gray-500">{currentIndex + 1} of {reviewIds.length}</span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-2">
        <div className="bg-blue-600 h-2 rounded-full transition-all duration-300" style={{ width: `${((currentIndex + 1) / reviewIds.length) * 100}%` }} />
      </div>

      <div className="card text-center space-y-4 min-h-[200px] flex flex-col justify-center">
        <h2 className="text-2xl font-bold text-gray-900">{currentItem.word}</h2>

        {!revealed ? (
          <button onClick={() => setRevealed(true)} className="btn-secondary flex items-center gap-2 mx-auto">
            <Eye className="w-4 h-4" /> Show Answer
          </button>
        ) : (
          <>
            <p className="text-gray-600">{currentItem.definition}</p>
            {currentItem.examples.length > 0 && (
              <div className="space-y-1">
                {currentItem.examples.map((ex, i) => (
                  <p key={i} className="text-sm text-gray-500 italic">&ldquo;{ex}&rdquo;</p>
                ))}
              </div>
            )}
          </>
        )}
      </div>

      {revealed && (
        <div className="space-y-3">
          <p className="text-center text-sm text-gray-500">How well did you know this?</p>
          <div className="grid grid-cols-3 gap-3">
            <button onClick={() => handleQuality(0)} className="flex flex-col items-center gap-1 p-3 rounded-xl bg-red-50 text-red-700 hover:bg-red-100 transition-colors font-medium">
              <ThumbsDown className="w-5 h-5" />
              <span className="text-xs">Didn't know</span>
            </button>
            <button onClick={() => handleQuality(1)} className="flex flex-col items-center gap-1 p-3 rounded-xl bg-amber-50 text-amber-700 hover:bg-amber-100 transition-colors font-medium">
              <Minus className="w-5 h-5" />
              <span className="text-xs">Vaguely</span>
            </button>
            <button onClick={() => handleQuality(2)} className="flex flex-col items-center gap-1 p-3 rounded-xl bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors font-medium">
              <ThumbsUp className="w-5 h-5" />
              <span className="text-xs">Knew it</span>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
