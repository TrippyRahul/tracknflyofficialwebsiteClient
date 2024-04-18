import React, { useState, useEffect } from "react";
import "./hero.scss";
import { FaPlane } from "react-icons/fa";
import Popup from "../popup/Popup";
import ErrorPopup from "../errorPopup/ErrorPopup";
const images = ["/f-c-1.jpg", "f-c-2.jpg", "f-c-3.jpg", "f-c-4.jpg"];

const Hero = () => {

  const [currentSlide, setCurrentSlide] = useState(0);
  const [error, setError] = useState("");
  const [popup, setPopup] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
      <div
        className="hero"
        style={{ backgroundImage: `url(${images[currentSlide]})` }}
      >
        {popup && <Popup />}
        {error && (
          <ErrorPopup error={error} setError={setError} setPopup={setPopup} />
        )}
        <div className="container">
          <div className="title">
            <h1>
              <div className="icon">
                <FaPlane />
              </div>
               Search, Compare Flights & Save
            </h1>
            <h2>Search. Book. Travel.</h2>
          </div>

          <div className="content">
            {/* Flight Iframe */}
            <iframe
              src="//www.travelpayouts.com/widgets/22205c47ab682a18e67bf3138082cce3.html?v=2203"
              allowFullScreen={true}
              title="Flights"
              className="flights_hero"
            ></iframe>
            {/* Flight Iframe */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
