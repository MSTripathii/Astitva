import React from 'react';
import { FaHome, FaLayerGroup, FaBriefcase, FaUserFriends, FaShieldAlt, FaChartLine } from 'react-icons/fa';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Line, Pie, Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import { Link } from 'react-router-dom';
// import DashboardNavbar from "./dashboardnavbar.jsx";
const Sidebar = () => {
  return (
    <div className="w-1/5 bg-white text-black hidden lg:block">
      <div className="p-4 text-xl text-center md:text-3xl font-semibold">Astitva4Animals</div>
      <nav className="mt-4">
        <ul>
          <SidebarItem icon={<FaHome />} label="Dashboard" />
          <SidebarItem icon={<FaLayerGroup />} label="Saved Animals" />
          <SidebarItem icon={<FaBriefcase />} label="My Points" />
          <SidebarItem icon={<FaUserFriends />} label="Members" />
          <SidebarItem icon={<FaShieldAlt />} label="Security" />
          <SidebarItem icon={<FaChartLine />} label="Statistics" />
          <li><Link to="/ShelterForm" className='hover:text-black p-6  hover:p-2  hover:rounded-xl hover:scale-50'><SidebarItem icon={<FaUserFriends />} label="Add Shelters" /></Link></li>
        </ul>
      </nav>
    </div>
  );
};

const SidebarItem = ({ icon, label }) => {
  return (
    <div className="flex items-center space-x-2 p-4 hover:bg-black hover:text-white cursor-pointer">
      <div className="text-2xl md:text-4xl">{icon}</div>
      <span className="hover:inline-block text-sm font-medium md:text-2xl">{label}</span>
    </div>
  );
};

