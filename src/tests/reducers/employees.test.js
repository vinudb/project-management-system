import employeesReducer from '../../reducers/employees';

import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../App';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {employees} from '../fixture';
const createMockStore = configureMockStore([thunk]);

test('should set default state', () => {
    const state = employeesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
  });
  
  test('should set employees', () => {
    const action = {
      type: 'SET_EMPLOYEES',
      employees
    };
    const state = employeesReducer(employees, action);
    expect(state).toEqual(employees);
  });

  test('should add an employee', () => {
    const employee = {
        firstName: "New",
        lastName: "Employee",
        supervisor: "",
        project1: "",
        project2: "",
        id: 100
    };
    const action = {
      type: 'ADD_EMPLOYEE',
      employee
    };
    const state = employeesReducer(employees, action);
    expect(state).toEqual([...employees, employee]);
  });

  test('should update an employee', () => {
    const project1 = "";
    const action = {
      type: 'UPDATE_EMPLOYEE',
      employee: {
        ...employees[0],
        project1: ""
      }
    };
    const state = employeesReducer(employees, action);
    expect(state[0].project1).toBe(project1);
  });
