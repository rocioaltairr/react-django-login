import React from "react";
import { useSelector } from "react-redux";
import { setLogout } from "../store/userSlice";
import { useDispatch} from "react-redux";

const Login = () => {
    const state = useSelector(state => state.user);
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(setLogout());
    };
    return (
        <div>
            <p>Name:{state.profile.name}</p>
            <p>Age:{state.profile.age}</p>
            <p>Email:{state.profile.email}</p>
            <button onClick={handleLogout}>LogOut</button>
        </div>
    )
}

export default Login;