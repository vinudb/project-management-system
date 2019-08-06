import {url} from '../globals';

// SET_ASSIGNEDTASK
export const setAssignedTask = (assignedTasks) => ({
    type: 'SET_ASSIGNEDTASKS',
    assignedTasks
});

//Fetch all assignedTasks from json file and dispatch action to save in redux store
export const startSetAssignedTasks = (projectId) => {
    let tempUrl = `${url}projects/${projectId}/assignedTasks`;
    return (dispatch) => {
        return fetch(tempUrl)
            .then(resp => resp.json())
            .then(data => {
                let assignedTasks = [];
                if (data.length > 0) {
                    assignedTasks = data.map((task, index) => {
                        return (
                            task
                        );
                    });
                }
                dispatch(setAssignedTask(assignedTasks));
            })
    }
}

//ADD_TASK
export const addTask = (task) => ({
    type: 'ADD_TASK',
    task
});

//add new task object into the json file using post method and dispatch action to update store.
export const startAddTask = (task) => {
    const tempUrl = `${url}projects/${task.projectId}/assignedTasks`;
    return (dispatch, getState) => {
        return fetch(tempUrl, {
            method: 'POST',
            body: JSON.stringify(task),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(resp => resp.json())
            .then(data => {
                dispatch(addTask(data));
            })
    }
}

//DELETE_ASSIGNEDTASK
export const deleteAssignedTask = (task) => ({
    type: 'DELETE_ASSIGNEDTASK',
    task
});

//delete a task from the project
export const startDeleteAssignedTask = (task) => {
    const tempUrl = `${url}assignedTasks/${task.id}`;
    return (dispatch, getState) => {
        return fetch(tempUrl, {
            method: 'DELETE',
            body: JSON.stringify(task),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(resp => {
                return resp.json()
            })
            .then(data => {
                dispatch(deleteAssignedTask(task));
            })
    }
}
