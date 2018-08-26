import React, { Component } from 'react';

const CountriesBox = function (props) {
    return <div>
        <label htmlFor="country">Select your country</label> <br />
        <select
            name="country"
            id="country"
            {...props}>
            <option value="Pakistan">Pakistan</option>
            <option value="Norway">Norway</option>
            <option value="Sweden">Sweden</option>
            <option value="Finland">Finland</option>
        </select>

    </div>
}

// class CountriesBox extends Component {
//     render() {
//         return <div>
//             <label htmlFor="">Select your country</label>
//         </div>
//     }
// }

export default CountriesBox;