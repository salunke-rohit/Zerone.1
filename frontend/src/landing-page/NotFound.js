import React from 'react';
import { Link } from 'react-router-dom';
function NotFound() {
    return ( 
        <div className='container p-5  mt-5a'>
            <div className='row text-center'>
                <h1 className='mt-3 fs-2'  >404 Not found</h1>
                <p>Sorry, the page you are looking for does not exist.</p>
            </div>
        </div>
     );
}

export default NotFound;