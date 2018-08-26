const React = require('react');
const ClickCounterButton = require('./click-counter-button');
const Counter = require('./counter');

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);

        this.state = { counter: 0 };
    }

    handleClick(event) {
        this.setState({ counter: ++this.state.counter });
    }

    render() {
        return (
            <div>
                <div style={{ border: '1px solid blue', padding:'10px', margin:'5px'}}>
                    <ClickCounterButton handler={this.handleClick} />
                    <br/>
                    <Counter counter={this.state.counter} />
                </div>

                <br />
                
            </div >
        );
    }
}

module.exports = Content;