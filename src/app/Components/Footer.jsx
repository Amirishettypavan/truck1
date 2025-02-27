// components/Footer.js
"use client"

export default function Footer() {
  

  return (
    <div className="footer mt-5 flex justify-around bg-neutral-600 text-white py-6">
      <div className="TopCarpoolRoutes mb-6">
        <h3 className="text-lg font-semibold mb-4">Top  Routes</h3>
        <ol className="list-decimal pl-5">
          <li>delhi to Hyderabad</li>
          <li>chennai to Hyderabad</li>
          <li>bangalore to Hyderabad</li>
          <li>kolkata to Hyderabad</li>
        </ol>
      </div>

      <div className="about mb-6">
        <h3 className="text-lg font-semibold mb-4">About</h3>
        <ol className="list-decimal pl-5">
          <li>How it works</li>
          <li>About Us</li>
          <li>Help Center</li>
          <li>Links</li>
        </ol>
      </div>

      <div className="links flex flex-col items-start">
        <button
          className="bg-dark-500 text-white py-2 px-4 rounded-md mb-4 flex items-center"
          onClick={() => router.push('/search')}
        >
          <i className="fa-solid fa-magnifying-glass mr-2"></i> Search
        </button>

        <div className="socialMedia flex space-x-4 text-xl">
          <i className="fa-brands fa-instagram cursor-pointer"></i>
          <i className="fa-brands fa-twitter cursor-pointer"></i>
          <i className="fa-brands fa-facebook cursor-pointer"></i>
          <i className="fa-brands fa-linkedin cursor-pointer"></i>
        </div>
      </div>
    </div>
  );
}
