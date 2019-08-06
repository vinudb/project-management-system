import React from 'react';
import ProjectListItem from './ProjectListItem';
import { connect } from 'react-redux';
import ProjectViewer from './ProjectViewer';
import AddProject from './AddProject';

class ProjectsList extends React.Component {
    state = {
        isProjectViewer: false,
        isAddProject: false
    }

    onAddProjectClick = () => this.setState({ isAddProject: !this.state.isAddProject });

    projectId = 0;
    onProjectItemClick = (projectId) => {
        this.projectId = projectId;
        this.handleProjectViewer();
    }

    handleProjectViewer = () => this.setState({ isProjectViewer: !this.state.isProjectViewer });

    render() {
        return (
            <div>
                {
                    //if add project is clicked, show addproject component.
                    //if view details of the project is clicked, show projectviewer component
                    //else show project list items by default
                    this.state.isAddProject ?
                        <AddProject onAddProjectClick={this.onAddProjectClick} /> : (
                            !this.state.isProjectViewer ?
                                <div>
                                    <div className="semiTitles">
                                        {
                                            `Duration to complete all projects: 
                                            ${this.props.projects.reduce((a, b) => a + (b['duration'] || 0), 0)}
                                             days`
                                        }
                                    </div>
                                    {
                                        this.props.projects.map((project, index) => {
                                            return <ProjectListItem
                                                onProjectItemClick={this.onProjectItemClick}
                                                project={project} key={project.projectName}
                                            />
                                        })
                                    }
                                    <div className="alignCenter">
                                        <button className="button" onClick={this.onAddProjectClick}>Add Project</button>
                                    </div>
                                </div>
                                :
                                <ProjectViewer
                                    projectId={this.projectId}
                                    handleProjectViewer={this.handleProjectViewer}
                                />)
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    projects: state.projects
});
export default connect(mapStateToProps, null)(ProjectsList);
