
'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const [formData, setFormData] = useState({
    loadType: 'perishable',
    pickup: 'Hyderabad',
    drop: 'Hyderabad',
    urgency: 'high',
  })
  const router=useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
   
  }

  return (
    <div className="font-sans bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Business Dashboard</h1>
          <nav>
            <a  className="mr-4 hover:underline" onClick={()=>router.push("Home")}>
              Home
            </a>
            <a href="/logout" className="hover:underline">
              Logout
            </a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto p-6">
        {/* Post a New Load Form */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Post a New Load</h2>
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <label htmlFor="load-type" className="block text-sm font-medium text-gray-700">
                Load Type:
              </label>
              <select
                id="load-type"
                name="loadType"
                value={formData.loadType}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="perishable">Perishable Goods</option>
                <option value="fragile">Fragile Items</option>
                <option value="electronics">Electronics</option>
                <option value="general">General Cargo</option>
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="pickup" className="block text-sm font-medium text-gray-700">
                Pickup Location:
              </label>
              <select
                id="pickup"
                name="pickup"
                value={formData.pickup}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Hyderabad">Hyderabad</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Chennai">Chennai</option>
                <option value="Delhi">Delhi</option>
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="drop" className="block text-sm font-medium text-gray-700">
                Drop Location:
              </label>
              <select
                id="drop"
                name="drop"
                value={formData.drop}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Hyderabad">Hyderabad</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Chennai">Chennai</option>
                <option value="Delhi">Delhi</option>
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="urgency" className="block text-sm font-medium text-gray-700">
                Urgency Level:
              </label>
              <select
                id="urgency"
                name="urgency"
                value={formData.urgency}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Post Load
            </button>
          </form>
        </section>

        {/* Active Loads */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">My Active Loads</h2>
          <table className="w-full bg-white p-6 rounded-lg shadow-md">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b text-left">Load ID</th>
                <th className="py-2 px-4 border-b text-left">Load Type</th>
                <th className="py-2 px-4 border-b text-left">Pickup Location</th>
                <th className="py-2 px-4 border-b text-left">Drop Location</th>
                <th className="py-2 px-4 border-b text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b">1001</td>
                <td className="py-2 px-4 border-b">Electronics</td>
                <td className="py-2 px-4 border-b">Bangalore</td>
                <td className="py-2 px-4 border-b">Hyderabad</td>
                <td className="py-2 px-4 border-b">In Transit</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">1002</td>
                <td className="py-2 px-4 border-b">Perishable Goods</td>
                <td className="py-2 px-4 border-b">Chennai</td>
                <td className="py-2 px-4 border-b">Bangalore</td>
                <td className="py-2 px-4 border-b">Waiting for Pickup</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Available Lorry Owners */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Available Lorry Owners</h2>
          <table className="w-full bg-white p-6 rounded-lg shadow-md">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b text-left">Owner Name</th>
                <th className="py-2 px-4 border-b text-left">Truck Capacity</th>
                <th className="py-2 px-4 border-b text-left">Current Location</th>
                <th className="py-2 px-4 border-b text-left">Next Availability</th>
                <th className="py-2 px-4 border-b text-left">Contact</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b">Rajesh Kumar</td>
                <td className="py-2 px-4 border-b">10 Tons</td>
                <td className="py-2 px-4 border-b">Hyderabad</td>
                <td className="py-2 px-4 border-b">12th March</td>
                <td className="py-2 px-4 border-b">9876543210</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Amit Sharma</td>
                <td className="py-2 px-4 border-b">15 Tons</td>
                <td className="py-2 px-4 border-b">Bangalore</td>
                <td className="py-2 px-4 border-b">14th March</td>
                <td className="py-2 px-4 border-b">8765432109</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  )
}
