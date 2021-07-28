import React from "react"
import { Link } from 'react-router-dom'

function Navbar(props) {
    var path = window.location.pathname
    path = path.toLowerCase()
    function buildActive(path) {
        switch (path) {
            case "/":
                return (<div className="navbar-nav"> <Link className="nav-link active" aria-current="page" to="/">About Me</Link>
                    <Link className="nav-link" to="/resume">Resume</Link>
                    <Link className="nav-link" to="/portfolio">Past Projects</Link>
                    <Link className="nav-link" to="/contact">Contact Me</Link></div>)
            case "/portfolio":
                return (<div className="navbar-nav"> <Link className="nav-link" aria-current="page" to="/">About Me</Link>
                    <Link className="nav-link" to="/resume">Resume</Link>
                    <Link className="nav-link active" to="/portfolio">Past Projects</Link>
                    <Link className="nav-link" to="/contact">Contact Me</Link></div>)
            case "/resume":
                return (<div className="navbar-nav"> <Link className="nav-link" aria-current="page" to="/">About Me</Link>
                    <Link className="nav-link active" to="/resume">Resume</Link>
                    <Link className="nav-link" to="/portfolio">Past Projects</Link>
                    <Link className="nav-link" to="/contact">Contact Me</Link></div>)
            case "/contact":
                return (<div className="navbar-nav"> <Link className="nav-link" aria-current="page" to="/">About Me</Link>
                    <Link className="nav-link" to="/resume">Resume</Link>
                    <Link className="nav-link" to="/portfolio">Past Projects</Link>
                    <Link className="nav-link active" to="/contact">Contact Me</Link></div>)
            default:
                // return navbar with no actives if user is on an invalid page
                return (<div className="navbar-nav"> <Link className="nav-link" aria-current="page" to="/">About Me</Link>
                    <Link className="nav-link" to="/resume">Resume</Link>
                    <Link className="nav-link" to="/portfolio">Past Projects</Link>
                    <Link className="nav-link" to="/contact">Contact Me</Link></div>)
        }
    }
    if (props.mobile) {
        return (<nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/" ><img src="https://i.imgur.com/vR3V7o8.png" style={{ width: "30px" }} /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    {buildActive(path)}
                </div>

            </div>
        </nav>)
    } else {
        return (
            <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/" ><img src="https://i.imgur.com/vR3V7o8.png" style={{ width: "30px" }} /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        {buildActive(path)}
                    </div>
                    <div className="d-flex justify-content-end">
                        <a href="https://www.linkedin.com/in/jonathan-o-connor-51bb02200/" rel="noreferrer" target="_blank" style={{ marginRight: "30px" }}><i className="fab fa-linkedin fa-2x"></i></a>
                        <a href="https://github.com/Jonathan-OConnor" rel="noreferrer" target="_blank" style={{ color: "black" }}><i className="fab fa-github fa-2x"></i></a>
                    </div>
                </div>
            </nav>
        )
    }

}

export default Navbar