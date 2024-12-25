import React from "react";
import { Link } from "react-router-dom";
import paint from "../Pics/spray-gun.png";
import oil from "../Pics/lubrication.png";
import wash from "../Pics/car-wash.png";
import spare from "../Pics/spare-parts.png";
import { Footer } from "../Footer";
export const Spareparts = () => {
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

          <div id="popcrad" className="card mb-3">
            <div class="row g-0">
              <div class="col-md-4">
                <Link to={"/Oilchange"}>
                  {" "}
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
                  <h5 class="card-title">Oil Change </h5>
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
                  <h5 class="card-title">Car Wash</h5>
                  <p class="card-text">
                    Car wash is a thorough cleaning service that rejuvenates a
                    vehicle's exterior. It involves washing, drying, and
                    sometimes waxing the car, leaving it looking fresh, clean,
                    and protected from environmental contaminants.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div id="popcrad1" className="card mb-3">
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
                    <li>
                      Transmission: Clutch kits, transmission filters, and
                      solenoids.
                    </li>
                    <li>
                      Cooling System: Radiators, water pumps, and thermostats.
                    </li>
                    <li>
                      Electrical Systems: Batteries, alternators, starters, and
                      sensors.
                    </li>
                    <li>
                      Suspension: Shock absorbers, struts, control arms, and
                      springs.
                    </li>
                    <li>
                      Braking System: Brake pads, rotors, calipers, and brake
                      lines.
                    </li>
                    <li>
                      Engine Components: Filters, belts, hoses, spark plugs, and
                      more.
                    </li>
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
                  Car spare parts are essential for vehicle maintenance and
                  repairs. They encompass a wide range of components, including
                  engine parts, brakes, suspension, electrical systems, and body
                  parts. Properly sourcing and installing high-quality spare
                  parts ensure the car's performance, safety, and longevity,
                  providing peace of mind for drivers and passengers alike.
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
                    <li>Engine Air Filter: $10 - $30</li>
                    <li> Alternator: $100 - $300+</li>
                    <li>Headlight Assembly: $50 - $200+</li>
                    <li>Battery: $50 - $200+</li>
                    <li>
                      <b>To book this service at just 499$ </b>{" "}
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
