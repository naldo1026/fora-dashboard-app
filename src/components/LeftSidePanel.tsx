// images and icons
import Logo from "../assets/images/FORA_logomarque_black_1.png"
import Icon from "../assets/icons/Icon.svg"
import Calendar from "../assets/icons/Calendar.svg"
import CheckIn from "../assets/icons/Check-in.svg"
import LogOut from "../assets/icons/Log-out.svg"
import Building from "../assets/icons/Building.svg"

// react router
import { Link } from "react-router-dom"

// styles
import "../styles/leftSidePanel.scss"

const LeftSidePanel = () => {
  return (
    <div className="left-side-wrapper">
      <nav className="nav-icons">
        <img src={Logo} alt="FORA Logo" />

        <Link to="">
          <img src={Icon} alt="Home Dashboard" className="icon home-icon" />
        </Link>
        <Link to="/meeting-room-availability">
          <img src={Calendar} alt="Calendar" className="icon" />
        </Link>

        <img src={CheckIn} alt="QR Check In" className="icon" />
      </nav>

      <div className="bottom-icons">
        <img src={Building} alt="Building" className="icon" />

        <img src={LogOut} alt="Log Out" className="icon" />
      </div>
    </div>
  )
}

export default LeftSidePanel
