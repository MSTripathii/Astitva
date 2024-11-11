import React from 'react';
import { FaHome, FaLayerGroup, FaBriefcase, FaUserFriends, FaShieldAlt, FaChartLine } from 'react-icons/fa';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Line, Pie } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const Sidebar = () => {
  return (
    <div className="w-1/5 bg-white text-black hidden lg:block">
      <div className="p-4 text-xl text-center md:text-3xl font-semibold">Astitva4Animals</div>
      <nav className="mt-8">
        <ul>
          <SidebarItem icon={<FaHome />} label="Dashboard" />
          <SidebarItem icon={<FaLayerGroup />} label="Saved Animals" />
          <SidebarItem icon={<FaBriefcase />} label="My Points" />
          <SidebarItem icon={<FaUserFriends />} label="Members" />
          <SidebarItem icon={<FaShieldAlt />} label="Security" />
          <SidebarItem icon={<FaChartLine />} label="Statistics" />
        </ul>
      </nav>
    </div>
  );
};

const SidebarItem = ({ icon, label }) => {
  return (
    <div className="group flex items-center space-x-2 p-4 hover:bg-black text-black hover:text-white cursor-pointer">
      <div className="text-2xl md:text-4xl">{icon}</div>
      <span className="hidden group-hover:inline-block text-sm font-medium md:text-2xl">{label}</span>
    </div>
  );
};

const UserDashboard = () => {
  const mapContainerStyle = {
    width: '100%',
    height: '500px',
    filter: 'brightness(1.2)',
  };

  const center = {
    lat: 37.7749,
    lng: -122.4194,
  };

  const membersLocations = [
    { id: 1, lat: 37.7749, lng: -122.4194 },
    { id: 2, lat: 37.8044, lng: -122.2711 },
    { id: 3, lat: 37.6879, lng: -122.4702 },
  ];

  const lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Adoption Statistics',
        data: [20, 45, 30, 60, 80, 100],
        fill: false,
        borderColor: '#0D9488',
        tension: 0.1,
      },
    ],
  };

  const pieChartData = {
    labels: ['Points Gained', 'Points Remaining'],
    datasets: [
      {
        data: [150, 50],
        backgroundColor: ['#0D9488', '#D1D5DB'],
      },
    ],
  };

  return (
    <div className="flex min-h-screen bg-[#0D9488]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Dashboard Area */}
      <div className="flex-1 p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="text-2xl md:text-3xl font-semibold text-white">Welcome, User!</div>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search"
              className="px-4 py-2 rounded-full focus:outline-none"
            />
            <img
              src="https://via.placeholder.com/40"
              alt="User Avatar"
              className="w-10 h-10 rounded-full"
            />
          </div>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <div className="bg-black p-4 rounded-lg shadow-md hover:bg-teal-50 hover:scale-106 text-white">
            <h3 className="text-xl font-semibold text-white">Saved Animals</h3>
            <p className="text-3xl font-bold text-white">12</p>
            <p className="mt-2 text-sm text-white">View your saved animals</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md hover:bg-teal-50">
            <h3 className="text-xl font-semibold text-gray-700">Points</h3>
            <p className="text-3xl font-bold text-black">150</p>
            <a href="#rewards" className="mt-2 text-sm text-teal-600 hover:underline">Go to Rewards</a>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md hover:bg-teal-50">
            <h3 className="text-xl font-semibold text-gray-700">Points Breakdown</h3>
            <div className="w-full h-52 mt-4">
              <Pie data={pieChartData} />
            </div>
          </div>
        </div>

        {/* View Savings */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h3 className="text-xl font-semibold text-gray-700">View Your Savings</h3>
          <p className="mt-2 text-gray-600">Track your saved animals and associated rewards.</p>
        </div>

        {/* Chart Section */}
        {/* <div className="bg-white p-6 rounded-lg shadow-md mb-8 w-full lg:w-2/3 mx-auto">
          <h3 className="text-xl font-semibold text-gray-700">Adoption Statistics</h3>
          <div className="mt-4">
            <Line data={lineChartData} />
          </div>
        </div> */}

        {/* Map Section for Team Members */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-700">Team Members Location</h3>
          <p className="mt-2 text-gray-600">Track the locations of your team members.</p>
          <div className="mt-4">
            <LoadScript googleMapsApiKey="AIzaSyBrcuSXFXJ-NpcSVek4TU4xdSf7w1m0Lqk">
              <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={10}>
                {membersLocations.map((member) => (
                  <Marker key={member.id} position={{ lat: member.lat, lng: member.lng }} />
                ))}
              </GoogleMap>
            </LoadScript>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
