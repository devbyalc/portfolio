import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "antd";

class ProjectCard extends React.Component {
  render() {
    return (
      <Card
        id="card"
        title={this.props.pro.title}
        bordered={false}
        style={{ marginTop: 16 }}
      >
        <div className="content">
          <a
            href={
              this.props.pro.site ? this.props.pro.site : this.props.pro.github
            }
            target="_blank"
            rel="noreferrer"
          >
            {this.props.pro.site ? "Site" : "Repo"}
          </a>
          <p>{this.props.pro.shortdesc}</p>
          <div className="learn-btn">
            <Link to={`/projects/${this.props.pro.id}`}>
              <Button type="primary">Learn More</Button>
            </Link>
          </div>
        </div>
      </Card>
    );
  }
}

export default ProjectCard;
