import React, { useState, useEffect } from "react";

const Profile = ({ onValidChange }) => {
  const [profile, setProfile] = useState({
    fname: "",
    lname: "",
    phone: "",
    address: "",
    url: "",
  });

  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    // Validate fields: all required
    const valid =
      profile.fname.trim() &&
      profile.lname.trim() &&
      profile.phone.trim() &&
      profile.address.trim() &&
      profile.url.trim();
    setIsValid(valid);
    onValidChange(valid); // pass validity to App for enabling Next button
  }, [profile, onValidChange]);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Add your profile details</h2>
      <input
        name="fname"
        placeholder="First Name"
        value={profile.fname}
        onChange={handleChange}
      />
      <input
        name="lname"
        placeholder="Last Name"
        value={profile.lname}
        onChange={handleChange}
      />
      <input
        name="phone"
        placeholder="Phone"
        value={profile.phone}
        onChange={handleChange}
      />
      <input
        name="address"
        placeholder="Address"
        value={profile.address}
        onChange={handleChange}
      />
      <input
        name="url"
        placeholder="Profile Image URL"
        value={profile.url}
        onChange={handleChange}
      />
    </div>
  );
};

export default Profile;
