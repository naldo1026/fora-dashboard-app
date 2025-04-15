// images and icons
import Logo from "../assets/images/FORA_logomarque_black_1.png"

// react router
import { Link } from "react-router-dom"

const LeftSidePanel = () => {
  return (
    <nav className="left-side-nav">
      <Link to="/">
        <img src={Logo} alt="FORA Logo" />
      </Link>
    </nav>
  )
}

export default LeftSidePanel
