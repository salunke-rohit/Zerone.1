import React from "react";

function Brokerage() {
    return (
        <div className="container">
            <div className="row mt-0 p-5">

                <div className="col-8 p-5 border-top">
                    <a href="#" style={{ textDecoration: "none" }}>
                        <h3 className="fs-5 mb-4">Brokerage Calculator</h3>
                    </a>

                    <ul
                        className="ps-3 fs-6 text-muted"
                        style={{ textAlign: "left", lineHeight: "1.8" }}
                    >
                        <li className="mb-2">
                            Call & Trade and RMS auto square-off: Additional charges of ₹50 + GST per order.
                        </li>

                        <li className="mb-2">
                            Digital contract notes will be sent via email.
                        </li>

                        <li className="mb-2">
                            Physical copies of contract notes, if required, will be charged ₹20 per contract note. Courier charges apply.
                        </li>

                        <li className="mb-2">
                            For NRI accounts (Non-PIS), brokerage is 0.5% or ₹100 per executed equity order, whichever is lower.
                        </li>

                        <li className="mb-2">
                            For NRI accounts (PIS), brokerage is 0.5% or ₹200 per executed equity order, whichever is lower.
                        </li>

                        <li className="mb-2">
                            If the account has a debit balance, each executed order will be charged ₹40 instead of ₹20.
                        </li>
                    </ul>
                </div>

                <div className="col-4 p-5 border-top">
                    <h3 className="fs-5">List of Charges</h3>
                </div>

            </div>
        </div>
    );
}

export default Brokerage;