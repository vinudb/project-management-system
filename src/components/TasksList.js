import React from 'react';
import { connect } from 'react-redux';
import TaskItem from './TaskItem';
import AddTask from './AddTask';
import moment from 'moment';
import { startSetAssignedTasks, startAddTask, startDeleteAssignedTask } from '../actions/assignedTasks';
import { startUpdateProject } from '../actions/projects';

class TasksList extends React.Component {
    state = {
        isAddTask: false
    }

    componentDidMount() {
        //fetch assignedTasks for this project from DB
        this.props.startSetAssignedTasks(this.setProjectState().id);
    }

    setProjectState = () => {
        return this.props.projects.filter((project) => { return project.id === this.props.projectId })[0];
    }

    onAddTask = () => this.setState({ isAddTask: !this.state.isAddTask });

    onDeleteTask = (task) => {
        //update duration and enddate of the project by reducing deleted task's duration
        const projectDuration = parseInt(this.setProjectState().duration) - parseInt(task.duration)
        const endDate = moment(this.setProjectState().endDate).subtract(parseInt(task.duration), "days");
        const project = { ...this.setProjectState(), duration: projectDuration, endDate }
        //dispatch action to update the project with latest duration and enddate
        this.props.startUpdateProject(project)
            .then(() => {
                //delete the assignedTask from the project from DB and also update the redux store. 
                this.props.startDeleteAssignedTask(task);
            });
    }

    saveTask = (task) => {
        //update duration and enddate of the project by adding new task's duration
        const projectDuration = parseInt(this.setProjectState().duration) + parseInt(task.duration);
        const endDate = moment(this.setProjectState().startDate).add(projectDuration, "days");
        const project = { ...this.setProjectState(), duration: projectDuration, endDate }
        //save the task to the db json file and also update the redux store. 
        this.props.startAddTask({ ...task, projectId: this.setProjectState().id })
            .then(() => {
                //update the project with latest duration and enddate in DB and redux store
                this.props.startUpdateProject(project)
                    .then(() => this.setState({ isAddTask: !this.state.isAddTask }))
            })
    }

    render() {
        return (
            <div>
                {
                    this.props.assignedTasks.map((task) => {
                        return <TaskItem onDeleteTask={this.onDeleteTask} task={task} key={task.name} />
                    })
                }

                {
                    this.state.isAddTask && <AddTask saveTask={this.saveTask} />
                }
                <div className="alignCenter">
                    <button className="button" onClick={this.onAddTask}>Add Task</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    projects: state.projects,
    assignedTasks: state.assignedTasks,
    employees: state.employees
});

const mapDispatchToProps = (dispatch, props) => ({
    startSetAssignedTasks: (projectId) => dispatch(startSetAssignedTasks(projectId)),
    startAddTask: (task) => dispatch(startAddTask(task)),
    startDeleteAssignedTask: (task) => dispatch(startDeleteAssignedTask(task)),
    startUpdateProject: (project) => dispatch(startUpdateProject(project))
});

export default connect(mapStateToProps, mapDispatchToProps)(TasksList);