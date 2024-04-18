import React from "react";
import EasyStepsIMG from "/easy-steps.png"
import BestPriceIMG from "/best-price.png"
import "./benefits.scss";

const Benefits = () => {
  return (
    <div className="benefits">
      <div className="benefits_title">Explore and Save your money on Flights and Hotels<br className="break_text"/> Discover. Book.Travel</div>
      <div className="container">
        <div className="cards">
          <div className="card">
            <div className="img">
              <img src={EasyStepsIMG} className="easy-steps" alt="customer-care" loading="lazy" />
            </div>
            <div className="text">
              <p className="title"> Book effortlessly </p>
              <p className="subtitle">We at Trackn Fly give you the best opportunity to find the perfect flight and hotel for your next adventure...<span className="read_more">read more</span></p>
            </div>
          </div>

          <div className="card">
            <div className="img">
              <img src={BestPriceIMG} alt="customer-care" loading="lazy" />
            </div>
            <div className="text">
              <p className="title">Exclusive deals on Trackn Fly</p>
              <p className="subtitle">
                 By simply downloading the Trackn Fly, you can have access to all the exclusive deals and discounts while..<span className="read_more">read more</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
