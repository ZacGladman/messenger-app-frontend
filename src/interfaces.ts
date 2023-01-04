import { User } from "firebase/auth";

export interface ILoginHomepageProps {
  setSignedInUserDetails: React.Dispatch<
    React.SetStateAction<User | undefined>
  >;
}
