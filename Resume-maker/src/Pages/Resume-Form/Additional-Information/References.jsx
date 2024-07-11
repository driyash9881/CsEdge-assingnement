// References.jsx

import React, { useState } from 'react';
import Input from '../../../Components/Input';

const References = () => {
  const [references, setReferences] = useState([
    { name: '', position: '', company: '', contactInformation: '' }
  ]);

  const handleChange = (index, field, value) => {
    const newReferences = [...references];
    newReferences[index][field] = value;
    setReferences(newReferences);
  };

  const addReference = () => {
    setReferences([...references, { name: '', position: '', company: '', contactInformation: '' }]);
  };

  const removeReference = (index) => {
    const newReferences = references.filter((_, i) => i !== index);
    setReferences(newReferences);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">References</h2>
      {references.map((reference, index) => (
        <div key={index} className="flex flex-col gap-4 mb-4 border p-4 rounded">
          <Input
            type="text"
            label="Name:"
            placeholder="Name"
            value={reference.name}
            onChange={(e) => handleChange(index, 'name', e.target.value)}
          />
          <Input
            type="text"
            label="Position:"
            placeholder="Position"
            value={reference.position}
            onChange={(e) => handleChange(index, 'position', e.target.value)}
          />
          <Input
            type="text"
            label="Company:"
            placeholder="Company"
            value={reference.company}
            onChange={(e) => handleChange(index, 'company', e.target.value)}
          />
          <Input
            type="text"
            label="Contact Information:"
            placeholder="Contact Information"
            value={reference.contactInformation}
            onChange={(e) => handleChange(index, 'contactInformation', e.target.value)}
          />
          {references.length > 1 && (
            <button
              type="button"
              className="text-red-500"
              onClick={() => removeReference(index)}
            >
              Remove
            </button>
          )}
        </div>
      ))}
      <button
        type="button"
        className="bg-green-500 text-white py-3 px-5 rounded-md shadow-md hover:bg-green-600 transition"
        onClick={addReference}
      >
        Add Another Reference
</button>
</div>
  )
  }
  
 export default References;