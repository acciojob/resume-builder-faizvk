import React, { useState } from "react";

const Skills = ({ data, onNext, onBack }) => {
  const [skills, setSkills] = useState(data?.length ? data : [""]);

  const handleChange = (index, value) => {
    const newSkills = [...skills];
    newSkills[index] = value;
    setSkills(newSkills);
  };

  const addSkill = () => setSkills([...skills, ""]);

  const deleteSkill = (index) => {
    const newSkills = skills.filter((_, i) => i !== index);
    setSkills(newSkills.length ? newSkills : [""]);
  };

  return (
    <div>
      <h2>Add your Skills</h2>
      {skills.map((skill, index) => (
        <div key={index}>
          <input
            name="skill"
            placeholder="Skill"
            value={skill}
            onChange={(e) => handleChange(index, e.target.value)}
          />
          <button id="delete_skill" onClick={() => deleteSkill(index)}>
            Delete
          </button>
        </div>
      ))}
      <button id="add_skill" onClick={addSkill}>
        Add
      </button>
      <div>
        <button id="back" onClick={onBack}>
          Back
        </button>
        <button id="next" onClick={() => onNext(skills)}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Skills;
