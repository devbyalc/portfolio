import ProjectCard from './ProjectCard.js';
import React from 'react';
import { Col, Row } from 'antd';

class GroupCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        projects: this.props.projects.sort((a,b)=> {return new Date(b.year) - new Date(a.year)})
    }

}
  render() {
    return (
      <div className="site-card-wrapper" id="group-cards">
        <Row gutter={16} type="flex">
          {this.state.projects.map(project => (
            <Col md={6}>
              <ProjectCard key={project.id} pro={project} />
            </Col>
          ))}
        </Row>
      </div>

    );

  }

}

export default GroupCards;