import React from 'react';
import moment from 'moment';
import { dateFormat } from '../globals';
//since we dont need states and lifecycle methods we can make this stateless functional components
const ProjectListItem = (props) => {
    return (
        <div className="flexJustifySpaceBtw listItem">
            <div>
                <div className="listItemTitle">Project Name: 
                    <span className="listItemValue">{props.project.projectName}</span>
                </div>

                <div className="listItemTitle">Start Date: 
                    <span className="listItemValue">{moment(props.project.startDate).format(dateFormat)}</span>
                </div>

                <div className="listItemTitle">End Date: 
                    <span className="listItemValue">{moment(props.project.endDate).format(dateFormat)}</span>
                </div>
            </div>

            <div className="projectItemRight">
                <div className="listItemTitle">Slack Time: 
                    <span className="listItemValue">{props.project.slackTime}</span>
                </div>

                <div className="listItemTitle">Total Duration: 
                    <span className="listItemValue">{props.project.duration}</span>
                </div>
                
                <button className="buttonProjectRightListItem" onClick={(e) => { props.onProjectItemClick(props.project.id) }}>View Details</button>
            </div>
        </div>
    );
}

export default ProjectListItem;