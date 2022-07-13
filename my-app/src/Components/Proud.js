import React from 'react';
import "../style/Proud.css"




function proud() {
  return (
    <div id='proud-section'>
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <div className="proud-content">
                        <h2>We are proud of our works</h2>
                        <p>We bring solutions to make life easier for our customers.</p>
                    </div>
                </div>
                <div className="col-md-9 ">
                    <div className="p-counter d-flex align-items-center justify-content-evenly">
                        <div className="counter-box">
                            <img src="" alt="" />
                            <h1 className='counter-numbers' data-number='6000'>6000</h1>
                            <p>Completed Projects</p>
                        </div>
                        <div className="counter-box">
                            <img src="" alt="" />
                            <h1 className='counter-numbers' data-number='6000'>6000</h1>
                            <p>Completed Projects</p>
                        </div>
                        <div className="counter-box">
                            <img src="" alt="" />
                            <h1 className='counter-numbers' data-number='6000'>6000</h1>
                            <p>Completed Projects</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default proud;
