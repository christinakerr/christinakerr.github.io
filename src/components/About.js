import React from "react";
import image from "../christinaKerr2.JPG"

function About() {
    return (
        <main className="container">
            <br />
            <div className="row">
                <div className="col-md-12">
                    <img src={image} alt="Christina Kerr" width="200" height="200" className="float-left" />
                    <h1 className="name">Christina Kerr</h1>
                    <hr />
                    <p className="homepage">Full-stack web developer with a content writing & video production background. Skilled in HTML, CSS, and JavaScript. Strong written and oral communication skills with a passion for creative problem-solving. Known among colleagues for attention to detail, organization, and positive attitude. Certificate in full-stack web development from the University of Texas boot camp. Bachelor of Science in Mass Communication from Texas State University. Certification in technical writing with the Society for Technical Communications. I’m excited to find a position that allows me to use both my creativity and critical thinking skills.</p>
                    <p className="homepage">When I'm not developing websites, I spend my time knitting, playing tabletop games with my friends (virtually) and hanging out with my spaniel mix, Calvin.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <ul className="list-group">
                        <li className="list-group-item list-group-item-darks">Front End</li>
                        <li className="list-group-item list-group-item-secondary">HTML5, CSS3, JavaScript ES6</li>
                        <li className="list-group-item list-group-item-secondary">React.js</li>
                        <li className="list-group-item list-group-item-secondary">jQuery</li>
                        <li className="list-group-item list-group-item-secondary">Bootstrap & Responsive Design</li>

                    </ul>
                </div>
                <div className="col-md-4">
                    <ul className="list-group">
                        <li className="list-group-item list-group-item-darks">Back End</li>
                        <li className="list-group-item list-group-item-secondary">Node.js & Express.js</li>
                        <li className="list-group-item list-group-item-secondary">MySQL & Sequelize</li>
                        <li className="list-group-item list-group-item-secondary">MongoDB & Mongoose</li>
                        
                    </ul>
                </div>
                <div className="col-md-4">
                    <ul className="list-group">
                        <li className="list-group-item list-group-item-darks">Other</li>
                        <li className="list-group-item list-group-item-secondary">Object-Oriented Programming</li>
                        <li className="list-group-item list-group-item-secondary">Agile Software Development</li>
                        <li className="list-group-item list-group-item-secondary">RESTful API</li>
                        <li className="list-group-item list-group-item-secondary">Unit Testing & Jest</li>
                    </ul>
                </div>
            </div>
        </main>
    )
}

export default About;