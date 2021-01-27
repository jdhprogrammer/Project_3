// ------- React Store Provider, Hooks, and Router ------- //
import {StoreProvider} from "./utils/GlobalState";
import React, {useState, useEffect} from "react";
import {Router, Route, Switch, Link} from "react-router-dom";

// ------- User Reg with Redux ------- //
import {useDispatch, useSelector} from "react-redux";
import {logout} from "./actions/auth";
import {clearMessage} from "./actions/message";
import {history} from "./helpers/history";
// --------- User Registration Components ------ //
import Login from "./components/UserReg/Login";
import Register from "./components/UserReg/Register";
import Home from "./pages/Home";
import Profile from "./components/UserReg/Profile";
import BoardUser from "./components/UserReg/UsersPage";
import BoardModerator from "./components/UserReg/BoardModerator";
import BoardAdmin from "./components/UserReg/BoardAdmin";
// ----- React-Bootstrap Components ----//
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip"
import Footer from "./components/Footer/Footer"
// ------- CSS --------------------//
import "./App.css";
// ------- Images --------------- //
import ta4m_icon from "./pages/Landing/img/theApp4me/apple-touch-icon.png"


// -------- Main APP Component ----------- //
// -------- User Reg Level Check, CurrentUser, Router ----------- //
const App = () => {
    const [showModeratorBoard, setShowModeratorBoard] = useState(false);
    const [showAdminBoard, setShowAdminBoard] = useState(false);

    const {user: currentUser} = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        history.listen((location) => {
            dispatch(clearMessage()); // clear message when changing location
        });
    }, [dispatch]);

    useEffect(() => {
        if (currentUser) {
            setShowModeratorBoard(currentUser.roles.includes("ROLE_MODERATOR"));
            setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
        }
    }, [currentUser]);

    const logOut = () => {
        dispatch(logout());
    };

    return (
        <StoreProvider>
            <Router history={history}>

                <Navbar style={{"padding": "10px", "height": "100"}} bg="dark" expand="sm" variant="dark">
                    <img src={ta4m_icon} className="shadow-sm" style={{"width": "50px", "border-radius": "10px", "margin-left": "20px"}} />
                    <Navbar.Brand className="mr-auto p-0">
                        <Link to={"/"} className="navbar-brand m-0 p-0 pl-3">
                            theApp4me
                            </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            {showModeratorBoard && (
                                <Nav.Link>
                                    <Link to={"/mod"} className="nav-link">Moderator Board</Link>
                                </Nav.Link>
                            )}
                            {showAdminBoard && (
                                <Nav.Link>
                                    <Link to={"/admin"} className="nav-link">Admin Board</Link>
                                </Nav.Link>
                            )}
                            {currentUser && (
                                <Nav.Link>
                                    <Link to={"/user"} className="nav-link">Welcome</Link>
                                </Nav.Link>
                            )}
                        </Nav>
                        {currentUser ? (
                            <Nav className="ml-auto">
                                <Nav.Link>
                                    <OverlayTrigger
                                        key={"bottom"}
                                        placement={"bottom"}
                                        overlay={
                                            <Tooltip classname="p-2" id={`tooltip-bottom`}>
                                                Account Information
                                            </Tooltip>
                                        }>
                                        <Link to={"/profile"} className="nav-link">{currentUser.username}</Link>
                                    </OverlayTrigger>
                                </Nav.Link>
                                <Nav.Link>
                                    <Link to={"/login"} onClick={logOut} className="nav-link">LogOut</Link>
                                </Nav.Link>
                            </Nav>
                        ) : (
                                <Nav className="ml-auto">
                                    <Nav.Link>
                                        <Link to={"/login"} className="nav-link">Login</Link>
                                    </Nav.Link>
                                    <Nav.Link>
                                        <Link to={"/register"} className="nav-link">Sign Up</Link>
                                    </Nav.Link>
                                </Nav>
                            )}
                    </Navbar.Collapse>
                </Navbar>
                {/* <div className="container mt-0"> */}
                <Switch>
                    <Route exact path={["/", "/home"]} component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/profile" component={Profile} />
                    <Route path="/user" component={BoardUser} />
                    <Route path="/mod" component={BoardModerator} />
                    <Route path="/admin" component={BoardAdmin} />
                </Switch>
                {/* </div> */}

                <Footer />
            </Router>
        </StoreProvider>
    );
};

export default App;