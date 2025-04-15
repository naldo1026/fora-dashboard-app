// react
import { useState } from "react"

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

  return <></>
}

export default MeetingList
