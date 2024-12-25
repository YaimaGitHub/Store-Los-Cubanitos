import React from "react";
import mech from "../Pics/mechanic.png";
import basket from "../Pics/shopping-basket.png";
import contact from "../Pics/phone.png";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import { Forum1 } from "../Forum.jsx/Forum1";
export const Navbar = () => {
  const [ubtn, pbtn] = useState(false);
  return (
    <div>
      <div className="Navmain">
        <Link className="leeink" to={"/"}>
          <div className="nav1">
            <img src={mech} alt="" />
            <span className="navheading">
              MECHA<span className="colourchange">MIND</span>
            </span>
          </div>
        </Link>
        <span>
          <input placeholder="Navigate Through Our Services" type="text" />
        </span>
        <div className="navcontactmain">
          <Link className="leeink1" to={"/Cart"}>
          
            <div className="navcart">
              <span> Cart </span>
              <img src={basket} alt="" />
            </div>
          </Link>
          <div className="navcontact">
            {/* <span >Contact</span> */}
            <button className="popbutton" onClick={() => pbtn(true)}>
              Login
            </button>
            <img src={contact} alt="" />
          </div>
        </div>
      </div>
      <Forum1 trigger={ubtn} setTrigger={pbtn} />
      <Outlet />
    </div>
  );
};
