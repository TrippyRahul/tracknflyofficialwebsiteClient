import "./contact.scss";
import AboutTrackenFly from "../../components/aboutTrackenFly/AboutTrackenFly";
import { Link } from "react-router-dom";
import WhyTracknFly from "../../components/whyTracknFly/WhyTracknFly";
import { Helmet } from "react-helmet";
import facebook from "../../assets/images/facebook.svg";
import instagram from "../../assets/images/instagram.svg";

const social = [
  {
    id: 1,
    logo: facebook,
    name: "facebook",
    url: "",
  },
  {
    id: 2,
    logo: instagram,
    name: "instagram",
    url: "",
  },
];
const Contact = () => {
  return (
    <>
      <Helmet>
        <title>CONTACT US - Trackn Fly</title>
        <meta
          name="description"
          content="Trackn Fly is the best travel agency around the world that offers cheap hotels, flights, and cars on rentals. It has some coupons where you can save money."
        />
        <meta
          property="og:url"
          content="https://www.tracknfly.com/contact-us"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="CONTACT US - Trackn Fly" />
        <meta property="og:site_name" content="CONTACT US" />
        <meta
          property="og:description"
          content="Trackn Fly is the best travel agency around the world that offers cheap hotels, flights, and cars on rentals. For more information contact us anytime."
        />
        <meta
          property="og:image"
          content="https://www.tracknfly.com/assets/tracknfly-logo-6b9305ee.png"
        />
      </Helmet>
      {/* <Hero text={"Explore Flights - Hotels Online & Cars on Rent"} /> */}
      <div className="contact-us">
        <div className="Container py-[7rem] flex flex-col gap-[7rem]">
          <div className="px-[2rem] md:px-[4rem] flex items-center justify-center flex-col gap-[1rem] ">
            <h1 className="text-black text-center tracking-wide font-semibold  text-[4rem]">
              We are here to help
            </h1>
            <p className=" text-[2rem] w-full md:w-[80%] text-center">
              Are you struggling to <a href="/" className="text-blue-500">find flights or hotels?</a> or do you need
              another help regarding the website? we have our most experienced
              staff who will provide you with guidance at any time. You can ask
              anything at any time with our expert team via phone and email.
              They will ensure you have a smooth experience because your
              satisfaction is the top most priority.
            </p>
          </div>
          <div className="content flex flex-col lg:flex-row">
            <div className="left  py-[4rem] px-[2rem] md:px-[7rem]">
              <div className="flex flex-col gap-[1rem]">
                <h2 className=" text-[3rem] font-semibold  tracking-wide ">
                  Get in touch with us and make your trip more enjoyable
                </h2>

                <p className=" text-[2rem]">
                  At TRACKNFLY LLC we're constantly satisfied to get with both
                  new and existing customers, So in the event that you have a
                  question or require any information, Please feel free to reach
                  on below contact details.
                </p>
              </div>
              <ul className=" flex flex-col gap-[2rem]">
                <li className=" text-[2rem] flex items-center gap-[1rem]">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.04953 4.04999C6.36235 2.73717 8.14292 1.99963 9.99953 1.99963C11.8561 1.99963 13.6367 2.73717 14.9495 4.04999C16.2623 5.36281 16.9999 7.14338 16.9999 8.99999C16.9999 10.8566 16.2623 12.6372 14.9495 13.95L9.99953 18.9L5.04953 13.95C4.39944 13.3 3.88376 12.5283 3.53193 11.6789C3.18011 10.8296 2.99902 9.9193 2.99902 8.99999C2.99902 8.08068 3.18011 7.17037 3.53193 6.32104C3.88376 5.47172 4.39944 4.70001 5.04953 4.04999ZM9.99953 11C10.53 11 11.0387 10.7893 11.4137 10.4142C11.7888 10.0391 11.9995 9.53042 11.9995 8.99999C11.9995 8.46956 11.7888 7.96085 11.4137 7.58578C11.0387 7.2107 10.53 6.99999 9.99953 6.99999C9.4691 6.99999 8.96039 7.2107 8.58532 7.58578C8.21024 7.96085 7.99953 8.46956 7.99953 8.99999C7.99953 9.53042 8.21024 10.0391 8.58532 10.4142C8.96039 10.7893 9.4691 11 9.99953 11Z"
                      fill="#18181B"
                    />
                  </svg>
                  <span>Address: </span> Irving, TX 75038, USA.
                </li>
                {/* <li className="text-[2rem]">
                  <div className="flex items-center gap-[1rem]">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H3.153C3.38971 0.000108969 3.6187 0.0841807 3.79924 0.23726C3.97979 0.390339 4.10018 0.602499 4.139 0.836L4.879 5.271C4.91436 5.48222 4.88097 5.69921 4.78376 5.89003C4.68655 6.08085 4.53065 6.23543 4.339 6.331L2.791 7.104C3.34611 8.47965 4.17283 9.72928 5.22178 10.7782C6.27072 11.8272 7.52035 12.6539 8.896 13.209L9.67 11.661C9.76552 11.4695 9.91994 11.3138 10.1106 11.2166C10.3012 11.1194 10.5179 11.0859 10.729 11.121L15.164 11.861C15.3975 11.8998 15.6097 12.0202 15.7627 12.2008C15.9158 12.3813 15.9999 12.6103 16 12.847V15C16 15.2652 15.8946 15.5196 15.7071 15.7071C15.5196 15.8946 15.2652 16 15 16H13C5.82 16 0 10.18 0 3V1Z"
                        fill="#18181B"
                      />
                    </svg>
                    <span>Phone : </span> +1 888-812-2145
                  </div>
                </li> */}
                <li className=" text-[2rem] flex items-center gap-[1rem]">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.00293 5.884L9.99993 9.882L17.9969 5.884C17.9673 5.37444 17.744 4.89549 17.3728 4.54523C17.0015 4.19497 16.5103 3.99991 15.9999 4H3.99993C3.48951 3.99991 2.99838 4.19497 2.62711 4.54523C2.25584 4.89549 2.03253 5.37444 2.00293 5.884Z"
                      fill="#18181B"
                    />
                    <path
                      d="M18 8.11804L10 12.118L2 8.11804V14C2 14.5305 2.21071 15.0392 2.58579 15.4143C2.96086 15.7893 3.46957 16 4 16H16C16.5304 16 17.0391 15.7893 17.4142 15.4143C17.7893 15.0392 18 14.5305 18 14V8.11804Z"
                      fill="#18181B"
                    />
                  </svg>
                  <span>E-mail : </span>contact@tracknfly.com
                </li>
              </ul>
              <ul className=" flex flex-row gap-[2rem]">
                {social.map((item) => (
                  <li key={item?.id} className=" cursor-pointer">
                    <Link to={item?.url}>
                      <img
                        src={item?.logo}
                        className=" w-[3.5rem] h-[3.5rem]"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="right">
              <div className="titles">
                <h2>Contact Form</h2>
                <p>
                  You Can leave us your query below; our support team will be in
                  touch with you shortly.
                </p>
              </div>

              <form className="form">
                <input type="text" placeholder="Name" required />
                <input type="text" placeholder="Contact Number" required />
                <input type="text" placeholder="E-mail" required />
                <input type="text" placeholder="Subject" required />
                <textarea placeholder="Message" rows={5} />
                <button>Submit</button>
              </form>
            </div>
          </div>
        </div>
        <div className=" w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.7723108535197!2d77.11295177466656!3d28.69645688117642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03e51f3e8eb9%3A0xae6f0e1fa75cfb07!2sVardhman%20Premium%20Mall%2C%20Deepali%2C%20Pitampura%2C%20Delhi%2C%20110083!5e0!3m2!1sen!2sin!4v1690628221714!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className=" w-full"
          ></iframe>
        </div>
        <WhyTracknFly />
        <AboutTrackenFly />
      </div>
    </>
  );
};

export default Contact;
