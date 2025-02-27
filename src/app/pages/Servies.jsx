import React from 'react';

const Services = () => {
  return (
    <div className="container mx-auto mt-10 p-5 mb-5" id="service">
      <h1 className="text-xl font-bold text-center mb-10 text-green-500">Our Services</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* App Features Card */}
        <div className="bg-stone-200 shadow-lg rounded-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <div className="flex justify-center items-center mb-4">
            <i className="fa-solid fa-mobile-alt text-4xl text-green-500 transform transition-transform duration-300 hover:rotate-180"></i>
          </div>
          <h3 className="text-xl font-semibold text-center mb-3">App Features</h3>
          <p className="text-gray-600 text-center">
            Our app provides a seamless experience for booking truck services with ease. Track your bookings in real-time and enjoy user-friendly features.
          </p>
        </div>

        {/* User Flexibility Card */}
        <div className="bg-stone-200  shadow-lg rounded-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <div className="flex justify-center items-center mb-4">
            <i className="fa-solid fa-users-cog text-4xl text-blue-500 transform transition-transform duration-300 hover:rotate-180"></i>
          </div>
          <h3 className="text-xl font-semibold text-center mb-3">User Flexibility</h3>
          <p className="text-gray-600 text-center">
            We offer great flexibility in how users can book services, allowing both truck owners and load owners to manage their schedules as they see fit.
          </p>
        </div>

        {/* Transport Features Card */}
        <div className="bg-stone-200 shadow-lg rounded-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <div className="flex justify-center items-center mb-4">
            <i className="fa-solid fa-truck-moving text-4xl text-orange-500 transform transition-transform duration-300 hover:rotate-180"></i>
          </div>
          <h3 className="text-xl font-semibold text-center mb-3">Transport Features</h3>
          <p className="text-gray-600 text-center">
            Our platform ensures efficient transport logistics, helping drivers and cargo owners optimize routes, minimize fuel costs, and reduce carbon emissions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
