import React from 'react';

const ReviewLoanForm = function (props) {

    // var incomeSources = props.incomeSources.map(key, value, function () {
    //     return key + ":" + value;
    // });
    return (
        <div>
            <div>
                <span>Name: </span>
                <span>{props.name}</span>
            </div>
            <br />
            <div>
                <span>Gender: </span>
                <span>{JSON.stringify(props.gender)}</span>
            </div>
            <br />

            <div>
                <span>Income Sources: </span>
                <span>{JSON.stringify(props.incomeSources)}</span>
            </div>
            <br />
            <div>
                <span>Country: </span>
                <span>{props.country}</span>
            </div>
            <br/>
            <div>
                <span>Address: </span>
                <span>{props.address}</span>
            </div>

        </div>
    );
}

export default ReviewLoanForm;