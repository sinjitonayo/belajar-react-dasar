import { useContext } from "react";
import { ProfileContext } from "./ProfileContext";

export default function ProfileAddress() {
  const profile = useContext(ProfileContext);
  return (
    <div>
      <h2>Address</h2>
      <p>{profile}</p>
    </div>
  );
}
