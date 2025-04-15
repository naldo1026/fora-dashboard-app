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
    const timer = setTimeout(() => {
      setMeetings(meetingsData.meetings)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="meeting-list">
      <h3>Meetings</h3>

      {!meetings.length && <div>Loading...</div>}

      {/* add skeleton component if theres time */}

      {meetings.map((meeting) => (
        <MeetingCard
          key={meeting.id}
          roomId={meeting.meetingRoom.id}
          companyName={meeting.customers.companyName}
          startTime={meeting.startTime}
          endTime={meeting.endTime}
          qrCodeUrl={meeting.qrCodeUrl}
        />
      ))}
    </div>
  )
}

export default MeetingList
