import React from 'react';

const GenderControl = function (props) {
    return (
        <div>
            <label >Gender: </label> <br/>
            <input
                type="radio"
                value='male'
                onChange={props.onGenderChange}
                checked={props.genderGroup['male']}
                name={props.genderName}
                id={props.genderId + '_m'} />
                <label htmlFor={props.genderId + '_m'}>Male</label>
                <br/>
            <input
                type="radio"
                value='female'
                onChange={props.onGenderChange}
                checked={props.genderGroup['female']}
                name={props.genderName}
                id={props.genderId + '_f'} />
                <label htmlFor={props.genderId + '_f'}>Female</label>
        </div>
    );
}

export default GenderControl;