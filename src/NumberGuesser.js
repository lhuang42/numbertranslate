import React from "react";
import n2words from 'n2words';

class NumberGuesser extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userAnswer: '',
      showIncorrect: false,
      showCorrect: false,
      tries: 0
    };
  }

  handleChange = (event) => {
    this.setState({
      userAnswer: event.target.value, 
      showIncorrect: false, 
      showCorrect: false
    });
  }

  handleSubmit = () => {
    this.checkSpanish();
  }

  checkSpanish = () => {
    var currentNumber = this.props.currentNumber;
    var word = n2words(currentNumber, {lang: 'es'});
    if (this.state.userAnswer == word) {
      this.setState({showCorrect: true});
    } else {
      this.setState({showIncorrect: true, tries: this.state.tries+1});
    }
  }

  render() {
    var currentNumberDisplay = (this.props.currentNumber).toLocaleString('en-US');
    return (
      <div>
        <h1 className="title is-1" key={this.props.currentNumber}>
          {currentNumberDisplay}
        </h1>
        <div className="field has-addons">
          <div className="control">
            <input className="input" type="text" value={this.state.userAnswer} onChange={this.handleChange} placeholder="Translate into Spanish"/>
          </div>
          <div className="control">
            <button className="button is-info" onClick={this.handleSubmit}>Submit</button>
          </div>
        </div>
        { 
          this.state.showIncorrect ? 
          <article className="message is-danger">
            <div className="message-body">
              Wrong answer. Try again
            </div>
          </article> : ''
        }
        { 
          this.state.showCorrect ? 
          <article className="message is-success">
            <div className="message-body">
              Correct!
            </div>
          </article> : ''
        }
      </div>
    );
  }

}

export default NumberGuesser;