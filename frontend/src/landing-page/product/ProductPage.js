import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
import Navbar from "../Navbar";
import Footer from "../Footer";
function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL="media\coin.png"
        productName="Rubee"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo=""
        lernMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection
        imageURL="media/console.png"
        productName="Console"
        productDescription="The central dashboard for your Zerone account. Gain insights into your trades and investments with in-depth reports and visualisations."
        lernMore=""
      />
      <LeftSection
        imageURL="media\kite.png"
        productName="X-YZ"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo=""
        lernMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection 
        imageURL="media\kiteconnect.png"
        productName="X-YZ Connect API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        lernMore=""
      />
      <LeftSection
        imageURL="media\varsity.png"
        productName=" Easy-hunt "
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo=""
        lernMore=""
        googlePlay=""
        appStore=""
      /> 
      <p style={{textAlign:"center" , marginTop: "50px" , marginBottom:"50px"}}>Want to know more about our technology stack? Check out the Zerone.tech blog.</p>
      <Universe />
    </>
  );
}

export default ProductPage;
