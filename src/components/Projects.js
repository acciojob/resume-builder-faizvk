import React, { useState } from "react";

const Projects = ({ data, setData, goNext, goBack }) => {
  const [projects, setProjects] = useState(data || []);

  const handleAdd = () =>
    setProjects([
      ...projects,
      { projectName: "", techStack: "", description: "" },
    ]);

  const handleChange = (index, e) => {
    const updated = [...projects];
    updated[index][e.target.name] = e.target.value;
    setProjects(updated);
  };

  const handleDelete = (index) => {
    const updated = [...projects];
    updated.splice(index, 1);
    setProjects(updated);
  };

  const handleNext = () => {
    setData(projects);
    goNext();
  };

  return (
    <div>
      <h2>Add your Mini Projects</h2>
      {projects.map((proj, i) => (
        <div key={i}>
          <input
            type="text"
            name="projectName"
            placeholder="Project Name"
            value={proj.projectName}
            onChange={(e) => handleChange(i, e)}
          />
          <input
            type="text"
            name="techStack"
            placeholder="Tech Stack"
            value={proj.techStack}
            onChange={(e) => handleChange(i, e)}
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={proj.description}
            onChange={(e) => handleChange(i, e)}
          />
          <button id="delete_project" onClick={() => handleDelete(i)}>
            Delete
          </button>
        </div>
      ))}
      <button id="add_project" onClick={handleAdd}>
        Add Project
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

export default Projects;
