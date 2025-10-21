import React, { useState } from "react";

const SocialMedia = ({ data, setData, goNext, goBack }) => {
  const [links, setLinks] = useState(data || []);

  const handleAdd = () => setLinks([...links, ""]);

  const handleChange = (index, e) => {
    const updated = [...links];
    updated[index] = e.target.value;
    setLinks(updated);
  };

  const handleDelete = (index) => {
    const updated = [...links];
    updated.splice(index, 1);
    setLinks(updated);
  };

  const handleNext = () => {
    setData(links);
    goNext();
  };

  return (
    <div>
      <h2>Add your Social Media Links</h2>
      {links.map((link, i) => (
        <div key={i}>
          <input
            type="text"
            name="Social"
            value={link}
            onChange={(e) => handleChange(i, e)}
          />
          <button id="delete_social" onClick={() => handleDelete(i)}>
            Delete
          </button>
        </div>
      ))}
      <button id="add_social" onClick={handleAdd}>
        Add Social
      </button>
      <div>
        <button id="back" onClick={goBack}>
          Back
        </button>
        <button id="next" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default SocialMedia;
