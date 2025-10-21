import React from "react";
import Navigation from "./Navigation";

function Projects() {
  return (
    <div>
      <h3>Add your Mini Projects</h3>
      <input type="text" name="projectName" placeholder="Project Name" />
      <input type="text" name="techStack" placeholder="Tech Stack" />
      <input type="text" name="description" placeholder="Description" />
      <button id="add_project">Add Project</button>
      <button id="delete_project">Delete</button>
      <Navigation /> {/* Shows Back + Next */}
    </div>
  );
}

export default Projects;
