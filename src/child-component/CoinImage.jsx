//! Importing images of coins to display
import heads from "../images/head.png"
import tails from "../images/tails.png"

//! The main CoinImage function 🤯
function CoinImage({ flip }) {
  //! JSX code </>
  return (
    <div className="coinImg">
      {
        //* If the flip is heads, then display heads coin and vice versa
        flip === "Heads" ? (
          <img src={heads} alt="heads" />
        ) : (
          <img src={tails} alt="tails" />
        )
      }
    </div>
  )
}

export default CoinImage
