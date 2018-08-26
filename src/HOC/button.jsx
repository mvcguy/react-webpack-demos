import React from 'react'

const Button = function (props) {
    return (
        <button
            className='btn btn-primary'
            onClick={props.handleClick}>
            {props.label}
        </button>)
}

export default Button;