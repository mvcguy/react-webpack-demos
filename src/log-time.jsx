import React from 'react';

class LogTime extends React.Component {
    constructor(props) {
        super(props);
        this.ShowTime = this.ShowTime.bind(this);

    }

    ShowTime(event) {
        console.log('Current date time: ', (new Date()).toLocaleString());
        console.log(this.props);
    }

    render() {
        return (
            <div>
                <button onClick={this.ShowTime}>Log time</button>
            </div>
        );
    }
}

export default LogTime;