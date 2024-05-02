import React, { useState, useEffect } from "react";
import "./hero.scss";
import Popup from "../popup/Popup";
import ErrorPopup from "../errorPopup/ErrorPopup";
import Script from "../../utils/Script";
const images = ["/f-c-1.jpg", "f-c-2.jpg", "f-c-3.jpg", "f-c-4.jpg"];

const Hero = ({ text, activeTab = "flight" }) => {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [active, setActive] = useState(activeTab);
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
        <div className="Container">
          <div className="title">
            <h1>
              <div className="icon">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_8_688)">
                    <path
                      d="M20.9231 10.2222H15.9626L11.4009 2.23871C11.3401 2.13242 11.2523 2.04409 11.1463 1.98266C11.0404 1.92123 10.9201 1.88888 10.7976 1.88889H7.95475C7.49337 1.88889 7.16047 2.33029 7.28721 2.77387L9.41525 10.2222H4.95084L3.07584 7.72222C2.94476 7.54731 2.7386 7.44444 2.52028 7.44444H0.784607C0.332784 7.44444 0.001187 7.86892 0.110996 8.30729L1.47862 13L0.110996 17.6927C0.001187 18.1311 0.332784 18.5556 0.784607 18.5556H2.52028C2.73903 18.5556 2.94476 18.4527 3.07584 18.2778L4.95084 15.7778H9.41525L7.28721 23.2257C7.16047 23.6693 7.49337 24.1111 7.95475 24.1111H10.7976C11.0468 24.1111 11.2768 23.9774 11.4005 23.7613L15.9626 15.7778H20.9231C22.4573 15.7778 25.0897 14.5343 25.0897 13C25.0897 11.4657 22.4573 10.2222 20.9231 10.2222Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_8_688">
                      <rect
                        width="25"
                        height="25"
                        fill="white"
                        transform="translate(0.0898438 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              {text}
            </h1>
            <h2>Search. Book. Travel.</h2>
          </div>

          <div className="content">
            <div className="flex text-[1.8rem] space-x-2 items-center">
              <div
                onClick={() => setActive("flight")}
                className={` ${
                  active === "flight" ? "bg-[#0f5a83] text-white" : "bg-white"
                } py-2 px-6 rounded-tl-md rounded-tr-md cursor-pointer`}
              >
                Flights
              </div>
              <div
                onClick={() => setActive("hotel")}
                className={` ${
                  active === "hotel" ? "bg-[#0f5a83] text-white" : "bg-white"
                } py-2 px-6 rounded-tl-md rounded-tr-md cursor-pointer`}
              >
                Hotels
              </div>
              <div
                onClick={() => setActive("car")}
                className={` ${
                  active === "car" ? "bg-[#F99C00] text-white" : "bg-white"
                } py-2 px-6 rounded-tl-md rounded-tr-md cursor-pointer`}
              >
                Cars
              </div>
            </div>

            {!iframeLoaded && (
              <div className="relative">
                <div className="absolute top-0 left-0 h-full w-full bg-opacity-40 animate-pulse bg-white animate-shine"></div>
                <div className="flex items-center justify-center h-[42rem] md:h-[9.3rem]  rounded-lg shadow-md"></div>
              </div>
            )}

            <iframe
              scrolling="no"
              frameBorder="0"
              src={
                "//www.travelpayouts.com/widgets/22205c47ab682a18e67bf3138082cce3.html?v=2203"
              }
              allowFullScreen={true}
              onLoad={() => setIframeLoaded(true)}
              // className={(active === "flight" || iframeLoaded) ? 'h-[70rem] md:h-[20rem] lg:h-[15rem]' : 'hidden'}
              className={`${
                active != "flight" || !iframeLoaded
                  ? "hidden"
                  : "h-[70rem] md:h-[20rem] lg:h-[15rem]"
              }`}
              title="Flights"
            ></iframe>

            <iframe
              scrolling="no"
              frameBorder="0"
              onLoad={() => setIframeLoaded(true)}
              src="//www.travelpayouts.com/widgets/c2fcc9c9f099c9a7e5502aa4dea71d3d.html?v=2267"
              className={`${
                active != "hotel" || !iframeLoaded
                  ? "hidden"
                  : "h-[70rem] md:h-[20rem] lg:h-[15rem]"
              }`}
              title="Hotels"
            ></iframe>

            <div
              id="cars-rental"
              className={`${
                active != "car" || !iframeLoaded ? "hidden" : "lg:h-[21.4rem] overflow-hidden"
              }`}
            >
              <Script
                src={
                  "//c1.travelpayouts.com/content?promo_id=1486&shmarker=368154&trs=174684&language=en&currency=USD&from=&to=&theme=1&powered_by=true"
                }
                target={"cars-rental"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
