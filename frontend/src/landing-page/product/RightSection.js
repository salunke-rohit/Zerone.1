import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container mt-1">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <h1>{productName}</h1>

          <p>{productDescription}</p>

          <div>
            <a href={learnMore} style={{ textDecoration: "none" }}>
              Learn more{" "}
              <i
                className="fa fa-long-arrow-right"
                aria-hidden="true"
              ></i>
            </a>
          </div>
        </div>

        <div className="col-lg-6 text-center">
          <img
            src={imageURL}
            alt={productName}
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
}

export default RightSection;