//! Importing some useful hooks and a small component
import { useState, useReducer } from "react"
import CoinImage from "../child-component/CoinImage"
import reducer from "../reducer"

//! The main Container function 🤯
function Container() {
  //* Number of chances we could get
  const chances = ["Heads", "Tails"]
  //* Specifying variables to use with hooks
  const [flip, setFlip] = useState("Heads")
  const [{ headsScore, tailsScore }, dispatch] = useReducer(reducer, {
    headsScore: 0,
    tailsScore: 0,
  })

  //* Returns a random flip
  const returnRandomFlip = () => {
    const random = Math.floor(Math.random() * 2)
    // Setting flip to a random chance
    setFlip(chances[random])

    // This basically shows the number of heads and tails occurred
    flip === "Heads"
      ? dispatch({ score: "Heads" })
      : dispatch({ score: "Tails" })
  }

  //! JSX code </>
  return (
    <div className="Container">
      <div className="score">
        <h3>Heads: {headsScore}</h3>
        <h3>Tails: {tailsScore}</h3>
      </div>
      <CoinImage flip={flip} />
      <button onClick={returnRandomFlip}>Flip Coin</button>
    </div>
  )
}

export default Container
