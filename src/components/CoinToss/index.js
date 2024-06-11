// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    isHead: true,
    tossResult : 0,
    total: 0,
    headCount : 0,
    tailCount : 0
  }

  onClickBtn = () => {
    const {isHead} = this.state
    const tossResult = Math.floor(Math.random() * 2);
    this.setState((prevState) => ({
      tossResult: tossResult,
      isHead: tossResult !== 0 ? false : true,
      total: prevState.total + 1,
      headCount: tossResult === 0? prevState.headCount + 1: prevState.headCount,
      tailCount: tossResult !== 0? prevState.tailCount + 1: prevState.tailCount
    }));
  }
  
  

  render() {
    const {isHead, total, headCount, tailCount} = this.state


    return (
      <div className="container">
        <div className="inner-container">
          <h1> Coin Toss Game </h1>
          <p> Heads (or) Tails </p>
          {isHead ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
              alt="heads"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
              alt="tails"
            />
          )}
          <button type="button" onClick={this.onClickBtn}>
            Toss Coin
          </button>
          <div className = "count-container">
            <p> Total: {total} </p>
            <p> Head: {headCount} </p>
            <p> Tail: {tailCount} </p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss