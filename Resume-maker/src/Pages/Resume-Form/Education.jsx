import React, { useState } from 'react';
import Input from '../../Components/Input'

const Education = () => {
  const [educations, setEducations] = useState([{ degree: '', fieldOfStudy: '', school: '', location: '', startDate: '', endDate: '', gpa: '' }]);

  const handleChange = (index, field, value) => {
    const newEducations = [...educations];
    newEducations[index][field] = value;
    setEducations(newEducations);
  };

  const addEducation = () => {
    setEducations([...educations, { degree: '', fieldOfStudy: '', school: '', location: '', startDate: '', endDate: '', gpa: '' }]);
  };

  const removeEducation = (index) => {
    const newEducations = educations.filter((_, i) => i !== index);
    setEducations(newEducations);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Education</h2>
      {educations.map((education, index) => (
        <div key={index} className="flex flex-col gap-4 mb-4 border p-4 rounded">
          <Input
            type="text"
            label="Degree:"
            placeholder="Degree"
            value={education.degree}
            onChange={(e) => handleChange(index, 'degree', e.target.value)}
          />
          <Input
            type="text"
            label="Field of Study:"
            placeholder="Field of Study"
            value={education.fieldOfStudy}
            onChange={(e) => handleChange(index, 'fieldOfStudy', e.target.value)}
          />
          <Input
            type="text"
            label="School/University:"
            placeholder="School/University"
            value={education.school}
            onChange={(e) => handleChange(index, 'school', e.target.value)}
          />
          <Input
            type="text"
            label="Location:"
            placeholder="Location"
            value={education.location}
            onChange={(e) => handleChange(index, 'location', e.target.value)}
          />
          <Input
            type="date"
            label="Start Date:"
            value={education.startDate}
            onChange={(e) => handleChange(index, 'startDate', e.target.value)}
          />
          <Input
            type="date"
            label="End Date:"
            value={education.endDate}
            onChange={(e) => handleChange(index, 'endDate', e.target.value)}
          />
          <Input
            type="text"
            label="GPA/Grade:"
            placeholder="GPA/Grade"
            value={education.gpa}
            onChange={(e) => handleChange(index, 'gpa', e.target.value)}
          />
          {educations.length > 1 && (
            <button
              type="button"
              className="text-red-500"
              onClick={() => removeEducation(index)}
            >
              Remove
            </button>
          )}
        </div>
      ))}
      <button
        type="button"
        className="bg-green-500 text-white py-3 px-5 rounded-md shadow-md hover:bg-green-600 transition"
        onClick={addEducation}
      >
        Add Another Education
      </button>
    </div>
  );
};

export default Education;