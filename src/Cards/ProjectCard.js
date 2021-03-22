import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'antd';

class ProjectCard extends React.Component {
    constructor() {
        super();
        //to show projects image
        this.API_URL = "http://localhost:1337"
    }
    render() {

        // testing - { console.log(this.props.pro.media) }


        // Deconstructing Json 
        // let { media } = this.props.pro;
        // let imageFormat = media[0].formats.small

        return (
            < Card title={this.props.pro.title} bordered={false} >
                <a href={this.props.pro.site} target="_blank">Repo/Live site</a>
                <p>{this.props.pro.shortdesc}</p>
                <Link to={`/projects/${this.props.pro.id}`}>
                    <Button type="primary">Learn More</Button>
                </Link>
            </Card >
            );
        }
}

export default ProjectCard;