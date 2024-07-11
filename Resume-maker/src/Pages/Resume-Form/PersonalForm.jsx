import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserDisplay from '../Homscreen'; // Assuming UserDisplay component is in the same directory

const PersonalForm = () => {
  const navigate = useNavigate();
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number , setNumber] = useState('');
  const [address ,setAddress ] = useState('');
  const [linkedIn ,setLinkedIn ] = useState('');
  const [github ,setGithub ] = useState('');

  // State to manage form input values

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic, e.g., dispatch actions, API calls
    console.log('Submitting form data:', name, email , number , email , address , linkedIn , github);
    // Example dispatch action after form submission
    // dispatch(someAction());


  };

  return (
    <div className="w-full h-full flex justify-center items-center p-4 bg-gray-100">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-6">Personal Information</h1>
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="font-bold">
              Name:
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="rounded-md shadow-md p-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="number" className="font-bold">
              Number:
            </label>
            <input
              type="text"
              id="number"
              placeholder="Enter your number"
              className="rounded-md shadow-md p-2"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email" className="font-bold">
              Email:
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="rounded-md shadow-md p-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="address" className="font-bold">
              Address:
            </label>
            <input
              type="text"
              id="address"
              placeholder="Enter your address"
              className="rounded-md shadow-md p-2"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="linkedIn" className="font-bold">
              LinkedIn:
            </label>
            <input
              type="url"
              id="linkedIn"
              placeholder="Enter your LinkedIn URL"
              className="rounded-md shadow-md p-2"
              value={linkedIn}
              onChange={(e) => setLinkedIn(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="github" className="font-bold">
              Github:
            </label>
            <input
              type="url"
              id="github"
              placeholder="Enter your Github URL"
              className="rounded-md shadow-md p-2"
              value={github}
              onChange={(e) => setGithub(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 rounded-md shadow-md hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </form>
      </div>

      </div>
  );
};

export default PersonalForm;
