import React from 'react';

//since there is no usage of any states or any lifecycle methods, we can use stateless functional components 
const EmployeeItem = (props) => {
    return (
        <div className="listItem">
            <div className="flexJustifySpaceBtw">
                <div>
                    <div className="listItemTitle">Full Name:
                        <span className="listItemValue">
                            {`${props.employee.firstName} ${props.employee.lastName}`}
                        </span>
                    </div>

                    <div className="listItemTitle">Supervisor:
                        <span className="listItemValue">
                            {props.employee.supervisor === "" ? `Not applicable` : props.employee.supervisor}
                        </span>
                    </div>
                </div>

                <span className="projectItemRight">
                    {   //if both project tags are empty display no projects assigned
                        (props.employee.project1 === "" && props.employee.project2 === "")
                        && <span>No projects assigned</span>
                    }
                    <div className="employeeItemProjects">
                        <span>
                            {props.employee.project1}
                        </span>
                        <span>
                            {props.employee.project2}
                        </span>
                    </div>
                </span>
            </div>
        </div>
    );
}

export default EmployeeItem;