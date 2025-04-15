// components
import DashboardHeader from "../components/DashboardHeader"

// styles
import "../styles/dashboard.scss"

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <DashboardHeader />
      <div className="dashboard-wrapper"></div>
    </div>
  )
}

export default Dashboard
