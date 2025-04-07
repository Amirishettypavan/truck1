'use client'

import Footer from "@/app/Components/Footer";
import Navbar from "@/app/Components/Navbar";
import { useRouter } from "next/navigation"

function page() {
   const router=useRouter();

  return (
    <div>
      <Navbar/>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center text-gray-700 mb-6">Login</h2>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <input
            type="text"
            id="number"
            placeholder="Mobile Number or Email"
            required
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            id="pass"
            placeholder="Password"
            required
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="button"
           
            className="w-full py-3 mt-4 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
          >
            Submit
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Not a member yet?{' '}
            <a
              href="#"
              onClick={() => router.push('/Signup')}
              className="text-blue-600 hover:text-blue-800"
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
      </div>
      <Footer/>
    </div>
  )
}

export default page
