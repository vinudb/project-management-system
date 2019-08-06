import React from 'react';
import ViewSelect from './ViewSelect';
import EmployeesList from './EmployeesList';
import {startSetEmployees} from '../actions/employees';
import {startSetProjects} from '../actions/projects';
import { connect } from 'react-redux';
import ProjectsList from './ProjectsList';

class Dashboard extends React.Component{
    state={
        employeesListView: true
    }

    componentDidMount(){
        //fetch employees List here db and update in redux store. 
        this.props.startSetEmployees();
    }

    onViewSelectChange=(e)=>{
        const selectedValue = e.target.value;
        //if selected value is employees, then make employees list visible else, 
        //make projects list visible also fetch projects data from the DB
        selectedValue==="employees"?  
            this.setState({employeesListView:true}) : 
            this.setState({employeesListView:false}, ()=>{
                //fetch projects list here from db and update in the redux store.
                this.props.startSetProjects();
            });
    }

    render(){
        return(
            <div className="content-container">
                <h3 className="title">Project Management System</h3>
                <ViewSelect onViewSelectChange={this.onViewSelectChange}/>
                {this.state.employeesListView ? 
                    <EmployeesList />
                    : 
                    <ProjectsList />
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    employees: state.employees,
    projects: state.projects
});

const mapDispatchToProps = (dispatch, props) => ({
    startSetEmployees: () => dispatch(startSetEmployees()),
    startSetProjects: ()=> dispatch(startSetProjects())
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);