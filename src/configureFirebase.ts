import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration.
//
// Usually, you need to fastidiously guard API keys (for example, by
// setting the keys as environment variables);
// however, API keys for Firebase services are ok to include in code or checked-in config files.
const firebaseConfig = {
  apiKey: "AIzaSyDAa677Uz-uaCcIa70aS4sawHU0Cq4N2gI",
  authDomain: "zac-messenger-app.firebaseapp.com",
  projectId: "zac-messenger-app",
  storageBucket: "zac-messenger-app.appspot.com",
  messagingSenderId: "1056430947442",
  appId: "1:1056430947442:web:0531273816cdb1567456eb",
};
// Initialize Firebase as a whole
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

//Other auth providers include github, twitter, apple.
//These must be enabled in your firebase console.
export const googleAuthProvider = new GoogleAuthProvider();
