import React from 'react';
function Hero() {
    return ( 
        <div className='container mb-5 border-bottom'>
            <div className='row text-center mt-5 p-2'>
                <h1>Technology</h1>
                <h3 className='text-muted mt-2'>Sleek, modern and intuitive trading platform</h3>
                <p className='mt-1 mb-5'>
  Check out our{" "}
  <a href="#" style={{ textDecoration: "none" }}>
    investment offering{" "}
    <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
  </a>
</p>
            </div>
        </div>
         );
}

export default Hero;