import assignedTasksReducer from '../../reducers/assignedTasks';
import {assignedTasks} from '../fixture';

test('should set default state', () => {
    const state = assignedTasksReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
  });
  
  test('should set tasks', () => {
    const action = {
      type: 'SET_ASSIGNEDTASKS',
      assignedTasks
    };
    const state = assignedTasksReducer(assignedTasks, action);
    expect(state).toEqual(assignedTasks);
  });

  test('should add a task', () => {
    const task = {
        name: "New Task",
        description: "this is new task",
        duration: "10",
        projectId: "1",
        id: 10
        };
    const action = {
      type: 'ADD_TASK',
      task
    };
    const state = assignedTasksReducer(assignedTasks, action);
    expect(state).toEqual([...assignedTasks, task]);
  });

  test('should delete a task', () => {
    const action = {
      type: 'DELETE_ASSIGNEDTASK',
      task: assignedTasks[0]
    };
    const state = assignedTasksReducer(assignedTasks, action);
    expect(state).toEqual([assignedTasks[1]]);
  });
