import Benefits from "../components/benefits/Benefits";
import TopFlightOffer from "../components/topFlights/TopFlightOffer";
import WhyToChooseUs from "../components/why-choose-us/WhyToChooseUs";
import HowWeCanHelp from "../components/howCanWeHelp/HowWeCanHelp";
import PopularBeach from "../components/popularBeach/PopularBeach";
import FrquentlyAskedQuestions from "../components/faqs/FrquentlyAskedQuestions";
import WhyTracknFly from "../components/whyTracknFly/WhyTracknFly";
import AboutTrackenFly from "../components/aboutTrackenFly/AboutTrackenFly";
import Blogs from "../components/blogs/Blogs";
import Hero from "../components/hero/Hero";
import ExploreHidden from "../components/exploreHidden/ExploreHidden";
import { Helmet } from "react-helmet";

const data = {
  frquentlyAskedQuestions: [
    {
      id: 1,
      question: "Why choose Trackn Fly?",
      answer:
        "Trackn Fly is one of the leading company around the globe. We provide the best deals on the airline, flight tickets, and hotel bookings with huge discounts. At Trackn Fly you can also hire a car on rental at the lowest deal. We assure you that while using it, you will have the best experience without any trouble.",
    },
    {
      id: 2,
      question:
        "What is the best duration to book flights, hotels, and Cars on rent?",
      answer:
        "You can book your flight tickets before six to eight weeks in advance to get the cheapest price. However, hotel prices drop when you book four weeks before your travel date. It would be better if you rent a car before two weeks in advance.",
    },
    {
      id: 3,
      question: "What are the available payment modes?",
      answer:
        "There are payment modes from where you can pay for your flight tickets and hotel booking, debit or credit card. You can also pay from your digital wallet such as Amazon Pay, Mobikwik, and many more.",
    },
    {
      id: 4,
      question: "What is the Lowest Airfare Guarantee?",
      answer:
        "We are the only one who guarantees you the lowest airfare for domestic and international flight bookings.",
    },
    {
      id: 5,
      question: "Where do I find flights, hotels and Cars on rent deals?",
      answer:
        "At Trackn Fly, you can have the latest cars on rent, flights, and hotel deals.",
    },
    {
      id: 6,
      question: "How do I connect with Trackn Fly customer support?",
      answer:
        "We have 24/7 services, you can connect with us via email or call.",
    },
  ],
};

const Home = () => {
  return (
    <>
      <Helmet>
        <title>
          TracknFly- Cheap flights | Book Hotel online | car on rental
        </title>
        <meta
          name="description"
          content="Trackn Fly - We offer the best deal on cheap air or flight tickets and budget car rentals. You can also book Hotel rooms online at an affordable price."
        />
        <meta
          property="og:title"
          content="TracknFly- Cheap flights | Book Hotel online | car on rental"
        />
        <meta
          property="og:description"
          content="Trackn Fly - We offer the best deal on cheap air or flight tickets and budget car rentals. You can also book Hotel rooms online at an affordable price."
        />
        <meta property="og:url" content="https://www.tracknfly.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Trackn Fly" />
        <meta
          property="og:image"
          content="https://www.tracknfly.com/assets/tracknfly-logo-6b9305ee.png"
        />
        <meta
          name="Keywords"
          content="Flights, International Flights, Charter Flights, Hotels, International Hotels, Book Flights From US, Book Flights From UAE, Trip Ideas, Travel Blog, flight booking, cheap flights, airline tickets, plane tickets, cheap airline tickets, flight ticket, cheap flight tickets, last minute flights, car on rent, cheap cars for rent, rent a car for a day, cheapest car hire, hire a car for a day, hotel booking, cheap hotels, last minute hotels hotwire hotels, hotel booking sites."
        />
      </Helmet>
      <Hero text={"Explore Flights - Hotels Online & Cars on Rent"} />
      <Benefits />
      <PopularBeach />
      <TopFlightOffer />
      <ExploreHidden />
      <HowWeCanHelp />
      <Blogs />
      <WhyToChooseUs />
      <WhyTracknFly />
      <AboutTrackenFly />
      <FrquentlyAskedQuestions
        data={data.frquentlyAskedQuestions}
        sidebar={true}
      />
    </>
  );
};

export default Home;
