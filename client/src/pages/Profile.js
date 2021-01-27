import React from "react";
import {Redirect} from 'react-router-dom';
import {useSelector} from "react-redux";

const Profile = () => {
    const {user: currentUser} = useSelector((state) => state.auth);

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
            <p>
                <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
                {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
            </p>
            <p>
                <strong>Id:</strong> {currentUser.id}
            </p>
            <p>
                <strong>Email:</strong> {currentUser.email}
            </p>
            <strong>Authorities:</strong>
            <ul>
                {currentUser.roles &&
                    currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
            </ul>
        </div>
    );
};

export default Profile;