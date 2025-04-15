// components
import DashboardHeader from "../components/DashboardHeader"
import MeetingCard from "../components/MeetingCard"

// styles
import "../styles/dashboard.scss"

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <DashboardHeader />
      <div className="dashboard-wrapper">
        <MeetingCard />
      </div>
    </div>
  )
}

export default Dashboard
