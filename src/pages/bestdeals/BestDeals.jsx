import bestdealsbg from "../../assets/images/bestdeals.png";
import bestdealAboutIMG from "../../assets/images/best-deal-about.png";
import bestDealBannerCardIMG from "../../assets/images/bestDealBannerCard-1.webp";
import bestDealBannerCardIMG2 from "../../assets/images/bestDealBannerCard-2.webp";
import bestDealBannerCardIMG3 from "../../assets/images/bestDealBannerCard-3.webp";
import bestDealBannerCardIMG4 from "../../assets/images/bestDealBannerCard-4.webp";
import bestDealBannerCardIMG5 from "../../assets/images/bestDealBannerCard-5.webp";


import fligthTimelineIMG from "../../assets/images/flight-timeline.jpg";
import { Helmet } from "react-helmet";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";
import FrquentlyAskedQuestions from "../../components/faqs/FrquentlyAskedQuestions";
import { Link } from "react-router-dom";
import { useState } from "react";
import HotelCard from "../../components/ui/HotelCard";
import { FlightCard } from "../../components/ui/FlightCard";
import londonHotel from "../../assets/images/london-hotels.jpg";
import lasVegas from "../../assets/images/las-vegas-hotels.jpg";
import sanDiego from "../../assets/images/san-diego-hotels.jpg";
import losAngeles from "../../assets/images/los-angeles-hotels.jpg";
import miamiBeach from "../../assets/images/miami-beach-hotels.jpg";
import oceanCity from "../../assets/images/ocean-city-hotels.jpeg";
import myrtleBeach from "../../assets/images/myrtle-beach-hotels.jpg";
import medina from "../../assets/images/medina-hotels.jpeg";
import sanJuan from "../../assets/images/san-juan-hotels.jpeg";
import washington from "../../assets/images/washington-dc-hotels.jpeg";

import laVegasCar from "../../assets/images/las-vegas-cars.jpeg";
import sanJoseCar from "../../assets/images/san-jose-car.jpeg";
import sanDiegoCar from "../../assets/images/san-diego-car.jpeg";
import losAngelesCar from "../../assets/images/los-angeles-car.webp";
import mianiBeachCar from "../../assets/images/miami-beach-car.jpeg";
import oceanCityCar from "../../assets/images/ocean-city-car.jpeg";
import myrtleBeachCar from "../../assets/images/myrtle-beach-car.jpeg";
import medinaCar from "../../assets/images/medina-car.webp";
import sanJuanCar from "../../assets/images/san-juan-car.jpeg";
import miamiBeachCar from "../../assets/images/miami-beach-car.jpeg";
import washingtonCar from "../../assets/images/washington-dc-car.webp";
import ProductOffering from "../../components/productOffering/ProductOffering";

