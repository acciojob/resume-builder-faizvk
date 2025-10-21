import React from "react";
import Navigation from "./Navigation";

function SocialMedia() {
  return (
    <div>
      <h3>Add your Social Media Links</h3>
      <input type="text" name="Social" placeholder="Social Link" />
      <button id="add_social">Add Social</button>
      <Navigation showSave={true} /> {/* Last step, show Save */}
    </div>
  );
}

export default SocialMedia;
