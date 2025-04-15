// react router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// layout
import Layout from "./layout/Layout"

// components
import Dashboard from "../src/pages/Dashboard"
import MeetingRoomAvailability from "./pages/MeetingRoomAvailability"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />}></Route>
          <Route
            path="meeting-room-availability"
            element={<MeetingRoomAvailability />}
          />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
