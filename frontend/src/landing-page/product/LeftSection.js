import React from "react";
function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  lernMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
        <div className="row   ">
            <div className="col-5 ">
                <img src={imageURL}/>
            </div>
            <div className="col-1"></div>
            <div className="col-6 ">
                <h1>{productName}</h1>
                <p>{productDescription}</p>
                <div>
                 <a href={tryDemo}> Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                <a href={lernMore} style={{marginLeft:"80px"}}> Learn more <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
                <div className="mt-3">
                  <a href={googlePlay}> <img src="media\googlePlayBadge.svg"/> </a>
                <a href={appStore} style={{marginLeft:"30px"}}> <img src="media\appstoreBadge.svg"/> </a>
                </div>
            </div>
        </div>
    </div>
  );
}

export default LeftSection;
