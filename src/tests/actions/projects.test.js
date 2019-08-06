import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../App';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startSetProjects, addProject, setProjects, updateProject } from '../../actions/projects';
import {projects} from '../fixture';
const createMockStore = configureMockStore([thunk]);

test('should setup add project action object with provided values', () => {
    const action = addProject(projects[1]);
    expect(action).toEqual({
        type: 'ADD_PROJECT',
        project: projects[1]
    });
});

test('should setup set projects action object with data', () => {
    const action = setProjects(projects);
    expect(action).toEqual({
      type: 'SET_PROJECTS',
      projects
    });
  });


  test('should setup update project action object', () => {
    const action = updateProject({...projects[0], duration: 3});
    expect(action).toEqual({
      type: 'UPDATE_PROJECT',
      project: {
          ...projects[0],
          duration: 3
      }
    });
  });  