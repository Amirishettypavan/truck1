
export default function Contact() {
    return (
        <div className="mb-15" id="contact ">
            <h1 className="flex justify-center text-green-500  text-xl font-bold">Contact</h1>
             <div className="flex justify-between p-6 space-x-6">
        {/* Phone Card */}
        <div className="bg-stone-200 shadow-lg p-4 rounded-lg flex items-center w-1/3">
          <i className="fa-solid fa-phone-alt text-blue-500 text-3xl mr-4"></i>
          <div>
            <h4 className="font-semibold text-lg">Phone</h4>
            <p className="text-gray-600">9876543210</p>
          </div>
        </div>
  
        {/* Gmail Card */}
        <div className="bg-stone-200 shadow-lg p-4 rounded-lg flex items-center w-1/3">
          <i className="fa-solid fa-envelope text-red-500 text-3xl mr-4"></i>
          <div>
            <h4 className="font-semibold text-lg">Gmail</h4>
            <p className="text-gray-600">example@gmail.com</p>
          </div>
        </div>
  
        {/* Location Card */}
        <div className="bg-stone-200 shadow-lg p-4 rounded-lg flex items-center w-1/3">
          <i className="fa-solid fa-map-marker-alt text-green-500 text-3xl mr-4"></i>
          <div>
            <h4 className="font-semibold text-lg">Location</h4>
            <p className="text-gray-600">Hyderabad ,Telangana</p>
          </div>
        </div>
             </div>
        </div>
     
    );
  }
  