import React from "react"
import Button from '@material-ui/core/Button';
import PortfolioCard from "./PortfolioCard";

function MobileAboutMe(props) {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <img src='https://i.imgur.com/IZIAwjB.png' style={{ width: '100%', border: '10px solid white', borderRadius: "50%", maxWidth: "250px" }} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 text-center">
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
                    </div>

                    <div className="text-center" style={{ marginTop: "50px", marginBottom: "50px" }}>
                        <a href="./Downloads/Resume.pdf" download><Button variant="contained" color="primary" style={{ height: "50px", width: "150px", marginLeft: "0px" }}>Download Resume</Button></a>
                        <a href="#Contact"><Button variant="contained" color="primary" style={{ height: "50px", width: "150px", marginLeft: "50px" }}>Contact</Button></a>
                    </div>

                </div>
            </div>
            <div style={{ borderTop: "2px solid black" }}>
                <h1 className="text-center" style={{ paddingTop: "50px" }}>Past Projects</h1>
            </div>
            <div style={{ minHeight: "100vh" }}>
                <div>
                    <div className="d-block w-100" style={{ position: "relative" }}>
                        <div className="d-flex justify-content-center">
                            <PortfolioCard title="Daily Mood Tracker Application" description="Mood tracker is an app that allows users to log their emotions on a daily basis. The app stores each entry in association with the date so that the user can easily navigate back to each entry. Their daily emotions are then graphed, converting their daily mood entries into visual data." link="https://mood-notes-tracker.herokuapp.com/index.html" github="https://github.com/Humble-Attackers/Group-Mood-Tracker" image="https://camo.githubusercontent.com/a13ee912cfd63f1de9fcbd8f2a78865c2b24fd599c34c3e1d3cfe3b9989d80db/68747470733a2f2f692e696d6775722e636f6d2f716537667856512e706e67" />
                        </div>
                    </div>

                    <div className="d-flex justify-content-center">
                        <div style={{ width: "50%", borderBottom: "2px solid grey" }}></div>
                    </div>

                    <div className="d-block w-100" style={{ position: "relative" }}>
                        <div className="d-flex justify-content-center" >
                            <PortfolioCard title="Basic Tourism App" description="This is a simple html webpage which utilizes various travel and geography-related APIs to cleanly put together information about cities across the globe. The purpose of this project is to build a web application that allows travellers to search for cities and find useful information so they can plan their trips accordingly." link="https://jonathan-oconnor.github.io/Tourism-App/" github="https://github.com/Jonathan-OConnor/Tourism-App" image="https://jonathan-oconnor.github.io/Portfolio/assets/Project1.png" />
                        </div>
                    </div>

                    <div className="d-flex justify-content-center">
                        <div style={{ width: "50%", borderBottom: "2px solid grey" }}></div>
                    </div>

                    <div className="d-block w-100" style={{ position: "relative" }}>
                        <div className="d-flex justify-content-center" >
                            <PortfolioCard title="Tinder Clone: Woofr" description="Woofr is an application that provides its users with a platform to buy and sell dogs. It is a basic Tinder clone with the of making finding dogs in shelters or dogs from breeders streamlined and fun." link="" github="https://github.com/P3-Stargazers/Woofr" image="https://i.imgur.com/DbQN1Fi.png" />
                        </div>
                    </div>
                </div>
            </div>
            <div id="Contact" style={{ borderTop: "2px solid black", paddingTop: "50px" }}>
                <h2 className="text-center" style={{ paddingBottom: "20px" }}>Contact</h2>
                <p className="text-center">Phone: 416-728-5011</p>
                <p className="text-center">Email:  <a href="mailto:JonPierreOConnor@gmail.com">JonPierreOConnor@gmail.com</a></p>
                <div className="d-flex justify-content-center">
                    <a href="https://www.linkedin.com/in/jonathan-o-connor-51bb02200/" rel="noreferrer" target="_blank" style={{ marginRight: "30px" }}><i className="fab fa-linkedin fa-2x"></i></a>
                    <a href="https://github.com/Jonathan-OConnor" rel="noreferrer" target="_blank" style={{ color: "black" }}><i className="fab fa-github fa-2x"></i></a>
                </div>
            </div>
        </div>


    )
}

export default MobileAboutMe