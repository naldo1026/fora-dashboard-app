// react
import { useEffect, useState } from "react"

// components
import MoveInOutCard from "./MoveInOutCard"

// mocked data
import data from "../mocks/moveInOut.json"

type Move = {
  customers: {
    id: number
    companyName: string
    customerName: string
  }
  date: string
  status: string // should make this an enum
}
const MoveInOutList = () => {
  const [moves, setMoves] = useState<Move[]>([])

  useEffect(() => {
    setMoves(data.moveInMoveOut)
  }, [])

  return (
    <div className="move-list">
      <h3>Move in/out</h3>

      {moves.map((move, index) => (
        <MoveInOutCard
          key={index}
          customerName={move.customers.customerName}
          companyName={move.customers.companyName}
          date={move.date}
          status={move.status}
        />
      ))}
    </div>
  )
}

export default MoveInOutList
