import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSocial } from "../redux/resumeSlice";

const SocialMedia = () => {
  const dispatch = useDispatch();
  const social = useSelector((state) => state.resume.social);

  const [link, setLink] = useState("");

  const handleAdd = () => {
    if (link.trim() === "") return;
    dispatch(addSocial(link));
    setLink("");
  };

  return (
    <div>
      <h2>Social Media</h2>
      <input
        name="Social"
        value={link}
        onChange={(e) => setLink(e.target.value)}
        placeholder="Social Media URL"
      />
      <button id="add_social" onClick={handleAdd}>
        Add Social
      </button>

      <ul>
        {social.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
    </div>
  );
};

export default SocialMedia;
