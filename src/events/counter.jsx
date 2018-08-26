const React = require('react');

const Counter = (props) => {
    return (
        <span>Clicked <em>{props.counter}</em> times</span>
    );
}

module.exports = Counter;