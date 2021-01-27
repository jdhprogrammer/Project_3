
import React from "react";
import Nav from "react-bootstrap/Nav";
import {withRouter} from "react-router";
import '../../layouts/Dashboard.css'
import "./Sidebar.css"

const Side = props => {


    return (
        <>
            <Nav className="col-md-12 text-center d-none d-md-block bg-light sidebar">
                <div className="sidebar-sticky"></div>
                <Nav.Item>
                    <Nav.Link className="sideLink" href="/dashboard">Dashboard</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="sideLink" href="/books">Books</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="sideLink" href="/dashboard">Fitness</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="sideLink" href="/dashboard">Budget</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="sideLink" href="/dashboard">Todos</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="sideLink" href="/dashboard">Weather</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="sideLink" href="/dashboard">Food</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="sideLink" href="/planner">Planner</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="sideLink" href="/dashboard">Photos</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="sideLink" href="/dashboard">Memories</Nav.Link>
                </Nav.Item>
            </Nav>
        </>
    );
};
const Sidebar = withRouter(Side);
export default Sidebar