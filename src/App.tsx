// react router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// main dashboard component
import Layout from "./layout/Layout"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={<div>Hello Ronaldo This Is The Dashboard Page!</div>}
          ></Route>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
