import { Helmet } from "react-helmet";
import WhyTracknFly from "../../components/whyTracknFly/WhyTracknFly";
import AboutTrackenFly from "../../components/aboutTrackenFly/AboutTrackenFly";
import aboutus from "../../assets/images/aboutus.png";

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>About us - Trackn Fly</title>
        <meta
          name="description"
          content="Trackn Fly - It is the best travel agency with exclusive discounts on cheap hotels, flights, and car rentals.  Enjoy your trip without looking at your pocket."
        />
        <meta property="og:url" content="https://www.tracknfly.com/about-us" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="ABOUT US - Trackn Fly" />
        <meta property="og:site_name" content="ABOUT US" />
        <meta
          property="og:description"
          content="Trackn Fly - It is the best travel agency with exclusive discounts on cheap hotels, flights, and car on rentals. Visit our about us to know about the company."
        />
        <meta
          property="og:image"
          content="https://www.tracknfly.com/assets/tracknfly-logo-6b9305ee.png"
        />
      </Helmet>
      {/* <Hero text={"Explore Flights - Hotels Online & Cars on Rent"} /> */}

      <div className="py-[5rem]">
        <div className="py-5 px-[2rem] md:px-0">
          <h1 className="text-center text-[2.8rem] md:text-[3rem] lg:text-[4rem] font-semibold text-black">
            Trackn Fly has evolved as the most unique and wonderful in{" "}
            <br className="md:block hidden" />
            the travel industry
          </h1>
          <div className="text-black text-[1.5rem] text-center w-full tracking-wide py-5 md:w-[70%] mx-auto">
            Today, we have been solving billions of queries across the world and
            helping large numbers of travelers around the globe to make their
            trips more easy. Be it a query on holiday packages, flight and hotel
            booking car rental, or anything regarding the website, we are here
            to assist you in the simplest way.
          </div>
          <div className="text-black text-[1.5rem] text-center w-full tracking-wide pt-5 pb-10 md:pb-20 md:w-[70%] mx-auto">
            Trackn Fly is the most renowned <a href="/" className="text-blue-500">travel agency</a> around the world that
            offers the best deals on flights, air tickets, budgetary hotels, and
            cars on rent. We also send notifications to our customers so that
            they can get the best deal at the right time. So, now you don’t have
            to increase your bucket list and plan your trip now with Trackn Fly
            exclusive offers.
          </div>
          <img src={aboutus} alt="img" className="object-cover" />
        </div>
        <WhyTracknFly />
        <AboutTrackenFly />
      </div>
    </>
  );
};

export default AboutUs;
