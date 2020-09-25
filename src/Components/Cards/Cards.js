import React from "react";
import { Row, Col } from "antd";
import { Card } from "antd";
const { Meta } = Card;

const Cards = () => {
  return (
    <div id="feature" className="block featureBlock bgGray">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Key Features and Benefits</h2>
          <p>
            Obcaecati consequatur libero repudiandae, aperiam itaque laborum!
          </p>
        </div>
        <Row gutter={[16, 16]}>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={
                <img
                  alt="Modern Design"
                  src="https://picsum.photos/200/200
"
                />
              }
            >
              <Meta title="Modern Design" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={
                <img
                  alt="Test"
                  src="https://picsum.photos/200/200
"
                />
              }
            >
              <Meta title="Clean and Elegant" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={
                <img
                  alt="Test"
                  src="https://picsum.photos/200/200
"
                />
              }
            >
              <Meta title="Great Support" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={
                <img
                  alt="Test"
                  src="https://picsum.photos/200/200
"
                />
              }
            >
              <Meta title="Easy to customise" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={
                <img
                  alt="Test"
                  src="https://picsum.photos/200/200
"
                />
              }
            >
              <Meta title="Unlimited Features" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={
                <img
                  alt="Test"
                  src="https://picsum.photos/200/200
"
                />
              }
            >
              <Meta title="Advanced Options" />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Cards;
