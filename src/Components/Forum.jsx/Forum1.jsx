import React from "react";
import canc from "../Pics/cancel.png";
export const Forum1 = (props) => {
  function eclick() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("gmail").value;
    const password = document.getElementById("password").value;
    if (name == "") {
      document.getElementById("span1").style.display = "inline";
    } else {
      document.getElementById("span1").style.display = "none";
    }
    if (email == "") {
      document.getElementById("span3").style.display = "inline";
    } else {
      document.getElementById("span3").style.display = "none";
    }
    if (password == "") {
      document.getElementById("span5").style.display = "inline";
    } else {
      document.getElementById("span5").style.display = "none";
    }

    if (/^[A-Za-z]*$/.test(name) == true) {
      document.getElementById("span2").style.display = "none";
    } else {
      document.getElementById("span2").style.display = "inline";
    }

    if (email.match("([a-zA-Z0-9\\_\\-\\.]+)@([a-zA-Z]+)\\.+(.+)")) {
      document.getElementById("span4").style.display = "none";
    } else {
      document.getElementById("span4").style.display = "inline";
    }
    if (email == "") {
      document.getElementById("span4").style.display = "none";
    }
    if (password.length < 6) {
      document.getElementById("span6").style.display = "inline";
    } else {
      document.getElementById("span6").style.display = "none";
    }
    if (!password.match("[A-Z]+[a-z]+\\d+[!@#$%^&*]+")) {
      document.getElementById("span7").style.display = "inline";
    } else {
      document.getElementById("span7").style.display = "none";
    }
    if (password == "") {
      document.getElementById("span6").style.display = "none";
    }
    if (password == "") {
      document.getElementById("span7").style.display = "none";
    }
  }

  return props.trigger ? (
    <div className="pop-inner">
      <div class="parent">
        <div class="container3">
          <div className="close-btndiv">
            <button
              className="close-btn"
              onClick={() => props.setTrigger(false)}
            >
              <img src={canc} alt="" />
            </button>
          </div>
          <h1>Sign Up</h1>

          <div id="inp1" class="inp1">
            <input placeholder="Name" type="text" id="name" />
          </div>
          <div id="error">
            <span id="span1">Name cant be blank </span>
            <span id="span2">must contain alphets only</span>
          </div>
          <div id="inp2" class="inp2">
            <input placeholder="Email" id="gmail" type="text" />
          </div>
          <div id="error">
            <span id="span3">Email cant be blank</span>
            <span id="span4">email is invalid</span>
          </div>
          <div id="inp3" class="inp3">
            <input placeholder="Password" id="password" type="password" />
          </div>
          <div id="error">
            <span id="span5">Password cant be blank </span>
            <span id="span6">password should be of 6-10 letters</span>
            <span id="span7">
              password should contain an uppercase,lowercase,digit
            </span>
          </div>
          <div class="input4">
            <input onClick={eclick} id="button" type="button" value="Submit" />
          </div>
        </div>
      </div>

      {props.children}
    </div>
  ) : (
    ""
  );
};
