import React from 'react';

//since we dont need state and lifecycle methods, we can make this a stateless functional component
const TaskItem = (props) => {
    return (
        <div className="listItem">
            <div className="flexJustifySpaceBtw">
                <div>
                    <div className="listItemTitle">Task Name:
                        <span className="listItemValue">{props.task.name}</span>
                    </div>

                    <div className="listItemTitle">Description:
                        <span className="listItemValue">{props.task.description}</span>
                    </div>
                </div>

                <div className="projectItemRight">
                    <div className="listItemTitle">Duration:
                        <span className="listItemValue">{props.task.duration}</span>
                    </div>

                    <button className="buttonProjectRightListItem" onClick={(e) => { props.onDeleteTask(props.task) }}>Delete Task</button>
                </div>
            </div>
        </div>
    );
}

export default TaskItem;