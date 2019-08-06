import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../App';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { addTask, setAssignedTask, deleteAssignedTask } from '../../actions/assignedTasks';
import {assignedTasks} from '../fixture';
const createMockStore = configureMockStore([thunk]);

test('should setup add task action object with provided values', () => {
    const action = addTask(assignedTasks[1]);
    expect(action).toEqual({
        type: 'ADD_TASK',
        task: assignedTasks[1]
    });
});

test('should setup set tasks action object with data', () => {
    const action = setAssignedTask(assignedTasks);
    expect(action).toEqual({
      type: 'SET_ASSIGNEDTASKS',
      assignedTasks
    });
  });


  test('should setup delete task action object', () => {
    const action = deleteAssignedTask(assignedTasks[0]);
    expect(action).toEqual({
      type: 'DELETE_ASSIGNEDTASK',
      task: assignedTasks[0]
    });
  });  