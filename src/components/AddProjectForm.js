import React from 'react';
import DateRangePickerComponent from './DateRangePickerComponent';

class AddProjectForm extends React.Component {
    render() {
        return (
            <div>
                <input 
                    className="text-input"
                    placeholder="Project Name" 
                    value={this.props.currentState.projectName} 
                    onChange={this.props.onNameChange} />
                
                <div className="flexJustifySpaceBtw">    
                    <DateRangePickerComponent 
                        handleDateChange={this.props.handleDateChange}
                        startDate={this.props.currentState.startDate} />
                    
                    <input
                        className="text-inputSlackTime" 
                        disabled={this.props.currentState.startDate ? false : true} 
                        placeholder="Slack Time In Days" 
                        value={this.props.currentState.slackTime} 
                        onChange={this.props.onSlackTimeChange} />
                </div>
                <span className="semiTitles">Project Duration: 
                    {`${this.props.currentState.duration} `}
                    {parseInt(this.props.currentState.duration)>1 ? `days`:`day`}
                </span>

                <select
                    className="select" 
                    onChange={this.props.onEmployeeSelect}>
                    <option value="">Assign Project To</option>
                    {
                        this.props.employees.filter((employee) => {
                            return employee.supervisor !== "" && 
                            (employee.project1 === "" || employee.project2 === "")
                        }).map((employee) => {
                        return <option
                            key={`${employee.firstName}-${employee.id}`}
                            value={`${employee.id}`}>
                            {`${employee.firstName} ${employee.lastName}`}
                        </option>
                        })
                    }
                </select>
                <div className="alignCenter">
                    <button className="button" onClick={this.props.onSaveProjectClick}>Save Project</button>
                </div>
            </div>
        );
    }
}

export default AddProjectForm;