import React from "react";
import { Footer } from "../Footer";
import { alldata } from "../../Products"; 
import { RepairProduct } from "./RepairProduct";

export const Repairpage = () => {
  return (
    <div>
      <div>
        <div className="linkmain">
        <div className="bootdiv1">

        {alldata.map((products)=><RepairProduct data={products}/>)}


        </div>
          <div className="spandiv">
            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Services Provided
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <ul>
                      <li>Diagnosis of mechanical or electrical issues.</li>
                      <li>Skilled technicians perform repairs.</li>
                      <li>Replacement of faulty components.</li>
                      <li>Regular maintenance to prevent major problems.</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Know More
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    Car repair is an essential service that keeps vehicles
                    running smoothly and safely. Expert technicians diagnose and
                    fix mechanical, electrical, and other issues that arise
                    during the vehicle's lifespan. From routine maintenance to
                    complex repairs, the process involves using specialized
                    tools and quality parts to restore the vehicle's optimal
                    performance.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    y
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Rates And Booking
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <ul>
                      <li>Oil Change: $50</li>
                      <li>Brake Pad Replacement: $150</li>
                      <li>Spark Plug Replacement: $80</li>
                      <li>Battery Replacement: $120</li>
                      <li>Wheel Alignment: $100</li>
                    </ul>
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
       
<div className="tyrefoot">
       <Footer/>
       </div>
    </div>
  );
};
