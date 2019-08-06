import React from 'react';
import { connect } from 'react-redux';
import { startDeleteProject } from '../actions/projects';
import { startUpdateEmployee } from '../actions/employees';
import moment from 'moment';
import TasksList from './TasksList';
import { dateFormat } from '../globals';

class ProjectViewer extends React.Component {
    setProjectState = () => {
        return this.props.projects.filter((project) => { return project.id === this.props.projectId })[0];
    }

    onDeleteProject = () => {
        //get the employee object to whom this project is assigned
        let employee = this.props.employees.filter((item) => {
            return item.id == this.setProjectState().assignedTo;
        })[0];

        //update the employee object by emptying the project1 or project2 tag
        employee = {
            ...employee,
            project1: this.setProjectState().projectName === employee.project1 ? "" : employee.project1,
            project2: this.setProjectState().projectName === employee.project2 ? "" : employee.project2
        }

        //dispatch action to delete the project from DB and redux store
        this.props.startDeleteProject(this.setProjectState())
            .then(() => {
                //dispatch action to update the employee object after the project is deleted
                this.props.startUpdateEmployee(employee)
            });
        this.props.handleProjectViewer();
    }

    render() {
        return (
            <div>
                <div className="closeProjectViewerContainer">
                    <span className="closeProjectViewer" onClick={this.props.handleProjectViewer}>X</span>
                </div>
                <h3 className="title">{this.setProjectState().projectName}</h3>

                <div className="flexJustifySpaceBtw listItemProjectTile">
                    <div>
                        <div className="listItemTitleContrast">Start Date:
                            <span className="listItemValue">{moment(this.setProjectState().startDate).format(dateFormat)}</span>
                        </div>

                        <div className="listItemTitleContrast">End Date:
                            <span className="listItemValue">{moment(this.setProjectState().endDate).format(dateFormat)}</span>
                        </div>
                    </div>

                    <div className="projectItemRight">
                        <div className="listItemTitleContrast">Slack Time:
                            <span className="listItemValue">{this.setProjectState().slackTime}</span>
                        </div>

                        <div className="listItemTitleContrast">Project Duration:
                            <span className="listItemValue">{this.setProjectState().duration}</span>
                        </div>
                    </div>
                </div>

                <TasksList projectId={this.props.projectId} />
                <div className="alignCenter">
                    <button className="button" onClick={this.onDeleteProject}>Delete Project</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    projects: state.projects,
    employees: state.employees
});

const mapDispatchToProps = (dispatch, props) => ({
    startDeleteProject: (project) => dispatch(startDeleteProject(project)),
    startUpdateEmployee: (employee) => dispatch(startUpdateEmployee(employee))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectViewer);
