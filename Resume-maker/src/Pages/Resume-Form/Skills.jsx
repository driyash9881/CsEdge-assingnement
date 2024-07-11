// Skills.js

import React, { useState } from 'react';
import Input from '../../Components/Input'

const Skills = () => {
  const [technicalSkills, setTechnicalSkills] = useState('');
  const [softSkills, setSoftSkills] = useState('');
  const [languages, setLanguages] = useState('');
  const [certifications, setCertifications] = useState('');

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <Input
        type="text"
        label="Technical Skills:"
        placeholder="Enter technical skills"
        className="rounded-md shadow-md"
        value={technicalSkills}
        onChange={(e) => setTechnicalSkills(e.target.value)}
      />
      <Input
        type="text"
        label="Soft Skills:"
        placeholder="Enter soft skills"
        className="rounded-md shadow-md"
        value={softSkills}
        onChange={(e) => setSoftSkills(e.target.value)}
      />
      <Input
        type="text"
        label="Languages:"
        placeholder="Enter languages"
        className="rounded-md shadow-md"
        value={languages}
        onChange={(e) => setLanguages(e.target.value)}
      />
      <textarea
        placeholder="Enter certifications"
        className="border p-2 rounded-md shadow-md w-full"
        value={certifications}
        onChange={(e) => setCertifications(e.target.value)}
      />
    </div>
  );
};

export default Skills;
