import React from 'react';

function DigitalClock (props)
{
    return(
        <div>
            <span>Digital Clock</span>
            <br/>
            <span>{props.currentTime}</span>
        </div>
    );
}

export default DigitalClock;

