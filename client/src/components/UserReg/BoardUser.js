import React, {useState, useEffect} from "react";

import UserService from "../../services/user.service";

import planner from "../../pages/images/app_images/planner.jpg"
import fitness from "../../pages/images/app_images/fitness.jpg"
import weather from "../../pages/images/app_images/weather.jpg"
import photos from "../../pages/images/app_images/photo.jpg"
import budget from "../../pages/images/app_images/budget.jpg"
import memories from "../../pages/images/app_images/memories.jpg"
import food from "../../pages/images/app_images/food.jpg"
import books from "../../pages/images/vector_images/books.jpg"
import todos from "../../pages/images/app_images/todos.jpg"

import todos1 from "../../pages/images/vector_images/todos1.jpg"
import todos2 from "../../pages/images/vector_images/todos2.jpg"
import budget1 from "../../pages/images/vector_images/budget1.jpg"
import budget2 from "../../pages/images/vector_images/budget2.jpg"
import memories1 from "../../pages/images/vector_images/memories1-1.jpg"
import memories2 from "../../pages/images/vector_images/memories2.jpg"
import food1 from "../../pages/images/vector_images/food1.jpg"
import relaxing1 from "../../pages/images/vector_images/relaxing1.jpg"
import relaxing2 from "../../pages/images/vector_images/relaxing2.jpg"
import yoga1 from "../../pages/images/vector_images/yoga1.jpg"
import fitness1 from "../../pages/images/vector_images/fitness1.jpg"



