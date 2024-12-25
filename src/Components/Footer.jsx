import React from "react";
import social from "./Pics/social-media.png";

export const Footer = () => {
  return (
    <div>
      <div>
        <div className="footmain">
          <img width={100} src={social} alt="" />
          <div className="foot">
            <div className="foot1">
              <span>Info</span>
              <span>Marketing</span>
            </div>
            <div className="foot2">
              <span>Terms of use</span>
              <span>Privacy</span>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};
