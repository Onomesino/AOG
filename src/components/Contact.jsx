import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Hero Section */}
      <aside className="relative">
        <div className="bg-cover bg-center h-64" style={{ backgroundImage: 'url(images/img_bg_2.jpg)' }}>
          <div className="bg-black bg-opacity-50 h-full flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl font-bold">Contact Us</h1>
              <h2 className="text-lg mt-2">
                Free templates made by{' '}
                <a href="http://freehtml5.co/" target="_blank" className="underline">
                  freehtml5.co
                </a>
              </h2>
            </div>
          </div>
        </div>
      </aside>

      {/* Contact Info and Form Section */}
      <div className="py-12">
        <div className="text-center">
          <h2 className="text-3xl font-semibold">Contact Us</h2>
          <p className="text-gray-600 mt-4">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          {/* Contact Info */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Our Address</h3>
            <ul className="space-y-2">
              <li><i className="fas fa-map-marker-alt"></i> 198 West 21th Street, Suite 721 New York NY 10016</li>
              <li><i className="fas fa-phone"></i> + 1235 2355 98</li>
              <li><i className="fas fa-envelope"></i> <a href="mailto:info@yoursite.com" className="text-blue-500">info@yoursite.com</a></li>
              <li><i className="fas fa-globe"></i> <a href="https://www.yoursite.com" className="text-blue-500">www.yoursite.com</a></li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  className="p-2 border border-gray-300 rounded-lg w-full"
                  placeholder="Name"
                />
                <input
                  type="email"
                  className="p-2 border border-gray-300 rounded-lg w-full"
                  placeholder="Email"
                />
              </div>
              <textarea
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Message"
                rows="5"
              ></textarea>
              <input
                type="submit"
                value="Send Message"
                className="w-full py-2 px-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 cursor-pointer"
              />
            </form>
          </div>
        </div>
      </div>

      {/* Counter Section */}
      <div className="bg-gray-100 py-12">
        <div className="text-center mb-8">
          <p className="text-gray-700">
            We have fun facts far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <span className="text-3xl font-bold">9452</span>
            <p className="text-gray-500">Members</p>
          </div>
          <div>
            <span className="text-3xl font-bold">214</span>
            <p className="text-gray-500">Ministries</p>
          </div>
          <div>
            <span className="text-3xl font-bold">433</span>
            <p className="text-gray-500">Classes</p>
          </div>
          <div>
            <span className="text-3xl font-bold">512</span>
            <p className="text-gray-500">Activities</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
