import React, { useState } from "react";

const Education = ({ data, onNext, onBack }) => {
  const [educations, setEducations] = useState(
    data?.length
      ? data
      : [{ courseName: "", completionYear: "", college: "", percentage: "" }]
  );

  const handleChange = (index, e) => {
    const newEducations = [...educations];
    newEducations[index][e.target.name] = e.target.value;
    setEducations(newEducations);
  };

  const addEducation = () => {
    setEducations([
      ...educations,
      { courseName: "", completionYear: "", college: "", percentage: "" },
    ]);
  };

  const deleteEducation = (index) => {
    const newEducations = educations.filter((_, i) => i !== index);
    setEducations(
      newEducations.length
        ? newEducations
        : [{ courseName: "", completionYear: "", college: "", percentage: "" }]
    );
  };

  return (
    <div>
      <h2>Add your Education Details</h2>
      {educations.map((edu, index) => (
        <div key={index}>
          <input
            name="courseName"
            placeholder="Course Name"
            value={edu.courseName}
            onChange={(e) => handleChange(index, e)}
          />
          <input
            name="completionYear"
            placeholder="Completion Year"
            value={edu.completionYear}
            onChange={(e) => handleChange(index, e)}
          />
          <input
            name="college"
            placeholder="College"
            value={edu.college}
            onChange={(e) => handleChange(index, e)}
          />
          <input
            name="percentage"
            placeholder="Percentage"
            value={edu.percentage}
            onChange={(e) => handleChange(index, e)}
          />
          <button onClick={() => deleteEducation(index)}>Delete</button>
        </div>
      ))}
      <button id="add_education" onClick={addEducation}>
        Add
      </button>
      <div>
        <button id="back" onClick={onBack}>
          Back
        </button>
        <button id="next" onClick={() => onNext(educations)}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Education;
