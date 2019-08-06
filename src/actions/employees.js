import {url} from '../globals';

// SET_EMPLOYEES
export const setEmployees = (employees) => ({
    type: 'SET_EMPLOYEES',
    employees
});

//Fetch all employees from json file and dispatch action to save in redux store
export const startSetEmployees = () => {
    let tempUrl = `${url}employees`;
    return (dispatch) => {
        return fetch(tempUrl)
            .then(resp => resp.json())
            .then(data => {
                let employees = [];
                if (data.length > 0) {
                    employees = data.map((employee, index) => {
                        return (
                            employee
                        );
                    });
                }
                dispatch(setEmployees(employees));
            })
    }
}

//ADD_EMPLOYEE
export const addEmployee = (employee) => ({
    type: 'ADD_EMPLOYEE',
    employee
});

//save the new employee object into the json file using post method and dispatch action to update store.
export const startAddEmployee = (employee) => {
    const tempUrl = `${url}employees`;
    return (dispatch, getState) => {
        return fetch(tempUrl, {
            method: 'POST',
            body: JSON.stringify(employee),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(resp => resp.json())
            .then(data => {
                dispatch(addEmployee(data));
            })
    }
}

//UPDATE_EMPLOYEE
export const updateEmployee = (employee) => ({
    type: 'UPDATE_EMPLOYEE',
    employee
});

//save the project details in the  employee object into the json file using put method and dispatch action to update store.
export const startUpdateEmployee = (employee) => {
    const tempUrl = `${url}employees/${employee.id}`;
    return (dispatch, getState) => {
        return fetch(tempUrl, {
            method: 'PUT',
            body: JSON.stringify(employee),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(resp => resp.json())
            .then(data => {
                dispatch(updateEmployee(data));
            })
    }
}