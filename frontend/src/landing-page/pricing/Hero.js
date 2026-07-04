import React from 'react';
function Hero() {
    return (
        <div className='conatiner'>
            <div className='row p-5 mt-2 border-bottom text-center'>
                <h1>Pricing</h1>
                <h3 className='text-muted fs-4 mt-3'>Free equity investment and flat 20 traday and F&0 trades</h3>
            </div>
            <div className='row mt-0 p-5 text-center'>
                <div className='col-4 p-5'>
                    <img src='media\pricingEquity.svg' />
                    <h1 className='fs-3'> Free equity delivery</h1>
                    <p className='text-muted'>All equity delivery investments (NSE, BSE), <br/> are absolutely free - 0 brokerage.</p>
                </div>
                <div className='col-4 p-5'>
                    <img src='media\intradayTrades.svg' />
                    <h1 className='fs-3'> Intraday and F&O trades</h1>
                    <p className='text-muted'>Flat Rs. 20 or 0.03% (whichever is lower) <br/>  per executed order on intraday trades <br/> across equity, currency, and commodity  <br/>trades.</p>
                </div>
                <div className='col-4 p-5'>
                    <img src='media\pricingEquity.svg' />
                    <h1 className='fs-3'> Free direct MF</h1>
                    <p className='text-muted'>All direct mutual fund investment. <br/> and absolutely free -- ₹0 commissione & <br/> Do charges.</p>
                </div>
            </div>
        </div>
         );
}

export default Hero;