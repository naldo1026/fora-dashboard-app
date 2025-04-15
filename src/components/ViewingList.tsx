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
    setViewings(viewingsData.viewings)
  }, [])

  return (
    <div className="viewing-list">
      <h3>Viewings</h3>

      {viewings.map((viewing) => (
        <ViewingCard
          key={viewing.id}
          roomId={viewing.id}
          companyName={viewing.potentialMember.companyName}
          dateLabel={viewing.date}
        />
      ))}
    </div>
  )
}
export default ViewingList
