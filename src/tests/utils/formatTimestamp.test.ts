import "@testing-library/jest-dom"
import { formatTimestamp } from "../../utils/formatTimestamp"

describe("formatTimestamp", () => {
  it("formats 2024-04-22T15:30:00Z as Monday 22nd @15:30", () => {
    const timestamp = "2024-04-22T15:30:00Z"
    const output = formatTimestamp(timestamp)
    expect(output).toBe("Monday 22nd @15:30")
  })

  it("checks if the 1st, 2nd and 3rd suffixes work", () => {
    expect(formatTimestamp("2024-01-01T10:00:00Z")).toBe("Monday 1st @10:00")
    expect(formatTimestamp("2024-01-02T10:00:00Z")).toBe("Tuesday 2nd @10:00")
    expect(formatTimestamp("2024-01-03T10:00:00Z")).toBe("Wednesday 3rd @10:00")
  })
})
