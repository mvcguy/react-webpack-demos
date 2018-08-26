import React from 'react';

function AnalogDisplay(props) {

    let date = new Date(props.currentTime);
    let dialStyle = {
        position: 'relative',
        top: 0,
        left: 0,
        width: 200,
        height: 200,
        borderRadius: 20000,
        borderStyle: 'solid',
        borderColor: 'black'
    };

    let secondHandleStyle = {
        position: 'relative',
        top: 100,
        left: 100,
        border: '1px solid red',
        width: '40%',
        height: 1,
        transform: 'rotate(' + ((date.getSeconds() / 60) * 360 - 90).toString() + 'deg)',
        transformOrigin: '0% 0%',
        background: 'red'
    };



    let minuteHandleStyle = {
        position: 'relative',
        top: 100,
        left: 100,
        border: '1px solid gray',
        width: '40%',
        height: 3,
        transform: 'rotate(' + ((date.getMinutes() / 60) * 360 - 90).toString() + 'deg)',
        transformOrigin: '0% 0%',
        background:'gray'
    };

    let hoursHandleStyle = {
        position: 'relative',
        top: 92,
        left: 106,
        border: '1px solid gray',
        width: '20%',
        height: 7,
        transform: 'rotate(' + ((date.getHours() / 60) * 360 - 90).toString() + 'deg)',
        transformOrigin: '0% 0%',
        background:'gray'
    };

    return (
        <div>
            <span>Analog Clock</span>
            <br />
            <div style={dialStyle}>
                <div style={secondHandleStyle}></div>
                <div style={minuteHandleStyle}></div>
                <div style={hoursHandleStyle}></div>
            </div>
        </div>

    );

}

export default AnalogDisplay;