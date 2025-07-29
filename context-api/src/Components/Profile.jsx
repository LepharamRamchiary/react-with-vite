import React, { useContext } from "react";
import UserContext from "../context/UserContext.js";

function Profile() {
  const { user } = useContext(UserContext);
  if (!user) {
    return <h2>Please login to see your profile</h2>;
  }

  return (
    <div>
      Welcom {user.username}!<p>Your password is: {user.password}</p>
    </div>
  );
}

export default Profile;
