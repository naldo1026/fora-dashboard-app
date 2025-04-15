// styles

// icons
import ArrowIcon from "../assets/icons/arrow-right-336-svgrepo-com.svg"

type MoveInOutCardProps = {
  companyName: string
  customerName: string
  date: string
  status: "moving in" | "moving out"
}

const MoveInOutCard = ({
  companyName,
  customerName,
  date,
  status,
}: MoveInOutCardProps) => {
  return (
    <div className="move-card">
      <div className="card-left">
        <strong>
          {companyName} - {customerName}
        </strong>
        <span>{date}</span>
      </div>

      <div className="card-right">
        <img src={ArrowIcon} alt={status} />
      </div>
    </div>
  )
}

export default MoveInOutCard
