import React from 'react';
import { connect } from 'react-redux';
import AddEmployeeForm from './AddEmployeeForm';
import { startAddEmployee } from '../actions/employees';

class AddEmployee extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        superVisor: ""
    }

    onFirstNameChange = (e) => this.setState({ firstName: e.target.value });

    onLastNameChange = (e) => this.setState({ lastName: e.target.value });

    onSupervisorSelect = (e) => this.setState({ superVisor: e.target.value });

    onSaveClick = () => {
        if (this.state.firstName === "" || this.state.lastName === "" || this.state.superVisor === ""){
            alert("Please fill all the details");
            return;
        }
        //dispatch event to add employee in the database and also update the redux store.
        this.props.startAddEmployee({
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            supervisor: this.state.superVisor,
            project1: "",
            project2: ""
        }).then(() => {
            this.props.handleAddEmployeeView(); //hide add employee form after return of the promise
        })
    }

    render() {
        return (
            <AddEmployeeForm
                onFirstNameChange={this.onFirstNameChange}
                onLastNameChange={this.onLastNameChange}
                onSupervisorSelect={this.onSupervisorSelect}
                onSaveClick={this.onSaveClick}
                employees={this.props.employees}
                currentState={this.state}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    employees: state.employees
});

const mapDispatchToProps = (dispatch, props) => ({
    startAddEmployee: (employee) => dispatch(startAddEmployee(employee))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddEmployee);