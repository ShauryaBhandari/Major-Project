import React from "react";
import { Row, Col } from "antd";
const items = [
  {
    key: "1",
    icon: <i className="fas fa-pie-chart"></i>,
    title: <b>High Performance</b>,
    content: "A very lightweight and performant web app that needs no plugins.",
  },
  {
    key: "2",
    icon: <i className="fas fa-desktop"></i>,
    title: <b>Flat Design</b>,
    content: "A very easy to use interface that is accessible to all.",
  },
  {
    key: "3",
    icon: <i className="fas fa-database"></i>,
    title: <b>Simplified Workflow</b>,
    content: "Simple workflow, no prior knowledge needed.",
  },
];
const About = () => {
  return (
    <div id="about" className="block aboutBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>About Us</h2>
        </div>
        <div className="contentHolder">
          <p>
            <p>
              <b>Contributors:</b> Aryan Vats, Shaurya Bhandari
            </p>
            <p>
              <b>Guide:</b> Dr. TS Shiny Angel Ma'am
            </p>
            <p>
              Social distancing has become a term heavily ingrained in our lives
              since the onset of the pandemic. <br></br>It is essential to
              stemming the tide of COVID 19 until a permanent solution can be
              found. Each person feels that it cannot happen to them until it
              does.
              <br></br>
              To make sure that such protocols are followed to the T, we have
              envisioned a project wherein humans will be detected, counted and
              alerts will be generated if they are found to not be following
              social distancing norms.
              <br></br>
              From model development till final deployment, this has been an
              end-to-end full-stack comprehensive solution that will later be
              scaled to a greater extent to also be useful in the future when
              COVID-19 will be eradicated from the planet.
            </p>
          </p>
        </div>
        <div className="titleHolder">
          <h2>Key Features and Benefits</h2>
        </div>

        <br></br>
        <Row gutter={[16, 16]}>
          {items.map((item) => {
            return (
              <Col md={{ span: 8 }} key={item.key}>
                <div className="content">
                  <div className="icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default About;
