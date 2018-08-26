import React from 'react';

const NameControl = function (props) {

    return (
        <div>
            <div>
                <label htmlFor={props.firstNameId}>{props.firstNameLabel}</label>
                <input
                    type="text"
                    name={props.firstNameName}
                    id={props.firstNameId}
                    value={props.firstNameValue}
                    placeholder={props.firstNamePlaceHolder}
                    onChange={props.onFirstNameChange} />
            </div>
            <br />
            <div>
                <label htmlFor={props.lastNameId}>{props.lastNameLabel}</label>
                <input
                    type="text"
                    name={props.lastNameName}
                    id={props.lastNameId}
                    value={props.lastNameValue}
                    placeholder={props.lastNamePlaceHolder}
                    onChange={props.onLastNameChange} />
            </div>


        </div>

    );
}
export default NameControl;