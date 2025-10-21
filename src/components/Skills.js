import React from "react";
import Navigation from "./Navigation";

function Skills() {
  return (
    <div>
      <h3>Add your Skills</h3>
      <input type="text" name="skill" placeholder="Skill" />
      <button id="add_skill">Add Skill</button>
      <button id="delete_skill">Delete</button>
      <Navigation /> {/* Shows Back + Next */}
    </div>
  );
}

export default Skills;
