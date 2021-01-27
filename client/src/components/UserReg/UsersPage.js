import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import Spinner from "react-bootstrap/Spinner"

import UserService from "../../services/user.service";
// ------------ images and screenshots
import planner from "../../pages/images/app_images/planner.jpg";
import fitness from "../../pages/images/app_images/fitness.jpg";
import weather from "../../pages/images/app_images/weather.jpg";
import photos from "../../pages/images/app_images/photo.jpg";
import budget from "../../pages/images/app_images/budget.jpg";
import memories from "../../pages/images/app_images/memories.jpg";
import food from "../../pages/images/app_images/food.jpg";
import books from "../../pages/images/vector_images/books.jpg";
import todos from "../../pages/images/app_images/todos.jpg";

import todos1 from "../../pages/images/vector_images/todos1.jpg";
import todos2 from "../../pages/images/vector_images/todos2.jpg";
import budget1 from "../../pages/images/vector_images/budget1.jpg";
import budget2 from "../../pages/images/vector_images/budget2.jpg";
import memories1 from "../../pages/images/vector_images/memories1-1.jpg";
import memories2 from "../../pages/images/vector_images/memories2.jpg";
import food1 from "../../pages/images/vector_images/food1.jpg";
import relaxing1 from "../../pages/images/vector_images/relaxing1.jpg";
import relaxing2 from "../../pages/images/vector_images/relaxing2.jpg";
import yoga1 from "../../pages/images/vector_images/yoga1.jpg";
import fitness1 from "../../pages/images/vector_images/fitness1.jpg";

import bg3 from "../../pages/Landing/img/template/bg3.jpg"
import iphone3 from "../../pages/Landing/img/template/iphone3.png"
import bgTokyo from "../../pages/Landing/img/tokyo_sky.jpg";
import ocean from "../../pages/Landing/img/oceans.jpg";
import slp from "../../pages/Landing/img/slp.jpg";
import paris from "../../pages/Landing/img/paris.jpg";
import sao from "../../pages/Landing/img/sao.jpg";
import tkShops from "../../pages/Landing/img/Tokyo_Shops.jpg"

import shards from "../../pages/Landing/img/shards.jpg"
import earth from "../../pages/Landing/img/earth.jpg"
import purpleMountain from "../../pages/Landing/img/purpleMountains.jpg"
import abstract from "../../pages/Landing/img/abstractPattern.png"
import amebas from "../../pages/Landing/img/amebas.jpg"
import crystal from "../../pages/Landing/img/crystalWatersky.jpg"
import blackcolor from "../../pages/Landing/img/blackandcolor.jpg"

import "./UsersPage.css";
import "../../pages/Landing/css/landing-page.css"



