import React from 'react';
function Team() {
    return ( 
        <div className='container'>
            <div className='row p-5 mt-2 mb-2 border-top'>
                <h1 className=' text-center'> People </h1>
            </div>
            <div className='row p-5 mt-3' style={{lineHeight:"1.8"}}>
                <div className='col-6 text-center'>
                    <img src='media\rohitsalunke1.png' style={{width:"60%"}} alt='#'/>
                    <h4 className='mt-4'>Rohit Salunke</h4>
                    <h6>Founder, CEO</h6>
                </div>
                <div className='col-6'>
                    <p>
                        Rohit Salunke founded Zerone with the vision of making stock market <br/>
                        investing simple, secure, and accessible for everyone. Inspired by <br/>
                        the power of technology and innovation, he built Zerone to provide <br/>
                        a seamless trading experience with an intuitive interface, real-time<br/>
                         market insights, and reliable investment tools.
                    </p>
                    <p>
                     Beyond technology, Rohit is passionate about software development, <br/>
                      problem-solving, and building products that create real-world impact.
                    </p>
                    <p>
                        He believes that the future of investing lies in combining simplicity, <br/>
                         transparency, and cutting-edge technology. <br/>
                    </p>
                    <p >Connect on <a  href='https://sarotwo.vercel.app/' style={{textDecoration:"none"}}>Portfolio</a> | <a href='https://github.com/salunke-rohit' style={{textDecoration:"none"}}>Github</a> | <a href='https://www.linkedin.com/in/rohit-salunke-318087346/' style={{textDecoration:"none"}}>Linkedin</a></p>
                </div>
            </div>
        </div>
         );
}

export default Team;