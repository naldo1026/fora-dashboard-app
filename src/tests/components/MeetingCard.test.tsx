import { render, screen } from "@testing-library/react"
import MeetingCard from "../../components/MeetingCard"
import "@testing-library/jest-dom"

describe("MeetingCard", () => {
  it("renders company name and time", () => {
    render(
      <MeetingCard
        roomId="MR.0X"
        companyName="ACME Corp"
        startTime="08:30"
        endTime="10:30"
        qrCodeUrl="https://example.com/qr.svg"
      />
    )

    expect(screen.getByText(/MR.0X – ACME Corp/i)).toBeInTheDocument()
    expect(screen.getByText(/08:30 – 10:30/i)).toBeInTheDocument()
  })
})
