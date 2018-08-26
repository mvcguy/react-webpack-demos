const React = require('react');

class Calculator extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            FirstNumber: 0,
            SecondNumber: 0,
            Result: 0,
        };
    }

    Sum() {
        this.setState({ Result: this.state.FirstNumber + this.state.SecondNumber });
        this.forceUpdate();
    }

    Multiply() {
        this.setState({ Result: this.state.FirstNumber * this.state.SecondNumber });
    }

    onFirstNumberChange(event) {
        this.setState({ FirstNumber: event.target.value })
    }

    onSecondNumberChange(event) {
        this.setState({ SecondNumber: event.target.value })
    }

    render() {
        return (
            <div>
                <label htmlFor="first_number">Enter first Number</label>
                <input type="number" name="FirstNumber" id="first_number" value={this.state.FirstNumber}
                    onChange={this.onFirstNumberChange.bind(this)} />
                <br />
                <label htmlFor="second_number">Enter second Number</label>
                <input type="number" name="SecondNumber" id="second_number" value={this.state.SecondNumber}
                     onChange={this.onSecondNumberChange.bind(this)} />

                <button onClick={this.Sum.bind(this)}>+</button>
                <button>-</button>
                <button>/</button>
                <button onClick={this.Multiply.bind(this)}>*</button>

                <br />

                <span id="result">Result: {this.state.Result}</span>
            </div>
        );
    }
}

module.exports = Calculator;