const assignedTasksDefault = [];

export default (state = assignedTasksDefault, action) => {
    let assignedTasks = [];
    switch (action.type) {
        case 'SET_ASSIGNEDTASKS':
            return action.assignedTasks;
        case 'ADD_TASK':
            return [...state, action.task];
        case 'DELETE_ASSIGNEDTASK':
            assignedTasks = state.filter((item, index) => {
                return item.id !== action.task.id;
            });
            return assignedTasks;
        default:
            return state;
    }
}