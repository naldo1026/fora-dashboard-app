// components
import DashboardHeader from "../components/DashboardHeader"
import MeetingList from "../components/MeetingList"
import ViewingList from "../components/ViewingList"
import MoveInOutList from "../components/MoveInOutList"

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
          <MoveInOutList />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
