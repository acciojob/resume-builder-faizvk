import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSkill, deleteSkill } from "../redux/resumeSlice";

const Skills = () => {
  const dispatch = useDispatch();
  const skills = useSelector((state) => state.resume.skills);

  const [skill, setSkill] = useState("");

  const handleAdd = () => {
    if (skill.trim() === "") return;
    dispatch(addSkill(skill));
    setSkill("");
  };

  return (
    <div>
      <h2>Skills</h2>
      <input
        name="skill"
        value={skill}
        onChange={(e) => setSkill(e.target.value)}
        placeholder="Skill"
      />
      <button id="add_skill" onClick={handleAdd}>
        Add Skill
      </button>

      <ul>
        {skills.map((s, i) => (
          <li key={i}>
            {s}
            <button id="delete_skill" onClick={() => dispatch(deleteSkill(i))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
