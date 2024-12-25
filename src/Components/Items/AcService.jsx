import React from "react";
import { Footer } from "../Footer";
import { alldata } from "../../Products";
import { AcProducts } from "./AcProducts";
export const AcService = () => {
  return (
    <div>
      <div className="linkmain">
        <div className="bootdiv1">
          {alldata.map((products) => (
            <AcProducts data={products} />
          ))}
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
                    <li>Refrigerant Inspection and Recharge</li>
                    <li>Leak Detection and Repair</li>
                    <li>Compressor Inspection and Repair</li>
                    <li>Condenser and Evaporator Cleaning</li>
                    <li>Cabin Air Filter Replacement</li>
                    <li>AC System Performance Testing</li>
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
                  Car AC service is recommended at least once a year to keep the
                  system running smoothly. Technicians check for refrigerant
                  leaks, which can harm the environment and reduce cooling
                  efficiency. They inspect belts, hoses, and electrical
                  connections to ensure proper functioning. Regular service
                  prevents common problems like weak airflow, strange odors, and
                  unusual noises. A well-maintained AC system not only keeps
                  occupants comfortable but also helps maintain the car's resale
                  value
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
                    <li>Rates: Standard AC Service: $XX.XX</li>
                    <li> Premium AC Service: $XX.XX </li>
                    <li>
                      Diagnostic Fee: $XX.XX (if AC issues need diagnosis)
                    </li>
                  </ul>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tyrefoot">
        <Footer />
      </div>
    </div>
  );
};