const BestDeals = () => {
  const [state, setState] = useState('all')
  const [currentSlide, setCurrentSlide] = useState(0);
  const handleSlideChange = (selectedIndex) => {
    setCurrentSlide(selectedIndex);
  };

  const bannerCardData = [
    {
      id: 1,
      heading: 'Best Price Guarantee',
      image: bestDealBannerCardIMG,
      para: "Find Better Hotel Price Anywhere Else & Get Double Refund on the Price Difference.",
    },
    {
      id: 2,
      heading: 'Insurance Coverage',
      image: bestDealBannerCardIMG2,
      para: "Get complimentary flight cancellation insurance on every flight booking",
    },
    {
      id: 3,
      heading: 'Flight Deal',
      image: bestDealBannerCardIMG3,
      para: "Get Discount up to 35% on Booking Flights Tickets.",
    },
    {
      id: 4,
      heading: 'Exciting Summer Deals',
      image: bestDealBannerCardIMG4,
      para: "Enjoy the contrasting beauty of many locations at the most affordable price tags.",
    },
    {
      id: 5,
      heading: 'Speak With Tracknfly',
      image: bestDealBannerCardIMG5,
      para: "Book Your Flight in a Call, Save Time and Travel Happy!",
    }
  ];

  const bestFlightData = [
    {
      date: "Thu, 23 May",
      from: "Honolulu (HNL)",
      to: "Kahului (OGG)",
      discount: "upto 15%",
      url: "",
    },
    {
      date: "Sun, 26 May",
      from: "Atlanta (ATL) ",
      to: "Orlando (MCO)",
      discount: "upto 10%",
      url: "",
    },
    {
      date: "Sun, 26 May",
      from: "Las Vegas (LAS)",
      to: "Los Angeles (LAX)",
      discount: "upto 20%",
      url: "",
    },
    {
      date: "Sun, 26 May",
      from: "New York (JFK) ",
      to: "Los Angeles (LAX)",
      discount: "upto 30%",
      url: "",
    },
    {
      date: "Thu, 23 May",
      from: "Denver (DEN)",
      to: "Las Vegas (LAS)",
      discount: "upto 25%",
      url: "",
    },
    {
      date: "Sun, 26 May",
      from: "Atlanta (ATL) ",
      to: "Fort Lauderdale",
      discount: "upto 26%",
      url: "",
    },
    {
      date: "Sun, 26 May",
      from: "Denver (DEN) ",
      to: "Las Vegas (LAS)      ",
      discount: "upto 22%",
      url: "",
    },
    {
      date: "Sun, 26 May",
      from: "Denver (DEN)",
      to: "Phoenix ",
      discount: "upto 35%",
      url: "",
    },
    {
      date: "Sun, 26 May",
      from: "San Francisco (SFO)",
      to: "Los Angeles (LAX) ",
      discount: "upto 40%",
      url: "",
    },
    {
      date: "Sun, 26 May",
      from: "New York (LGA) ",
      to: "Chicago (ORD)      ",
      discount: "upto 35%",
      url: "",
    },
    {
      date: "Sun, 26 May",
      from: "Los Angeles (LAX) ",
      to: "Chicago (ORD)      ",
      discount: "upto 25%",
      url: "",
    },
  ];

  const hotelDealsData = [
    {
      id: 1,
      name: "London hotels",
      discount: "Flat 20%",
      img: londonHotel,
      url: "",
    },
    {
      id: 2,
      name: "Las Vegas hotels",
      discount: "Flat 16%",
      img: lasVegas,
      url: "",
    },
    {
      id: 3,
      name: "San Diego hotels",
      discount: "Flat 25%",
      img: sanDiego,
      url: "",
    },
    {
      id: 4,
      name: "Los Angeles hotels",
      discount: "Flat 12%",
      img: losAngeles,
      url: "",
    },
    {
      id: 5,
      name: "Miami Beach hotels",
      discount: "Flat 22%",
      img: miamiBeach,
      url: "",
    },
    {
      id: 6,
      name: "Ocean City hotels",
      discount: "Flat 33%",
      img: oceanCity,
      url: "",
    },
    {
      id: 7,
      name: "Myrtle Beach hotels",
      discount: "Flat 28%",
      img: myrtleBeach,
      url: "",
    },
    {
      id: 8,
      name: "Medina hotels",
      discount: "Flat 25%",
      img: medina,
      url: "",
    },
    {
      id: 9,
      name: "San Juan hotels",
      discount: "Flat 18%",
      img: sanJuan,
      url: "",
    },
    {
      id: 10,
      name: "Miami Beach hotels",
      discount: "Flat 30%",
      img: miamiBeach,
      url: "",
    },
    {
      id: 10,
      name: "Washington, D.C. hotels",
      discount: "Flat 22%",
      img: washington,
      url: "",
    },
  ];

  const carDealsData = [
    {
      id: 1,
      name: "Las Vegas Car Rentals",
      discount: "Upto 15%",
      img: laVegasCar,
      url: "",
    },
    {
      id: 2,
      name: "San Jose Car Rentals",
      discount: "Upto 10%",
      img: sanJoseCar,
      url: "",
    },
    {
      id: 3,
      name: "San Diego Car Rentals",
      discount: "Upto 20%",
      img: sanDiegoCar,
      url: "",
    },
    {
      id: 4,
      name: "Los Angeles Car Rentals",
      discount: "Upto 30%",
      img: losAngelesCar,
      url: "",
    },
    {
      id: 5,
      name: "Miami Beach Car Rentals",
      discount: "Upto 25%",
      img: mianiBeachCar,
      url: "",
    },
    {
      id: 6,
      name: "Ocean City Car Rentals",
      discount: "Upto 26%",
      img: oceanCityCar,
      url: "",
    },
    {
      id: 7,
      name: "Myrtle Beach Car Rentals",
      discount: "Upto 22%",
      img: myrtleBeachCar,
      url: "",
    },
    {
      id: 8,
      name: "Medina Car Rentals",
      discount: "Upto 35%",
      img: medinaCar,
      url: "",
    },
    {
      id: 9,
      name: "San Juan Car Rentals",
      discount: "Upto 40%",
      img: sanJuanCar,
      url: "",
    },
    {
      id: 10,
      name: "Miami Beach Car Rentals",
      discount: "Upto 35%",
      img: miamiBeachCar,
      url: "",
    },
    {
      id: 11,
      name: "Washington, D.C. Car Rentals",
      discount: "Upto 25%",
      img: washingtonCar,
      url: "",
    },
  ];

  const frquentlyAskedQuestions = {
    
      faqall: [
        {
          id: 1,
          question: "How do I find travel deals on Tracknfly?      ",
          answer:
            "On our best deals page, you will get all the latest discounts and offers on flight, hotels and car rentals.        ",
        },
        {
          id: 2,
          question: "How can I use Tracknfly to manage my travel bookings?        ",
          answer:
            "To manage your travel bookings, you need to sign up and add all your travel bookings like flights, hotels, and car rentals. Then enter the details including dates, times, and confirmation numbers. It will help you to keep everything organized. If there are any changes like the flight delay or the deals. We will notify you.         ",
        },
        {
          id: 3,
          question: "How do I find cheap airplane tickets?      ",
          answer:
            "For cheap airplane tickets, just visit our flight offers page and enter your destination and travel dates. There will be numerious option on flights tickets. Now you can compare the prices and book cheapest airplane tickets with Trackn Fly.        ",
        },
        {
          id: 4,
          question:
            "What things should we consider before buying an air ticket for a first time air travel?      ",
          answer:
            "While booking air tickets for the first time, you need to consider a few things like your destination and travel dates. Decide your budget as budget is the most important thing for traveling including additional costs like meals and baggage fees. Compare different airlines and flight options and find the best deal on it. Check baggage allowance and avoid unexpected fees and ensure that you have all necessary travel documents such as a valid passport and visa. We will help you to have the offers so that you can enjoy a hassle-free vacation.        ",
        },
        {
          id: 5,
          question:
            "Can I negotiate the price of an airplane ticket if I want to buy 300 tickets?      ",
          answer:
            "Yes, you can but it depends on your negotiating skills, airlines, and the circumstances.         ",
        },
      ],
      faqhotel: [
        {
          id: 1,
          question: "How do I get my hotel to show up on Tracknfly?",
          answer:
            "It is very simple, it’s just you need to visit our hotel offers page and get your hotel. We have the best variety of hotels on one page.",
        },
        {
          id: 2,
          question: "How do I find the hotel's contact details?        ",
          answer:
            "When you search for your hotel, select the hotel you choose. You will find its contact and other details below.",
        },
        {
          id: 3,
          question: "When I click a deal on your site it tells me the price has gone up! What's up with that?",
          answer:
            "Prices for hotels can fluctuate due to their high demand, availability, and time. So, the deal you were looking for may have expired. In that case, we recommend you search for alternative options and you can book a hotel instantly.",
        },
        {
          id: 4,
          question:
            "Help! I need to change/cancel my reservation!",
          answer:
            "In case you want to cancel your reservation due to some reasons. Then you can cancel or change your reservation. Remember after cancellation you will get your refund in 7 to 14 days. ",
        },
        {
          id: 5,
          question:
            "What are the best sites for getting last minute hotel deals?",
          answer:
            "On our hotel offers or best deals page, you will find last-minute hotel deals.",
        },
      ],
      faqcars: [
        {
          id: 1,
          question: "How does Tracknfly find such low rental car prices?",
          answer:
            "We have multiple sources that give the cheapest rental car prices on one page.",
        },
        {
          id: 2,
          question: "How do I find the best car rental deals on Tracknfly? ",
          answer:
            "On our cars on rental offers page, you will find the best deals on it.",
        },
        {
          id: 3,
          question: "What kind of cars can I rent on Tracknfly?",
          answer:
            "You can rent any type of car on rent with us.",
        },
        {
          id: 4,
          question:
            "What do I need to know before booking a car rental?",
          answer:
            "Before booking a car on rent, you need to check what type of vehicle you want to book, budget, availability, requirements, insurance, rental period, and many more things.",
        },
        {
          id: 5,
          question:
            "Is it cheaper to rent a car at the airport or off-site?",
          answer:
            "Yes, it is cheaper to rent a car at the airport or off-site.",
        },
      ]
  }

  const data = {
    productOffering: [
      {
        title: "PRODUCT OFFERING ",
        desc: "<span><a href='/flights'>Flights</a>, International Flights, Charter Flights, Hotels, International Hotels, Book Flights From US, Book Flights From UAE, <a href='/blogs'>Trip Ideas</a>, <a href='/blogs'>Travel Blog</a>, <a href='/flights'>flight booking</a>, cheap flights, airline tickets, plane tickets, cheap airline tickets, flight ticket, cheap flight tickets, <a href='/flights'>last minute flights</a>, <a href='/cars-on-rent'>car on rent</a>, cheap cars for rent, rent a car for a day, cheapest car hire, hire a car for a day, <a href='/hotel'>hotel booking</a>, cheap hotels, last minute hotels hotwire hotels, <a href='/hotel'>hotel booking sites.</a></span>",
        redirect: "",
      },
      {
        title:
          "Trackn Fly gives exclusive discounts on Flights, Hotels and Car on Rent      ",
        desc: "We at Trackn Fly offer the best deal on airline tickets in one place where you can not find cheap flight tickets and a hotel booking at a low price. Here you will also get a car on rent at a very cheap price. We also have affordable and customized holiday packages. For us, our customer satisfaction is the top most priority and we have our dedicated staff who will be there to help you at any time. For the past few years, we are very happy to fulfill the dreams of many travelers who love to explore different places. So, with Trackn Fly discover the whole world without breaking your pocket.      ",
        redirect: "",
      },
      {
        title: "Domestic Flight Routes within USA",
        desc: "Honolulu (HNL) – Kahului (OGG), Atlanta (ATL) – Orlando (MCO), Las Vegas (LAS) - Los Angeles (LAX), New York (JFK) – Los Angeles (LAX), Denver (DEN) – Las Vegas (LAS), Atlanta (ATL) - Fort Lauderdale, Denver (DEN) – Las Vegas (LAS), Denver (DEN - Phoenix, San Francisco (SFO) – Los Angeles (LAX), New York (LGA) – Chicago (ORD), Los Angeles (LAX) – Chicago (ORD)",
        redirect: "",
      },
      {
        title: "TOP DOMESTIC HOTELS IN USA ",
        desc: "Acqualina Resort & Residences, Four Seasons Hotel at The Surf Club, Surfside, Florida, The Langham, Chicago, The Peninsula Chicago, Montage Laguna Beach, Mauna Lani, Auberge Resorts Collection, Faena Hotel Miami Beach, The Setai Miami Beach, Mandarin Oriental, Boston, planet hollywood las vegas, circus circus reno, opryland hotel, the venetian las vegashilton, hawaiian village, universal hotels, quality inn, ritz carlton, fontainebleau miami, comfort inn, yosemite valley lodge, universal studios hotels, excalibur hotel, park mgm, camelback resort, palazzo las vegas, hilton garden inn, hotels near universal studios, encore las vegas, bonvoy marriott, grand sierra resort, radisson blu, radisson, hotel washington, palazzo, luxor hotel, ala moana hotel",
        redirect: "/hotels",
      },
      {
        title: "TOP INTERNATIONAL HOTELS      ",
        desc: "Armani Hotel Dubai, Baur au Lac, Belmond Copacabana Palace, Carlisle Bay, Ciragan Palace Kempinski Istanbul, Excelsior Palace Hotel Rapallo, Fairmont Le Chateau Frontenac, Hotel Vier Jahreszeiten Kempinski Munich, Fairmont Jaipur, Taj Rishikesh, Taj Lake Palace Udaipur, The Taj Mahal Palace Mumbai, Kimpton Hotels & Restaurants, Hyatt Hotels & Resorts, Marriott International, Four Seasons, Hotels & Resorts, Wyndham Hotels & Resorts, IHG Hotels and Resorts, Jin Jiang International, Best Western International, Six Senses Fort Barwara, Taj West End Bengaluru, Grand Hyatt Mumbai, The Ritz Carlton Bengaluru, The Oberoi Gurgaon, Le Meridien Goa, Jai Mahal Palace Jaipur, St Regis Goa",
        redirect: "/hotels",
      },
      {
        title: "Popular US Destinations for Car Rentals",
        desc: "Car Rental Las Vegas, Car Rental NYC, Car Rental Chicago, Car Rental Orlando Car Rental Los Angeles, Car Rental Orlando Airport, Car Rental Fort Myers Airport, Car Rental Tampa Airport, Car Rental Miami Airport, Car Rental Phoenix Airport, Car Rental Denver Airport, Car Rental Las Vegas Airport, Car Rental Toronto Airport, Car Rental Dallas Airport, Car Rental Nashville Airport, Car Rental Palm Springs Airport, Car Rental Edmonton Airport, Car Rental Newark Airport, Car Rental LAX Airport, Car Rental SJO Airport, Cheap Car Rental Orlando, Cheap Car Rental Miam",
        redirect: "/car-on-rent",
      },
      {
        title: "Popular Rental Cars ",
        desc: "Barcelona, Milan, Cape Town, Durban, Lima, Peru, Kraków, Poland, Moscow, Russia, Los Angeles, Luxury Car Rental, Budget cars, Family cars, Car rentals that fit your budget, SUV Rental, All Car/Sedan Sizes, Van Rental, ",
        redirect: "",
      },
      {
        title: "QUICK LINKS",
        desc: "Flights from USA to India (US - IN), Flights from New York to Miami (NYC - MIA), Flights from New York to Florida (NYC - FL), Flights from Chicago to Las Vegas (CHI - LAS), Flights from New York to Atlanta (NYC - ATL), Flights from New York to Orlando (NYC - ORL), Flights from Los Angeles to Manila (LAX - MNL), Flights from New York to Los Angeles (NYC - LAX), Flights from Los Angeles to Las Vegas (LAX - LAS), Flights from Dallas to Las Vegas (DFW - LAS), Flights from Atlanta to Miami (ATL - MIA), Flights from New York to Las Vegas (NYC - LAS), Flights from San Francisco to India (SFO - IN), Flights from Chicago to Los Angeles (CHI - LAX), Flights from Los Angeles to Hawaii (LAX - HI), Flights from USA to Philippines (US - PH), Flights from Chicago to Miami (CHI - MIA), Flights from New York to London (NYC - LON), Flights from Miami to The Bahamas (MIA - BS), Flights from New York to Chicago (NYC - CHI), Flights from Atlanta to Las Vegas (ATL - LAS), Flights from Los Angeles to New York (LAX - NYC), Flights from Dallas to Los Angeles (DFW - LAX), Flights from New York to California (NYC - CA)",
        redirect: "/flights",
      },
    ],
    hotel:[
      {
        title: "PRODUCT OFFERING ",
        desc: "<span><a href='/flights'>Flights</a>, International Flights, Charter Flights, Hotels, International Hotels, Book Flights From US, Book Flights From UAE, <a href='/blogs'>Trip Ideas</a>, <a href='/blogs'>Travel Blog</a>, <a href='/flights'>flight booking</a>, cheap flights, airline tickets, plane tickets, cheap airline tickets, flight ticket, cheap flight tickets, <a href='/flights'>last minute flights</a>, <a href='/cars-on-rent'>car on rent</a>, cheap cars for rent, rent a car for a day, cheapest car hire, hire a car for a day, <a href='/hotel'>hotel booking</a>, cheap hotels, last minute hotels hotwire hotels, <a href='/hotel'>hotel booking sites.</a></span>",
        redirect: "",
      },
      {
        title:
          "Trackn Fly gives exclusive discounts on Flights, Hotels and Car on Rent      ",
        desc: "We at Trackn Fly offer the best deal on airline tickets in one place where you can not find cheap flight tickets and a hotel booking at a low price. Here you will also get a car on rent at a very cheap price. We also have affordable and customized holiday packages. For us, our customer satisfaction is the top most priority and we have our dedicated staff who will be there to help you at any time. For the past few years, we are very happy to fulfill the dreams of many travelers who love to explore different places. So, with Trackn Fly discover the whole world without breaking your pocket.      ",
        redirect: "",
      },
      {
        title: "TOP DOMESTIC HOTELS IN USA ",
        desc: "Acqualina Resort & Residences, Four Seasons Hotel at The Surf Club, Surfside, Florida, The Langham, Chicago, The Peninsula Chicago, Montage Laguna Beach, Mauna Lani, Auberge Resorts Collection, Faena Hotel Miami Beach, The Setai Miami Beach, Mandarin Oriental, Boston, planet hollywood las vegas, circus circus reno, opryland hotel, the venetian las vegashilton, hawaiian village, universal hotels, quality inn, ritz carlton, fontainebleau miami, comfort inn, yosemite valley lodge, universal studios hotels, excalibur hotel, park mgm, camelback resort, palazzo las vegas, hilton garden inn, hotels near universal studios, encore las vegas, bonvoy marriott, grand sierra resort, radisson blu, radisson, hotel washington, palazzo, luxor hotel, ala moana hotel",
        redirect: "/hotels",
      },
      {
        title: "TOP INTERNATIONAL HOTELS      ",
        desc: "Armani Hotel Dubai, Baur au Lac, Belmond Copacabana Palace, Carlisle Bay, Ciragan Palace Kempinski Istanbul, Excelsior Palace Hotel Rapallo, Fairmont Le Chateau Frontenac, Hotel Vier Jahreszeiten Kempinski Munich, Fairmont Jaipur, Taj Rishikesh, Taj Lake Palace Udaipur, The Taj Mahal Palace Mumbai, Kimpton Hotels & Restaurants, Hyatt Hotels & Resorts, Marriott International, Four Seasons, Hotels & Resorts, Wyndham Hotels & Resorts, IHG Hotels and Resorts, Jin Jiang International, Best Western International, Six Senses Fort Barwara, Taj West End Bengaluru, Grand Hyatt Mumbai, The Ritz Carlton Bengaluru, The Oberoi Gurgaon, Le Meridien Goa, Jai Mahal Palace Jaipur, St Regis Goa",
        redirect: "/hotels",
      },
    ],
    cars:[
      {
        title: "PRODUCT OFFERING ",
        desc: "<span><a href='/flights'>Flights</a>, International Flights, Charter Flights, Hotels, International Hotels, Book Flights From US, Book Flights From UAE, <a href='/blogs'>Trip Ideas</a>, <a href='/blogs'>Travel Blog</a>, <a href='/flights'>flight booking</a>, cheap flights, airline tickets, plane tickets, cheap airline tickets, flight ticket, cheap flight tickets, <a href='/flights'>last minute flights</a>, <a href='/cars-on-rent'>car on rent</a>, cheap cars for rent, rent a car for a day, cheapest car hire, hire a car for a day, <a href='/hotel'>hotel booking</a>, cheap hotels, last minute hotels hotwire hotels, <a href='/hotel'>hotel booking sites.</a></span>",
        redirect: "",
      },
      {
        title:
          "Trackn Fly gives exclusive discounts on Flights, Hotels and Car on Rent      ",
        desc: "We at Trackn Fly offer the best deal on airline tickets in one place where you can not find cheap flight tickets and a hotel booking at a low price. Here you will also get a car on rent at a very cheap price. We also have affordable and customized holiday packages. For us, our customer satisfaction is the top most priority and we have our dedicated staff who will be there to help you at any time. For the past few years, we are very happy to fulfill the dreams of many travelers who love to explore different places. So, with Trackn Fly discover the whole world without breaking your pocket.      ",
        redirect: "",
      },
      {
        title: "Popular US Destinations for Car Rentals",
        desc: "Car Rental Las Vegas, Car Rental NYC, Car Rental Chicago, Car Rental Orlando Car Rental Los Angeles, Car Rental Orlando Airport, Car Rental Fort Myers Airport, Car Rental Tampa Airport, Car Rental Miami Airport, Car Rental Phoenix Airport, Car Rental Denver Airport, Car Rental Las Vegas Airport, Car Rental Toronto Airport, Car Rental Dallas Airport, Car Rental Nashville Airport, Car Rental Palm Springs Airport, Car Rental Edmonton Airport, Car Rental Newark Airport, Car Rental LAX Airport, Car Rental SJO Airport, Cheap Car Rental Orlando, Cheap Car Rental Miam",
        redirect: "/car-on-rent",
      },
      {
        title: "Popular Rental Cars ",
        desc: "Barcelona, Milan, Cape Town, Durban, Lima, Peru, Kraków, Poland, Moscow, Russia, Los Angeles, Luxury Car Rental, Budget cars, Family cars, Car rentals that fit your budget, SUV Rental, All Car/Sedan Sizes, Van Rental, ",
        redirect: "",
      },
    ]
  };

  return (
    <>
      <Helmet>
        <title>BEST DEALS - Air Tickets | Cars on rentals | Cheap Hotels</title>
        <meta
          name="description"
          content="TracknFly - With just a few clicks you can have the best deals on flights, cars on rentals, and cheap hotels with Trackn Fly. Now plan your trip with us now."
        />
        <meta
          property="og:url"
          content="https://www.tracknfly.com/best-deals"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="BEST DEALS -  Air Tickets | Cars on rentals | Cheap Hotels."
        />
        <meta property="og:site_name" content="BEST DEALS" />
        <meta
          property="og:description"
          content="TracknFly - With just a few clicks you can have the best deals on flights, cars on rentals, and cheap hotels with Trackn Fly. Now plan your trip with us now."
        />
        <meta
          property="og:image"
          content="https://i.im.ge/2024/04/30/ZPv6SY.Final-logo.jpeg"
        />
        <meta
          name="Keywords"
          content="Best deals, air flight deals, cheap hotels with Trackn Fly, Cars deals, Flights Booking, cheap deals, air flights deals, explore deals, great deals, offers"
        />
      </Helmet>
      <div
        className=" bg-cover  bg-center md:px-[6rem] py-[10rem] overflow-hidden"
        style={{ backgroundImage: `url(${bestdealsbg})` }}
      >
        <div className=" flex flex-row">
          <div className="flex items-start justify-center flex-col md:gap-[4rem]">
            <h1 className="text-white pl-4 md:pl-0 font-bold text-[5rem]">
              With The Best Deals Now<br className="md:hidden block" />
              You Can Plan Your Trip With Us
            </h1>
            <Link to={'/contact-us'} className="bg-[#0EB77A] ml-4 md:ml-0 text-white text-[1.6rem] py-[1rem] px-[2.5rem] rounded-[3rem]  hover:scale-90 transition-all">
              Contact us now{" "}
            </Link>
          </div>
          <div className=" w-1/2  relative hidden sm:flex">
            <div className="p-[4rem]"></div>
            <Carousel
              opts={{
                align: "start",
              }}
              plugins={[
                Autoplay({
                  delay: 2000,
                }),
              ]}
              onSlideChange={handleSlideChange}
            >
              <CarouselContent>
                {bannerCardData.map((item, idx) => (
                  <CarouselItem key={idx} className="basis-1/3 lg:basis-1/2">
                    <div
                      key={idx}
                      className=" bg-white p-[2rem]  h-[380px] rounded-[2rem]"
                    >
                      <img src={item.image} alt={item.heading} className="w-full rounded-2xl scale-110" />
                      <div className="flex items-start justify-between h-[38%] mt-10 flex-col">
                        <h6 className="text-[2rem]">{item.heading}</h6>

                        <p className="text-black text-opacity-50 text-[1.5rem] text-start">
                          {item.para}
                        </p>
                        {idx === 4 ? <button className="bg-[#FB4A2A] text-white text-[1.4rem] py-1.5 px-5 rounded-full hover:bg-red-800 hover:scale-90 transition-all">
                          CALL NOW <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-phone inline-block"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                        </button> : <button className="bg-[#FB4A2A] text-white text-[1.4rem] py-1.5 px-5 rounded-full hover:bg-red-800 hover:scale-90 transition-all">
                          BOOK NOW
                        </button>}
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="   ml-[20vw] inline-block pt-[1rem]">
                {bannerCardData.map((_, index) => (
                  <span
                    key={index}
                    className={` inline-block mr-2 w-2 h-2 rounded-full transition-all ${index === currentSlide ? "bg-red-500" : "bg-white"
                      }`}
                  ></span>
                ))}
              </div>
            </Carousel>
          </div>
        </div>

        {/* Tabs is Here  */}
        <ul className="flex flex-wrap space-x-3 md:space-x-10  space-y-4 md:space-y-0 text-sm absolute mt-8 md:mt-14 py-3 justify-center  font-normal w-full  md:w-[50%]  md:mx-[25%] backdrop-blur-2xl text-center text-gray-500 dark:text-gray-400">
          <li className="mt-4 md:mt-0">
            <button onClick={() => setState('all')} className={`inline-block px-10 py-3   ${state === 'all' ? 'bg-[#2659C3] text-white' : 'bg-white text-black'}  text-3xl rounded-xl`} aria-current="page">All</button>
          </li>
          <li>
            <button onClick={() => setState('flight')} className={`inline-block px-10 py-3   ${state === 'flight' ? 'bg-[#2659C3] text-white' : 'bg-white text-black'}  text-3xl rounded-xl`} aria-current="page">Flight Offers</button>
          </li>
          <li>
            <button onClick={() => setState('hotel')} className={`inline-block px-10 py-3   ${state === 'hotel' ? 'bg-[#2659C3] text-white' : 'bg-white text-black'}  text-3xl rounded-xl`} aria-current="page">Hotel Offers</button>
          </li>
          <li>
            <button onClick={() => setState('cars')} className={`inline-block px-10 py-3  ${state === 'cars' ? 'bg-[#2659C3] text-white' : 'bg-white text-black'}  text-3xl rounded-xl`} aria-current="page">Cars on Rent Offers</button>
          </li>
        </ul>
      </div>

      {/* Books Flights And Have The Best Deals Upto 10% to 40% Off */}
      {(state === 'all' || state === 'flight') && (<div className="px-[4rem] py-[6rem] flex flex-col gap-[4rem]">
        <div>
          <h2 className="text-black text-left tracking-wide font-semibold  text-[2.5rem]">
            Books Flights And Have The Best Deals Upto 10% to 40% Off
          </h2>
          <p className=" text-[1.6rem]">Within USA Flights</p>
        </div>
        <Carousel
          opts={{
            align: "start",
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className="w-full "
        >
          <CarouselContent>
            {bestFlightData.map((item, idx) => (
              <CarouselItem
                key={idx}
                className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 p-[1rem] bg-[white]"
              >
                <FlightCard data={item} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>)}
      {(state === 'flight') && <div className="w-[95%] mx-auto">
        <h6 className="text-black font-semibold text-[2.6rem]">Online Flight Booking Offers</h6>
        <div className="text-black font-semibold text-[2rem] pt-3">Have a look at our best offers on flights</div>
        <ul className="list-disc text-[1.9rem] space-y-3 pt-5">
          <li>• Save up to 15% to 40% on flights.</li>
          <li>• Have Upto 40% discounts on domestic flights.</li>
          <li>• Get 30% discounts on international flights.</li>
          <li>• Get up to 25% discounts on your first booking.</li>
        </ul>
        <div className="text-black font-semibold text-[2.6rem] pt-5">Save Money On Your First Booking With Us</div>
      </div>}
      {/* Bumper Deal On Your Hotel Bookings */}
      {(state === 'all' || state === 'hotel') && (<div className="px-[4rem] py-[6rem] flex flex-col gap-[4rem]">
        <div>
          <h2 className="text-black text-left tracking-wide font-semibold  text-[2.5rem]">
            Bumper Deal On Your Hotel Bookings
          </h2>
          <p className=" text-[1.6rem]">Hotels in USA</p>
        </div>
        <Carousel
          opts={{
            align: "start",
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className="w-full "
        >
          <CarouselContent>
            {hotelDealsData.map((item, idx) => (
              <CarouselItem
                key={idx}
                className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 p-[1rem] bg-[white]"
              >
                <HotelCard data={item} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>)}
       {(state === 'hotel')&&<div className="w-[95%] mx-auto">
          <h6 className="text-black font-semibold text-[2.6rem] pb-2">Know More About Trackn Fly Hotel Offers</h6>
          <p className="text-[1.6rem] w-[80%]">Are you looking for a hotel booking offers? then you are in the right place. As while traveling finding the best hotel is a big task, but don't worry as in Trackn Fly there are multiple options. So, whether it is your sudden business trip or a weekend gateway with your loved ones, just plan your trip without any hassle and leave all your worries with us. We will give you the best hotel options around the world. There are multiple hotel offers on domestic and international.</p>
          <h6 className="text-black font-semibold text-[2.6rem] pt-8 pb-2">Save More Money With Trackn Fly</h6>
          <p className="text-[1.6rem] w-[80%]">Now with Trackn Fly you can save more money on hotel booking. We have some exciting offers and coupons for everyone. So, don't waste time and find hotel booking offers online within seconds.</p>
          <h6 className="text-black font-semibold text-[2.6rem] pt-8 pb-2">Book Hotels With Trackn Fly</h6>
          <p className="text-[1.6rem] w-[80%]">Booking hotels with us is like a piece of cake. You just need to enter your destination and your check-in and check-out dates along with the people. We will automatically show you the best choices with the cheapest price. Whether you are visiting with your partner or family, we have the best deals on hotels.</p>
       </div>}

      {/* Unlock Your Remarkable Savings On Your Car Rental Bookings */}
      {(state === 'all' || state === 'cars') && (<div className="px-[4rem] py-[6rem] flex flex-col gap-[4rem]">
        <div>
          <h2 className="text-black text-left tracking-wide font-semibold  text-[2.5rem]">
            Unlock Your Remarkable Savings On Your Car Rental Bookings{" "}
          </h2>
          <p className=" text-[1.6rem]">
            Book a car on rent at your Destination
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className="w-full "
        >
          <CarouselContent>
            {carDealsData.map((item, idx) => (
              <CarouselItem
                key={idx}
                className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 p-[1rem] bg-[white]"
              >
                <HotelCard data={item} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>)}
      {(state === 'cars')&&<div className="w-[95%] mx-auto">
          <h6 className="text-black font-semibold text-[2.6rem] pb-2">Search Cheap Car With Trackn Fly</h6>
          <p className="text-[1.6rem] w-[80%]">Now, save your money by hiring cars with Trackn Fly. We search for the rental car on the best deals and help you to find the cheapest cars. Whether you want to book a car at the airport site location or nearby, you will the huge discounts on it. We also compare the deals with so many different car types and give you the best. Don't wait for too long and book your type of vehicle now with Trackn Fly.</p>
          <h6 className="text-black font-semibold text-[2.6rem] pt-8 pb-2">Best Offers On Car On Rent</h6>
          <p className="text-[1.6rem] w-[80%]">By visiting Trackn Fly, you can get the best offers on any vehicle. We give exclusive discounts up to 15% to 40% on any car that you want to rent.</p>
       </div>}


      <div className="w-[95%] py-5 md:py-24 mx-auto">
        <div className="relative  rounded-[2rem]">
          <div
            className={`text-white p-12 rounded-2xl md:p-20 bg-cover bg-center`}
            style={{ backgroundImage: `url(${bestdealAboutIMG})` }}
          >
            <h5 className="font-bold text-[3rem]">
              Know More About The Trackn Fly Offers{" "}
            </h5>
            <p className="text-[1.6rem] font-normal tracking-wide leading-relaxed">
              Nowadays, the travel industry is rapidly growing worldwide and
              choosing the best discount from the plethora of available online
              is the most important thing for all of us. But Trackn Fly helps
              users to organize their trip online, compare prices of various
              airlines, hotels, and car on rentals,{" "}
              <Link to={"/about-us"} className="text-red-500 cursor-pointer">
                know more...
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className=" px-[4rem] py-[6rem] flex flex-col gap-[4rem]">
        <div className=" flex   flex-col">
          <h6 className="text-black  tracking-wide font-semibold  text-[2.5rem]">
            Trackn Fly Wallet
          </h6>
          <p className=" text-[1.6rem]">
            Trackn Fly has a virtual wallet that allows users to earn and redeem
            it for flight, hotel, and car rental bookings. There is no limit on
            its money like how much money you can spend on your flight, hotel,
            and car rental booking, you can utilize 100% money to book.
          </p>
        </div>
        <div className="flex flex-col">
          <h6 className="text-black  tracking-wide font-semibold  text-[2.5rem]">
            Trackn Fly Exclusive Discounts
          </h6>
          <p className=" text-[1.6rem]">
            At Trackn Fly there are several offers for flights, hotels, and car
            rentals. To save more money, you can also use a coupon code during
            your checkout to have significant discounts on your flight and hotel
            bookings. As a leading travel company, we update our offers from
            time to time. We also provide some attractive offer discounts to our
            existing and new users. As the deals change frequently, we also send
            notifications to our new best deals and offers. Also, you can have
            some cheapest holiday packages and save money for your next
            vacation.
          </p>
        </div>
      </div>

      {/* Table */}
      {(state === 'all' || state === 'flight') && <div className="w-[95%] py-5 md:py-12 mx-auto">
        <table className="w-full md:w-[50%] mr-auto border border-black">
          <thead>
            <tr className="text-[2rem] ">
              <th className="border border-black font-normal">Category</th>
              <th className="border border-black font-normal">Offer</th>
              <th className="border border-black font-normal">Get a Deal on Call</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-[1.7rem] text-center">
              <td className="border py-2 border-black font-normal">First Flight Booking</td>
              <td className="border py-2 border-black font-normal">Get up to 50$ Off on Flight Bookings</td>
              <td className=" py-2  font-normal"></td>
            </tr>
            <tr className="text-[1.7rem] text-center">
              <td className="border py-2 border-black font-normal">Domestic Flights</td>
              <td className="border py-2 border-black font-normal">Get up 30% Off on Domestic Flight Bookings</td>
              <td className=" py-2  font-normal bg-red-500 animate text-white rounded-2xl px-6 md:px-12 inline-block">Call Us Now <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="animate-call text-red-500 lucide lucide-phone inline-block"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg></td>
            </tr>
            <tr className="text-[1.7rem] text-center">
              <td className="border py-2 border-black font-normal">International Flights</td>
              <td className="border py-2 border-black font-normal">Get up to 40% Off on Flight Bookings</td>
              <td className="py-2 font-normal"></td>
            </tr>
          </tbody>
        </table>
      </div>}
      <FrquentlyAskedQuestions data={state=='hotel'?frquentlyAskedQuestions.faqhotel:state=="cars"?frquentlyAskedQuestions.faqcars:frquentlyAskedQuestions.faqall} sidebar={false} />

      <div className=" p-[4rem]">
        <div
          className=" rounded-[2rem]  bg-cover bg-center grid md:grid-cols-5 p-[4rem] gap-[4rem] md:gap-0"
          style={{ backgroundImage: `url(${fligthTimelineIMG})` }}
        >
          <div className=" flex flex-col items-center justify-center">
            <h6 className=" text-[2.5rem] text-center font-semibold text-white">
              First Flight Booking
            </h6>
            <p className=" text-[1.6rem] text-center text-white">
              Get up to 50$ Off on Flight Bookings
            </p>
          </div>
          <div className="  items-end justify-center hidden md:flex ">
            <svg
              viewBox="0 0 292 77"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.333333 11.5176C0.333333 17.4086 5.10896 22.1842 11 22.1842C16.891 22.1842 21.6667 17.4086 21.6667 11.5176C21.6667 5.62654 16.891 0.850911 11 0.850911C5.10896 0.850911 0.333333 5.62654 0.333333 11.5176ZM269.833 11.5176C269.833 17.4086 274.609 22.1842 280.5 22.1842C286.391 22.1842 291.167 17.4086 291.167 11.5176C291.167 5.62654 286.391 0.850911 280.5 0.850911C274.609 0.850911 269.833 5.62654 269.833 11.5176ZM9.57812 12.9241C11.618 14.9862 13.6736 16.9939 15.7439 18.9477L18.4893 16.0385C16.4525 14.1164 14.4297 12.1408 12.4219 10.1111L9.57812 12.9241ZM28.6366 30.2756C33.1578 33.9663 37.7354 37.4185 42.3592 40.6379L44.6448 37.3552C40.1055 34.1946 35.6091 30.8039 31.166 27.1769L28.6366 30.2756ZM56.8419 49.8858C61.8752 52.8192 66.9486 55.4929 72.0493 57.9138L73.7644 54.3001C68.7662 51.9279 63.7925 49.3069 58.856 46.4299L56.8419 49.8858ZM87.9094 64.607C93.3606 66.6278 98.8274 68.3725 104.295 69.8494L105.338 65.9879C99.9882 64.5427 94.6373 62.835 89.2997 60.8564L87.9094 64.607ZM121.101 73.5579C126.824 74.5411 132.53 75.2384 138.201 75.6598L138.498 71.6708C132.954 71.2589 127.375 70.5771 121.778 69.6157L121.101 73.5579ZM155.422 76.0981C161.213 75.9617 166.946 75.5389 172.603 74.8406L172.113 70.8707C166.587 71.5528 160.986 71.9659 155.328 72.0992L155.422 76.0981ZM189.574 71.8731C195.212 70.5907 200.748 69.0284 206.16 67.1981L204.879 63.4089C199.597 65.1953 194.192 66.7205 188.687 67.9727L189.574 71.8731ZM222.179 60.8342C227.426 58.4243 232.521 55.7476 237.442 52.8164L235.395 49.3799C230.597 52.2377 225.628 54.8483 220.509 57.1992L222.179 60.8342ZM251.757 43.198C256.357 39.7265 260.755 36.0076 264.927 32.0541L262.176 29.1507C258.114 33.0002 253.83 36.6227 249.348 40.0051L251.757 43.198ZM276.755 19.4871C278.602 17.283 280.386 15.0236 282.105 12.7106L278.895 10.3245C277.222 12.5748 275.486 14.7731 273.689 16.918L276.755 19.4871Z"
                fill="#4DEB4D"
              />
            </svg>
          </div>

          <div className=" flex flex-col items-center justify-center">
            <h6 className=" text-[2.5rem] text-center font-semibold text-white">
              Domestic Flights
            </h6>
            <p className=" text-[1.6rem] text-center text-white">
              Get up 30% Off on Domestic Flight Bookings
            </p>
          </div>
          <div className="  items-center justify-center hidden md:flex ">
            <svg
              viewBox="0 0 279 74"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.833333 63.1465C0.833333 57.2554 5.60896 52.4798 11.5 52.4798C17.391 52.4798 22.1667 57.2554 22.1667 63.1465C22.1667 69.0375 17.391 73.8132 11.5 73.8132C5.60896 73.8132 0.833333 69.0375 0.833333 63.1465ZM256.833 38.0176C256.833 32.1265 261.609 27.3509 267.5 27.3509C273.391 27.3509 278.167 32.1265 278.167 38.0176C278.167 43.9086 273.391 48.6842 267.5 48.6842C261.609 48.6842 256.833 43.9086 256.833 38.0176ZM10.0781 61.74C12.1837 59.6114 14.3011 57.547 16.4295 55.5455L19.1698 58.4594C17.0768 60.4277 14.9938 62.4584 12.9219 64.553L10.0781 61.74ZM29.7427 43.94C34.4383 40.1563 39.175 36.6542 43.9426 33.4199L46.1882 36.73C41.5122 39.9022 36.8636 43.339 32.2525 47.0547L29.7427 43.94ZM59.0059 24.1262C64.2596 21.1959 69.5364 18.5669 74.823 16.221L76.4454 19.8772C71.2697 22.1739 66.1017 24.7486 60.9543 27.6195L59.0059 24.1262ZM91.3064 9.80931C96.9975 7.89792 102.683 6.29253 108.346 4.97036L109.255 8.86559C103.713 10.1595 98.1495 11.7306 92.5799 13.6012L91.3064 9.80931ZM125.757 1.76085C131.685 0.953114 137.567 0.436604 143.385 0.184063L143.559 4.1803C137.86 4.42766 132.1 4.93349 126.297 5.72422L125.757 1.76085ZM161.078 0.211483C167.053 0.486553 172.932 1.02422 178.694 1.7925L178.165 5.7574C172.514 5.00392 166.75 4.47686 160.894 4.20725L161.078 0.211483ZM196.103 4.86668C201.973 6.159 207.683 7.67716 213.204 9.38241L212.023 13.2043C206.606 11.5309 201.003 10.0412 195.243 8.77314L196.103 4.86668ZM229.878 15.3042C235.521 17.5792 240.898 20.0346 245.971 22.6183L244.155 26.1827C239.187 23.6523 233.917 21.2454 228.383 19.014L229.878 15.3042ZM261.367 31.4183C263.922 33.0566 266.361 34.7202 268.674 36.3987L266.326 39.6364C264.076 38.0045 261.701 36.3841 259.208 34.7857L261.367 31.4183Z"
                fill="#4DEB4D"
              />
            </svg>
          </div>

          <div className=" flex flex-col items-center justify-center">
            <h6 className=" text-[2.5rem] text-center font-semibold text-white">
              International Flights
            </h6>
            <p className=" text-[1.6rem] text-center text-white">
              Get up to 40% Off on Flight Bookings
            </p>
          </div>
        </div>
      </div>
      <ProductOffering data={state=='cars'?data?.cars:state=='hotel'?data?.hotel:data?.productOffering}/>
    </>
  );
};

export default BestDeals;
