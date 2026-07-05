import React from "react";

function Universe() {
  return (
    <div className="container">
      <div className="row text-center">
        <h1>Zerone Universe</h1>
        <p>Extend your experience with us</p>
      </div>

      <div className="row text-center mt-5">
        <div className="col-md-4 p-3">
          <img src="media/smallcaseLogo.png" alt="Smallcase" />
          <p className="text-muted fs-22 mt-2" >Thematic investing platform  <br/>that helps you invest in diversified <br/> baskets of stocks on ETFs.</p>
        </div>

        <div className="col-md-4 p-3">
          <img
            src="media/streakLogo.png"
            alt="Streak"
            style={{ width: "30%" }}
          />
          <p className="text-muted fs-22 mt-2" >Systematic trading platform <br/>  allows you to create and backtest <br/> strategies without coding.</p>
        </div>

        <div className="col-md-4 p-3">
          <img src="media/sensibullLogo.svg" alt="Sensibull" />
          <p className="text-muted fs-22 mt-2" >Options trading platform that lets you <br/> create strategies, analyze positions, and examine <br/> data points like open interest, FII/DII, and more.</p>
        </div>

        <div className="col-md-4 p-3 mt-5">
          <img src="media/goldenpiLogo.png" alt="GoldenPi" />
          <p className="text-muted fs-22 mt-2" >Investment research platform <br/> that offers detailed insights on stocks , <br/>sectors, supply chains, and more.</p>
        </div>

        <div className="col-md-4 p-3 mt-5">
          <img
            src="media/dittoLogo.png"
            alt="Ditto"
            style={{ width: "25%" }}
          />
          <p className="text-muted fs-22 mt-2" >Personalized advice on life and health <br/> insurance. No spam and no mis-selling.</p>
        </div>
          <button className="p-2 btn btn-primary fs-5 mb-5 mt-5" style={{width:"20%", margin:"0 auto"}}>Signup Now </button>
      </div>
    </div>
  );
}

export default Universe;