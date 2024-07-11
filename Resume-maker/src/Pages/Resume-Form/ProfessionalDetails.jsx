// ProfessionalDetails.js

import React, { useState } from 'react';
import {WorkExperience , Skills , Education} from '../index'

const ProfessionalDetails = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Professional details submitted successfully!");
  };

  return (
    <div className="w-full h-full flex justify-center items-center p-4 bg-gray-100">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-6">Professional Details</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          <WorkExperience />
          <Education />
          <Skills />
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

export default ProfessionalDetails;
