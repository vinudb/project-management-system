import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import employees from '../reducers/employees';
import projects from '../reducers/projects';
import assignedTasks from '../reducers/assignedTasks';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(combineReducers({
    employees,
    projects,
    assignedTasks
  }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};