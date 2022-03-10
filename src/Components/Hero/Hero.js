import React from "react";
import { Carousel } from "antd";
import { Button } from "antd";

const items = [
  {
    key: "1",
    title:
      "A comprehensive ML solution for human counting and social distancing alert generation for COVID 19 safeguards",
    content:
      "An end-to-end openCV model to detect humans in the frame of an image and in the next iterations count the number of humans in the frame.",
  },
  {
    key: "2",
    title: "Problem Statement",
    content:
      "The complexity of counting humans increases exponentially with size, and at a point it is not feasible to track and count the number of humans with the naked eye. To ensure the security of the people at shopping complexes, malls and crowded venues such as stadiums and places of worship, automated Human Counting through images would greatly reduce the risk of fallacies. As an added benefit, this functionality can also be used in the detection of Social Distancing and generation of alerts in cases when it is not being followed.",
  },
];
const Hero = () => {
  return (
    <div id="hero" className="heroBlock">
      <Carousel>
        {items.map((item) => {
          return (
            <div key={item.key} className="container-fluid">
              <div className="content">
                <h3 style={{ color: "white" }}>{item.title}</h3>
                <p style={{ color: "white" }}>{item.content}</p>
                <div className="btnHolder">
                  <Button
                    type="primary"
                    size="large"
                    href="https://docs.google.com/presentation/d/1zfoIKiXoVY5limjbaED2nlkyB0VhTN1FZn7X_ONnKfY/edit?usp=sharing"
                    target="_blank"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Hero;