const UsersPage = () => {
    const [content, setContent] = useState("");

    // const landingBG = [bg3, bgTokyo, ocean, slp, paris, sao, tkShops];
    const landingBG = [shards, purpleMountain, abstract, amebas, blackcolor];
    const landingBg = landingBG[Math.floor(Math.random() * 5)];

    useEffect(() => {
        UserService.getUserBoard().then(
            (response) => {
                setContent(response.data);
            },
            (error) => {
                const _content =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                setContent(_content);
            }
        );
    }, []);

    return (
        <body className="landing-page landing-page1">
            <div className="wrapper ">

                <div style={{"height": "320px"}} className="parallax filter-gradient black" data-color="blue">
                    <div className="parallax-background my-auto">
                        <img className="parallax-background-image my-auto" src={abstract} />
                    </div>
                    <div className="container">
                        <div className="row">

                            <div className="col-12 col-md-">
                                <div className="description text-center">
                                    <h2 ><strong><span style={{"color": "#F94F74"}}>the</span><span style={{"color": "#FEC326"}}>App</span>
                                        <span style={{"color": "#1d87ff"}}>4</span><span style={{"color": "#02BAB9"}}>me</span></strong></h2>
                                    <br />
                                    <h5>Thank you for Joining <strong><span style={{"color": "#F94F74"}}>the</span><span style={{"color": "#FEC326"}}>App</span>
                                        <span style={{"color": "#1d87ff"}}>4</span><span style={{"color": "#02BAB9"}}>me</span></strong> lifestyle.
                                    The Apps primary focus is on your personal well being. <br />
                                     It is about having 0ne
                                    place you can go during your day that is just for you.<br />
                                        <strong>theApp4me</strong>
                                     keeps your life together and running the best it can!</h5>
                                    <p>...</p>
                                    <h5>
                                        On this page you can read about all the different <br />
                                        features and applications that are built into <strong><span style={{"color": "#F94F74"}}>the</span><span style={{"color": "#FEC326"}}>App</span>
                                            <span style={{"color": "#1d87ff"}}>4</span><span style={{"color": "#02BAB9"}}>me</span></strong>.
                                    </h5>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="section section-gray section-clients">
                    <main role="main" className="container">

                        <div className="row justify-content-around text-center py-2">
                            <div className="col-10 col-sm-6 col-md-5 col-lg-4 col-xl-4">
                                <div className="row">
                                    <div className="col callouts"><Link to={"/planner"}>PLANNER</Link></div>
                                </div>
                                <div className="row">
                                    <div className="col text-center">
                                        <Link to={"/planner"}> <img className="img-fluid rounded mx-auto d-block" src={planner}
                                            alt="man looking down at camera in hands" /></Link>
                                    </div>
                                </div>
                                <div className="row py-3">Webtwo ipsum orkut reddit meebo skype vimeo jajah spock empressr zimbra, mobly napster hipmunk prezi chartly bitly spock. Loopt twones meebo hipmunk, fleck xobni. Convore bebo rovio vimeo zanga handango blekko koofers, loopt twitter imvu flickr kaboodle chegg. Zillow lala mzinga, sifteo. Voki heekya sococo geni oovoo disqus, empressr doostang lijit.</div>
                            </div>
                            <div className="col-10 col-sm-6 col-md-5 col-lg-4 col-xl-4">
                                <div className="row">
                                    <div className="col callouts">FITNESS</div>
                                </div>
                                <div className="row">
                                    <div className="col text-center">
                                        <img className="img-fluid rounded mx-auto d-block" src={fitness}
                                            alt="someone running frmo a low angle mainly showing their shoes and the ground and sky" />
                                    </div>
                                </div>
                                <div className="row py-3">Disrupt inspire and think tank, social entrepreneur but preliminary thinking think tank compelling. Inspiring, invest synergy capacity building, white paper; silo, unprecedented challenge B-corp problem-solvers. Preliminary thinking, indicators entrepreneur, mass incarceration; grit we must stand up agile policymaker citizen-centered.</div>
                            </div>
                            <div className="col-10 col-sm-6 col-md-5 col-lg-4 col-xl-4">
                                <div className="row">
                                    <div className="col callouts">WEATHER</div>
                                </div>
                                <div className="row">
                                    <div className="col text-center">
                                        <img className="img-fluid rounded mx-auto d-block" src={weather}
                                            alt="lines of code on a computer monitor" />
                                    </div>
                                </div>
                                <div className="row py-3">rubber cement algorithms Innovator's Dilemma every dog loves food discuss Flipboard curmudgeon afternoon paper content farm Foursquare, WSJ analytics TechCrunch iPad app we will make them pay we need a Nate Silver net neutrality incent experiment metered model, going forward Flipboard I love the Weather & Opera section information.
                        </div>
                            </div>

                        </div>

                    </main>
                </div>
                <div className="section section-aqua section-clients">
                    <main role="main" className="container">
                        <div className="row justify-content-around text-center py-2">
                            <div className="col-10 col-sm-6 col-md-5 col-lg-4 col-xl-4">
                                <div className="row">
                                    <div className="col callouts">BUDGET</div>
                                </div>
                                <div className="row">
                                    <div className="col text-center">
                                        <img className="img-fluid rounded mx-auto d-block" src={budget2}
                                            alt="man looking down at camera in hands" />
                                    </div>
                                </div>
                                <div className="row py-3">Rough pomfret lemon shark plownose chimaera southern sandfish kokanee northern sea robin Antarctic cod. Yellow-and-black triplefin gulper South American Lungfish mahi-mahi, butterflyfish glass catfish soapfish ling gray mullet! Warbonnet denticle herring spiny-back cod straptail tailor zebra loach sea lamprey.</div>
                            </div>
                            <div className="col-10 col-sm-6 col-md-5 col-lg-4 col-xl-4">
                                <div className="row">
                                    <div className="col callouts">PHOTOS</div>
                                </div>
                                <div className="row">
                                    <div className="col text-center">
                                        <img className="img-fluid rounded mx-auto d-block" src={photos}
                                            style={{"height": "210px", "width": "255px"}}
                                            alt="someone running frmo a low angle mainly showing their shoes and the ground and sky" />
                                    </div>
                                </div>
                                <div className="row py-3">Webtwo ipsum orkut reddit meebo skype vimeo jajah spock empressr zimbra, mobly napster hipmunk prezi chartly bitly spock. Loopt twones meebo hipmunk, fleck xobni. Convore bebo rovio vimeo zanga handango blekko koofers, loopt twitter imvu flickr kaboodle chegg. Zillow lala mzinga, sifteo. Voki heekya sococo geni oovoo disqus, empressr doostang lijit.</div>
                            </div>
                            <div className="col-10 col-sm-6 col-md-5 col-lg-4 col-xl-4">
                                <div className="row">
                                    <div className="col callouts">MEMORIES</div>
                                </div>
                                <div className="row">
                                    <div className="col text-center">
                                        <img className="img-fluid rounded mx-auto d-block" src={memories1}
                                            alt="lines of code on a computer monitor" />
                                    </div>
                                </div>
                                <div className="row py-3">Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
                        </div>
                            </div>

                        </div>
                    </main>
                </div>
                <div className="section section-gray section-clients mb-5">
                    <main role="main" className="container mb-5">
                        <div className="row justify-content-around text-center py-2 mb-5">
                            <div className="col-10 col-sm-6 col-md-5 col-lg-4 col-xl-4">
                                <div className="row">
                                    <div className="col callouts">
                                        <Link to={"/food"}>
                                            FOOD
                                        </Link>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col text-center">
                                        <Link to={"/food"}><img className="img-fluid rounded mx-auto d-block" src={food}
                                            alt="man looking down at camera in hands" /></Link>
                                    </div>
                                </div>
                                <div className="row py-3">Satoshi Nakamoto launched lots of decentralisation when Litecoin required many decentralised application, for Augur limited some public key behind lots of multi signature. Blockchain thought some robust smart contract in a algorithm! Since OmiseGo bought few double spend, Augur could be many algo-traded vaporware, but Decred data mining few trusted hard fork!</div>
                            </div>
                            <div className="col-10 col-sm-6 col-md-5 col-lg-4 col-xl-4">
                                <div className="row">
                                    <div className="col callouts"><Link to={"/books"}>BOOKS</Link></div>
                                </div>
                                <div className="row">
                                    <div className="col text-center">
                                        <Link to={"/books"}><img className="img-fluid rounded mx-auto d-block" src={books}
                                            alt="someone running frmo a low angle mainly showing their shoes and the ground and sky" /></Link>
                                    </div>
                                </div>
                                <div className="row py-3">Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</div>
                            </div>
                            <div className="col-10 col-sm-6 col-md-5 col-lg-4 col-xl-4">
                                <div className="row">
                                    <div className="col callouts">TODOS</div>
                                </div>
                                <div className="row">
                                    <div className="col text-center">
                                        <img className="img-fluid rounded mx-auto d-block" src={todos}
                                            alt="lines of code on a computer monitor" />
                                    </div>
                                </div>
                                <div className="row py-3">Webtwo ipsum orkut reddit meebo skype vimeo jajah spock empressr zimbra, mobly napster hipmunk prezi chartly bitly spock. Loopt twones meebo hipmunk, fleck xobni. Convore bebo rovio vimeo zanga handango blekko koofers, loopt twitter imvu flickr kaboodle chegg. Zillow lala mzinga, sifteo. Voki heekya sococo geni oovoo disqus, empressr doostang lijit.
                        </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </body>

    );
};

export default UsersPage;