import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEducation, deleteEducation } from "../redux/resumeSlice";

const Education = () => {
  const dispatch = useDispatch();
  const education = useSelector((state) => state.resume.education);

  const [courseName, setCourseName] = useState("");
  const [completionYear, setCompletionYear] = useState("");
  const [college, setCollege] = useState("");
  const [percentage, setPercentage] = useState("");

  const handleAdd = () => {
    dispatch(addEducation({ courseName, completionYear, college, percentage }));
    setCourseName("");
    setCompletionYear("");
    setCollege("");
    setPercentage("");
  };

  return (
    <div>
      <h2>Education</h2>
      <input
        name="courseName"
        value={courseName}
        onChange={(e) => setCourseName(e.target.value)}
        placeholder="Course Name"
      />
      <input
        name="completionYear"
        value={completionYear}
        onChange={(e) => setCompletionYear(e.target.value)}
        placeholder="Completion Year"
      />
      <input
        name="college"
        value={college}
        onChange={(e) => setCollege(e.target.value)}
        placeholder="College Name"
      />
      <input
        name="percentage"
        value={percentage}
        onChange={(e) => setPercentage(e.target.value)}
        placeholder="Percentage"
      />
      <button id="add_education" onClick={handleAdd}>
        Add Education
      </button>

      <ul>
        {education.map((edu, i) => (
          <li key={i}>
            {edu.courseName} - {edu.college} ({edu.completionYear}){" "}
            {edu.percentage}%
            <button id="delete" onClick={() => dispatch(deleteEducation(i))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Education;
