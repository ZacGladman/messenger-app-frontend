import { auth } from "../configureFirebase";
import { googleAuthProvider } from "../configureFirebase";
import { signInWithPopup } from "firebase/auth";
import { ILoginHomepageProps } from "../interfaces";

export default function LoginHomepage({
  setSignedInUserDetails,
}: ILoginHomepageProps): JSX.Element {
  async function handleSignInClicked() {
    const userCredentials = await signInWithPopup(auth, googleAuthProvider);
    const signedInUser = userCredentials.user;
    setSignedInUserDetails(signedInUser);
    console.log(signedInUser);
  }

  return (
    <div className="loginHomepage">
      <p className="pageTitle">ZacChat</p>
      <button onClick={handleSignInClicked} className="loginButton">
        log in with google
      </button>
    </div>
  );
}
