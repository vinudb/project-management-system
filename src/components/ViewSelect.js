import React from 'react';

class ViewSelect extends React.Component{
    render(){
        return(
            <div>
                <select className="select" onChange={this.props.onViewSelectChange}>
                    <option value="employees">Employees</option>
                    <option value="projects">Projects</option>
                </select>
            </div>
        );
    }
}

export default ViewSelect;