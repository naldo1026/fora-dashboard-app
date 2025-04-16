// styles
import "../styles/viewingCard.scss"

// icons
import ArrowIcon from "../assets/icons/arrow-right-336-svgrepo-com.svg"

// utils
import { formatTimestamp } from "../utils/formatTimestamp"

type ViewingCardProps = {
  roomId: string
  companyName: string
  date: string
}

const ViewingCard = ({ roomId, companyName, date }: ViewingCardProps) => {
  return (
    <div className="viewing-card">
      <div className="card-left">
        <strong>
          {roomId} - {companyName}
        </strong>
        <span>{formatTimestamp(date)}</span>
      </div>

      <div className="card-right">
        <img src={ArrowIcon} alt="View Details" />
      </div>
    </div>
  )
}

export default ViewingCard
