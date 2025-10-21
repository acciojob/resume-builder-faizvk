import React, { useState } from "react";

const Education = ({ data, setData, goNext, goBack }) => {
  const [educations, setEducations] = useState(data || []);

  const handleAdd = () => {
    setEducations([
      ...educations,
      { courseName: "", completionYear: "", college: "", percentage: "" },
    ]);
  };

  const handleChange = (index, e) => {
    const updated = [...educations];
    updated[index][e.target.name] = e.target.value;
    setEducations(updated);
  };

  const handleDelete = (index) => {
    const updated = [...educations];
    updated.splice(index, 1);
    setEducations(updated);
  };

  const handleNext = () => {
    setData(educations);
    goNext();
  };

  return (
    <div>
      <h2>Add your Education Details</h2>
      {educations.map((edu, i) => (
        <div key={i}>
          <input
            type="text"
            name="courseName"
            placeholder="Course Name"
            value={edu.courseName}
            onChange={(e) => handleChange(i, e)}
          />
          <input
            type="text"
            name="completionYear"
            placeholder="Completion Year"
            value={edu.completionYear}
            onChange={(e) => handleChange(i, e)}
          />
          <input
            type="text"
            name="college"
            placeholder="College"
            value={edu.college}
            onChange={(e) => handleChange(i, e)}
          />
          <input
            type="text"
            name="percentage"
            placeholder="Percentage"
            value={edu.percentage}
            onChange={(e) => handleChange(i, e)}
          />
          <button id="delete_education" onClick={() => handleDelete(i)}>
            Delete
          </button>
        </div>
      ))}
      <button id="add_education" onClick={handleAdd}>
        Add Education
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

export default Education;
