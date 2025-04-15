// styles
import "../styles/viewingList.scss"

// components
import ViewingCard from "./ViewingCard"

// mocked data
import viewingsData from "../mocks/viewings.json"

// react
import { useEffect, useState } from "react"

type Viewing = {
  id: string
  potentialMember: {
    id: number
    companyName: string
    customerName: string
  }
  date: string
}

const ViewingList = () => {
  const [viewings, setViewings] = useState<Viewing[]>([])

  useEffect(() => {
    const timer = setTimeout(() => {
      setViewings(viewingsData.viewings)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="viewing-list">
      <h3>Viewings</h3>

      {!viewings.length && <div>Loading...</div>}

      {/* add skeleton component if theres time */}

      {viewings.map((viewing) => (
        <ViewingCard
          key={viewing.id}
          roomId={viewing.id}
          companyName={viewing.potentialMember.companyName}
          date={viewing.date}
        />
      ))}
    </div>
  )
}
export default ViewingList
