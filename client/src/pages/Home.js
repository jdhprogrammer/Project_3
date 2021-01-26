import React, {useState, useEffect} from "react";
import Link from "react-router-dom/Link"

import UserService from "../services/user.service";
// import "./Landing/css/bootstrap.css";
import "./Landing/css/landing-page.css";
// import "./Landing/css/pe-icon-7-stroke.css";

import bg3 from "./Landing/img/template/bg3.jpg"
import iphone3 from "./Landing/img/template/iphone3.png"
import bgTokyo from "./Landing/img/tokyo_sky.jpg";
import ocean from "./Landing/img/oceans.jpg";
import slp from "./Landing/img/slp.jpg";
import paris from "./Landing/img/paris.jpg";
import sao from "./Landing/img/sao.jpg";
import tkShops from "./Landing/img/Tokyo_Shops.jpg"

import adobe from "./Landing/img/logos/adobe.png"
import airbnb from "./Landing/img/logos/airbnb.png"
import ebay from "./Landing/img/logos/ebay.png"
import evernote from "./Landing/img/logos/evernote.png"
import zappos from "./Landing/img/logos/zappos.png"
import zendesk from "./Landing/img/logos/zendesk.png"
import mac from "./Landing/img/template/mac.png"
import ta4m_icon from "./Landing/img/theApp4me/apple-touch-icon.png"

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
                                        <img className="phone" src={iphone3} style={{"margin-top": "20px"}} />
                                        <figure>
                                            <img src={ta4m_icon} className="shadow" style={{"width": "38px", "position": "relative", "top": "343px", "left": "265px", "border-radius": "10px"}} />
                                            <figcaption style={{"fontSize": "10px", "color": "white", "position": "relative", "top": "343px", "left": "265px", "border-radius": "10px"}}>theApp4me</figcaption>

                                        </figure>
                                    </div>
                                </div>
                                <div className="col-md-6 col-md-offset-1">
                                    <div className="description">
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
                                    <p>And your app is also probably social, awesome, easy-to-use and vital to users. This is the place to enlist all the good things that your app has to share. Focus on the benefits that the uers will receive. Try to combine imaginery with text and show meaningful printscreens from your app, that will make it clear what exactly the basic functions are. </p>
                                    <p>Try to make it very clear for the people browsing the page that this product will enrich their life and will make a nice addition to the homescreen.
                            <p>
                                        </p>
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-5 col-md-offset-1 hidden-xs">
                                <img src={mac} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section section-demo">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div id="description-carousel" className="carousel fade" data-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="item">
                                            <img src="assets/img/template/examples/home_33.jpg" alt="" />
                                        </div>
                                        <div className="item active">
                                            <img src="assets/img/template/examples/home_22.jpg" alt="" />
                                        </div>
                                        <div className="item">
                                            <img src="assets/img/template/examples/home_11.jpg" alt="" />
                                        </div>
                                    </div>
                                    <ol className="carousel-indicators carousel-indicators-blue">
                                        <li data-target="#description-carousel" data-slide-to="0" className=""></li>
                                        <li data-target="#description-carousel" data-slide-to="1" className="active"></li>
                                        <li data-target="#description-carousel" data-slide-to="2" className=""></li>
                                    </ol>
                                </div>
                            </div>
                            <div className="col-md-5 col-md-offset-1">
                                <h4 className="header-text">Easy to integrate</h4>
                                <p>
                                    With all the apps that users love! Make it easy for users to share, like, post and tweet their favourite things from the app. Be sure to let users know they continue to remain connected while using your app!
                        </p>
                                <a href="http://www.creative-tim.com/product/awesome-landing-page" id="Demo3" className="btn btn-fill btn-info" data-button="info">Get Free Demo</a>
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
                                        <i className="pe-7s-note2"></i>
                                    </div>
                                    <div className="text">
                                        <h4>Online Customers Management</h4>
                                        <p>All appointments sync with your Google calendar so your availability is always up to date. See your schedule at a glance from any device.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card card-blue">
                                    <div className="icon">
                                        <i className="pe-7s-bell"></i>
                                    </div>
                                    <h4>Smart Notifications on hands</h4>
                                    <p>Automatic text and email reminders make sure customers always remember their upcoming appointments.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card card-blue">
                                    <div className="icon">
                                        <i className="pe-7s-graph1"></i>
                                    </div>
                                    <h4>Know your business better now</h4>
                                    <p>Take payments and run your business on the go, in your store and then see how it all adds up with analytics.</p>
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
                                <div className="item">
                                    <div className="mask">
                                        <img src="assets/img/faces/face-4.jpg" />
                                    </div>
                                    <div className="carousel-testimonial-caption">
                                        <p>Jay Z, Producer</p>
                                        <h3>"I absolutely love your app! It's truly amazing and looks awesome!"</h3>
                                    </div>
                                </div>
                                <div className="item active">
                                    <div className="mask">
                                        <img src="assets/img/faces/face-3.jpg" />
                                    </div>
                                    <div className="carousel-testimonial-caption">
                                        <p>Drake, Artist</p>
                                        <h3>"This is one of the most awesome apps I've ever seen! Wish you luck Creative Tim!"</h3>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="mask">
                                        <img src="assets/img/faces/face-2.jpg" />
                                    </div>
                                    <div className="carousel-testimonial-caption">
                                        <p>Rick Ross, Musician</p>
                                        <h3>"Loving this! Just picked it up the other day. Thank you for the work you put into this."</h3>
                                    </div>
                                </div>
                            </div>
                            <ol className="carousel-indicators carousel-indicators-blue">
                                <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                                <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                                <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div className="section section-no-padding">
                    <div className="parallax filter-gradient blue" data-color="blue">
                        <div className="parallax-background">
                            <img className="parallax-background-image" src="assets/img/template/bg3.jpg" />
                        </div>
                        <div className="info">
                            <h1>Download this landing page for free!</h1>
                            <p>Beautiful multipurpose bootstrap landing page.</p>
                            <a href="http://www.creative-tim.com/product/awesome-landing-page" className="btn btn-neutral btn-lg btn-fill">DOWNLOAD</a>
                        </div>
                    </div>
                </div>
                <footer className="footer">
                    <div className="container">
                        <nav className="pull-left">
                            <ul>
                                <li>
                                    <a href="#">
                                        Home
                            </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Company
                            </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Portfolio
                            </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Blog
                            </a>
                                </li>
                            </ul>
                        </nav>
                        <div className="social-area pull-right">
                            <a className="btn btn-social btn-facebook btn-simple">
                                <i className="fa fa-facebook-square"></i>
                            </a>
                            <a className="btn btn-social btn-twitter btn-simple">
                                <i className="fa fa-twitter"></i>
                            </a>
                            <a className="btn btn-social btn-pinterest btn-simple">
                                <i className="fa fa-pinterest"></i>
                            </a>
                        </div>
                        <div className="copyright">
                            &copy; 2016 <a href="http://www.creative-tim.com">Creative Tim</a>, made with love
                </div>
                    </div>
                </footer>
            </>
            ) : (
                    <div>loading...</div>
                )}
        </body >
    );
};
export default Home;