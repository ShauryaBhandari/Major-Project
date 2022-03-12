import React, { useState, useEffect } from "react";
import { Button } from "antd";

const FAQ = () => {
  const [data, setData] = useState({
    name: "",
    age: 0,
    date: "",
    programming: "",
  });

  useEffect(() => {
    // Using fetch to fetch the api from
    // flask server it will be redirected to proxy
    fetch("/data").then((res) =>
      res.json().then((data) => {
        // Setting a data from api
        setData({
          name: data.Name,
          age: data.Age,
          date: data.Date,
          programming: data.programming,
        });
      })
    );
  }, []);

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
        {/* Calling a data from setdata for showing */}
        <p>{data.name}</p>
        <p>{data.age}</p>
        <p>{data.date}</p>
        <p>{data.programming}</p>{" "}
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
