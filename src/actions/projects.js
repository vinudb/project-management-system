import {url} from '../globals';

// SET_PROJECTS
export const setProjects = (projects) => ({
    type: 'SET_PROJECTS',
    projects
});

//Fetch all projects from json file and dispatch action to save in redux store
export const startSetProjects = () => {
    let tempUrl = `${url}projects`;
    return (dispatch) => {
        return fetch(tempUrl)
            .then(resp => resp.json())
            .then(data => {
                let projects = [];
                if (data.length > 0) {
                    projects = data.map((project, index) => {
                        return (
                            project
                        );
                    });
                }
                dispatch(setProjects(projects));
            })
    }
}


//DELETE_PROJECT
export const deleteProject = (project) => ({
    type: 'DELETE_PROJECT',
    project
});

//delete a project from the DB
export const startDeleteProject = (project) => {
    const tempUrl = `${url}projects/${project.id}`;
    return (dispatch, getState) => {
        return fetch(tempUrl, {
            method: 'DELETE',
            body: JSON.stringify(project),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(resp => {
                return resp.json()
            })
            .then(data => {
                dispatch(deleteProject(project));
            })
    }
}

//ADD_PROJECT
export const addProject = (project) => ({
    type: 'ADD_PROJECT',
    project
});

//save the new project object into the json file using post method and dispatch action to update store.
export const startAddProject = (project) => {
    const tempUrl = `${url}projects`;
    return (dispatch, getState) => {
        return fetch(tempUrl, {
            method: 'POST',
            body: JSON.stringify(project),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(resp => resp.json())
            .then(data => {
                dispatch(addProject(data));
            })
    }
}

//UPDATE_PROJECT
export const updateProject = (project) => ({
    type: 'UPDATE_PROJECT',
    project
});

//update the project object into the json file using put method and dispatch action to update store.
export const startUpdateProject = (project) => {
    const tempUrl = `${url}projects/${project.id}`;
    return (dispatch, getState) => {
        return fetch(tempUrl, {
            method: 'PUT',
            body: JSON.stringify(project),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(resp => resp.json())
            .then(data => {
                dispatch(updateProject(data));
            })
    }
}
