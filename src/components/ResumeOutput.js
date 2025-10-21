import React from "react";
import { useSelector } from "react-redux";

function ResumeOutput() {
  const { profile, education, skills, projects, social } = useSelector(
    (state) => state.resume
  );

  return (
    <div>
      <h2>Final Resume Output</h2>
      <p>
        Name: {profile.fname} {profile.lname}
      </p>
      <p>Phone: {profile.phone}</p>
      <p>Address: {profile.address}</p>
      <p>Image: {profile.url}</p>
      <h3>Education</h3>
      <ul>
        {education.map((e, i) => (
          <li key={i}>
            {e.courseName} - {e.college}
          </li>
        ))}
      </ul>
      <h3>Skills</h3>
      <ul>
        {skills.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
      <h3>Projects</h3>
      <ul>
        {projects.map((p, i) => (
          <li key={i}>{p.projectName}</li>
        ))}
      </ul>
      <h3>Social Media</h3>
      <ul>
        {social.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
    </div>
  );
}

export default ResumeOutput;
