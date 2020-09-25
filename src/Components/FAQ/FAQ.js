import React from "react";
import { Collapse, Button } from "antd";

const { Panel } = Collapse;
const FAQ = () => {
  return (
    <div
      id="faq"
      className="block faqBlock"
      style={{ width: "50%", marginLeft: "auto", marginRight: "auto" }}
    >
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Frequently Asked Questions</h2>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <Collapse accordion>
          <Panel header="This is panel header 1" key="1">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem a
              ea possimus nobis quis. Quod commodi veniam ducimus eaque nam!
            </p>
          </Panel>
          <Panel header="This is panel header 2" key="2">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem a
              ea possimus nobis quis. Quod commodi veniam ducimus eaque nam!
            </p>
          </Panel>
          <Panel header="This is panel header 3" key="3">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem a
              ea possimus nobis quis. Quod commodi veniam ducimus eaque nam!
            </p>
          </Panel>
        </Collapse>
        <div className="quickSupport">
          <h3>Quick Support</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et beatae
            quidem hic esse quo! Accusantium, reprehenderit odio voluptate ad
            numquam in quas consequatur laboriosam. Ab?
          </p>
          <Button type="primary">
            <i
              className="fa fa-envelope"
              aria-hidden="true"
              style={{ marginRight: "5px" }}
            ></i>{" "}
            Email Us!
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
