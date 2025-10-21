import React, { useState, useEffect } from "react";

const Education = ({ onValidChange }) => {
  const [educations, setEducations] = useState([
    { courseName: "", completionYear: "", college: "", percentage: "" },
  ]);

  useEffect(() => {
    // Valid if all fields in all entries are filled
    const valid = educations.every(
      (e) =>
        e.courseName.trim() &&
        e.completionYear.trim() &&
        e.college.trim() &&
        e.percentage.trim()
    );
    onValidChange(valid);
  }, [educations, onValidChange]);

  const handleChange = (index, field, value) => {
    const newEdu = [...educations];
    newEdu[index][field] = value;
    setEducations(newEdu);
  };

  const addEducation = () =>
    setEducations([
      ...educations,
      { courseName: "", completionYear: "", college: "", percentage: "" },
    ]);

  const removeEducation = (index) => {
    const newEdu = [...educations];
    newEdu.splice(index, 1);
    setEducations(newEdu);
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
            onChange={(e) => handleChange(index, "courseName", e.target.value)}
          />
          <input
            name="completionYear"
            placeholder="Completion Year"
            value={edu.completionYear}
            onChange={(e) =>
              handleChange(index, "completionYear", e.target.value)
            }
          />
          <input
            name="college"
            placeholder="College"
            value={edu.college}
            onChange={(e) => handleChange(index, "college", e.target.value)}
          />
          <input
            name="percentage"
            placeholder="Percentage"
            value={edu.percentage}
            onChange={(e) => handleChange(index, "percentage", e.target.value)}
          />
          <button id="delete" onClick={() => removeEducation(index)}>
            Delete
          </button>
        </div>
      ))}
      <button id="add_education" onClick={addEducation}>
        Add Education
      </button>
    </div>
  );
};

export default Education;
