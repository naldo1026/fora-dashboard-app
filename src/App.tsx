// react router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// layout
import Layout from "./layout/Layout"

// components
import Dashboard from "../src/pages/Dashboard"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />}></Route>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
