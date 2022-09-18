import React from "react";
import Login from "./login";
import NotLogin from "./notLogin";
import {useSelector} from "react-redux";

const Profile = () => {
    const state = useSelector((state) => state.user);
    return (
        <div>
          {state.profile.login ? <Login/> : <NotLogin/>}
        </div>
    );
};

export default Profile;