const Dashboardshelter = () => {
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
        data: [20, 145, 30, 60, 80, 10],
        fill: false,
        borderColor: '#0D9488', // Teal
        backgroundColor: '#0D9488',
        pointBackgroundColor: '#0D9488',
        pointBorderColor: '#fff',
        tension: 0.4,
      },
      {
        label: 'Pet Shelter Owners',
        data: [15, 30, 125, 50, 70, 190],
        fill: false,
        borderColor: '#F97316', // Orange
        backgroundColor: '#F97316',
        pointBackgroundColor: '#F97316',
        pointBorderColor: '#fff',
        tension: 0.4,
      },
      {
        label: 'Available Pets',
        data: [60, 55, 70, 185, 95, 110],
        fill: false,
        borderColor: '#3B82F6', // Blue
        backgroundColor: '#3B82F6',
        pointBackgroundColor: '#3B82F6',
        pointBorderColor: '#fff',
        tension: 0.4,
      },
      {
        label: 'Successful Adoptions',
        data: [10, 65, 20, 100, 60, 80],
        fill: false,
        borderColor: '#EF4444', // Red
        backgroundColor: '#EF4444',
        pointBackgroundColor: '#EF4444',
        pointBorderColor: '#fff',
        tension: 0.4,
      },
    ],
  };


  const pieChartData = {
    labels: [
      'Adopted Pets',
      'Available for Adoption',
      'Pets in Medical Care',
      'Pets Reserved',
      'Volunteer Hours',
      'Shelter Capacity Remaining',
    ],
    datasets: [
      {
        data: [120, 80, 40, 30, 60, 50],
        backgroundColor: ['#4caf50', '#f44336', '#ff9800', '#9c27b0', '#03a9f4', '#cddc39'],
        hoverBackgroundColor: ['#388e3c', '#d32f2f', '#f57c00', '#7b1fa2', '#0288d1', '#afb42b'],
      },
    ],
  };


  return (
    <>
      {/* <DashboardNavbar /> */}
      <div className="flex bg-[#0D9488] md:mt-10 md:mx-5">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Dashboard Area */}
        <div className="flex-1 p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="text-2xl md:text-3xl font-semibold text-white">Welcome, Shelter Owner!</div>
            <div className="flex items-center space-x-4">
              <input
                type="text"
                placeholder="Search"
                className="px-4 py-2 rounded-full focus:outline-none"
              />
              <img
                src="https://cdn-icons-png.flaticon.com/128/200/200941.png"
                alt="User Avatar"
                className="w-10 h-10 rounded-full"
              />
            </div>
          </div>

          {/* Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8 gap-8 ">
            <div className="p-4 rounded-lg shadow-md hover:text-white hover:scale-106 text-white">
              <h3 className="text-xl font-semibold text-white">Saved Animals</h3>
              <p className="text-3xl font-bold text-white">152</p>
              <p className="mt-2 text-sm text-white">View your saved animals</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md hover:bg-teal-50  ">
              <h3 className="text-xl font-semibold text-gray-700">Points</h3>
              <p className="text-3xl font-bold text-black">178</p>
              <a href="#rewards" className="mt-2 text-sm text-teal-600 hover:underline">Go to Rewards</a>
              <div className="w-full h-52 mt-4 pl-[9rem] mt-[-4rem]">
                <Pie data={pieChartData} />
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md hover:bg-teal-50">
              <h3 className="text-xl font-semibold text-gray-700">Points Breakdown</h3>
              <div className="w-full h-52 mt-4">
                <Bar data={pieChartData} />
              </div>
            </div>
          </div>
          {/* View Savings */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h3 className="text-xl font-semibold text-gray-700">View Your Savings</h3>
            <p className="mt-2 text-gray-600">Track your saved animals and associated rewards.</p>
          </div>

          {/* Chart Section */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-8 w-full lg:w-2/3 mx-auto">
            <h3 className="text-xl font-semibold text-gray-700">Adoption Statistics</h3>
            <div className="mt-4">
              <Line data={lineChartData} />
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h3 className="text-xl font-semibold text-gray-700">Shelter Owners Tasks</h3>
            <p className="mt-2 text-gray-600">The Shelter Owners Features and their tasks.</p>

            {/* Task List */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              {/* Task 1 */}
              <div className="flex items-center p-4 bg-gray-400 rounded-md shadow-sm">

                <label className="text-gray-700 text-xl">Manage Pet Profiles</label>
                <input type="checkbox" className="mr-5 w-5 h-5 ml-auto " />
              </div>

              {/* Task 2 */}
              <div className="flex items-center p-4 bg-gray-400 rounded-md shadow-sm">

                <label className="text-gray-700">Schedule Adoption Events</label>
                <input type="checkbox" className="mr-5 w-5 h-5 ml-auto " />
              </div>

              {/* Task 3 */}
              <div className="flex items-center p-4 bg-gray-400 rounded-md shadow-sm">

                <label className="text-gray-700">Track Pet Health</label>
                <input type="checkbox" className="mr-5 w-5 h-5 ml-auto " />
              </div>

              {/* Task 4 */}
              <div className="flex items-center p-4 bg-gray-400 rounded-md shadow-sm">

                <label className="text-gray-700">Manage Shelter Volunteers</label>
                <input type="checkbox" className="mr-5 w-5 h-5 ml-auto " />
              </div>
              <div className="flex items-center p-4 bg-gray-400 rounded-md shadow-sm">

                <label className="text-gray-700 text-xl">Manage Pet Profiles</label>
                <input type="checkbox" className="mr-5 w-5 h-5 ml-auto " />
              </div>

              {/* Task 2 */}
              <div className="flex items-center p-4 bg-gray-400 rounded-md shadow-sm">

                <label className="text-gray-700">Schedule Adoption Events</label>
                <input type="checkbox" className="mr-5 w-5 h-5 ml-auto " />
              </div>

              {/* Task 3 */}
              <div className="flex items-center p-4 bg-gray-400 rounded-md shadow-sm">

                <label className="text-gray-700">Track Pet Health</label>
                <input type="checkbox" className="mr-5 w-5 h-5 ml-auto " />
              </div>

              {/* Task 4 */}
              <div className="flex items-center p-4 bg-gray-400 rounded-md shadow-sm">

                <label className="text-gray-700">Manage Shelter Volunteers</label>
                <input type="checkbox" className="mr-5 w-5 h-5 ml-auto " />
              </div>

              {/* Task 5 */}
              <div className="flex items-center p-4 bg-gray-400 rounded-md shadow-sm">
                <label className="text-gray-700">Track Adoption Applications</label>
                <input type="checkbox" className="mr-5 w-5 h-5 ml-auto " />
              </div>

              {/* Task 6 */}
              <div className="flex items-center p-4 bg-gray-400 rounded-md shadow-sm">

                <label className="text-gray-700">Update Shelter Information</label>
                <input type="checkbox" className="mr-5 w-5 h-5 ml-auto " />
              </div>
            </div>
          </div>


          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h3 className="text-xl font-semibold text-gray-700">WelCome Location</h3>
            <p className="mt-2 text-gray-600">Here you can interact with the Pets and Animals.</p>
          </div>
          {/* Map Section for Team Members */}
          <div className="mt-4" style={{ height: '600px' }}>
            <iframe
              title="Google Map"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28580.70340676968!2d80.23307383060461!3d26.436771368208582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c47aaaa460ecd%3A0x509aaf4ca1259442!2sAnimal%20Shelter%20Kanpur!5e0!3m2!1sen!2sin!4v1731536134170!5m2!1sen!2sin"
              allowFullScreen=""
              loading="eager"
            ></iframe>
          </div>


        </div>
      </div>
    </>
  );
};

export default Dashboardshelter;