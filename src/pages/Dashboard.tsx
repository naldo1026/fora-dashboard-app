// components
import DashboardHeader from "../components/DashboardHeader"
import MeetingList from "../components/MeetingList"
// styles
import "../styles/dashboard.scss"

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <DashboardHeader />
      <div className="dashboard-wrapper">
        <MeetingList />
      </div>
    </div>
  )
}

export default Dashboard
