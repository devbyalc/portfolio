import React from 'react';
import axios from 'axios';
import {  Space, Button, Divider, Row, Col } from 'antd';
import { GithubOutlined, GlobalOutlined } from '@ant-design/icons';
import moment from 'moment';

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
            <Row id="pro-deets">
                    <Col>
                    <h1 id="pro-title">{this.state.project.title}</h1>
                    <p id="pro-desc"> {moment(this.state.project.year).format('YYYY')}</p>
                    {this.state.project.site && this.state.project.github && <div className='btn'><a href={this.state.project.site} target="_blank" rel="noreferrer"><GlobalOutlined style={{fontSize:'30px'}}/></a></div>}
                    <p id="pro-desc"> {this.state.project.longdesc}</p>
                    <div className='btn'>
                    {this.state.project.github && <a href={this.state.project.github} target="_blank" rel="noreferrer"><GithubOutlined style={{fontSize:'30px'}}/></a>}
                    {this.state.project.site && !this.state.project.github && <a href={this.state.project.site} target="_blank" rel="noreferrer"><GlobalOutlined style={{fontSize:'30px'}}/></a>}
                    
                    </div>
                    <Divider><p id="pro-tools">Built using</p></Divider>
                   
                        <div id="btn-tools">
                        <Space wrap>
                    {this.state.project.tools !== undefined ? this.state.project.tools.map(tool => (
                            <Button type="default" ghost style={{verticalAlign: 'middle'}} >{tool.name}</Button>)):null}
                        </Space>
                        </div>
                    </Col>
           </Row>

        );
    }

}
export default ProjectDetails;