import React from 'react';

//since we dont need state and also lifecycle methods, we can make this a stateless functional component
const AddEmployeeForm = (props) => {
    return (
        <div>
            <input
                className="text-input"
                onChange={props.onFirstNameChange}
                value={props.currentState.firstName}
                placeholder="First Name" />

            <input
                className="text-input"
                onChange={props.onLastNameChange}
                value={props.currentState.lastName}
                placeholder="Last Name" />

            <select
                className="select"
                onChange={props.onSupervisorSelect}>
                <option value="">Select Supervisor</option>
                {   //filter employees array to get supervisors only
                    props.employees.filter((employee) => {
                        return employee.supervisor === "";
                    }).map((employee) => {
                        return (
                            <option
                                key={employee.firstName}
                                value={`${employee.firstName} ${employee.lastName}`}>
                                {`${employee.firstName} ${employee.lastName}`}
                            </option>
                        );
                    })
                }
            </select>
            <div className="alignCenter">
                <button className="button" onClick={props.onSaveClick}>SAVE</button>
            </div>
        </div>
    );
}

export default AddEmployeeForm;