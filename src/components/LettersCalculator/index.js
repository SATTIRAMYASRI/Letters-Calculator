// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {letterCount: 0}

  EnteringInput = event => {
    console.log(event.target.key)
    this.setState({
      letterCount: event.target.value.length,
    })
  }

  render() {
    const {letterCount} = this.state

    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          className="img-styling"
          alt="letters calculator"
        />
        <div className="text-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <div className="sub-text-container">
            <label htmlFor="Enter the phrase" className="labelEl">
              Enter the phrase
            </label>
            <br />
            <input
              id="Enter the phrase"
              placeholder="calculator"
              className="inputEl"
              onChange={this.EnteringInput}
            />
            <p className="text-count-container">No.of letters: {letterCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
