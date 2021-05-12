import React, { useState, useEffect } from "react"
import Grow from '@material-ui/core/Grow';
import Button from '@material-ui/core/Button';
import { Redirect } from "react-router-dom"
import Navbar from "../components/Navbar"

function AboutMe(props) {

    useEffect(() => {
        if (window.location.pathname !== "/"){
            window.location.pathname="/"}
      }, []);

    const [contactRedirect, setContactRedirect] = useState(false)
    function redirect() {
        setContactRedirect(true)
    }
    return (
        <div style={{minHeight:"100vh"}}>
            <Navbar />
            {contactRedirect ? <Redirect to='/contact' /> : ''}
            <Grow in={true}>
                <div className="container">
                    <div className="row" style={{ width: "100%", height: "500px", marginTop: "100px" }}>
                        <div className="col-4 ">
                            <img src='https://i.imgur.com/IZIAwjB.png' style={{ width: '100%', border: '10px solid white', borderRadius: "50%" }} />
                        </div>
                        <div className="col-8">
                            <div className="row">
                                <h5 style={{ color: "gray" }}>Full-Stack Developer</h5>
                            </div>
                            <div className="row">
                                <h1 >Jonathan O'Connor</h1>
                            </div>
                            <div className="row" style={{ marginTop: "30px" }}>
                                <p>
                                    I'm a 22 year-old aspiring software developer living in Toronto. I am currently enrolled in my final semester for my Bachelor of Arts degree at the University of Toronto where I intend to graduate this spring. During my time there, I majored in Economics and minored in both History and Mathematics. I am also currently enrolled in the Full-Stack Coding Bootcamp offered by the University of Toronto School of Continuing Studies where I learned the skills used to build this webpage. I look forward to hopefully beginning my career in software development this spring following both my graduation and my completion of the UofT SCS coding bootcamp.
                            </p>
                            </div>
                            <div className="text-center" style={{ marginTop: "100px" }}>
                                <Button variant="contained" color="primary" style={{ height: "50px", width: "200px", marginLeft: "0px" }}>Download Resume</Button>
                                <Button onClick={redirect} variant="contained" color="primary" style={{ height: "50px", width: "200px", marginLeft: "50px" }}>Contact</Button>
                            </div>

                        </div>
                    </div>
                </div>
            </Grow>
        </div>
    )
}

export default AboutMe