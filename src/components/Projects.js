import React, { useState } from "react";

const Projects = ({ data, onNext, onBack }) => {
  const [projects, setProjects] = useState(
    data?.length ? data : [{ projectName: "", techStack: "", description: "" }]
  );

  const handleChange = (index, e) => {
    const newProjects = [...projects];
    newProjects[index][e.target.name] = e.target.value;
    setProjects(newProjects);
  };

  const addProject = () =>
    setProjects([
      ...projects,
      { projectName: "", techStack: "", description: "" },
    ]);

  const deleteProject = (index) => {
    const newProjects = projects.filter((_, i) => i !== index);
    setProjects(
      newProjects.length
        ? newProjects
        : [{ projectName: "", techStack: "", description: "" }]
    );
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
            onChange={(e) => handleChange(index, e)}
          />
          <input
            name="techStack"
            placeholder="Tech Stack"
            value={project.techStack}
            onChange={(e) => handleChange(index, e)}
          />
          <input
            name="description"
            placeholder="Description"
            value={project.description}
            onChange={(e) => handleChange(index, e)}
          />
          <button id="delete" onClick={() => deleteProject(index)}>
            Delete
          </button>
        </div>
      ))}
      <button id="add_project" onClick={addProject}>
        Add
      </button>
      <div>
        <button id="back" onClick={onBack}>
          Back
        </button>
        <button id="next" onClick={() => onNext(projects)}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Projects;
