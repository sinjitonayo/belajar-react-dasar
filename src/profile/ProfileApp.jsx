import { useState } from "react";
import Profile from "./Profile";
import ProfileAddress from "./ProfileAddress";
import { ProfileContext } from "./ProfileContext";
import ProfileForm from "./ProfileForm";

export default function ProfileApp() {
  const [name, setName] = useState("John Doe");
  return (
    <>
      <ProfileContext.Provider value={name}>
        <Profile />
        <ProfileAddress />
        <ProfileForm name={name} setName={setName} />
      </ProfileContext.Provider>
    </>
  );
}
