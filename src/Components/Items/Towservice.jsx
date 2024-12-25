import React from "react";
import { Footer } from "../Footer";
import { alldata } from "../../Products"; 
import { TowProduct } from "./TowProduct";

export const Towservice = () => {
  return (
    <div>
      <div className="linkmain">
       <div className="bootdiv1">
       {alldata.map((products)=><TowProduct data={products}/>)}

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
                    <li>Motorcycle Towing</li>
                    <li>Wheel-Lift Towing</li>
                    <li>Flatbed Towing</li>
                    <li>Accident Recovery</li>
                    <li>Emergency Towing</li>
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
                  Car tow service plays a critical role in ensuring road safety
                  and helping drivers in emergencies. Towing experts handle
                  various situations, from flat tires to engine failures,
                  efficiently recovering vehicles from precarious positions.
                  They use specialized trucks and equipment to tow vehicles of
                  different sizes safely. Quick response times and skilled
                  operators make car tow services reliable and indispensable
                  during unforeseen breakdowns. Whether on highways or remote
                  areas, tow services offer a lifeline, providing peace of mind
                  and a smooth resolution to unexpected car troubles.
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
                    <li>24/7 emergency response</li>
                    <li> Recovery from breakdowns, accidents, or flat tires</li>
                    <li>Towing for vehicles of various sizes</li>
                    
                  </ul>

                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tyrefoot" >
      <Footer/>
      </div>
    </div>
  );
};
