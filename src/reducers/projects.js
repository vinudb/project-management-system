const projectsDefault = [];

export default (state = projectsDefault, action) => {
    let projects = [];
    switch (action.type) {
        case 'SET_PROJECTS':
            return action.projects;
        case 'ADD_PROJECT':
            return [...state, action.project];
        case 'DELETE_PROJECT':
            projects = state.filter((item, index) => {
                return item.id !== action.project.id;
            });
            return projects;
        case 'UPDATE_PROJECT':
            projects = state.map((project) => {
                if (project.id === action.project.id) {
                    return action.project;
                } else {
                    return project;
                };
            });
            return projects;
        default:
            return state;
    }
}