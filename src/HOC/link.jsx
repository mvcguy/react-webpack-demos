import React from 'react';

const Link = function (props) {
    return <a href="#" onClick={props.handleClick}>{props.label}</a>
}

export default Link;