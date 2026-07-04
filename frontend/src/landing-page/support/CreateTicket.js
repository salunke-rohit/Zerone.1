import React from "react";

function CreateTicket() {
  return (
    <div className="container">
      <div className="row mt-5 mb-5">
        <h2 className="mb-5">
          To create a ticket, select the relevant topic
        </h2>

        {/* Column 1 */}
        <div className="col-md-4">
          <h4 className="mb-4">
            <i className="fa fa-plus-circle me-2"></i>
            Account Opening
          </h4>

          <a href="#" className="d-block mb-3 text-decoration-none">
            Online Account Opening
          </a>

          <a href="#" className="d-block mb-3 text-decoration-none">
            Offline Account Opening
          </a>

          <a href="#" className="d-block mb-3 text-decoration-none">
            Company, Partnership and HUF Account Opening
          </a>

          <a href="#" className="d-block mb-3 text-decoration-none">
            NRI Account Opening
          </a>

          <a href="#" className="d-block mb-3 text-decoration-none">
            Charges at Zerone
          </a>

          <a href="#" className="d-block mb-3 text-decoration-none">
            Zerone IDFC FIRST Bank 3-in-1 Account
          </a>

          <a href="#" className="d-block mb-3 text-decoration-none">
            Getting Started
          </a>
        </div>

        {/* Column 2 */}
        <div className="col-md-4">
          <h4 className="mb-4">
            <i className="fa fa-user me-2"></i>
            Your Zerone Account
          </h4>

          <a href="#" className="d-block mb-3 text-decoration-none">
            Login Credentials
          </a>

          <a href="#" className="d-block mb-3 text-decoration-none">
            Account Modification and Segment Addition
          </a>

          <a href="#" className="d-block mb-3 text-decoration-none">
            DP ID and Bank Details
          </a>

          <a href="#" className="d-block mb-3 text-decoration-none">
            Your Profile
          </a>

          <a href="#" className="d-block mb-3 text-decoration-none">
            Transfer and Conversion of Shares
          </a>
        </div>

        {/* Column 3 */}
        <div className="col-md-4">
          <h4 className="mb-4">
            <i className="fa fa-bar-chart me-2"></i>
            Your Zerone Account
          </h4>

          <a href="#" className="d-block mb-3 text-decoration-none">
            Margin/Leverage, Product and Order Types
          </a>

          <a href="#" className="d-block mb-3 text-decoration-none">
            Kite Web and Mobile
          </a>

          <a href="#" className="d-block mb-3 text-decoration-none">
            Trading FAQs
          </a>

          <a href="#" className="d-block mb-3 text-decoration-none">
            Corporate Actions
          </a>

          <a href="#" className="d-block mb-3 text-decoration-none">
            Sentinel
          </a>

          <a href="#" className="d-block mb-3 text-decoration-none">
            Kite API
          </a>

          <a href="#" className="d-block mb-3 text-decoration-none">
            Pi and Other Platforms
          </a>

          <a href="#" className="d-block mb-3 text-decoration-none">
            Stockreports+
          </a>

          <a href="#" className="d-block mb-3 text-decoration-none">
            GTT
          </a>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;