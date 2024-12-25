import React, { useState } from "react";
import canc from "../Pics/cancel.png";

function RegistrationPage(props) {
  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [address, setAddress] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleMobileNumberChange = (e) => {
    setMobileNumber(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!name || !mobileNumber || !address) {
      alert("All fields are required");
      return;
    }

    // Generate the WhatsApp message
    const message = `You have received a service order: \nHere are the Details,  \nName: ${name}\nMobile Number: ${mobileNumber}\nAddress: ${address}\nTotal Amount: $${props.totalAmount}`;

    // Generate the WhatsApp message link
    const whatsappLink = `https://api.whatsapp.com/send?phone=${mobileNumber}&text=${encodeURIComponent(
      message
    )}`;

    // Open WhatsApp link in a new window
    window.open(whatsappLink, "_blank");
  };

  return props.trigger ? (
    <div>
      <div className="popinner">
        <div className="close-btndiv">
          <button
            className="close-btn2"
            onClick={() => props.setTrigger(false)}
          >
            <img src={canc} alt="" />
          </button>
        </div>

        <h1 className="regh">Please Fill Out This Form</h1>
        <form className="regform" onSubmit={handleSubmit}>
          <div>
            <label className="reglab" htmlFor="name">
              Name:
            </label>
            <input
              className="reginp"
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleNameChange}
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label className="reglab" htmlFor="mobileNumber">
              Mobile Number:
            </label>
            <input
              className="reginp"
              type="tel"
              id="mobileNumber"
              name="mobileNumber"
              value={mobileNumber}
              onChange={handleMobileNumberChange}
              placeholder="Enter your mobile number"
              required
            />
          </div>
          <div>
            <label className="reglab" htmlFor="address">
              Address:
            </label>
            <input
              className="reginp"
              type="text"
              id="address"
              name="address"
              value={address}
              onChange={handleAddressChange}
              placeholder="Enter your address"
              required
            />
          </div>
          <button className="regbtn" type="submit">
            Check out on WhatsApp
          </button>
          <span className="regspan">
            Your total is: <b> ${props.totalAmount}</b>
          </span>
        </form>
      </div>
      {props.children}
    </div>
  ) : (
    ""
  );
}

export default RegistrationPage;
