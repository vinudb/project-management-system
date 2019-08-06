import React from 'react';

class AddTask extends React.Component {
    state = {
        name: "",
        description: "",
        duration: ""
    }

    onNameChange = (e) => {
        const name = e.target.value;
        name.length < 20 && this.setState({ name });
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        description.length < 50 && this.setState({ description });
    }

    onDurationChange = (e) => {
        const duration = e.target.value;
        if (!duration || duration.match(/^([1-9][0-9]{0,2}|1000)$/)) {
            this.setState({ duration });
        }
    }

    render() {
        return (
            <div>
                <input 
                    className="text-input"
                    placeholder="Task Name" 
                    value={this.state.name} 
                    onChange={this.onNameChange} />

                <input 
                    className="text-input"
                    placeholder="Description" 
                    value={this.state.description} 
                    onChange={this.onDescriptionChange} />

                <input
                    className="text-input" 
                    placeholder="Duration In Days" 
                    value={this.state.duration} 
                    onChange={this.onDurationChange} />
                
                <div className="alignCenter">
                    <button className="button" onClick={(e) => { this.props.saveTask(this.state) }}>SAVE</button>
                </div>
            </div>
        );
    }
}

export default AddTask;