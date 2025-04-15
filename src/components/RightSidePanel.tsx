// icons
import Bell from "../assets/icons/Notifications.svg"
import Ticket from "../assets/icons/Ticket.svg"

// styles
import "../styles/rightSidePanel.scss"

const RightSidePanel = () => {
  return (
    <div className="right-icon-panel-wrapper">
      <img src={Bell} alt="Notifications Icon" className="bell" />
      <img src={Ticket} alt="Ticket Icon" className="ticket" />
    </div>
  )
}

export default RightSidePanel
