import ProjectCard from './ProjectCard.js';
import React from 'react';
import { Col, Row } from 'antd';

class GroupCards extends React.Component {

  render() {

    return (
      <div className="site-card-wrapper" id="group-cards">
        <Row gutter={16}>
          
          {this.props.projects.map(project => (
            <Col  md={6}>
              <ProjectCard key={project.id} pro={project} />
            </Col>
          ))}


        </Row>
      </div>

    );

  }

}

export default GroupCards;