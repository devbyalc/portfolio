import React from 'react';
import GroupCards from '../Cards/GroupCards';

class Projects extends React.Component {

    render() {
        return (
            <div>
                <GroupCards key={this.props.thekey} projects={this.props.projects} />
            </div>
        );
    }

}

export default Projects;