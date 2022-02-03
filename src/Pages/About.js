import React from "react";
import { Row, Col, Divider } from "antd";

function About() {
  return (
    <div className="about-page">
      <Divider orientation="left">
        <h1 id="about">About Me</h1>
      </Divider>
      <Row>
        <Col md={8}>
          <p id="profile">
            Started as an eager IT graduate, now a junior front end engineer
            with experience working across different agile teams, developing
            features with accessibility in mind, using various frameworks such
            as ReactJs and Angular. My aspiration is to become a full stack
            engineer.
          </p>
          <br />
          <h2 className="abt-head">EXPERIENCE</h2>
          <p id="exp">
          <b>EY, Digital and Emerging Tech — Software Engineer (Consultant)</b> <br />
            March 2021 - present <br />
            <ul>
              <li>Have worked on a web application for the biggest EY client across Oceania.</li>
              <li>Showcase developed features to the client at the end of sprints</li>
              (Kubernetes and VMs).
              <li>Currently working as a front end developer to maintain a hybrid application, and responsible for Mobile Apps (iOS & Android) deployments </li>
            </ul>
            <b>Realworld systems —Undergraduate Programmer Casual</b> <br />
            July 2020 - February 2021 <br />
            <ul>
              <li>Application customisation.</li>
              <li> Application deployment using GCP cloud services</li>
              (Kubernetes and VMs).
              <li>Document and code artefacts.</li>
            </ul>
            <b>Bitu-mill — Casual IT Application Support</b>
            <br />
            May 2020 - July 2020 <br />
            <ul>
              <li>Provide Company based application support.</li>
              <li>Project and vendor management.</li>
              <li>Provide documentation.</li>
            </ul>
            <b>Bitu-mill — IT Intern</b>
            <br />
            January 2 020 - April 2020
            <br />
            Worked under the supervision of the chief information officer.
            <ul>
              <li>
                Assist in scoping requirements from stakeholders and
                documentations.
              </li>
              <li>Create application solutions demo using FileMaker.</li>
              <li> Application usability testing.</li>
              <li>Transformed an online form to FileMaker solution.</li>
            </ul>
          </p>
        </Col>
        <Col md={2}></Col>
        <Col md={8}>
          <h2 className="abt-head">EDUCATION</h2>
          <p id="edu">
            <b>La Trobe University — Bachelor of Information Technology</b>
            <br />
            June 2017 - December 2020
            <br />
            Major in Software Development, with key courses completed:
            <ul>
              <li>Object-Oriented Application Development </li>
              <li>Mobile Application Development</li>
              <li>Web Development on The Cloud</li>
              <li>Big Data Management on The Cloud</li>
              <li>Algorithms and Data Structures</li>
              <li>Operating Systems and Computer Architecture</li>
            </ul>
          </p>
          <h2 className="abt-head">AWARDS</h2>
          <p id="award">
            <ul>
              <li>
                <b>
                  HOS Award: The Most Outstanding Female Leadership Contribution
                </b>
                <br />
                Awarded by the head of school of Engineering and Mathematical
                Science.
              </li>
              <li>
                <b>Best AgriTech IoT Solution 2020</b>
                <br />
                Awarded during the La Trobe IT and Engineering Showcase 2020 for
                Successfully designed and implemented an innovative system using
                cutting edge technologies to solve real issues in the
                agriculture industry.
              </li>
              <li>
                <b>Provost’s Commendation Award 2019</b>
                <br />
                The Provost’s Commendation is awarded to the highest achieving{" "}
              </li>
            </ul>
          </p>
          <h2 className="abt-head">INTERESTS</h2>
          <p id="vne">
            <ul>
              <li>
                <b>IoT (Internet of Things)</b>
              </li>
              <li>
                <b>Web 3.0</b> 
              </li>
              <li>
                <b>Machine Learning</b> 
              </li>
            </ul>
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default About;
