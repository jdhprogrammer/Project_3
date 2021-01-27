import React, {useEffect} from "react";
import {useStoreContext} from "../../utils/GlobalState";
import {Link} from "react-router-dom";
import {SET_USER} from "../../utils/actions"

import {Redirect} from 'react-router-dom';
import {useSelector} from "react-redux";

const Profile = () => {
    const {user: currentUser} = useSelector((state) => state.auth);
    const [state, dispatch] = useStoreContext();

    useEffect(() => {
        if(state.user){
            return
        }
        dispatch({
            type: SET_USER,
            user: currentUser
        })
    },[])

    if (!currentUser) {
        return <Redirect to="/login" />;
    }
  

    return (
        <div className="container">
            <header className="jumbotron">
                <h2>
                    <strong>
                        Welcome {currentUser.firstName} {currentUser.lastName}. </strong>
                </h2>
                <h4>
                    Representin' the {currentUser.zipCode}!
                </h4>
                <br></br>
                <h3>
                    <strong>{currentUser.username}</strong> Profile Page
            </h3>
            </header>
            <p><strong>Email:</strong> {currentUser.email}</p>
            <strong>Authorities:</strong>
            <ul>
                {currentUser.roles &&
                    currentUser.roles.map((role, index) => <span key={index}>{role}</span>)}
            </ul>
            <br/>
            <h4>...Hi! this is your Profile/Account Information page. <br/>
            In the future you will be able to visit this page to <br/>
            Update/change your Account info, and upload a profile picture, etc.</h4>
            <br/>
            <h6>As you will soon see, theAPP4me is not all about Social Media, Followers, and watching funny videos.<br/>
            if you did want to link other third-party accounts to this one in the future. this would also be the page for that.</h6>
            <br/>
            <h5>Right now... Why don't you head over to the <Link to={"/user"}>Welcome Page</Link></h5>
    
        </div>
    );
};

export default Profile;