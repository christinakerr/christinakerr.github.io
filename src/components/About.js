import React from "react";
import image from "../christinaKerr2.JPG"

function About() {
    return(
        <main className="container">
            <header className="row">
                <div className="col-md-12">
                    <h1>About Me</h1>
                </div>
            </header>
            <div className="row">
                <div className="col-md-12">
                    <img src={image} alt="Christina Kerr" width="200" height="200" className="float-left" />
                    <h2 className="name">Christina Kerr</h2>
                    <hr />
                    <p className="homepage">Full-stack web developer with a content writing & video production background. Skilled in HTML, CSS, and JavaScript. Strong written and oral communication skills with a passion for creative problem-solving. Known among colleagues for attention to detail, organization, and positive attitude. Certificate in full-stack web development from the University of Texas boot camp. Bachelor of Science in Mass Communication from Texas State University. Certification in technical writing with the Society for Technical Communications. I’m excited to find a position that allows me to use both my creativity and critical thinking skills.</p>
                    <p className="homepage">When I'm not developing websites, I spend my time knitting, playing tabletop games with my friends (virtually) and hanging out with my spaniel mix, Calvin.</p>
                </div>
            </div>
        </main>
    )
}

export default About;