import React, { useState, useEffect } from "react";

const Projects = ({ onValidChange }) => {
  const [projects, setProjects] = useState([
    { projectName: "", techStack: "", description: "" },
  ]);

  useEffect(() => {
    const valid = projects.every(
      (p) => p.projectName.trim() && p.techStack.trim() && p.description.trim()
    );
    onValidChange(valid);
  }, [projects, onValidChange]);

  const handleChange = (index, field, value) => {
    const newProjects = [...projects];
    newProjects[index][field] = value;
    setProjects(newProjects);
  };

  const addProject = () =>
    setProjects([
      ...projects,
      { projectName: "", techStack: "", description: "" },
    ]);

  const removeProject = (index) => {
    const newProjects = [...projects];
    newProjects.splice(index, 1);
    setProjects(newProjects);
  };

  return (
    <div>
      <h2>Add your Mini Projects</h2>
      {projects.map((project, index) => (
        <div key={index}>
          <input
            name="projectName"
            placeholder="Project Name"
            value={project.projectName}
            onChange={(e) => handleChange(index, "projectName", e.target.value)}
          />
          <input
            name="techStack"
            placeholder="Tech Stack"
            value={project.techStack}
            onChange={(e) => handleChange(index, "techStack", e.target.value)}
          />
          <input
            name="description"
            placeholder="Description"
            value={project.description}
            onChange={(e) => handleChange(index, "description", e.target.value)}
          />
          <button id="delete" onClick={() => removeProject(index)}>
            Delete
          </button>
        </div>
      ))}
      <button id="add_project" onClick={addProject}>
        Add Project
      </button>
    </div>
  );
};

export default Projects;
