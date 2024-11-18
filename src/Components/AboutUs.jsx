import React from 'react';
import Footer from '../Components/Footer';
import profile from '../assets/profile_pic.jpeg'

const AboutUs = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-start my-20 justify-center px-4" id="aboutus">
        {/* Left Column */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          {/* Founder Image and Details */}
          <div className="flex flex-col items-center text-center">
            <img
              src={profile}
              alt="Founder and Owner"
              className="w-48 h-48 md:w-80 md:h-80 rounded-full object-cover mb-6"
            />
            <h1 className="text-4xl lg:text-5xl font-extrabold text-teal-500">
              Astitva<span className="text-teal-600">4</span>Animals
            </h1>
            <p className="text-lg md:text-xl mt-4 max-w-xl mx-auto">
              Astitva4Animals is a platform built with a single purpose: to help street animals in distress. By connecting
              users, volunteers, and professionals, we aim to ensure that no animal suffers in silence.
            </p>
          </div>

          {/* Our Mission Section */}
          <div className="mt-12 text-center">
            <h2 className="text-3xl font-bold text-teal-600">
              Our Mission
            </h2>
            <p className="mt-6 text-lg md:text-xl">
              We are driven by the belief that every animal deserves care and compassion. Our mission is to connect animals in need with
              rescue teams, shelters, and veterinarians who can provide quick and effective solutions. With a dedicated team, our goal is
              to bring change and compassion to the lives of street animals.
            </p>

             {/* Vision Section */}
         
            <h2 className="text-3xl font-bold text-teal-600 text-center mt-10">
              Our Vision
            </h2>
            <p className="mt-6 text-lg md:text-xl">
              Astitva4Animals envisions a world where every animal, regardless of its condition, receives the care it needs when it needs it. We aim to create a safer, more compassionate environment for animals by fostering community involvement and leveraging modern technology to provide quick, efficient solutions.
            </p>

          {/* Founder Section */}
            <h2 className="text-3xl font-bold text-white mt-10">
              Founder: <span className='text-teal-300'>Madhusudan Tripathi</span>
            </h2>
            <p className="mt-4 text-lg md:text-xl">
              The idea behind Astitva4Animals was created by Madhusudan Tripathi, with a vision to bring together technology, compassion, and a network of volunteers to create a world where every street animal receives the care it deserves. Our journey began with a small team, and today, we continue to grow with the support of our community.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:w-1/2 pl-0 lg:pl-12">
          {/* Core Services Section */}
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-teal-600 text-center lg:text-left">
              Core Services We Offer
            </h2>
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-teal-600">
                1. Help Requests
              </h3>
              <p className="mt-4 text-lg md:text-xl">
                Users can quickly report animals in need of help. Whether it’s an injured animal or one suffering from an illness, our platform ensures that requests are forwarded to the nearest rescue teams, veterinarians, and shelters to provide immediate care. This streamlined process helps save lives.
              </p>
            </div>

            <div className="mt-10">
              <h3 className="text-2xl font-bold text-teal-600">
                2. Nearby Resources
              </h3>
              <p className="mt-4 text-lg md:text-xl">
                Users can easily locate nearby veterinarians, rescue teams, and pet medical stores using the platform’s interactive map. This helps animals receive immediate medical attention or assistance from the closest available resource, ensuring their safety and well-being.
              </p>
            </div>

            <div className="mt-10">
              <h3 className="text-2xl font-bold text-teal-600">
                3. Shelter Services
              </h3>
              <p className="mt-4 text-lg md:text-xl">
                Shelters can list their available services, animal profiles, and manage adoption teams directly through the platform. We provide shelter personnel with tools to organize resources, track animal status, and stay connected with volunteers, ensuring efficient and effective animal care.
              </p>
            </div>

            <div className="mt-10">
              <h3 className="text-2xl font-bold text-teal-600">
                4. Chatbot Assistance
              </h3>
              <p className="mt-4 text-lg md:text-xl">
                Our AI-powered chatbot offers instant advice on basic animal care, first-aid tips, and guidance on next steps until professional help arrives. This ensures users can make informed decisions while awaiting further assistance.
              </p>
            </div>

            <div className="mt-10">
              <h3 className="text-2xl font-bold text-teal-600">
                5. Dashboards
              </h3>
              <p className="mt-4 text-lg md:text-xl">
                We provide separate dashboards for both regular users and admins:
                <br />
                <span className="font-semibold">User Dashboard:</span> View your past requests, access nearby resources, and become a volunteer.
                <br />
                <span className="font-semibold">Admin Dashboard:</span> Manage shelter listings, track rescue teams, and handle ongoing animal welfare activities.
              </p>
            </div>

            <div className="mt-10">
              <h3 className="text-2xl font-bold text-teal-600">
                6. Authentication and Profiles
              </h3>
              <p className="mt-4 text-lg md:text-xl">
                Users and shelter staff can securely create and manage profiles to track their activities, request help, and save important information. Authentication ensures that all data, including animal profiles and rescue details, is kept secure.
              </p>
            </div>

            <div className="mt-10">
              <h3 className="text-2xl font-bold text-teal-600">
                7. Community Building
              </h3>
              <p className="mt-4 text-lg md:text-xl">
                The platform encourages a community-driven approach, allowing users to become volunteers, donate to shelters, or share animal rescue stories to spread awareness. Together, we can create a compassionate network for animals in need.
              </p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default AboutUs;
