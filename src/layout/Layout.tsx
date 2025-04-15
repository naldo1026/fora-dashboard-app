// react router
import { Outlet } from "react-router-dom"

// scss styles
import "../styles/layout.scss"

// components
import LeftSidePanel from "../components/LeftSidePanel"
import RightSidePanel from "../components/RightSidePanel"

const Layout = () => {
  return (
    <div className="layout">
      <aside className="left-panel">
        <LeftSidePanel />
      </aside>
      <main className="main-content">
        <Outlet />
      </main>

      <aside className="right-panel">
        <RightSidePanel />
      </aside>
    </div>
  )
}

export default Layout
