import React, {useState, useEffect} from "react";

import UserService from "../services/user.service";
// import "./Landing/css/bootstrap.css";
import "./Landing/css/landing-page.css";
// import "./Landing/css/pe-icon-7-stroke.css";

import bg3 from "./Landing/img/template/bg3.jpg"
import iphone3 from "./Landing/img/template/iphone3.png"

const Home = () => {
    const [content, setContent] = useState("");

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

            <div className="wrapper mt-0">
                <div className="parallax filter-gradient blue" data-color="blue">
                    <div className="parallax-background">
                        <img className="parallax-background-image" src={bg3} />
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 hidden-xs">
                                <div className="parallax-image">
                                    <img className="phone" src={iphone3} style={{"margin-top": "20px"}} />
                                </div>
                            </div>
                            <div className="col-md-6 col-md-offset-1">
                                <div className="description">
                                    <h2>Awesome landing page.</h2>
                                    <br />
                                    <h5>Be amazed by the best looking bootstrap landing page on the web! Your new app deserves an amazing page to show all of its features. Clear visual, light colours and beautifully aligned elements - they all try to make the users aware of your great app features!</h5>
                                </div>
                                <div className="buttons">
                                    <button className="btn btn-fill btn-neutral">
                                        <i className="fa fa-apple"></i> Appstore
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
                        <h4 className="header-text">Friends in high places</h4>
                        <p>
                            Build customer confidence by listing your users! Anyone who has used your service and has been pleased with it should have a place here! From Fortune 500 to start-ups, all your app enthusiasts will be glad to be featured in this section. Moreover, users will feel confident seing someone vouching for your product!<br />
                        </p>
                        <div className="logos">
                            <ul className="list-unstyled">
                                <li ><img src="assets/img/logos/adobe.png" /></li>
                                <li ><img src="assets/img/logos/zendesk.png" /></li>
                                <li ><img src="assets/img/logos/ebay.png" /></li>
                                <li ><img src="assets/img/logos/evernote.png" /></li>
                                <li ><img src="assets/img/logos/airbnb.png" /></li>
                                <li ><img src="assets/img/logos/zappos.png" /></li>
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
                            <img src="assets/img/template/mac.png" />
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

        </body >
    );
};

export default Home;