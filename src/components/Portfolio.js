import React from "react";
import Project from "./Project";
import projects from "../projects.json"


function Portfolio() {
    return (
        <main className="container">
            <header className="row">
                <div className="col-md-12">
                    <h1>Portfolio</h1>
                </div>
            </header>
            <div className="row">


                <Project info={projects[0]} />
                <Project info={projects[1]} />
                <Project info={projects[2]} />
                <Project info={projects[3]} />
                <Project info={projects[4]} />
                <Project info={projects[5]} />

            </div>
        </main>
    )
}

export default Portfolio;