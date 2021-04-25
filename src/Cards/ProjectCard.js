import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'antd';

class ProjectCard extends React.Component {
    constructor() {
        super();
        
    }
    render() {

        return (
            < Card title={this.props.pro.title} bordered={false} style={{ marginTop: 16 }} >
                <a href={this.props.pro.site} target="_blank" rel="noreferrer">Repo/Live site</a>
                <p>{this.props.pro.shortdesc}</p>
                <Link to={`/projects/${this.props.pro.id}`}>
                    <Button type="primary">Learn More</Button>
                </Link>
            </Card >
            );
        }
}

export default ProjectCard;