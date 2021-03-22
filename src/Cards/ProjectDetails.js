import React from 'react';
import axios from 'axios';

class ProjectDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            project: {},
            projectID: props.match.params.id,
            error: null,
        }

    }

    componentDidMount = async () => {
        try {
            const response = await axios.get(`http://localhost:1337/projects/${this.state.projectID}`)
            this.setState({ project: response.data });
        } catch (error) {
            this.setState({ error });
        }

    };

    render() {

        return (
            <h1>{this.state.project.title}</h1>
        );
    }

}
export default ProjectDetails;