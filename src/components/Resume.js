import React from "react";

function Resume() {
    return (
        <main className="container">
            <header className="row">
                <div className="col-md-12">
                    <h1>Resume</h1>
                </div>
            </header>
            <div className="row">
                <div className="col-md-12">
                    <div className="embed-responsive embed-responsive-1by1">
                    <iframe title="resume" className="embed-responsive-item" src="https://docs.google.com/document/d/e/2PACX-1vSc0ZpAcWsc898022KyZdn5ndufHvzwxZqM7QWtsqpslg2p81Vb420jpkY3KnFEe1CefX59hh5ZgZsP/pub?embedded=true"></iframe>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Resume;