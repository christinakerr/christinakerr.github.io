import React from "react";

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
                    <img src="images/christinaKerr.JPG" alt="Christina Kerr" width="200" height="200" className="float-left" />
                    <p>Christina Kerr is a full stack web developer living in Austin, Texas. She began her career in content marketing after receiving a degree in mass communication from Texas State University. However, after a couple of years, she discovered her love for coding, and is currently enrolled in the Full Stack Web Development bootcamp at the University of Texas.</p>
                    <p>When she’s not developing websites, Christina spends her time knitting, playing tabletop games with her friends (virtually) and hanging out with her spaniel mix, Calvin.</p>
                </div>
            </div>
        </main>
    )
}

export default About;