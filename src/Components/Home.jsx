import React from "react";
import banner from "./Pics/auto-mechanic-working-garage-repair-service.jpg";
import AC from "./Pics/air-conditioner.png";
import Tyre from "./Pics/tire.png";
import tow from "./Pics/tow-truck.png";
import Spanner from "./Pics/spanner.png";
import { SecondBody } from "./SecondBody";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
    
      <div className="firstbodymain">
        <img src={banner} alt="" />
      </div>
      <div className="ghgh">
        <div className="firstbodycardmain">
          <Link className="leeink" to={"/AcService"}>
            <div className="firstbodycard">
              <img width={40} src={AC} alt="" />
              <span>AC SERVICE</span>
            </div>
          </Link>

          <Link to={"/Tyreservice"} className="leeink">
          
            <div className="firstbodycard">
              <img width={40} src={Tyre} alt="" />
              <span>TYRE CHANGE</span>
            </div>
          </Link>

          <Link to={"/Towservice"} className="leeink">
            {" "}
            <div className="firstbodycard">
              <img width={40} src={tow} alt="" />
              <span>TOW SERVICE</span>
            </div>
          </Link>
          <Link className="leeink" to={"/Repairpage"}>
            <div className="firstbodycard">
              <img width={40} src={Spanner} alt="" />
              <span>REPAIR</span>
            </div>
          </Link>
        </div>
      </div>
      <SecondBody />
    </div>
  );
};
