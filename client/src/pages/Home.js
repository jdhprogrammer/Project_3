import React, {useState, useEffect} from "react";
import Link from "react-router-dom/Link"

import UserService from "../services/user.service";
// import "./Landing/css/bootstrap.css";
import "./Landing/css/landing-page.css";
// import "./Landing/css/pe-icon-7-stroke.css";

import bg3 from "./Landing/img/template/bg3.jpg";
import app4mePhone from "./Landing/img/app4me_cutout.png";
import dane from "./Landing/img/faces/dane.jpeg";


import bgTokyo from "./Landing/img/tokyo_sky.jpg";
import ocean from "./Landing/img/oceans.jpg";
import slp from "./Landing/img/slp.jpg";
import paris from "./Landing/img/paris.jpg";
import sao from "./Landing/img/sao.jpg";
import tkShops from "./Landing/img/Tokyo_Shops.jpg";

import adobe from "./Landing/img/logos/adobe.png";
import airbnb from "./Landing/img/logos/airbnb.png";
import ebay from "./Landing/img/logos/ebay.png";
import evernote from "./Landing/img/logos/evernote.png";
import zappos from "./Landing/img/logos/zappos.png";
import zendesk from "./Landing/img/logos/zendesk.png";
import mac from "./Landing/img/template/mac.png";
import ta4m_icon from "./Landing/img/theApp4me/apple-touch-icon.png";

const Home = () => {
    const [content, setContent] = useState("");

    const landingBG = [bg3, bgTokyo, ocean, slp, paris, sao, tkShops];
    const landingBg = landingBG[Math.floor(Math.random() * 6)];

    useEffect(() => {

        UserService.getPublicContent().then(
            (response) => {
                setContent(response.data);
            },
            (error) => {
                const _content =
                    (error.response && error.response.data) ||
                    error.message ||
                    error.toString();

                setContent(_content);
            }
        );

    }, []);

    return (
        <body className="landing-page landing-page1">
            {content ? (<>
                <div className="wrapper ">
                    <div className="parallax filter-gradient blue" data-color="blue">
                        <div className="parallax-background">
                            <img className="parallax-background-image" src={landingBg} />
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-5 hidden-xs">
                                    <div className="parallax-image">
                                        <img className="phone" src={app4mePhone} style={{"margin-top": "20px"}} />
                                    </div>
                                </div>
                                <div className="col-md-6 col-md-offset-1">
                                    <div id="descriptionHome" className="description">
                                        <h2><strong>theApp4me</strong></h2>
                                        <br />
                                        <h5><strong>theApp4me</strong> is a web and mobile application for Me and for You. It is primarily focused on your personal well being. It is about having 0ne place you can go during your day that is just for you. <strong>theApp4me</strong> keeps your life together and running the best it can!</h5>
                                    </div>
                                    <div className="buttons">

                                        <Link to={"/register"} className="btn btn-outline btn-light mr-3" style={{"text-decoration": "none"}}>SignUp Now!</Link>

                                        <button className="btn btn-simple btn-neutral">
                                            <i className="fa fa-apple"></i>
                                        </button>
                                        <button className="btn btn-simple btn-neutral">
                                            <i className="fa fa-android"></i>
                                        </button>
                                        <button className="btn btn-simple btn-neutral">
                                            <i className="fa fa-windows"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section section-gray section-clients">
                        <div className="container text-center">
                            <h4 className="header-text">What is it?<br /> <br />& Who's using it?</h4>
                            <p>
                                Everyone's using <strong>theApp4me</strong> and loving it. <br />They can find all the essentials of thier life in one place and keep track of them.<br />Everything from their Day Planner to Fitness Tracker... <br />from their Budget Tool to Reading List...<br /> a place to Save Favorite Photos and write Posts about favorite Memories.
                            </p>
                            <p>
                                We have partnered with many Large Corporations and Small Businesses working to get our app out there, seen, and used to its fullest. Company HR departments are providing it to their employees. Encouraging them to take advantage of its many features and take time each day for themselves and focus less on Social Media and Mindless Games. <strong>theApp4me</strong> has been getting Rave Reviews from people all over the globe.
                            </p>
                            <div className="logos">
                                <ul className="list-unstyled">
                                    <li ><img src={adobe} /></li>
                                    <li ><img src={zendesk} /></li>
                                    <li ><img src={ebay} /></li>
                                    <li ><img src={evernote} /></li>
                                    <li ><img src={airbnb} /></li>
                                    <li ><img src={zappos} /></li>
                                </ul>
                            </div>
                        </div>

                    </div>

                </div>
                <div className="section section-presentation">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="description">
                                    <h4 className="header-text">It's beautiful</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                    <p>Lorem ipsum dolor amet mustache knausgaard +1, blue bottle waistcoat tbh semiotics artisan synth stumptown gastropub cornhole celiac swag. Brunch raclette vexillologist post-ironic glossier ennui XOXO mlkshk godard pour-over blog tumblr humblebrag. Blue bottle put a bird on it twee prism biodiesel brooklyn. Blue bottle ennui tbh succulents.
                            
                                       
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-5 col-md-offset-1 hidden-xs">
                                <img src={mac} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section section-features">
                    <div className="container">
                        <h4 className="header-text text-center">Features</h4>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card card-blue">
                                    <div className="icon">
                                        <i class="fas fa-users"></i>
                                    </div>
                                    <div className="text">
                                        <h4>User Personalized Data</h4>
                                        <p>Yolo ipsum dolor sit amet, consectetur adipiscing elit. Ut ac suscipit leo. Carpe diem vulputate est nec commodo rutrum. Pellentesque mattis convallis nisi eu and I ain’t stoppin until the swear jar’s full.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card card-blue">
                                    <div className="icon">
                                        <i class="fas fa-database"></i>
                                    </div>
                                    <h4>High-End Database</h4>
                                    <p>Flatland! Hypatia. Galaxies Orion's sword globular star cluster? Light years quasar as a patch of light gathered by gravity Vangelis radio telescope. Stirred by starlight vanquish the impossible.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card card-blue">
                                    <div className="icon">
                                        <i class="fas fa-server"></i>
                                    </div>
                                    <h4>Fast and Agile</h4>
                                    <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section section-testimonial">
                    <div className="container">
                        <h4 className="header-text text-center">What people think</h4>
                        <div id="carousel-example-generic" className="carousel fade" data-ride="carousel">
                            <div className="carousel-inner" role="listbox">
                                <div className="item active">
                                    <div className="mask">
                                        <img src={dane} />
                                    </div>
                                    <div className="carousel-testimonial-caption">
                                        <p>Dane Edwards, Instructor</p>
                                        <h3>"This app truly is Awesome! And it Looks Great too!<br />
                                        Really Well Done."</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section section-no-padding">
                    <div className="parallax filter-gradient blue" data-color="blue">
                        <div className="parallax-background">
                            <img className="parallax-background-image" src={bg3} />
                        </div>
                    </div>
                </div>

            </>
            ) : (
                    <div>loading...</div>
                )}
        </body >
    );
};
export default Home;

{/* <figure>
<img src={ta4m_icon} className="shadow" style={{"width": "38px", "position": "relative", "top": "343px", "left": "265px", "border-radius": "10px"}} />
<figcaption style={{"fontSize": "10px", "color": "white", "position": "relative", "top": "343px", "left": "265px", "border-radius": "10px"}}>theApp4me</figcaption>
</figure> */}
