import React from "react";
import Navigation from "./Navigation";

function Profile() {
  return (
    <div>
      <h2>RESUME GENERATOR</h2>
      <h3>Add your profile details</h3>
      <input type="text" name="fname" placeholder="First Name" />
      <input type="text" name="lname" placeholder="Last Name" />
      <input type="text" name="phone" placeholder="Phone Number" />
      <input type="text" name="address" placeholder="Address" />
      <input type="text" name="url" placeholder="Profile Image URL" />
      {/* Navigation buttons */}
      <Navigation showBack={false} /> {/* First step, no back */}
    </div>
  );
}

export default Profile;
