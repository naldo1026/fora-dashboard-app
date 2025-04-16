// dayjs
import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"

dayjs.extend(utc)

const getSuffix = (number: number): string => {
  const suffix = ["th", "st", "nd", "rd"]
  const v = number % 100
  return suffix[(v - 20) % 10] || suffix[v] || suffix[0]
}

const formatTimestamp = (isoDate: string): string => {
  const date = dayjs.utc(isoDate)
  const dayName = date.format("dddd")
  const day = date.date()
  const time = date.format("HH:mm")
  const suffix = getSuffix(day)

  return `${dayName} ${day}${suffix} @${time}`
}

export { formatTimestamp }
