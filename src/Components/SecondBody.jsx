import React from "react";
import paint from "./Pics/spray-gun.png";
import oil from "./Pics/lubrication.png";
import wash from "./Pics/car-wash.png";
import spare from "./Pics/spare-parts.png";
import { ThirdBody } from "./ThirdBody";
import { Link } from "react-router-dom";
export const SecondBody = () => {
  return (
    <div>
      <div className="secondbodyhead">
        <span>MORE FROM US</span>
        <div className="secondbrake"></div>
      </div>
      <div className="ghgd">
        <div className="secondbodycardmain">
          <Link className="leeink" to={"/Paintchange"}>
            {" "}
            <div className="secondbodycard">
              <img width={40} src={paint} alt="" />
              <span>PAINT CHANGE</span>
            </div>
          </Link>

          <Link className="leeink" to={"/Oilchange"}>
            {" "}
            <div className="secondbodycard">
              <img width={40} src={oil} alt="" />
              <span>OIL CHANGE</span>
            </div>
          </Link>

          <Link className="leeink" to={"/Carwash"}>
            {" "}
            <div className="secondbodycard">
              <img width={40} src={wash} alt="" />
              <span>CAR WASH</span>
            </div>
          </Link>

          <Link className="leeink" to={"/Spareparts"}>
            {" "}
            <div className="secondbodycard">
              <img width={40} src={spare} alt="" />
              <span>SPARE PARTS</span>
            </div>
          </Link>
        </div>
      </div>
      <ThirdBody />
    </div>
  );
};
