import React, { useRef } from "react";
import Logo from "../Images/Logo.png";
import Crowd from "../Images/Crowd.jpeg";
import Daddy7 from "../Images/Daddy7.jpeg";
import DOG from "../Images/DOG.jpeg";
import MamaT from "../Images/MamaT.jpeg";
import Facebook4 from "../Images/Facebook4.jpeg";
import Ig4 from "../Images/Ig4.jpeg";
import Youtube1 from "../Images/Youtube1.jpeg";

function BasicExample() {
  const aboutRef = useRef(null);
  const ministriesRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToMinistries = () => {
    ministriesRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Navbar */}
      <nav className="bg-blue-900 text-white py-4">
        <div className="container mx-auto flex items-center justify-between">
          <a href="#home" onClick={() => window.location.reload()}>
            <img src={Logo} alt="logo" className="h-14" />
          </a>
          <div className="space-x-6 text-sm">
            <button onClick={scrollToAbout} className="hover:text-gray-300">
              ABOUT US
            </button>
            <button onClick={scrollToMinistries} className="hover:text-gray-300">
              MINISTRIES
            </button>
            <a href="#media" className="hover:text-gray-300">
              MEDIA
            </a>
            <a href="#partnership" className="hover:text-gray-300">
              PARTNERSHIP
            </a>
            <a href="#meeting-days" className="hover:text-gray-300">
              MEETING DAYS
            </a>
            <a href="#outline" className="hover:text-gray-300">
              OUTLINE
            </a>
            <a href="#contact" className="hover:text-gray-300">
              CONTACT US
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative w-full h-[700px]">
        <img src={Crowd} alt="Crowd" className="w-full h-full object-cover" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white space-y-4">
          <h1 className="text-3xl font-semibold">Discover the Love and Grace of Jesus Christ</h1>
          <p>
            Join us as we worship, grow in faith, and follow the teachings of
            Jesus Christ. Everyone is welcome to experience His love and grace
            in a community built on faith and hope.
          </p>
          <button className="bg-white text-blue-900 py-2 px-4 rounded-md hover:bg-gray-200">
            Contact Us
          </button>
        </div>
      </div>

      {/* About Us Section */}
      <section ref={aboutRef} className="text-center py-10">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Arena of Glory International (AOGI) is an inter-denominational Christian fellowship 
          which seeks to train and revive young men and women for the work of ministry as well 
          as equipping them for God’s purpose in various tertiary institutions and cities across 
          the globe.
        </p>
      </section>

      {/* Ministries Section */}
      <section ref={ministriesRef} className="py-10 bg-gray-100">
        <h1 className="text-3xl font-bold text-center mb-8">Ministries</h1>
        <div className="container mx-auto space-y-10">
          {/* Card 1 */}
          <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg p-6">
            <div className="md:w-1/2 mb-4 md:mb-0 md:pr-4">
              <h2 className="text-2xl font-semibold">School Of Ministry</h2>
              <p className="text-gray-700 mt-2">
                Join the School Of Ministry with Bishop Prof Dr Christopher Twumasi-Ankrah,
                every Sunday from 6:00am to 7:00am Live.
              </p>
              <button className="mt-4 bg-blue-900 text-white py-2 px-4 rounded hover:bg-blue-800">
                Read more
              </button>
            </div>
            <div className="md:w-1/2">
              <img src={Daddy7} alt="Daddy" className="w-full h-60 object-cover rounded-md" />
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg p-6">
            <div className="md:w-1/2 order-2 md:order-1">
              <img src={DOG} alt="DOG" className="w-full h-60 object-cover rounded-md" />
            </div>
            <div className="md:w-1/2 md:pl-4 order-1 md:order-2">
              <h2 className="text-2xl font-semibold">Daughter Of Glory</h2>
              <p className="text-gray-700 mt-2">
                Experience an amazing time with the Holy Spirit in the word and hear the words 
                of wisdom from Apostle Prophet Adwoa Twumwaa Ansah. Every Monday from 7PM to 8PM.
              </p>
              <button className="mt-4 bg-blue-900 text-white py-2 px-4 rounded hover:bg-blue-800">
                Read more
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg p-6">
            <div className="md:w-1/2 mb-4 md:mb-0 md:pr-4">
              <h2 className="text-2xl font-semibold">Hearts Of Glory International</h2>
              <p className="text-gray-700 mt-2">
                Enjoy the wonders of the Word from a woman who is grounded in the Word of God and
                teaches with all understanding. Join Mama Tash every Tuesday from 12 noon to 2PM.
              </p>
              <button className="mt-4 bg-blue-900 text-white py-2 px-4 rounded hover:bg-blue-800">
                Read more
              </button>
            </div>
            <div className="md:w-1/2">
              <img src={MamaT} alt="Mama T" className="w-full h-60 object-cover rounded-md" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8">
        <div className="container mx-auto text-center space-y-4">
          <p className="text-lg font-semibold">Join us for our services</p>
          <div className="flex justify-center space-x-10 text-sm">
            <div>Sundays: Glorious Mass Service (G.M.S) 6AM to 9AM</div>
            <div>Wednesday: Bible Study, 6PM to 8PM</div>
            <div>Friday: Hour Of Grace at 6PM to 8PM</div>
            <div>Every two weeks Friday: All-Night 9PM to 4AM</div>
          </div>
          <img src={Logo} alt="Logo" className="mx-auto h-16" />
          <address className="not-italic">Top Ridge School, Santa Maria, Family & Friends Junction, Off Kwashieman Road.</address>
          <p>(000)00000000</p>
          <div className="flex justify-center space-x-6 mt-4">
            <img src={Facebook4} alt="Facebook" className="w-8 h-8" />
            <img src={Ig4} alt="Instagram" className="w-8 h-8" />
            <img src={Youtube1} alt="YouTube" className="w-8 h-8" />
          </div>
        </div>
      </footer>
    </>
  );
}

export default BasicExample;
