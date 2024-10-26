import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import worship from './Images/worship.jpeg';
import worship2 from './Images/worship2.jpeg';
import hand3 from './Images/hand3.jpeg';

const Home = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,  // Shows one image at a time for better full-screen effect
    slidesToScroll: 1,
    autoplay: true,  // Auto slide
    autoplaySpeed: 3000, // 3 seconds per slide
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-screen">
        <Slider {...settings}>
          <div className="slide">
            <div
              className="relative h-screen bg-cover bg-center"
              style={{ backgroundImage: `url(${worship})` }}
            >
              <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center text-white text-center">
                <h1 className="text-4xl font-bold">Scenic Mountains</h1>
                <p className="text-xl mt-4">Experience the beauty of nature's wonders.</p>
              </div>
            </div>
          </div>
          <div className="slide">
            <div
              className="relative h-screen bg-cover bg-center"
              style={{ backgroundImage: `url(${worship2})` }}
            >
              <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center text-white text-center">
                <h1 className="text-4xl font-bold">Forest Pathway</h1>
                <p className="text-xl mt-4">Walk through the serene autumn forest.</p>
              </div>
            </div>
          </div>
          <div className="slide">
            <div
              className="relative h-screen bg-cover bg-center"
              style={{ backgroundImage:`url(${hand3})` }}
            >
              <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center text-white text-center">
                <h1 className="text-4xl font-bold">City Sunset</h1>
                <p className="text-xl mt-4">Witness the beauty of city sunsets.</p>
              </div>
            </div>
          </div>
        </Slider>
      </div>

      {/* Intro Section */}
      <div className="text-center py-12 bg-gray-100">
        <h2 className="text-3xl font-semibold">Living in God's Amazing Grace!</h2>
        <p className="mt-2 text-lg">We are open Sunday to Monday</p>
      </div>

      {/* Counters Section */}
      <div className="bg-white py-12">
        <div className="container mx-auto text-center">
          <p>
            We have fun facts far from the word mountains, behind the countries Vokalia and Consonantia, there live the blind texts.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            <div>
              <span className="text-5xl font-bold">9452</span>
              <p className="mt-2 text-lg">Members</p>
            </div>
            <div>
              <span className="text-5xl font-bold">214</span>
              <p className="mt-2 text-lg">Ministries</p>
            </div>
            <div>
              <span className="text-5xl font-bold">433</span>
              <p className="mt-2 text-lg">Classes</p>
            </div>
            <div>
              <span className="text-5xl font-bold">512</span>
              <p className="mt-2 text-lg">Activities</p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Services</h2>
          <Slider {...settings}>
            <div className="service-card">
              <img
                src="images/img-1.jpg"
                alt="Live Events"
                className="rounded shadow-md w-full"
              />
              <h3 className="text-xl font-semibold mt-4">Live Events</h3>
              <p className="mt-2">
                Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident.
              </p>
              <a href="#" className="text-blue-500 underline mt-4 inline-block">
                Read More
              </a>
            </div>
            <div className="service-card">
              <img
                src="images/img-3.jpg"
                alt="Biblical Counseling"
                className="rounded shadow-md w-full"
              />
              <h3 className="text-xl font-semibold mt-4">Biblical Counseling</h3>
              <p className="mt-2">
                Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident.
              </p>
              <a href="#" className="text-blue-500 underline mt-4 inline-block">
                Read More
              </a>
            </div>
            <div className="service-card">
              <img
                src="images/img-2.jpg"
                alt="Helping Children"
                className="rounded shadow-md w-full"
              />
              <h3 className="text-xl font-semibold mt-4">Helping Children</h3>
              <p className="mt-2">
                Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident.
              </p>
              <a href="#" className="text-blue-500 underline mt-4 inline-block">
                Read More
              </a>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};
export default Home;
