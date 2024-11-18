import React, { useEffect, useState } from "react";
import axios from "axios";
import { Search } from "lucide-react";

interface Shelter {
  shelter_name: string;
  location: string;
  contact: string;
  active_inactive: string;
  ratings: number;
  src?: string; // Optional property if not all shelters have an image
  slogan?: string; // Optional property if not all shelters have a sloga
}

const Shelters = () => {
  // const [shelters, setShelters] = useState([]);
  const [shelters, setShelters] = useState<Shelter[]>([]);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  // Debounce logic for search input
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300); // Adjust delay as needed
    return () => clearTimeout(delayDebounce);
  }, [search]);

  // Fetch shelters based on debounced search term
  useEffect(() => {
    const fetchShelters = async () => {
      try {
        const res = debouncedSearch
          ? await axios.get(
              `http://localhost:8000/register/search?location=${debouncedSearch}`
            )
          : await axios.get("http://localhost:8000/register/all");
        console.log("API Response:", res.data);
        setShelters(res.data);
      } catch (error) {
        console.error("Error fetching shelters:", error);
      }
    };
    fetchShelters();
  }, [debouncedSearch]);

  return (
    <div className="min-h-screen bg-transparent p-12 md:my-10">
      {/* Search Bar */}
      <div className="flex justify-center items-center mb-6">
  <div className="relative w-[100vw] max-w-md flex">
    <input
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Search shelters by location..."
      className="w-96 p-4  border border-gray-300 rounded-l-lg shadow-sm text-lg focus:outline-none focus:ring focus:ring-teal-300"
    />
    <button
      title="Search"
      className="bg-teal-500  text-white p-3  rounded-r-lg hover:bg-teal-600 transition-all duration-300 ease-in-out flex items-center justify-center text-lg"
    >
      Search<Search className="ml-6 w-5 h-5" />
    </button>
  </div>
</div>


      {/* Shelter List */}
      <div className="flex flex-col gap-6 px-40 ">
        {shelters.length > 0 ? (
          shelters.map((shelter, index) => (
            <div
              key={index}
              className="bg-black border rounded-3xl h-[20rem] shadow-md hover:shadow-lg transition duration-200 p-9"
            >
              <div className="flex flex-col md:flex-row items-center">
                {/* Logo on the left */}
                <div className="flex-shrink-0 ">
                  <img
                    src={shelter.src}
                    alt="Shelter Logo"
                    className="w-[15rem] h-[15rem] object-cover rounded-full"
                  />
                </div>

                {/* Shelter Details in the middle */}
                <div className="flex flex-col justify-center w-[40%]  ml-[5rem]">
                  <h1 className="text-3xl font-bold text-teal-400 mb-2">
                    {shelter.shelter_name}
                  </h1>
                  <p className="text-xl text-gray-200">
                    <strong>Location:</strong> {shelter.location}
                  </p>
                  <p className="text-xl text-gray-200">
                    <strong>Contact:</strong> {shelter.contact}
                  </p>
                  <p className="text-xl text-gray-200">
                    <strong>Status:</strong> {shelter.active_inactive}
                  </p>
                  <p className="text-xl text-gray-200">
                    <strong>Ratings:</strong> {shelter.ratings}/5
                  </p>
                  <p className="text-xl flex-wrap text-gray-100 italic mt-2">
                    "{shelter.slogan}"
                  </p>
                </div>

                {/* Map iframe on the right */}
                <div className="flex-shrink-0 ">
                  <iframe  
                  className="w-[33rem] h-[15rem] ml-2 rounded-lg"                 
                    title="Google Map"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28580.70340676968!2d80.23307383060461!3d26.436771368208582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c47aaaa460ecd%3A0x509aaf4ca1259442!2sAnimal%20Shelter%20Kanpur!5e0!3m2!1sen!2sin!4v1731536134170!5m2!1sen!2sin"
                    loading="eager"
                  ></iframe>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-6xl mt-[5rem] text-center text-black">
            No shelters found.
          </div>
        )}
      </div>
    </div>
  );
};

export default Shelters;
