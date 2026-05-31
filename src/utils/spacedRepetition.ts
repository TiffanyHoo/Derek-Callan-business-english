import { getReviewData, setReviewItem, type ReviewItem } from './storage'

export type Quality = 0 | 1 | 2

export function scheduleReview(itemId: string, quality: Quality): void {
  const data = getReviewData()
  const item = data[itemId] ?? {
    nextReview: new Date().toISOString(),
    interval: 0,
    easeFactor: 2.5,
    repetitions: 0,
    lastReview: '',
  }

  if (quality === 0) {
    item.repetitions = 0
    item.interval = 1
  } else if (quality === 1) {
    item.interval = Math.max(1, Math.floor(item.interval * 0.5))
  } else {
    if (item.repetitions === 0) {
      item.interval = 1
    } else if (item.repetitions === 1) {
      item.interval = 3
    } else {
      item.interval = Math.round(item.interval * item.easeFactor)
    }
    item.repetitions += 1
  }

  item.easeFactor = Math.max(
    1.3,
    item.easeFactor + (0.1 - (2 - quality) * (0.08 + (2 - quality) * 0.02))
  )

  const nextDate = new Date()
  nextDate.setDate(nextDate.getDate() + item.interval)
  item.nextReview = nextDate.toISOString()
  item.lastReview = new Date().toISOString()

  setReviewItem(itemId, item)
}

export function getTodayReviewItems(): string[] {
  const data = getReviewData()
  const now = new Date()
  return Object.entries(data)
    .filter(([, item]) => new Date(item.nextReview) <= now)
    .map(([id]) => id)
    .sort((a, b) => {
      const itemA = data[a]
      const itemB = data[b]
      return new Date(itemA.nextReview).getTime() - new Date(itemB.nextReview).getTime()
    })
}

export function getUpcomingReviewCount(): number {
  return getTodayReviewItems().length
}

export function getReviewStats() {
  const data = getReviewData()
  const total = Object.keys(data).length
  const now = new Date()
  const due = Object.values(data).filter(
    (item) => new Date(item.nextReview) <= now
  ).length
  const upcoming = Object.values(data).filter((item) => {
    const reviewDate = new Date(item.nextReview)
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 7)
    return reviewDate > now && reviewDate <= tomorrow
  }).length

  return { total, due, upcoming }
}
