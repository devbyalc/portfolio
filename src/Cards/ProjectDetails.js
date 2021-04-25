import React from 'react';
import axios from 'axios';
import {  Space, Button, Divider } from 'antd';
import { GithubOutlined } from '@ant-design/icons';

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
            //const response = await axios.get(`${process.env.REACT_APP_API_RL}/projects/${this.state.projectID}`)
            const response = await axios.get(`https://damp-atoll-82498.herokuapp.com/projects/${this.state.projectID}`)
            this.setState({ project: response.data });
        } catch (error) {
            this.setState({ error });
        }

    };

    render() {
        return (
            <div id="pro-deets">
                    <h1 id="pro-title">{this.state.project.title}</h1>
                    <p id="pro-desc"> {this.state.project.longdesc}</p>
                    <div id="btn">
                    <a href={this.state.project.site} target="_blank"><GithubOutlined style={{fontSize:'30px'}}/></a>
                    </div>
                    
                    <div id="btn-tools">
                    <Divider><p id="pro-tools">Built using</p></Divider>
                        <Space>
                    {this.state.project.tools !== undefined ? this.state.project.tools.map(tool => (
                            <Button type="primary" ghost >{tool.name}</Button>)):null}
                        </Space>
                        </div>
         
           </div>

        );
    }

}
export default ProjectDetails;