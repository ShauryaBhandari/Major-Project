import React, { useState, useEffect } from "react";
import { Button, Input } from "antd";
import $ from "jquery";

const FAQ = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [data, setData] = useState({
    name: "",
    age: 0,
    date: "",
    programming: "",
    count: 0,
    socdistvio: "",
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
    const field = document.getElementById("imagebox");
    const imagebox = document.getElementById("img");
    const formData = new FormData();
    formData.append("image", field.files[0]);
    // const newform = new FormData();
    // newform.append("image",formData.files);
    console.log("being sent");
    console.log(formData);
    // var b64 = getBase64(formData);
    console.log("was sent");
    fetch("http://localhost:5000/maskImage", {
      method: "POST",
      mode: "cors",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        let bytestring = result["status"];
        let image = bytestring.split("'")[1];
        imagebox.setAttribute("src", "data:image/jpeg;base64," + image);
        setData({
          count: result["count"],
          socdistvio: String(result["SocialDistVio"]),
        });
      })
      .catch((err) => {
        console.log("error");
        console.log(err);
      });
  };

  function getBase64(file) {
    let document = "";
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      document = reader.result;
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };

    return document;
  }
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
      <div className="container-fluid quickSupport">
        <div className="titleHolder">
          <h2>Try our Model</h2>
        </div>
        <Input
          id="imagebox"
          type="file"
          name="myImage"
          onChange={(event) => {
            const imagebox = document.getElementById("img");

            const image = document.getElementById("imagebox")[0];
            console.log("button clicked");
            console.log(image);

            imagebox.setAttribute(
              "src",
              URL.createObjectURL(event.target.files[0])
            );
            // imagebox.height(300);
            // imagebox.width(300);
            let reader = new FileReader();
            // reader.readAsDataURL(event.target.files[0]);
            console.log("image : ");
            console.log(event.target.files[0]);
            // console.log(event.target.files[0]);
            setSelectedImage(event.target.files[0]);
            // setFormData(event.target.files[0]);
          }}
        />
        <br></br>
        <br></br>
        <span>
          <Button
            type="primary"
            name="send"
            id="sendbutton"
            onClick={eventHandler}
            style={{ textAlign: "center" }}
          >
            Send
          </Button>
        </span>
        <hr></hr>
        <img
          id="img"
          src=""
          style={{ width: "90%", marginLeft: "auto", marginRight: "auto" }}
        ></img>
        <b>
          <p>Number of People : {data.count}</p>
          <p>Social Distancing Violation : {data.socdistvio}</p>
        </b>
        {/* Calling a data from setdata for showing */}
        {/* <p>{data.name}</p>
        <p>{data.age}</p>
        <p>{data.date}</p>
        <p>{data.programming}</p>{" "} */}
        {/* <div className="quickSupport">
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
        </div> */}
      </div>
    </div>
  );
};

export default FAQ;
