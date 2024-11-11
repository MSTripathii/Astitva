// AdminDashboard.jsx
import React, { useState } from 'react';

export default function AdminDashboard() {
  const [shelters, setShelters] = useState([]);

  const handleAddShelter = () => {
    // Function to add new shelter listing
  };

  return (
    <div className="bg-[#0D9488] min-h-screen p-6">
      <h2 className="text-white text-2xl font-semibold mb-4">Admin Dashboard</h2>

      <div className="bg-white p-4 rounded shadow mb-4">
        <h3 className="font-medium text-xl">Shelters</h3>
        <button
          onClick={handleAddShelter}
          className="bg-green-600 text-white px-4 py-2 rounded mt-2"
        >
          Add Shelter
        </button>
        
        <ul>
          {shelters.map((shelter, index) => (
            <li key={index} className="mt-2 text-gray-700">
              {shelter.name}
              <button className="text-red-600 ml-4 hover:underline">Edit</button>
              <button className="text-red-600 ml-4 hover:underline">Delete</button>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="bg-white p-4 rounded shadow">
        <h3 className="font-medium text-xl">Team Management</h3>
        <p className="text-gray-600">Manage rescue/adoption team members.</p>
        {/* Editable Section */}
        <button className="text-sm text-blue-600 hover:underline">Add Member</button>
      </div>
    </div>
  );
}
