// react
import { useEffect, useState } from "react"

// mocked data
import meetingsData from "../mocks/meeting.json"

// component
import MeetingCard from "./MeetingCard"

// styles
import "../styles/meetingList.scss"

type Meeting = {
  id: number
  meetingRoom: {
    id: string
    name: string
    buildingId: string
  }
  customers: {
    id: number
    companyName: string
    customerName: string
  }
  startTime: string
  endTime: string
  qrCodeUrl: string
  bookedAt: string
}
const MeetingList = () => {
  const [meetings, setMeetings] = useState<Meeting[]>([])

  useEffect(() => {
    setMeetings(meetingsData.meetings)
  }, [])

  return (
    <div className="meeting-list">
      <h3>Meetings</h3>

      {meetings.map((m) => (
        <MeetingCard
          key={m.id}
          roomId={m.meetingRoom.id}
          companyName={m.customers.companyName}
          startTime={m.startTime}
          endTime={m.endTime}
          qrCodeUrl={m.qrCodeUrl}
        />
      ))}
    </div>
  )
}

export default MeetingList
