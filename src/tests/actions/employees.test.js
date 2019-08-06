import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../App';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startSetEmployees, addEmployee, setEmployees, updateEmployee } from '../../actions/employees';
import { employees } from '../fixture';
const createMockStore = configureMockStore([thunk]);

export const test1 = it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('should setup add employee action object with provided values', () => {
  const action = addEmployee(employees[2]);
  expect(action).toEqual({
    type: 'ADD_EMPLOYEE',
    employee: employees[2]
  });
});

test('should setup set employees action object with data', () => {
  const action = setEmployees(employees);
  expect(action).toEqual({
    type: 'SET_EMPLOYEES',
    employees
  });
});

test('should fetch the employees from database', (done) => {
  const store = createMockStore();
  store.dispatch(startSetEmployees()).then(() => {
    const actions = store.getActions();
    expect.objectContaining({
      type: 'SET_EMPLOYEES',
      employees
    });
    done();
  });
});

test('should setup update employee action object', () => {
  const action = updateEmployee({ ...employees[0], project1: "New Project" });
  expect(action).toEqual({
    type: 'UPDATE_EMPLOYEE',
    employee: {
      ...employees[0],
      project1: "New Project"
    }
  });
});