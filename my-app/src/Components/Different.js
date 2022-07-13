import React from 'react';
import "../style/Different.css"
import differentImg from "../img/img2.jpg"

function Different() {
  return (
    <div id='different-section'>
      <div className="container">
        <div className="row d-flex align-item-center justify-content-center">
            <div className="col-md-6">
                <h4>WHAT MAKES US DIFFERENT?</h4>
                <h2>We make spending stress free so you have the perfect control.</h2>
                <p>Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus. Integer posuere erat a ante venenatis dapibus posuere velit.</p>
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
                            <ul className="contorl-list d-flex align-items-start">
                                <li>
                                    <span className='check'> <i className='fa fa-check'></i> </span>
                                    <span>Aenean quam ornare. Curabitur blandit.</span>
                                </li>
                            </ul>
            </div>
            <div className="col-md-6">
                <div className="different-img">
                    <img src={differentImg} alt="" />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Different;
