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
                {
                    projects.map(item=>{
                        return (
                            <Project info={item} />
                        )
                    })
                }
            </div>
        </main>
    )
}

export default Portfolio;