export const getRandomNumber = (max = 10, min = 1) =>
  Math.floor(Math.random() * max) + min

export const getRandomFruit = () => {
  const fruits = [
    'cello'
  ]

  return fruits[Math.floor(Math.random() * fruits.length)]
}

export const getTimeAgoInWords = (date: string): string => {
  const start = +new Date(date)
  const elapsed = +new Date() - start
  const seconds = Math.floor(elapsed / 1000)
  let interval = Math.floor(seconds / 31536000)

  if (interval > 1) {
    return `${interval} years`
  }
  interval = Math.floor(seconds / 2592000)
  if (interval > 1) {
    return `${interval} months`
  }
  interval = Math.floor(seconds / 86400)
  if (interval > 1) {
    return `${interval} days`
  }
  interval = Math.floor(seconds / 3600)
  if (interval > 1) {
    return `${interval} hours`
  }
  interval = Math.floor(seconds / 60)
  if (interval > 1) {
    return `${interval} minutes`
  }
  return `${Math.floor(seconds)} seconds`
}
