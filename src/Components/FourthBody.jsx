import React from "react";
import download from "./Pics/download.jpg";
import { Footer } from "./Footer";
export const FourthBody = () => {
  return (
    <div>
      <div className="downloadpara">
        <span>DOWNLOAD OUR APP</span>
        <div className="downloadbrake" ></div>
      </div>
      <div className="downloadhead">
        <div className="downloadmain">
          <img width={300} src={download} alt="" />
          <div>
            <span>
              Discover endless possibilities with our app! Experience seamless
              functionality, user-friendly interface, and personalized features
              that cater to your needs. Stay connected, organized, and
              entertained on-the-go. Download now to unlock a world of
              convenience and enjoyment
            </span>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};
