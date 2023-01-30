import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';
const Contact = () => {
  const [contactData, setContactData] = useState({});
  const [errorMsg, setErrorMsg] = useState();
  const [successMsg, setSuccessMsg] = useState(false);

//   showAlert = () => {
//     Swal.fire({
//         title: "Success",
//         text: "Alert successful",
//         icon: "success",
//         confirmButtonText: "OK",
//       });
// }

  const isValidEmail = (email) => {
    return /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email);
  };

  const isValidMobile = (mobileno) => {
    return /^[6-9]\d{9}$/.test(mobileno);
  };

  const validateField = (field, value) => {
    if (value.length <= 0) {
      return (
        <>
          <span className="text-capitalize">{field}</span> is required field.
        </>
      );
    } else {
      if (field === "email") {
        if (!isValidEmail(value)) return "Invalid Email.";
      } else if (field === "mobile") {
        if (!isValidMobile(value)) return "Invalid Mobile Number.";
      } else {
        return "";
      }
    }
  };

  const handleBlur = (event) => {
    setErrorMsg(validateField(event.target.name, event.target.value));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setContactData({
      ...contactData,
      [name]: value
    });

    if (name === "mobile") {
      setContactData({
        ...contactData,
        mobile: value.replace(/\D/, "")
      });
    }
  };

  const handleSubmit = (e) => {
    let isValided = false;
    e.preventDefault();

    if (
      contactData.name === "" ||
      contactData.name === undefined ||
      contactData.mobile === "" ||
      contactData.mobile === undefined ||
      contactData.email === "" ||
      contactData.email === undefined ||
      contactData.company === "" ||
      contactData.company === undefined ||
      contactData.message === "" ||
      contactData.message === undefined
    ) {
      setSuccessMsg(false);
      isValided = false;
    } else {
      setSuccessMsg(true);
      isValided = true;
    }
    return isValided;
  };

  /* backend start*/
  const contactus = () => {
    const  { name, email, company, mobile, message } = contactData
    if(name && email && company && mobile && message){
        //alert("Posted");
        axios.post("http://localhost:9002/contact", contactData)
        .then( res => {
          Swal.fire({
            imageWidth: 150,
            imageHeight: 150,
            imageAlt: "Success",
            confirmButtonColor: "#007aff",
            width: 400,
            title: "SUCCESS!",
            text: res.data.message,
          });
        })
    }else{
        alert("Invalid input")
    }
}
/* backend End */

  return (
    <div id="contact">
      <div className="form">
        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          autoComplete="off"
        >
          {!successMsg ? (
            <>
              <div id="errormessage" className={errorMsg ? "show" : ""}>
                {errorMsg}
              </div>
              <div className="form-group">
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  value={contactData.name || ""}
                  onChange={(e) => handleChange(e)}
                  onBlur={handleBlur}
                />
              </div>
              <div className="form-group">
                <input
                  name="mobile"
                  type="text"
                  maxLength={10}
                  className="form-control"
                  placeholder="Mobile"
                  onBlur={handleBlur}
                  value={contactData.mobile || ""}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="form-group">
                <input
                  name="company"
                  type="text"
                  className="form-control"
                  placeholder="Company"
                  value={contactData.company || ""}
                  onChange={(e) => handleChange(e)}
                  onBlur={handleBlur}
                />
              </div>
              <div className="form-group">
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  value={contactData.email || ""}
                  onChange={(e) => handleChange(e)}
                  onBlur={handleBlur}
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  type="text"
                  className="form-control"
                  placeholder="Message"
                  value={contactData.message || ""}
                  onChange={(e) => handleChange(e)}
                  onBlur={handleBlur}
                  rows="3"
                />
              </div>
              <p className="text-right mb-0">
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Submit Now"
                  onClick={contactus}
                />
              </p>
            </>
          ) : (
            <div className="show" id="sendmessage">
              Thank for your message. CotactUs Page Saved!.
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
