import React, { useState } from "react"
import { Carousel } from "react-bootstrap"
import Grow from '@material-ui/core/Grow';
import PortfolioCard from '../../components/PortfolioCard'
import Navbar from "../../components/Navbar"
import "./NewPortfolio.css"

function NewPortfolio(props) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
        console.log(index)
    };
    return (
        <div style={{ minHeight: "100vh" }}>
            <Navbar />
            <Grow in={true}>
                <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
                    <Carousel.Item>
                        <div className="d-block w-100" style={{ height: "100vh", position: "relative" }}>
                            <div className="d-flex justify-content-center" style={{ paddingTop: "10%" }}>
                                <PortfolioCard title="Daily Mood Tracker Application" description="Mood tracker is an app that allows users to log their emotions on a daily basis. The app stores each entry in association with the date so that the user can easily navigate back to each entry. Their daily emotions are then graphed, converting their daily mood entries into visual data." link="https://mood-notes-tracker.herokuapp.com/index.html" github="https://github.com/Humble-Attackers/Group-Mood-Tracker" image="https://camo.githubusercontent.com/a13ee912cfd63f1de9fcbd8f2a78865c2b24fd599c34c3e1d3cfe3b9989d80db/68747470733a2f2f692e696d6775722e636f6d2f716537667856512e706e67" />
                            </div>
                        </div>

                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="d-block w-100" style={{ height: "100vh", position: "relative" }}>
                            <div className="d-flex justify-content-center" style={{ paddingTop: "10%" }}>
                                <PortfolioCard title="Tinder Clone: Woofr" description="Woofr is an application that provides its users with a platform to buy and sell dogs. It is a basic Tinder clone with the of making finding dogs in shelters or dogs from breeders streamlined and fun." link="" github="https://github.com/P3-Stargazers/Woofr" image="https://i.imgur.com/DbQN1Fi.png" />
                            </div>
                        </div>

                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="d-block w-100" style={{ height: "100vh", position: "relative" }}>
                            <div className="d-flex justify-content-center" style={{ paddingTop: "10%" }}>
                            <PortfolioCard title="Basic Tourism App" description="This is a simple html webpage which utilizes various travel and geography-related APIs to cleanly put together information about cities across the globe. The purpose of this project is to build a web application that allows travellers to search for cities and find useful information so they can plan their trips accordingly." link="https://jonathan-oconnor.github.io/Tourism-App/" github="https://github.com/Jonathan-OConnor/Tourism-App" image="https://jonathan-oconnor.github.io/Portfolio/assets/Project1.png" />
                            </div>
                        </div>

                    </Carousel.Item>
                </Carousel>
            </Grow>
        </div>


    )
}

export default NewPortfolio