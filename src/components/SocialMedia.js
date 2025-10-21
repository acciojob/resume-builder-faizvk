import React, { useState } from "react";

const SocialMedia = ({ data, onNext, onBack }) => {
  const [links, setLinks] = useState(data?.length ? data : [""]);

  const handleChange = (index, value) => {
    const newLinks = [...links];
    newLinks[index] = value;
    setLinks(newLinks);
  };

  const addLink = () => setLinks([...links, ""]);

  const deleteLink = (index) => {
    const newLinks = links.filter((_, i) => i !== index);
    setLinks(newLinks.length ? newLinks : [""]);
  };

  return (
    <div>
      <h2>Add your Social Media Links</h2>
      {links.map((link, index) => (
        <div key={index}>
          <input
            name="Social"
            placeholder="Link"
            value={link}
            onChange={(e) => handleChange(index, e.target.value)}
          />
          <button id="delete_social" onClick={() => deleteLink(index)}>
            Delete
          </button>
        </div>
      ))}
      <button id="add_social" onClick={addLink}>
        Add
      </button>
      <div>
        <button id="back" onClick={onBack}>
          Back
        </button>
        <button id="next" onClick={() => onNext(links)}>
          Next
        </button>
      </div>
    </div>
  );
};

export default SocialMedia;
