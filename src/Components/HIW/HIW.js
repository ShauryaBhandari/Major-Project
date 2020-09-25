import React, { useState } from "react";
import { Modal, Button } from "antd";

const HIW = () => {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };
  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };
  return (
    <div id="hiw" className="block worksBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>How It Works</h2>
          <p>Lorem ipsum dolor sit amet.</p>
          <div className="">
            <Button type="primary" onClick={showModal}>
              <i className="fa fa-play" aria-hidden="true"></i>
            </Button>
          </div>
          <Modal
            title="Sample Video"
            visible={visible}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={false}
          >
            <iframe
              src="https://www.youtube.com/embed?v=Srmdij0CU1U"
              frameborder="0"
              title="Test video"
              width="100%"
              height="300px"
            ></iframe>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default HIW;
