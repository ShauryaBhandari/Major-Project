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
    content:
      "cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.",
  },
];
const Cards = () => {
  return (
    <div id="feature" className="block featureBlock bgGray">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Key Features and Benefits</h2>
        </div>
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

export default Cards;
