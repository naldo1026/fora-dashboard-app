// components
import DashboardHeader from "../components/DashboardHeader"
import MeetingList from "../components/MeetingList"
import ViewingList from "../components/ViewingList"

// styles
import "../styles/dashboard.scss"

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <DashboardHeader />

      <div className="dashboard-wrapper">
        <div className="left-content">
          <MeetingList />
        </div>

        <div className="right-content">
          <ViewingList />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
