import LoginHomepage from "./LoginHomepage";
import { useState } from "react";
import { User } from "firebase/auth";

export default function Views(): JSX.Element {
  const [signedInUserDetails, setSignedInUserDetails] = useState<
    User | undefined
  >();
  return (
    <>
      {signedInUserDetails === undefined ? (
        <LoginHomepage setSignedInUserDetails={setSignedInUserDetails} />
      ) : (
        <h1>signed-in user: {signedInUserDetails.displayName}</h1>
      )}
    </>
  );
}
