import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import MeetingCard from "../../components/MeetingCard"

describe("MeetingCard", () => {
  it("renders correctly", () => {
    render(
      <MeetingCard
        roomId="MR.0X"
        companyName="Acme Corp"
        startTime="08:30"
        endTime="10:30"
        qrCodeUrl="https://example.com/qr.svg"
      />
    )

    expect(screen.getByText("Acme Corp")).toBeInTheDocument()
  })
})
