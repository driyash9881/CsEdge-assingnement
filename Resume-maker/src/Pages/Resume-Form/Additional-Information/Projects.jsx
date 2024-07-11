// Projects.jsx

import React, { useState } from 'react';
import Input from '../../../Components/Input'
const Projects = () => {
  const [projects, setProjects] = useState([
    { title: '', description: '', technologiesUsed: '', link: '' }
  ]);

  const handleChange = (index, field, value) => {
    const newProjects = [...projects];
    newProjects[index][field] = value;
    setProjects(newProjects);
  };

  const addProject = () => {
    setProjects([...projects, { title: '', description: '', technologiesUsed: '', link: '' }]);
  };

  const removeProject = (index) => {
    const newProjects = projects.filter((_, i) => i !== index);
    setProjects(newProjects);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="flex flex-col gap-4 mb-4 border p-4 rounded">
          <Input
            type="text"
            label="Project Title:"
            placeholder="Project Title"
            value={project.title}
            onChange={(e) => handleChange(index, 'title', e.target.value)}
          />
          <textarea
            placeholder="Description"
            className="border p-2 rounded-md shadow-md w-full"
            value={project.description}
            onChange={(e) => handleChange(index, 'description', e.target.value)}
          />
          <Input
            type="text"
            label="Technologies Used:"
            placeholder="Technologies Used"
            value={project.technologiesUsed}
            onChange={(e) => handleChange(index, 'technologiesUsed', e.target.value)}
          />
          <Input
            type="text"
            label="Link to Project:"
            placeholder="Link to Project"
            value={project.link}
            onChange={(e) => handleChange(index, 'link', e.target.value)}
          />
          {projects.length > 1 && (
            <button
              type="button"
              className="text-red-500"
              onClick={() => removeProject(index)}
            >
              Remove
            </button>
          )}
        </div>
      ))}
      <button
        type="button"
        className="bg-green-500 text-white py-3 px-5 rounded-md shadow-md hover:bg-green-600 transition"
        onClick={addProject}
      >
        Add Another Project
      </button>
    </div>
  );
};

export default Projects;
