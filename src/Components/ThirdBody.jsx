import React from "react";
import detail from "./Pics/car detailing.jpg";
import painting from "./Pics/car painting.jpg";
import repairing from "./Pics/car repairing.jpg";
import { FourthBody } from "./FourthBody";
export const ThirdBody = () => {
  return (
    <div>
      <div>
        <div className="thirdbodyhead">
          <span>PROFESSIONAL WORKS</span>
          <div className="thirdbodybrake"></div>
        </div>
        <div className="imagecardmain">
          <div className="imagecard">
            <h2>CAR DETAILING</h2>
            <img src={detail} alt="" />
            <span>
              Car detailing enhances vehicle appearance, cleans, polishes, and
              protects surfaces. Services include interior and exterior
              cleaning, waxing, and restoring shine.
            </span>
          </div>
          <div className="imagecard">
            <h2>CAR REPAIRING</h2>
            <img src={repairing} alt="" />
            <span>
              Car repairing involves diagnosing, fixing, and maintaining vehicle
              systems. Services include engine repairs, brake replacements,
              suspension fixes, and electrical troubleshooting.
            </span>
          </div>

          <div className="imagecard">
            <h2>CAR PAINTING</h2>
            <img src={painting} alt="" />
            <span>
              Car painting involves prepping, priming, and applying paint to a
              vehicle's exterior, restoring its finish and enhancing aesthetics
              and protection.
            </span>
          </div>
        </div>
      </div>
      <FourthBody />
    </div>
  );
};
