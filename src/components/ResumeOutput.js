import React from "react";
import { useSelector } from "react-redux";

const ResumeOutput = () => {
  const { profile, education, skills, projects, social } = useSelector(
    (state) => state.resume
  );

  return (
    <div>
      <h1>Resume Output</h1>
      <p>
        Name: {profile.fname} {profile.lname}
      </p>
      <p>Phone: {profile.phone}</p>
      <p>Address: {profile.address}</p>
      <p>
        Image: <img src={profile.url} alt="Profile" />
      </p>
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
};

export default ResumeOutput;
