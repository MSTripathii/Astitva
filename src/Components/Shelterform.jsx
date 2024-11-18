import React, { useState } from 'react';
import axios from 'axios';

const AddShelterForm = () => {
  const [formData, setFormData] = useState({
    shelter_name: '',
    location: '',
    contact: '',
    active_inactive: '',
    ratings: '',
    slogan: '',
    src:"hello"
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/register/add', formData);
      alert('Shelter added successfully!');
      console.log(response.data);
      setFormData({
        shelter_name: '',
        location: '',
        contact: '',
        active_inactive: '',
        ratings: '',
        slogan: '',
        src:""
      });
    } catch (error) {
      alert('Error adding shelter.');
      console.error(error);
    }
  };

  return (
    <div className="my-10 text-center">
      <form onSubmit={handleSubmit}>
        <label className="text-2xl" htmlFor="shelter_name">
          Shelter Name:
        </label>
        <br />
        <input
          type="text"
          placeholder="Enter Shelter Name"
          className="p-2 border border-teal-300 my-4 md:w-1/2 rounded-lg"
          name="shelter_name"
          value={formData.shelter_name}
          onChange={handleChange}
        />
        <br />

        <label className="text-2xl" htmlFor="location">
          Location:
        </label>
        <br />
        <input
          type="text"
          placeholder="Enter Shelter Location"
          className="p-2 border border-teal-300 my-4 md:w-1/2 rounded-lg"
          name="location"
          value={formData.location}
          onChange={handleChange}
        />
        <br />

        <label className="text-2xl" htmlFor="contact">
          Contact Number:
        </label>
        <br />
        <input
          type="text"
          placeholder="Enter Contact Number"
          className="p-2 border border-teal-300 my-4 md:w-1/2 rounded-lg"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
        />
        <br />

        <label className="text-2xl" htmlFor="active_inactive">
          Status (Active/Inactive):
        </label>
        <br />
        <input
          type="text"
          placeholder="Enter Shelter Status"
          className="p-2 border border-teal-300 my-4 md:w-1/2 rounded-lg"
          name="active_inactive"
          value={formData.active_inactive}
          onChange={handleChange}
        />
        <br />

        <label className="text-2xl" htmlFor="ratings">
          Ratings:
        </label>
        <br />
        <input
          type="text"
          placeholder="Enter Ratings (1-5)"
          className="p-2 border border-teal-300 my-4 md:w-1/2 rounded-lg"
          name="ratings"
          value={formData.ratings}
          onChange={handleChange}
        />
        <br />

        <label className="text-2xl" htmlFor="slogan">
          Slogan:
        </label>
        <br />
        <input
          type="text"
          placeholder="Enter Shelter Slogan"
          className="p-2 border border-teal-300 my-4 md:w-1/2 rounded-lg"
          name="slogan"
          value={formData.slogan}
          onChange={handleChange}
        />
        <br />

        <input
          type="submit"
          className="p-3 border border-white bg-teal-300 text-black font-bold text-xl rounded-lg hover:scale-110 hover:bg-white hover:border-teal-300 mb-8"
          value="Add Shelter"
        />
        <h1 className="text-xl font-bold leading-normal border-b border-teal-200 p-3">
          Ensure the information is accurate before submission.
        </h1>
      </form>
    </div>
  );
};

export default AddShelterForm;
