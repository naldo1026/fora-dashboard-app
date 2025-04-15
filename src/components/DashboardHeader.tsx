// styles
import "../styles/dashboardHeader.scss"

const DashboardHeader = () => {
  return (
    <div className="dashboard-header">
      <h2>Hey, Joe</h2>
      <select className="building-select">
        <option>Stanley Building</option>
        <option>Chancery House</option>
      </select>
    </div>
  )
}

export default DashboardHeader
