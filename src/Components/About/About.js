import React from "react";
import { Row, Col } from "antd";
const items = [
  {
    key: "1",
    icon: <i className="fas fa-pie-chart"></i>,
    title: "High Performance",
    content:
      "cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.",
  },
  {
    key: "2",
    icon: <i className="fas fa-desktop"></i>,
    title: "Flat Design",
    content:
      "cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.",
  },
  {
    key: "3",
    icon: <i className="fas fa-database"></i>,
    title: "Simplified Workflow",
    content:
      "cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.",
  },
];
const About = () => {
  return (
    <div id="about" className="block aboutBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>About Us</h2>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="contentHolder">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            nobis molestias? Minima fuga nemo deserunt dolorem, sed dolor illo,
            blanditiis at quod assumenda enim! Magni harum neque facilis
            mollitia, nihil quidem veniam porro, autem molestiae, ab iste? Sunt
            culpa sapiente vero, delectus, suscipit numquam nulla nemo laborum
            cupiditate harum laudantium.
          </p>
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

export default About;
