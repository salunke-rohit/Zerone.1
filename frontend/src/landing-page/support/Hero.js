import React from "react";

function Hero() {
  return (
    <section
      className="container-fluid py-5"
      style={{ backgroundColor: "rgb(56,126,209)", color: "white" }}
    >
      <div className="container">
        <div className="row">
          {/* Left Side */}
          <div className="col-lg-7">
            <h4 className="mb-5">Support Portal</h4>

            <h2 className="fs-3 mb-4">
              Search for an answer or browse help topics to create a ticket
            </h2>

            <input
              type="text"
              className="form-control mb-4"
              placeholder="Eg: how do I activate F&O..."
              style={{
                height: "60px",
                borderRadius: "8px",
                border: "none",
              }}
            />

            <a href="#" className="text-white me-4">
              Track account opening
            </a>

            <a href="#" className="text-white me-4">
              Track segment activation
            </a>

            <a href="#" className="text-white">
              Intraday margins
            </a>
          </div>

          {/* Right Side */}
          <div className="col-lg-5 d-flex flex-column">
            <div className="align-self-end mb-5">
              <a href="#" className="text-white">
                Track Tickets
              </a>
            </div>

            <h2 className="fs-3">Featured</h2>

            <ol className="mt-3">
              <li className="mb-3">
                <a href="#" className="text-white">
                  Current Takeovers and Delisting – January 2024
                </a>
              </li>

              <li>
                <a href="#" className="text-white">
                  Latest Intraday Leverages – MIS & CO
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;    