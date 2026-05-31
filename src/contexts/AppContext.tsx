import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'
import { getLessonCompletion, setLessonCompletion as setLC, getReviewData, type LessonCompletion, type ReviewItem } from '../utils/storage'

interface AppContextType {
  lessonCompletion: Record<number, LessonCompletion>
  reviewData: Record<string, ReviewItem>
  toggleLessonCompletion: (lessonId: number) => void
  refreshReviewData: () => void
}

const AppContext = createContext<AppContextType | null>(null)

export function AppProvider({ children }: { children: ReactNode }) {
  const [lessonCompletion, setLessonCompletionState] = useState<Record<number, LessonCompletion>>(getLessonCompletion)
  const [reviewData, setReviewDataState] = useState<Record<string, ReviewItem>>(getReviewData)

  const toggleLessonCompletion = useCallback((lessonId: number) => {
    const current = lessonCompletion[lessonId]?.completed ?? false
    setLC(lessonId, !current)
    setLessonCompletionState(getLessonCompletion())
  }, [lessonCompletion])

  const refreshReviewData = useCallback(() => {
    setReviewDataState(getReviewData())
  }, [])

  return (
    <AppContext.Provider value={{ lessonCompletion, reviewData, toggleLessonCompletion, refreshReviewData }}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  const context = useContext(AppContext)
  if (!context) throw new Error('useAppContext must be used within AppProvider')
  return context
}
