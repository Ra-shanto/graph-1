import React from 'react';
import "../style/Control.css"
import controlImg from "../img/im2.png"

function Control() {
  return (
    <div id='control-section'>
        <div className="container">
            <div className='row'>
                <div className="col md-6">
                    <div className="control-img">
                        <img src={controlImg} alt="" />
                    </div>
                </div>
                <div className="col md-6 pt-5">
                    <div className="control-content">
                        <h4>HAVE PERFECT CONTROL</h4>
                        <h2>We bring solutions to make life easier for our customers.</h2>
                        <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue rutrum.</p>
                        <div className="control-list-wapper d-flex align-items-start">
                            <ul className="contorl-list">
                                <li>
                                    <span className='check'> <i className='fa fa-check'></i> </span>
                                    <span>Aenean quam ornare. Curabitur blandit.</span>
                                </li>
                            </ul>
                            <ul className="contorl-list">
                                <li>
                                    <span className='check'> <i className='fa fa-check'></i> </span>
                                    <span>Aenean quam ornare. Curabitur blandit.</span>
                                </li>
                            </ul>
                         
                        </div>
                        <div className="control-list-wapper d-flex align-items-start">
                            <ul className="contorl-list">
                                <li>
                                    <span className='check'> <i className='fa fa-check'></i> </span>
                                    <span>Aenean quam ornare. Curabitur blandit.</span>
                                </li>
                            </ul>
                            <ul className="contorl-list d-flex align-items-start">
                                <li>
                                    <span className='check'> <i className='fa fa-check'></i> </span>
                                    <span>Aenean quam ornare. Curabitur blandit.</span>
                                </li>
                            </ul>
                         
                        </div>
                    </div>
            </div>     </div>     
    </div>  
    </div>    
  );
}

export default Control;
