// react
import { useEffect, useState } from "react"

// components
import MoveInOutCard from "./MoveInOutCard"

// mocked data
import data from "../mocks/moveInOut.json"

// styles
import "../styles/MoveInOutList.scss"

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
    const timer = setTimeout(() => {
      setMoves(data.moveInMoveOut)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="move-list">
      <h3>Move in/out</h3>

      {!moves.length && <div>Loading...</div>}

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
