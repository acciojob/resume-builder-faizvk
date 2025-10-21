import React from "react";
import Navigation from "./Navigation";

function Education() {
  return (
    <div>
      <h3>Add your Education Details</h3>
      <input type="text" name="courseName" placeholder="Course Name" />
      <input type="text" name="completionYear" placeholder="Completion Year" />
      <input type="text" name="college" placeholder="College Name" />
      <input type="text" name="percentage" placeholder="Percentage" />
      <button id="add_education">Add Education</button>
      <button id="delete_education">Delete</button>
      <Navigation /> {/* Shows Back + Next */}
    </div>
  );
}

export default Education;
