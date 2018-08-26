import React from 'react';

const IncomeSources = function (props) {
    return <div>
        <label htmlFor="">Income sources</label> <br />
        <input
            type="checkbox"
            checked={props.incomeGroup['salary']}
            onChange={props.onIncomeGroupChange}
            value="salary"
            name="salary"
            id="i_sources_salary" />
        <label htmlFor="i_sources_salary">Salary</label>
        <br/>
        <input
            type="checkbox"
            checked={props.incomeGroup['personalBusiness']}
            onChange={props.onIncomeGroupChange}
            value="personalBusiness"
            name="personalBusiness"
            id="i_sources_personalBusiness" />
        <label htmlFor="i_sources_personalBusiness">Personal business</label>
    </div>
}

export default IncomeSources;