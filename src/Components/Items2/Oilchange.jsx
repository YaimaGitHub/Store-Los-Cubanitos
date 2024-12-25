import React from "react";
import { Link } from "react-router-dom";
import paint from "../Pics/spray-gun.png";
import oil from "../Pics/lubrication.png";
import wash from "../Pics/car-wash.png";
import spare from "../Pics/spare-parts.png";
import { Footer } from "../Footer";

export const Oilchange = () => {
  return (
    <div>
      <div className="linkmain">
        <div className="bootdiv">
          <div id="popcrad" className="card mb-3">
            <div class="row g-0">
              <div class="col-md-4">
                <Link to={"/Paintchange"}>
                  {" "}
                  <img
                    width={120}
                    src={paint}
                    class="img-fluid rounded-start"
                    alt="..."
                  />
                </Link>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Paint Change</h5>
                  <p class="card-text">
                    Car paint change involves repainting the vehicle's exterior,
                    transforming its appearance. Various colors and finishes can
                    be selected, enhancing aesthetics, protection, and
                    personalization. Professional expertise is recommended.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div id="popcrad1" className="card mb-3">
            <div class="row g-0">
              <div class="col-md-4">
                <Link to={"/Oilchange"}>
                  <img
                    width={120}
                    src={oil}
                    class="img-fluid rounded-start"
                    alt="..."
                  />
                </Link>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Oil Change</h5>
                  <p class="card-text">
                    Car oil change is essential vehicle maintenance, replacing
                    old engine oil with fresh, high-quality oil. Regular oil
                    changes ensure engine longevity, optimal performance, and
                    improved fuel efficiency.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div id="popcrad" className="card mb-3">
            <div class="row g-0">
              <div class="col-md-4">
                <Link to={"/Carwash"}>
                  {" "}
                  <img
                    width={120}
                    src={wash}
                    class="img-fluid rounded-start"
                    alt="..."
                  />
                </Link>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Spare Parts</h5>
                  <p class="card-text">
                    Car spare parts are essential components that ensure a
                    vehicle's smooth operation and longevity. These parts
                    include engine components, brakes, suspension, electrical
                    systems, and more. Properly replacing damaged or worn-out
                    spare parts is crucial for vehicle safety, performance, and
                    reliability.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div id="popcrad" className="card mb-3">
            <div class="row g-0">
              <div class="col-md-4">
                <Link to={"/Spareparts"}>
                  <img
                    width={120}
                    src={spare}
                    class="img-fluid rounded-start"
                    alt="..."
                  />
                </Link>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">REPAIRS</h5>
                  <p class="card-text">
                    Car repair involves fixing mechanical or electrical issues
                    in a vehicle. Skilled technicians diagnose problems, perform
                    necessary repairs, and replace faulty components to ensure
                    safe and efficient operation.
                  </p>
                </div>
              </div>
            </div>
          </div>
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
                    <li>Drain and remove old engine oil</li>
                    <li>Replace oil filter</li>
                    <li>Refill with fresh, recommended oil</li>
                    <li> Check and top up other fluids if necessary</li>
                    <li>Inspect and tighten drain plug and filter</li>
                    <li>Lubricate chassis and suspension points</li>
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
                  Car oil change is a crucial vehicle maintenance service that
                  involves draining old, contaminated oil and replacing it with
                  clean, high-quality oil. Additionally, the oil filter is
                  replaced to ensure optimal engine lubrication and protection.
                  Regular oil changes promote engine longevity, enhance fuel
                  efficiency, and reduce the risk of costly repairs,
                  contributing to the smooth running of the vehicle.
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
                    <li>
                      Conventional Motor Oil: The most basic and affordable type
                      of oil suitable for older vehicles with regular oil change
                      intervals.
                    </li>
                    <li>
                      Synthetic Blend Oil: A mix of conventional and synthetic
                      oil, offering better performance and protection at a
                      moderate price point.
                    </li>
                    <li>
                      High Mileage Oil: Specifically formulated for vehicles
                      with high mileage, providing extra protection for older
                      engines and reducing oil consumption.
                    </li>
                  </ul>
                  <div className="light-btn">
                    <div class="container4">
                      <div class="btn1">
                        <a href="#">CART</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
