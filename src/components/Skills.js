import React, { useState } from "react";

const Skills = ({ data, setData, goNext, goBack }) => {
  const [skills, setSkills] = useState(data || []);

  const handleAdd = () => setSkills([...skills, ""]);

  const handleChange = (index, e) => {
    const updated = [...skills];
    updated[index] = e.target.value;
    setSkills(updated);
  };

  const handleDelete = (index) => {
    const updated = [...skills];
    updated.splice(index, 1);
    setSkills(updated);
  };

  const handleNext = () => {
    setData(skills);
    goNext();
  };

  return (
    <div>
      <h2>Add your Skills</h2>
      {skills.map((skill, i) => (
        <div key={i}>
          <input
            type="text"
            name="skill"
            value={skill}
            onChange={(e) => handleChange(i, e)}
          />
          <button id="delete_skill" onClick={() => handleDelete(i)}>
            Delete
          </button>
        </div>
      ))}
      <button id="add_skill" onClick={handleAdd}>
        Add Skill
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

export default Skills;
