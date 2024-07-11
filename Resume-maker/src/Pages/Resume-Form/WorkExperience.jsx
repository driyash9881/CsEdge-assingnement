import React, { useState } from 'react';
import Input from '../../Components/Input'
const WorkExperience = () => {
  const [jobs, setJobs] = useState([{ jobTitle: '', companyName: '', location: '', startDate: '', endDate: '', responsibilities: '', achievements: '' }]);

  const handleChange = (index, field, value) => {
    const newJobs = [...jobs];
    newJobs[index][field] = value;
    setJobs(newJobs);
  };

  const addJob = () => {
    setJobs([...jobs, { jobTitle: '', companyName: '', location: '', startDate: '', endDate: '', responsibilities: '', achievements: '' }]);
  };

  const removeJob = (index) => {
    const newJobs = jobs.filter((_, i) => i !== index);
    setJobs(newJobs);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
      {jobs.map((job, index) => (
        <div key={index} className="flex flex-col gap-4 mb-4 border p-4 rounded">
          <Input
            type="text"
            label="Job Title:"
            placeholder="Job Title"
            value={job.jobTitle}
            onChange={(e) => handleChange(index, 'jobTitle', e.target.value)}
          />
          <Input
            type="text"
            label="Company Name:"
            placeholder="Company Name"
            value={job.companyName}
            onChange={(e) => handleChange(index, 'companyName', e.target.value)}
          />
          <Input
            type="text"
            label="Location:"
            placeholder="Location"
            value={job.location}
            onChange={(e) => handleChange(index, 'location', e.target.value)}
          />
          <Input
            type="date"
            label="Start Date:"
            value={job.startDate}
            onChange={(e) => handleChange(index, 'startDate', e.target.value)}
          />
          <Input
            type="date"
            label="End Date:"
            value={job.endDate}
            onChange={(e) => handleChange(index, 'endDate', e.target.value)}
          />
          <div className="flex gap-4">
            <textarea
              placeholder="Responsibilities"
              className="border p-2 w-full"
              value={job.responsibilities}
              onChange={(e) => handleChange(index, 'responsibilities', e.target.value)}
            />
            <textarea
              placeholder="Achievements"
              className="border p-2 w-full"
              value={job.achievements}
              onChange={(e) => handleChange(index, 'achievements', e.target.value)}
            />
          </div>
          {jobs.length > 1 && (
            <button
              type="button"
              className="text-red-500"
              onClick={() => removeJob(index)}
            >
              Remove
            </button>
          )}
        </div>
      ))}
      <button
        type="button"
        className="
        
        text-white py-3 px-5 rounded-md shadow-md hover:bg-green-600 transition"
        onClick={addJob}
      >
        Add Another Job
      </button>
    </div>
  );
};

export default WorkExperience;