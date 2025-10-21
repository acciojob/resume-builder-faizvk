import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveProfile } from "../redux/resumeSlice";

const Profile = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.resume.profile);

  const [fname, setFname] = useState(profile.fname || "");
  const [lname, setLname] = useState(profile.lname || "");
  const [phone, setPhone] = useState(profile.phone || "");
  const [address, setAddress] = useState(profile.address || "");
  const [url, setUrl] = useState(profile.url || "");

  const handleSave = () => {
    dispatch(saveProfile({ fname, lname, phone, address, url }));
  };

  return (
    <div>
      <h2>Profile</h2>
      <input
        name="fname"
        value={fname}
        onChange={(e) => setFname(e.target.value)}
        placeholder="First Name"
      />
      <input
        name="lname"
        value={lname}
        onChange={(e) => setLname(e.target.value)}
        placeholder="Last Name"
      />
      <input
        name="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Phone"
      />
      <input
        name="address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Address"
      />
      <input
        name="url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Image URL"
      />
    </div>
  );
};

export default Profile;
