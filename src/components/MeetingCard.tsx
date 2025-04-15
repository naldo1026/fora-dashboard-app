// styles
import "../styles/meetingCard.scss"

// qr image thats white
import QrIcon from "../assets/images/icons8-qr-50.png"

type MeetingCardProps = {
  roomId: string
  companyName: string
  startTime: string
  endTime: string
  qrCodeUrl: string
}
const MeetingCard = ({
  roomId,
  companyName,
  startTime,
  endTime,
  qrCodeUrl,
}: MeetingCardProps) => {
  return (
    <div className="meeting-card">
      <div className="card-left">
        <strong>
          {roomId} - {companyName}
        </strong>
        <span>
          {startTime} - {endTime}
        </span>
      </div>
      <div className="card-right">
        <img src={QrIcon} alt={qrCodeUrl} />
      </div>
    </div>
  )
}

export default MeetingCard
