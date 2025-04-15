// react router
import { Outlet } from "react-router-dom"

// scss styles
import "../styles/layout.scss"

const Layout = () => {
  return (
    <div className="layout">
      <aside className="left-panel">Left Panel</aside>
      <main className="main-content">
        <Outlet />
      </main>

      <aside className="right-panel">Right Panel</aside>
    </div>
  )
}

export default Layout
