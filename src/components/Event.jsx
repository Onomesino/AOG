import React from "react";

const Event = () => {
  return (
    <div className="container mx-auto">
      <aside className="relative">
        <div className="flex">
          <ul className="w-full">
            <li
              className="relative bg-cover bg-center h-96"
              style={{ backgroundImage: `url(/path/to/img_bg_2.jpg)` }}
            >
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="flex items-center justify-center h-full">
                <div className="text-center text-white">
                  <h1 className="text-4xl font-bold">Events</h1>
                  <h2 className="text-xl">
                    Free html5 templates Made by{" "}
                    <a
                      href="http://freehtml5.co/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      freehtml5.co
                    </a>
                  </h2>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </aside>

      <div id="events" className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold">Our Events</h2>
          <p className="mt-4 text-gray-600">
            Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {eventsData.map((event, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6">
              <span className="block text-gray-400 mb-2">{event.date}</span>
              <h3 className="text-xl font-semibold mb-4">{event.title}</h3>
              <p className="text-gray-600 mb-4">{event.description}</p>
              <a href="#" className="text-blue-500 hover:underline">
                Read More <i className="ml-2 fas fa-arrow-right"></i>
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-100 py-16">
        <div className="text-center mb-12">
          <p className="text-gray-600">
            We have fun facts far, far away, behind the word mountains, far from the countries Vokalia and Consonantia.
          </p>
        </div>

        <div className="flex justify-center space-x-8">
          {funFacts.map((fact, index) => (
            <div key={index} className="text-center">
              <span className="block text-4xl font-bold text-blue-600">
                {fact.value}
              </span>
              <span className="block text-gray-600 mt-2">{fact.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Example Data for Events and Fun Facts
const eventsData = [
  {
    date: "March 10, 2017",
    title: "Message From God",
    description:
      "Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit. Eos cumque dicta adipisci architecto culpa amet.",
  },
  {
    date: "March 20, 2017",
    title: "Message From God",
    description:
      "Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit. Eos cumque dicta adipisci architecto culpa amet.",
  },
  {
    date: "March 30, 2017",
    title: "Message From God",
    description:
      "Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit. Eos cumque dicta adipisci architecto culpa amet.",
  },
];

const funFacts = [
  { value: "9452", label: "Members" },
  { value: "214", label: "Ministries" },
  { value: "433", label: "Classes" },
  { value: "512", label: "Activities" },
];

export default Event;
