import React from "react";

function Project(props) {
    return (
        <div class="col-xl-4 col-lg-6 col-md-12">
            <div class="card">
                <img src={props.info.image} class="card-img-top" alt={props.info.name} />
                <div class="card-body">
                    <h5 class="card-title">{props.info.name}</h5>
                    <p class="card-text">{props.info.description}</p>
                    <a href={props.info.github} target="_blank" rel="noreferrer">GitHub</a> | <a
                        href={props.info.deployed} target="_blank" rel="noreferrer">Deployed</a>
                </div>
            </div>
        </div>
    )
}

export default Project;