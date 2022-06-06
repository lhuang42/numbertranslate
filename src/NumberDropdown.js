import React from "react";

class NumberDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentNumber: props.currentNumber,
      numbers: [
        [0, '0'],
        [100, '100'],
        [1000, '1,000'],
        [10000, '10,000'],
        [100000, '100,000'],
        [1000000, '1,000,000'],
        [1000000000, '1,000,000,000'],
        [10000000000, '10,000,000,000']
      ]
    };
  }

  handleChange = (event) => {
    this.setState({currentNumber: event.target.value});
    this.props.onChange(event.target.value);
  }

  isDisabled(number) {
    if (this.props.min) {
      return number <= this.props.min;
    } else if (this.props.max) {
      return number >= this.props.max;
    }
    return false;
  }

  generateOptions() {
    return this.state.numbers.map((number) => {
      var disabled = this.isDisabled(number[0]);
      return <option value={number[0]} disabled={disabled} key={number[0]}>{number[1]}</option>
    });
  }

  render() {
    const options = this.generateOptions();
  
    return (
      <div className="select">
        <select value={this.state.currentNumber} onChange={this.handleChange}>
          {options}
        </select>
      </div>
    )
  }
}

export default NumberDropdown;