// Awards.jsx

import React, { useState } from 'react';
import Input from '../../../Components/Input';

const Awards = () => {
  const [awards, setAwards] = useState([
    { title: '', description: '', date: '' }
  ]);

  const handleChange = (index, field, value) => {
    const newAwards = [...awards];
    newAwards[index][field] = value;
    setAwards(newAwards);
  };

  const addAward = () => {
    setAwards([...awards, { title: '', description: '', date: '' }]);
  };

  const removeAward = (index) => {
    const newAwards = awards.filter((_, i) => i !== index);
    setAwards(newAwards);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Awards & Honors</h2>
      {awards.map((award, index) => (
        <div key={index} className="flex flex-col gap-4 mb-4 border p-4 rounded">
          <Input
            type="text"
            label="Title:"
            placeholder="Title"
            value={award.title}
            onChange={(e) => handleChange(index, 'title', e.target.value)}
          />
          <textarea
            placeholder="Description"
            className="border p-2 rounded-md shadow-md w-full"
            value={award.description}
            onChange={(e) => handleChange(index, 'description', e.target.value)}
          />
          <Input
            type="date"
            label="Date:"
            value={award.date}
            onChange={(e) => handleChange(index, 'date', e.target.value)}
          />
          {awards.length > 1 && (
            <button
              type="button"
              className="text-red-500"
              onClick={() => removeAward(index)}
            >
              Remove
            </button>
          )}
        </div>
      ))}
      <button
        type="button"
        className="bg-green-500 text-white py-3 px-5 rounded-md shadow-md hover:bg-green-600 transition"
        onClick={addAward}
      >
        Add Another Award
      </button>
    </div>
  );
};

export default Awards;
