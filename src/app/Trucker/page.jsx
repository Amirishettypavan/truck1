'use client'

import { useState } from 'react';

export default function page() {
  const [selectedIssue, setSelectedIssue] = useState('');
  const [description, setDescription] = useState('');

  const handleIssueChange = (e) => {
    setSelectedIssue(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., sending the issue report to the server.
    console.log('Issue:', selectedIssue, 'Description:', description);
  };

  return (
    <div>
  
      <div className="min-h-screen bg-gray-100">
        {/* Lorry Owner Dashboard Title */}
        <header className="bg-blue-600 text-white p-6">
          <h1 className="text-3xl font-bold">Lorry Owner Dashboard</h1>
          <nav className="mt-4">
            <a href="/home" className="text-white hover:text-blue-300 mr-4">Home</a>
            <a href="/logout" className="text-white hover:text-blue-300">Logout</a>
          </nav>
        </header>

        {/* Available Loads for Re-haul */}
        <section className="p-6 bg-white mt-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Available Loads for Re-haul</h2>
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2 border">Load ID</th>
                <th className="px-4 py-2 border">Load Type</th>
                <th className="px-4 py-2 border">Pickup Location</th>
                <th className="px-4 py-2 border">Drop Location</th>
                <th className="px-4 py-2 border">Urgency</th>
                <th className="px-4 py-2 border">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border">001</td>
                <td className="px-4 py-2 border">Perishable Goods</td>
                <td className="px-4 py-2 border">Hyderabad</td>
                <td className="px-4 py-2 border">Bangalore</td>
                <td className="px-4 py-2 border">High</td>
                <td className="px-4 py-2 border">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Accept</button>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">002</td>
                <td className="px-4 py-2 border">Fragile Items</td>
                <td className="px-4 py-2 border">Chennai</td>
                <td className="px-4 py-2 border">Hyderabad</td>
                <td className="px-4 py-2 border">Medium</td>
                <td className="px-4 py-2 border">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Accept</button>
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* My Truck Status */}
        <section className="p-6 bg-white mt-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">My Truck Status</h2>
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2 border">Truck ID</th>
                <th className="px-4 py-2 border">Current Location</th>
                <th className="px-4 py-2 border">Next Destination</th>
                <th className="px-4 py-2 border">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border">TX101</td>
                <td className="px-4 py-2 border">Bangalore</td>
                <td className="px-4 py-2 border">Chennai</td>
                <td className="px-4 py-2 border">In Transit</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">TX202</td>
                <td className="px-4 py-2 border">Hyderabad</td>
                <td className="px-4 py-2 border">Bangalore</td>
                <td className="px-4 py-2 border">Available</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Report a Problem */}
        <section className="p-6 bg-white mt-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Report a Problem</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="issue" className="block text-sm font-medium text-gray-700">Select Issue:</label>
              <select
                id="issue"
                value={selectedIssue}
                onChange={handleIssueChange}
                className="w-full px-4 py-2 border rounded-md mt-2"
              >
                <option value="delay">Delay in Pickup</option>
                <option value="breakdown">Truck Breakdown</option>
                <option value="route">Route Blockage</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">Describe the problem:</label>
              <textarea
                id="description"
                value={description}
                onChange={handleDescriptionChange}
                className="w-full px-4 py-2 border rounded-md mt-2"
                placeholder="Provide more details about the problem..."
              />
            </div>
            <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
              Submit
            </button>
          </form>
        </section>
      </div>
  
    </div>
  );
}
