import React from 'react';
function Awards() {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='media/largestBroker.svg'/>
                </div>
                <div className='col-6 p-5'>
                    <h1>Largest stock broker in india</h1>
                    <p className='mb-4 mt-3'>2+ million Zerodha clients contribute to over 15% of all retail order 
                        volumes in India daily by trading and investing in:</p>
                        <div className='row mb-4'>
                            <div className='col-6'>
                                <ul>
                                    <li><p>Future and options</p></li>
                                    <li><p>Commodity derivatives</p></li>
                                    <li><p>Currancy derivatives</p></li>
                                </ul>
                            </div>
                            <div className='col-6'>
                                <ul>
                                    <li><p>Stock's 7 IPOs</p></li>
                                    <li><p>Direct mutual funds</p></li>
                                    <li><p>Bond's and goverment secrity</p></li>
                                </ul>
                            </div>
                        </div>
                        <img src='media/pressLogos.png' style={{width:"90%"}}/>
                </div>
            </div>
        </div>
     );
}

export default Awards;