const BoardUser = () => {
    const [content, setContent] = useState("");

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
        <div>
            <main role="main" className="container">
                <div className="row text-center pb-4 py-5" style={{fontSize: "28px", fontStyle: "italic"}}>
                    <div className="col-12 text-left text-sm-center px-2">Full Stack Developer with hands-on knowledge and experience
                    with front/back-end development technologies, libraries, &amp; frameworks. Bringing to the table a background in
                    Audio/Visual Technology and Photography.  Worked on projects in Agile development environments
                    focusing on UI quality, responsiveness, and optimization. Effective at problem solving,
                    multi-tasking, debugging, and helping teammates. Strive to be approachable, friendly,
        communicate clearly, and always continue learning.</div>
                </div>
                <div className="row justify-content-around text-center py-2">
                    <div className="col-12 col-md-12 col-lg-3">
                        <div className="row">
                            <div className="col callouts">PLANNER</div>
                        </div>
                        <div className="row">
                            <div className="col text-center">
                                <img className="img-fluid rounded mx-auto d-block" src={planner}
                                    alt="man looking down at camera in hands" />
                            </div>
                        </div>
                        <div className="row py-3">Andy ipsum dolor sit amet consectetur, adipisicing elit. Laudantium inventore
                        deserunt ipsum qui deleniti quas sit porro commodi suscipit, magnam, nulla quis, nam vero. Saepe
                        debitis, aliquid quod dolores assumenda, excepturi mollitia
                        sunt enim neque, eius accusamus ea molestias libero porro doAndy totam magni aut eos molestiae!
                Consequatur, ratione eum?</div>
                    </div>
                    <div className="col-12 col-md-12 col-lg-3">
                        <div className="row">
                            <div className="col callouts">FITNESS</div>
                        </div>
                        <div className="row">
                            <div className="col text-center">
                                <img className="img-fluid rounded mx-auto d-block" src={fitness}
                                    alt="someone running frmo a low angle mainly showing their shoes and the ground and sky" />
                            </div>
                        </div>
                        <div className="row py-3">Andy ipsum dolor sit amet consectetur, adipisicing elit. Laudantium inventore
                        deserunt ipsum qui deleniti quas sit porro commodi suscipit, magnam, nulla quis, nam vero. Saepe
                        debitis, aliquid quod dolores assumenda, excepturi mollitia
                        sunt enim neque, eius accusamus ea molestias libero porro doAndy totam magni aut eos molestiae!
                Consequatur, ratione eum?</div>
                    </div>
                    <div className="col-12 col-md-12 col-lg-3">
                        <div className="row">
                            <div className="col callouts">WEATHER</div>
                        </div>
                        <div className="row">
                            <div className="col text-center">
                                <img className="img-fluid rounded mx-auto d-block" src={weather}
                                    alt="lines of code on a computer monitor" />
                            </div>
                        </div>
                        <div className="row py-3">Andy ipsum dolor sit amet consectetur, adipisicing elit. Laudantium inventore
                        deserunt ipsum qui deleniti quas sit porro commodi suscipit, magnam, nulla quis, nam vero. Saepe
                        debitis, aliquid quod dolores assumenda, excepturi mollitia
                        sunt enim neque, eius accusamus ea molestias libero porro doAndy totam magni aut eos molestiae!
                        Consequatur, ratione eum?
                        </div>
                    </div>

                </div>
                <div className="row justify-content-around text-center py-2">
                    <div className="col-12 col-md-12 col-lg-3">
                        <div className="row">
                            <div className="col callouts">Budget</div>
                        </div>
                        <div className="row">
                            <div className="col text-center">
                                <img className="img-fluid rounded mx-auto d-block" src={budget2}
                                    alt="man looking down at camera in hands" />
                            </div>
                        </div>
                        <div className="row py-3">Andy ipsum dolor sit amet consectetur, adipisicing elit. Laudantium inventore
                        deserunt ipsum qui deleniti quas sit porro commodi suscipit, magnam, nulla quis, nam vero. Saepe
                        debitis, aliquid quod dolores assumenda, excepturi mollitia
                        sunt enim neque, eius accusamus ea molestias libero porro doAndy totam magni aut eos molestiae!
                Consequatur, ratione eum?</div>
                    </div>
                    <div className="col-12 col-md-12 col-lg-3">
                        <div className="row">
                            <div className="col callouts">Photos</div>
                        </div>
                        <div className="row">
                            <div className="col text-center">
                                <img className="img-fluid rounded mx-auto d-block" src={photos}
                                    style={{"height": "255px", "width": "255px"}}
                                    alt="someone running frmo a low angle mainly showing their shoes and the ground and sky" />
                            </div>
                        </div>
                        <div className="row py-3">Andy ipsum dolor sit amet consectetur, adipisicing elit. Laudantium inventore
                        deserunt ipsum qui deleniti quas sit porro commodi suscipit, magnam, nulla quis, nam vero. Saepe
                        debitis, aliquid quod dolores assumenda, excepturi mollitia
                        sunt enim neque, eius accusamus ea molestias libero porro doAndy totam magni aut eos molestiae!
                Consequatur, ratione eum?</div>
                    </div>
                    <div className="col-12 col-md-12 col-lg-3">
                        <div className="row">
                            <div className="col callouts">Memories</div>
                        </div>
                        <div className="row">
                            <div className="col text-center">
                                <img className="img-fluid rounded mx-auto d-block" src={memories1}
                                    alt="lines of code on a computer monitor" />
                            </div>
                        </div>
                        <div className="row py-3">Andy ipsum dolor sit amet consectetur, adipisicing elit. Laudantium inventore
                        deserunt ipsum qui deleniti quas sit porro commodi suscipit, magnam, nulla quis, nam vero. Saepe
                        debitis, aliquid quod dolores assumenda, excepturi mollitia
                        sunt enim neque, eius accusamus ea molestias libero porro doAndy totam magni aut eos molestiae!
                        Consequatur, ratione eum?
                        </div>
                    </div>

                </div>
                <div className="row justify-content-around text-center py-2">
                    <div className="col-12 col-md-12 col-lg-3">
                        <div className="row">
                            <div className="col callouts">Food</div>
                        </div>
                        <div className="row">
                            <div className="col text-center">
                                <img className="img-fluid rounded mx-auto d-block" src={food}
                                    alt="man looking down at camera in hands" />
                            </div>
                        </div>
                        <div className="row py-3">Andy ipsum dolor sit amet consectetur, adipisicing elit. Laudantium inventore
                        deserunt ipsum qui deleniti quas sit porro commodi suscipit, magnam, nulla quis, nam vero. Saepe
                        debitis, aliquid quod dolores assumenda, excepturi mollitia
                        sunt enim neque, eius accusamus ea molestias libero porro doAndy totam magni aut eos molestiae!
                Consequatur, ratione eum?</div>
                    </div>
                    <div className="col-12 col-md-12 col-lg-3">
                        <div className="row">
                            <div className="col callouts">Books</div>
                        </div>
                        <div className="row">
                            <div className="col text-center">
                                <img className="img-fluid rounded mx-auto d-block" src={books}
                                    alt="someone running frmo a low angle mainly showing their shoes and the ground and sky" />
                            </div>
                        </div>
                        <div className="row py-3">Andy ipsum dolor sit amet consectetur, adipisicing elit. Laudantium inventore
                        deserunt ipsum qui deleniti quas sit porro commodi suscipit, magnam, nulla quis, nam vero. Saepe
                        debitis, aliquid quod dolores assumenda, excepturi mollitia
                        sunt enim neque, eius accusamus ea molestias libero porro doAndy totam magni aut eos molestiae!
                Consequatur, ratione eum?</div>
                    </div>
                    <div className="col-12 col-md-12 col-lg-3">
                        <div className="row">
                            <div className="col callouts">Todos</div>
                        </div>
                        <div className="row">
                            <div className="col text-center">
                                <img className="img-fluid rounded mx-auto d-block" src={todos}
                                    alt="lines of code on a computer monitor" />
                            </div>
                        </div>
                        <div className="row py-3">Andy ipsum dolor sit amet consectetur, adipisicing elit. Laudantium inventore
                        deserunt ipsum qui deleniti quas sit porro commodi suscipit, magnam, nulla quis, nam vero. Saepe
                        debitis, aliquid quod dolores assumenda, excepturi mollitia
                        sunt enim neque, eius accusamus ea molestias libero porro doAndy totam magni aut eos molestiae!
                        Consequatur, ratione eum?
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default BoardUser;