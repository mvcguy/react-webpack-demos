import React from 'react';

const Logo = function (props) {
    return <img src="logo.png" alt={props.label} onClick={props.handleClick} />
}

export default Logo;