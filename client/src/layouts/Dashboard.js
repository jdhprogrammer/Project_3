import React from "react";
import {Link} from "react-router-dom";
import {Redirect} from 'react-router-dom';
import {useSelector} from "react-redux";

import CardColumns from "react-bootstrap/CardColumns";
import Card from "react-bootstrap/Card";
import Jumbotron from "react-bootstrap/Jumbotron";

import {Container, Row, Col, Form, Button} from "react-bootstrap";
import {withRouter} from "react-router";
import Sidebar from "../components/Sidebar/Sidebar";

import planner from "../pages/images/app_images/planner.jpg";
import fitness from "../pages/images/app_images/fitness.jpg";
import weather from "../pages/images/app_images/weather.jpg";
import photos from "../pages/images/app_images/photo.jpg";
// import budget from "../pages/images/app_images/budget.jpg";
// import memories from "../pages/images/app_images/memories.jpg";
import food from "../pages/images/app_images/food.jpg";
import books from "../pages/images/vector_images/book.jpg";
// import todos from "../pages/images/app_images/todos.jpg";

// import todos1 from "../pages/images/vector_images/todos1.jpg";
import todos2 from "../pages/images/vector_images/todos2.jpg";
// import budget1 from "../pages/images/vector_images/budget1.jpg";
import budget2 from "../pages/images/vector_images/budget2.jpg";
import memories1 from "../pages/images/vector_images/memories1-1.jpg";
// import memories2 from "../pages/images/vector_images/memories2.jpg";
// import food1 from "../pages/images/vector_images/food1.jpg";
// import relaxing1 from "../pages/images/vector_images/relaxing1.jpg";
// import relaxing2 from "../pages/images/vector_images/relaxing2.jpg";
// import yoga1 from "../pages/images/vector_images/yoga1.jpg";
// import fitness1 from "../pages/images/vector_images/fitness1.jpg";

import shards from "../pages/Landing/img/shards.jpg"
// import earth from "../pages/Landing/img/earth.jpg"
import purpleMountain from "../pages/Landing/img/purpleMountains.jpg"
import abstract from "../pages/Landing/img/abstractPatterns.jpg"
import amebas from "../pages/Landing/img/amebas.jpg"
// import crystal from "../pages/Landing/img/crystalWatersky.jpg"
import blackcolor from "../pages/Landing/img/blackandcolor.jpg"

import './Dashboard.css'

const Dash = props => {
    const {user: currentUser} = useSelector((state) => state.auth);

    const dashBG = [shards, purpleMountain, abstract, amebas, blackcolor];
    const dashBg = dashBG[Math.floor(Math.random() * 5)];

    if (!currentUser) {
        return <Redirect to="/login" />;
    }

    return (
        <><Container fluid>
            <Row>
                <Col className="text-center" xs={0} sm={2} id="sidebar-wrapper">
                    <Sidebar />
                </Col>
                <Col xs={12} sm={10} id="page-content-wrapper">

                    <Jumbotron className="mt-3 mb-3 shadow" style={{"color": "white", "background": `url(${dashBg}) no-repeat center center`}} >
                        <h1><strong><span>{currentUser.username}</span></strong></h1> Dashboard Page
                    </Jumbotron>


                    <CardColumns className="p-0" >
                        <Card className="mt-3 p-3" border="danger" text="dark">
                            <Card.Img className="mt-4 mb-4" variant="top" src={books} />
                            <Card.Body>
                                <Card.Title><Link to={"/books"}>Search & Save Books</Link></Card.Title>
                            </Card.Body>
                        </Card>
                        <Card className="mt-3 p-3" border="info" text="dark">
                            <Card.Img variant="top" src={planner} />
                            <Card.Body>
                                <Card.Title>Plan out your Day</Card.Title>
                            </Card.Body>
                        </Card>

                        <Card className="mt-3" border="dark" text="dark">
                            <Card.Img variant="top" src={fitness} />
                            <Card.Body>
                                <Card.Title>Fitness Tracking</Card.Title>
                            </Card.Body>
                        </Card>
                        <Card className="mt-3 p-3" border="warning" text="dark" >
                            <Card.Img variant="top" src={food} />
                            <Card.Body>
                                <Card.Title>Restaurants & Recipes</Card.Title>
                            </Card.Body>
                        </Card>
                        <Card className="mt-3 p-3 text-center" border="primary" text="dark" >
                            <Card.Img variant="top" src={todos2} />
                            <Card.Body>
                                <Card.Title>Keep a Todo List</Card.Title>
                            </Card.Body>
                        </Card>

                        <Card className="mt-3" border="info" text="black">
                            <Card.Img variant="top" src={budget2} />
                            <Card.Body>
                                <Card.Title>Track Budget</Card.Title>
                            </Card.Body>
                        </Card>
                        <Card className="mt-3" border="primary" text="dark">
                            <Card.Img variant="top" src={weather} />
                            <Card.Body>
                                <Card.Title>Check the Weather</Card.Title>
                            </Card.Body>
                        </Card>
                        <Card className="mt-3" border="danger" text="dark">
                            <Card.Img variant="top" src={photos} />
                            <Card.Body>
                                <Card.Title>Photo Gallery</Card.Title>
                            </Card.Body>
                        </Card>
                        <Card className="mt-3" border="success" text="dark">
                            <Card.Img variant="top" src={memories1} />
                            <Card.Body>
                                <Card.Title>Memories Blog</Card.Title>                            </Card.Body>
                        </Card>
                    </CardColumns>
                </Col>
            </Row>

        </Container>

        </>
    );
};

const Dashboard = withRouter(Dash);
export default Dashboard