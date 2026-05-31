export interface LessonCompletion {
  completed: boolean
  completedAt: string
}

export interface ReviewItem {
  nextReview: string
  interval: number
  easeFactor: number
  repetitions: number
  lastReview: string
}

export interface QuizRecord {
  date: string
  score: number
  total: number
  lessonIds: number[]
}

const KEYS = {
  LESSON_COMPLETION: 'be_lesson_completion',
  REVIEW_DATA: 'be_review_data',
  QUIZ_HISTORY: 'be_quiz_history',
} as const

export function getLessonCompletion(): Record<number, LessonCompletion> {
  try {
    const data = localStorage.getItem(KEYS.LESSON_COMPLETION)
    return data ? JSON.parse(data) : {}
  } catch {
    return {}
  }
}

export function setLessonCompletion(lessonId: number, completed: boolean): void {
  const data = getLessonCompletion()
  data[lessonId] = {
    completed,
    completedAt: new Date().toISOString(),
  }
  localStorage.setItem(KEYS.LESSON_COMPLETION, JSON.stringify(data))
}

export function isLessonCompleted(lessonId: number): boolean {
  const data = getLessonCompletion()
  return data[lessonId]?.completed ?? false
}

export function getReviewData(): Record<string, ReviewItem> {
  try {
    const data = localStorage.getItem(KEYS.REVIEW_DATA)
    return data ? JSON.parse(data) : {}
  } catch {
    return {}
  }
}

export function setReviewItem(itemId: string, item: ReviewItem): void {
  const data = getReviewData()
  data[itemId] = item
  localStorage.setItem(KEYS.REVIEW_DATA, JSON.stringify(data))
}

export function getReviewItem(itemId: string): ReviewItem | null {
  const data = getReviewData()
  return data[itemId] ?? null
}

export function addToReviewQueue(itemId: string): void {
  const existing = getReviewItem(itemId)
  if (!existing) {
    setReviewItem(itemId, {
      nextReview: new Date().toISOString(),
      interval: 0,
      easeFactor: 2.5,
      repetitions: 0,
      lastReview: '',
    })
  }
}

export function getQuizHistory(): QuizRecord[] {
  try {
    const data = localStorage.getItem(KEYS.QUIZ_HISTORY)
    return data ? JSON.parse(data) : []
  } catch {
    return []
  }
}

export function addQuizRecord(record: QuizRecord): void {
  const history = getQuizHistory()
  history.push(record)
  localStorage.setItem(KEYS.QUIZ_HISTORY, JSON.stringify(history))
}

export function getCompletedLessonCount(): number {
  const data = getLessonCompletion()
  return Object.values(data).filter((v) => v.completed).length
}

export function getLearnedVocabCount(lessonIds?: number[]): number {
  const completion = getLessonCompletion()
  if (lessonIds) {
    return lessonIds.filter((id) => completion[id]?.completed).length
  }
  return Object.values(completion).filter((v) => v.completed).length
}
