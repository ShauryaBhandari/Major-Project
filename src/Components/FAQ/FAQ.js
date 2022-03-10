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
          <h2>Try our Model</h2>
        </div>
        {/* Yahan model aayega */}
        <div className="quickSupport">
          <h3>Quick Support</h3>
          <p>
            If you need any help or have any questions, feel free to email us.
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
