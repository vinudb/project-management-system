const employeesDefault = [];

export default (state = employeesDefault, action) => {
    let employees = [];
    switch (action.type) {
        case 'SET_EMPLOYEES':
            return action.employees;
        case 'ADD_EMPLOYEE':
            return [...state, action.employee];
        case 'UPDATE_EMPLOYEE':
            employees = state.map((employee) => {
                if (employee.id === action.employee.id) {
                    return action.employee;
                } else {
                    return employee;
                };
            });
        default:
            return state;
    }
}