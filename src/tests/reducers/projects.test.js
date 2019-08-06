import projectsReducer from '../../reducers/projects';
import {projects} from '../fixture';

test('should set default state', () => {
    const state = projectsReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
  });
  
  test('should set projects', () => {
    const action = {
      type: 'SET_PROJECTS',
      projects
    };
    const state = projectsReducer(projects, action);
    expect(state).toEqual(projects);
  });

  test('should add a project', () => {
    const project = {
        startDate: "2019-08-11T10:00:00.000Z",
        endDate: "2019-08-22T10:00:00.000Z",
        projectName: "My project",
        slackTime: "1",
        duration: 2,
        assignedTo: "1",
        id: 100
    };
    const action = {
      type: 'ADD_PROJECT',
      project
    };
    const state = projectsReducer(projects, action);
    expect(state).toEqual([...projects, project]);
  });

  test('should update a project', () => {
    const duration = 5;
    const action = {
      type: 'UPDATE_PROJECT',
      project: {
        ...projects[0],
        duration
      }
    };
    const state = projectsReducer(projects, action);
    expect(state[0].duration).toBe(duration);
  });

  test('should delete a project', () => {
    const action = {
      type: 'DELETE_PROJECT',
      project: projects[0]
    };
    const state = projectsReducer(projects, action);
    expect(state).toEqual([projects[1]]);
  });
