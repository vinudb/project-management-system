import React from 'react';
import EmployeeItem from './EmployeeItem';
import AddEmployee from './AddEmployee';
import { connect } from 'react-redux';

class EmployeesList extends React.Component {
    state = {
        isAddEmployee: false
    }

    onAddEmployeeClick = () => {
        //load add employee component here
        this.handleAddEmployeeView();
    }

    handleAddEmployeeView = () => {
        this.setState({ isAddEmployee: !this.state.isAddEmployee })
    }

    render() {
        return (
            <div>
                {
                    this.props.employees.length > 0 &&
                    this.props.employees.map((employee) => {
                        return <EmployeeItem key={`${employee.firstName}-${employee.id}`} employee={employee} />
                    })
                }
                {//if add employee is clicked then show the below add employee form
                    this.state.isAddEmployee && 
                    <AddEmployee handleAddEmployeeView={this.handleAddEmployeeView} />
                }
                <div className="alignCenter">
                    <button className="button" onClick={this.onAddEmployeeClick}>ADD EMPLOYEE</button>
                </div>    
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    employees: state.employees
});

export default connect(mapStateToProps, null)(EmployeesList);