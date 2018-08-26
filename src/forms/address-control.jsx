import React from 'react'

const AddressBox = function (props) {
    return <div>
        <label htmlFor="address">Address</label> <br />
        <textarea
            name="address"
            id="address"
            {...props}
            cols="30"
            rows="5"></textarea>
    </div>
}

export default AddressBox;