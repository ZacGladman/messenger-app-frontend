import { Route, Routes } from "react-router-dom";
import SignUp from "./login/Sign-Up";
import Login from "./login/Login";

export default function Views (): JSX.Element {
    return (
        <Routes>
            <Route path='/' element={<Login />}/>
            <Route path='/register' element={< SignUp />}/>
        </Routes>
    )
}