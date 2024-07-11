// Publications.jsx

import React, { useState } from 'react';
import Input from '../../../Components/Input'

const Publications = () => {
  const [publications, setPublications] = useState([
    { title: '', publicationDate: '', link: '' }
  ]);

  const handleChange = (index, field, value) => {
    const newPublications = [...publications];
    newPublications[index][field] = value;
    setPublications(newPublications);
  };

  const addPublication = () => {
    setPublications([...publications, { title: '', publicationDate: '', link: '' }]);
  };

  const removePublication = (index) => {
    const newPublications = publications.filter((_, i) => i !== index);
    setPublications(newPublications);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Publications</h2>
      {publications.map((publication, index) => (
        <div key={index} className="flex flex-col gap-4 mb-4 border p-4 rounded">
          <Input
            type="text"
            label="Title:"
            placeholder="Title"
            value={publication.title}
            onChange={(e) => handleChange(index, 'title', e.target.value)}
          />
          <Input
            type="date"
            label="Publication Date:"
            value={publication.publicationDate}
            onChange={(e) => handleChange(index, 'publicationDate', e.target.value)}
          />
          <Input
            type="text"
            label="Link:"
            placeholder="Link"
            value={publication.link}
            onChange={(e) => handleChange(index, 'link', e.target.value)}
          />
          {publications.length > 1 && (
            <button
              type="button"
              className="text-red-500"
              onClick={() => removePublication(index)}
            >
              Remove
            </button>
          )}
        </div>
      ))}
      <button
        type="button"
        className="bg-green-500 text-white py-3 px-5 rounded-md shadow-md hover:bg-green-600 transition"
        onClick={addPublication}
      >
        Add Another Publication
      </button>
    </div>
  );
};

export default Publications;
