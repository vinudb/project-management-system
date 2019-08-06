import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import {startAddProject} from '../actions/projects';
import {startUpdateEmployee} from '../actions/employees';
import AddProjectForm from './AddProjectForm';

class AddProject extends React.Component {

    state = {
        startDate: undefined,
        endDate: undefined,
        projectName: "",
        slackTime: "",
        duration: 1,
        assignedTo: ""
    };

    handleDateChange = ({ startDate }) => this.setState({ startDate });

    onNameChange = (e) => this.setState({ projectName: e.target.value });

    onSlackTimeChange = (e) => {
        let slackTime = e.target.value;
        if (!slackTime || slackTime.match(/^([1-9][0-9]{0,2}|1000)$/)) {
            //update the duration on slack time change
            const duration = slackTime.length===0 ? 1 : 1 + parseInt(slackTime);
                this.setState({ slackTime, duration });
        }
    }

    onEmployeeSelect = (e) => this.setState({ assignedTo: e.target.value });

    onSaveProjectClick = () =>{
        if(this.state.startDate === undefined ||
            this.state.projectName === "" ||
            this.state.assignedTo === "" 
        ){
            alert("Please fill all the details before saving");
            return;
        }
        //get the endDate for the project based on startDate and slacktime
        const endDate = moment(this.state.startDate).add(this.state.slackTime, "days");

        //save the project in DB and update the redux store. 
        this.props.startAddProject({...this.state, endDate})
        .then(()=>{
            //get the employee object from array to whom the project should be assigned
            let employee = this.props.employees.filter((employee)=>{
                return employee.id === parseInt(this.state.assignedTo);
            })[0];
            //update project name in either project1 or project2 tag checking which is empty
            employee = employee.project1==="" ?
            {...employee, project1: this.state.projectName}
            :
            {...employee, project2: this.state.projectName}
            
            //update the employee object with the project name and update the redux store.
            this.props.startUpdateEmployee(employee)
            .then(()=>{
                //dispatch action to add the new project in the DB and update redux store
                this.props.onAddProjectClick();
            })
        })
    }

    render() {
        return (
            <div>
                <AddProjectForm 
                    currentState={this.state}
                    handleDateChange={this.handleDateChange}
                    onSlackTimeChange={this.onSlackTimeChange}
                    onEmployeeSelect={this.onEmployeeSelect}
                    employees={this.props.employees}
                    onSaveProjectClick={this.onSaveProjectClick}
                    onNameChange={this.onNameChange}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    employees: state.employees,
    projects: state.projects
});

const mapDispatchToProps = (dispatch, props) => ({
    startAddProject: (project) => dispatch(startAddProject(project)),
    startUpdateEmployee: (employee) => dispatch(startUpdateEmployee(employee))
});
export default connect(mapStateToProps, mapDispatchToProps)(AddProject);