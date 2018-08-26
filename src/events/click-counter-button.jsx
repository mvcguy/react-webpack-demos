const React = require('react');

const ClickCounterButton = (props) => {
    return (        
        <button onClick={props.handler} className="btn btn-info" >
            Click me
        </button>
    );
}

module.exports = ClickCounterButton;