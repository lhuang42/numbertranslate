import React from "react";
import NumberDropdown from "./NumberDropdown";
import NumberGuesser from "./NumberGuesser";

class Main extends React.Component {

  constructor() {
    super();
    this.state = {
      currentNumber: null,
      numbersToGenerate: 10,
      minNumber: 0,
      maxNumber: 100
    }
  }

  generateNumber = () => {
    var randomNumber = Math.floor(Math.random() * this.state.maxNumber);
    this.setState({currentNumber: randomNumber});
    console.log(randomNumber);
  }

  onMinChange = (number) => {
    this.setState({minNumber: number});
  }

  onMaxChange = (number) => {
    this.setState({maxNumber: number});
  }

  render() {
    return (
      <div className="columns">
        <div className="column is-narrow">
          <div>Minimum number</div>
          <NumberDropdown currentNumber={this.state.minNumber}
                          max={this.state.maxNumber}
                          onChange={this.onMinChange}/>
          <div>Maximum number</div>
          <NumberDropdown currentNumber={this.state.maxNumber} 
                          min={this.state.minNumber}
                          onChange={this.onMaxChange}/>
          <div>
            
          </div>
        </div>
        <div className="column">
          { this.state.currentNumber? <NumberGuesser currentNumber={this.state.currentNumber}/> : '' }
          <button className="button is-primary" 
                  onClick={this.generateNumber}>
            Generate
          </button>
        </div>
      </div>        
    )
  }
  
}

export default Main;