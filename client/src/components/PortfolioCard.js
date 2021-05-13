import React from "react"
import Button from '@material-ui/core/Button';

function PortfolioCard(props) {

    return (
        <div class="card mb-3" style={{ maxWidth: "100%", margin: '30px' }}>
            <div class="row g-0">
                <div class="col-md-9">
                    <img src={props.image} alt="..." style={{ width: "100%" }} />
                </div>
                <div class="col-md-3">
                    <div class="card-body">
                        <h5 class="card-title">{props.title}</h5>
                        <p class="card-text">{props.description}</p>
                        <div style={{paddingTop: "50px"}}>
                            <p class="card-text">Github Repository: <a href={props.github}>Here</a></p>
                            <p class="card-text">Deployed Application: <a href={props.link}>Here</a></p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioCard