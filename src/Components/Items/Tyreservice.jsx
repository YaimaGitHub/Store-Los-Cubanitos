import React from "react";
import { Footer } from "../Footer";
import { TyreProduct } from "./TyreProduct";
import { alldata } from "../../Products";

export const Tyreservice = () => {
  return (
    <div>
      <div className="linkmain">
        <div className="bootdiv1">
          {alldata.map((products) => (
            <TyreProduct data={products} />
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
                    <li>Tire Patching and Repair</li>
                    <li>Wheel Alignment</li>
                    <li>Wheel Balancing</li>
                    <li>Tire Rotation</li>
                    <li>Tire Inspection</li>
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
                  Car tire service involves various essential aspects to ensure
                  the tires' longevity and optimal performance. Technicians
                  inspect for tread depth, signs of uneven wear, and tire
                  pressure. They perform tire rotations to even out wear
                  patterns and enhance stability. Proper wheel balancing
                  minimizes vibrations and ensures a smooth ride. Wheel
                  alignment corrects misalignment issues, improving handling and
                  steering responsiveness. Regular tire service not only
                  enhances safety and fuel efficiency but also maximizes the
                  lifespan of the tires, reducing the need for premature
                  replacements and saving money in the long term.
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
                    <li>Tire inspection for wear, damage, and tread depth.</li>
                    <li>Checking and adjusting tire pressure. </li>
                    <li>Tire rotation to even out wear patterns.</li>
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
