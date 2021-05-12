import React from "react"

function PortfolioCard(props) {

    return (
        <div class="card" style={{ width: "45rem", border: "2px solid black" }}>
            <img src={props.image} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title text-center">{props.title}</h5>
                <p class="card-text">{props.description}</p>
                <div className="row">
                    <div className="col-6 d-flex justify-content-center" >
                        <a rel="noreferrer" target="_blank" href={props.link} class="btn btn-primary">View Deployed Project</a>
                    </div>
                    <div className="col-6 d-flex justify-content-center">
                        <a rel="noreferrer" target="_blank" href={props.github} class="btn btn-primary">View Project on Github</a>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default PortfolioCard