import React from 'react';
import DigitalClock from './digital-clock.jsx';
import AnalogClock from './analog-clock.jsx';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.updateClock();
        this.state = { currentTime: (new Date()).toLocaleString() };

    }

    updateClock() {
        setInterval(() => {
            //console.log('updating clock')
            this.setState({
                currentTime: (new Date()).toLocaleString()
            });
        }, 1000);
    }

    render() {
        return (
            <div>
                <DigitalClock currentTime={this.state.currentTime} />
                <AnalogClock currentTime = {this.state.currentTime} />
            </div>

        )
    }

    // life cycle events
    componentWillMount(){
        this.log('componentWillMount');
    }

    componentDidMount(e){
        this.log('componentDidMount');
    }

    componentWillReceiveProps(newProps){
        this.log('componentWillReceiveProps')
    }

    shouldComponentUpdate(newProps, newState){
        this.log('shouldComponentUpdate');
        return true;
    }

    componentWillUpdate(newProps, newState){
        this.log('componentWillUpdate')
    }

    componentDidUpdate(oldProps, oldSate){
        this.log('componentDidUpdate');
    }

    componentWillUnmount(){
        this.log('componentWillUnmount');
    }

    log(message){
        //console.log(message);
    }

}

export default Clock;