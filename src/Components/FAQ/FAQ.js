import React, { useState, useEffect } from "react";
import { Button } from "antd";
import $ from "jquery";

const FAQ = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [data, setData] = useState({
    name: "",
    age: 0,
    date: "",
    programming: "",
  });
  const [formData, setFormData] = useState();
  // function xyz() {
  //   console.log("hii");
  //   const imagebox = document.getElementById("imagebox");
  //   const input = document.getElementById("input");
  //   let bytestring = "";

  //   if (input) {
  //     let formData = new FormData();
  //     formData.append("image", input.files[0]);

  //     $.ajax({
  //       url: "http://localhost:5000/test", // fix this to your liking
  //       type: "POST",
  //       data: formData,
  //       cache: false,
  //       processData: false,
  //       contentType: false,
  //       error: function (data) {
  //         // console.log("I'm not crazy");
  //         console.log(data.status);
  //         console.log("upload error", data);
  //         console.log(data.getAllResponseHeaders());
  //       },
  //       success: function (data) {
  //         // alert("hello"); // if it's failing on actual server check your server FIREWALL + SET UP CORS
  //         bytestring = data["status"];
  //         let image = bytestring.split("'")[1];
  //         imagebox.attr("src", "data:image/jpeg;base64," + image);
  //       },
  //     });
  //   }
  // }

  const eventHandler = (event) => {
    fetch("http://localhost:5000/test", {
      method: "POST",
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setFormData("");
      })
      .catch((err) => console.log("error"));
  };

  function readUrl(input) {
    const imagebox = document.getElementById("imagebox");
    console.log("evoked readUrl");
    if (input.files && input.files[0]) {
      let reader = new FileReader();
      reader.onload = function (e) {
        console.log(e);

        imagebox.attr("src", e.target.result);
        imagebox.height(300);
        imagebox.width(300);
      };
      reader.readAsDataURL(input.files[0]);
    }
  }
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
        <input
          type="file"
          name="myImage"
          onChange={(event) => {
            console.log(event.target.files[0]);
            setSelectedImage(event.target.files[0]);
          }}
        />
        <Button
          type="primary"
          name="send"
          id="sendbutton"
          onClick={eventHandler}
        >
          Send
        </Button>
        <img id="imagebox" src=""></img>
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
            ></i>
            Email Us!
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
