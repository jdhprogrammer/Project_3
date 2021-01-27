import React from "react";
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
import budget from "../pages/images/app_images/budget.jpg";
import memories from "../pages/images/app_images/memories.jpg";
import food from "../pages/images/app_images/food.jpg";
import books from "../pages/images/vector_images/books.jpg";
import todos from "../pages/images/app_images/todos.jpg";

import todos1 from "../pages/images/vector_images/todos1.jpg";
import todos2 from "../pages/images/vector_images/todos2.jpg";
import budget1 from "../pages/images/vector_images/budget1.jpg";
import budget2 from "../pages/images/vector_images/budget2.jpg";
import memories1 from "../pages/images/vector_images/memories1-1.jpg";
import memories2 from "../pages/images/vector_images/memories2.jpg";
import food1 from "../pages/images/vector_images/food1.jpg";
import relaxing1 from "../pages/images/vector_images/relaxing1.jpg";
import relaxing2 from "../pages/images/vector_images/relaxing2.jpg";
import yoga1 from "../pages/images/vector_images/yoga1.jpg";
import fitness1 from "../pages/images/vector_images/fitness1.jpg";

import shards from "../pages/Landing/img/shards.jpg"

import './Dashboard.css'

const Dash = props => {
    const {user: currentUser} = useSelector((state) => state.auth);

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

                    <Jumbotron className="mt-3" style={{"color": "white", "background": `url(${shards}) no-repeat center center`}} >
                        <h1><strong>{currentUser.username}</strong></h1> Dashboard Page
                    </Jumbotron>


                    <CardColumns >
                        <Card className="mt-3" bg="danger" text="white">
                            <Card.Img variant="top" src={books} />
                            <Card.Body>
                                <Card.Title>Search and Save Books</Card.Title>
                            </Card.Body>
                        </Card>
                        <Card className="mt-3 p-3" bg="info" text="white">
                            <Card.Img variant="top" src={planner} />
                            <Card.Body>
                                <Card.Title>Plan out your Day</Card.Title>
                            </Card.Body>
                        </Card>

                        <Card className="mt-3" bg="dark" text="white">
                            <Card.Img variant="top" src={memories} />
                            <Card.Body>
                                <Card.Title>Fitness Tracking</Card.Title>
                            </Card.Body>
                            <Card.Footer text="white">
                                <small >Last workout 3 Months ago</small>
                            </Card.Footer>
                        </Card>
                        <Card className="mt-3 p-3" bg="warning" text="dark" >
                            <Card.Img variant="top" src={food} />
                            <Card.Body>
                                <Card.Title>Restaurants & Recipes</Card.Title>
                            </Card.Body>
                        </Card>
                        <Card className="mt-3 p-3 text-center" bg="primary" text="white" >
                            <Card.Img variant="top" src={todos2} />
                            <Card.Body>
                                <Card.Title>Keep a Todo List</Card.Title>
                            </Card.Body>
                        </Card>

                        <Card className="mt-3" bg="light" text="black">
                            <Card.Img variant="top" src={budget2} />
                            <Card.Body>
                                <Card.Title>Track Budget</Card.Title>
                            </Card.Body>
                            <Card.Footer text="white">
                                <small >You are still not broke...</small>
                            </Card.Footer>
                        </Card>
                        <Card className="mt-3" bg="primary" text="white">
                            <Card.Img variant="top" src={weather} />
                            <Card.Body>
                                <Card.Title>Check the Weather</Card.Title>
                            </Card.Body>
                        </Card>
                        <Card className="mt-3" bg="danger" text="white">
                            <Card.Img variant="top" src={photos} />
                            <Card.Body>
                                <Card.Title>Photo Gallery</Card.Title>
                            </Card.Body>
                        </Card>
                        <Card className="mt-3" bg="success" text="white">
                            <Card.Img variant="top" src={memories2} />
                            <Card.Body>
                                <Card.Title>Journal Favorite Memories</Card.Title>                            </Card.Body>
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