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
    <nav className="left-side-nav">
      <Link to="/">
        <img src={Logo} alt="FORA Logo" />
      </Link>
      <Link to="">
        <img src={Icon} alt="Home Dashboard" className="icon" />
      </Link>
      <Link to="">
        <img src={Calendar} alt="Calendar" className="icon" />
      </Link>
      <Link to="">
        <img src={CheckIn} alt="QR Check In" className="icon" />
      </Link>

      <div>
        <Link to="">
          <img src={Building} alt="Building" className="icon" />
        </Link>
        <Link to="">
          <img src={LogOut} alt="Log Out" className="icon" />
        </Link>
      </div>
    </nav>
  )
}

export default LeftSidePanel
