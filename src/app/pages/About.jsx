// components/About.js
const About = () => {
  return (
    <div className="mt-5 mb-5" id="about">
      {/* Container for the two-column layout */}
      <div className="flex items-center justify-between space-x-8">
       
        <div className="w-1/2">
          <img 
            src="load.jpg" 
            alt="About Us" 
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Right Section: About Content */}
        <div className="w-1/2">
          <h2 className="text-green-500 text-xl font-bold mb-4">About</h2>
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">
            We provide Fast & Safe Service to Our Customer
          </h1>
          <p className="text-gray-700 text-base">
            "Application name" is an online truck and load booking platform that bridges the gap between truck owners and load owners.
            Our application is dedicated to truck owners who hate driving empty trucks and fuel wastage. We are also concerned about
            the round-trip costs borne by load owners and carbon emissions that harm the environment.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
