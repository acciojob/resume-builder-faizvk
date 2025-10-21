import React, { useState, useEffect } from "react";

const SocialMedia = ({ onValidChange }) => {
  const [socials, setSocials] = useState([""]);

  useEffect(() => {
    const valid = socials.every((s) => s.trim());
    onValidChange(valid);
  }, [socials, onValidChange]);

  const handleChange = (index, value) => {
    const newSocials = [...socials];
    newSocials[index] = value;
    setSocials(newSocials);
  };

  const addSocial = () => setSocials([...socials, ""]);
  const removeSocial = (index) => {
    const newSocials = [...socials];
    newSocials.splice(index, 1);
    setSocials(newSocials);
  };

  return (
    <div>
      <h2>Add your Social Media Links</h2>
      {socials.map((social, index) => (
        <div key={index}>
          <input
            name="Social"
            placeholder="Social Media URL"
            value={social}
            onChange={(e) => handleChange(index, e.target.value)}
          />
          <button id="delete" onClick={() => removeSocial(index)}>
            Delete
          </button>
        </div>
      ))}
      <button id="add_social" onClick={addSocial}>
        Add Social Media
      </button>
    </div>
  );
};

export default SocialMedia;
