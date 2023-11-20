import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { displayName, userName, email } = useSelector((state) => state.user);

  return (
    <div className="section">
      <div>{displayName}</div>
      <div>{userName}</div>
      <div>{email}</div>
    </div>
  );
};

export default Profile;
