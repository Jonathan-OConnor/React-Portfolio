import React from "react"
import Grow from '@material-ui/core/Grow';
import PortfolioCard from '../components/PortfolioCard'
import Navbar from "../components/Navbar"

function Portfolio(props) {

    

    return (
        <div style={{ minHeight: "100%" }}>
            <Navbar mobile={props.mobile}/>
            <Grow in={true}>
                <div className="container" style={{ paddingBottom: "20px" }}>
                    <h1 className="text-center" style={{ marginTop: '50px' }}>Past Projects</h1>
                    <div className='row '>
                        <div className='col-6 d-flex justify-content-center'>
                            <PortfolioCard title="Personal Farm Website" description="This is a personal project I am working on" link="" github="" image="https://jonathan-oconnor.github.io/Portfolio/assets/Project1.png" />
                        </div>
                        <div className='col-6 d-flex justify-content-center'>
                            <PortfolioCard title="Daily Mood Tracker Application" description="Mood tracker is an app that allows users to log their emotions on a daily basis. The app stores each entry in association with the date so that the user can easily navigate back to each entry. Their daily emotions are then graphed, converting their daily mood entries into visual data." link="https://mood-notes-tracker.herokuapp.com/index.html" github="https://github.com/Humble-Attackers/Group-Mood-Tracker" image="https://camo.githubusercontent.com/a13ee912cfd63f1de9fcbd8f2a78865c2b24fd599c34c3e1d3cfe3b9989d80db/68747470733a2f2f692e696d6775722e636f6d2f716537667856512e706e67" />
                        </div>
                    </div>
                    <div className='row' style={{ marginTop: "30px" }}>
                        <div className='col-6 d-flex justify-content-center'>
                            <PortfolioCard title="Tinder Clone: Woofr" description="Woofr is an application that provides its users with a platform to buy and sell dogs. It is a basic Tinder clone with the of making finding dogs in shelters or dogs from breeders streamlined and fun." link="" github="https://github.com/P3-Stargazers/Woofr" image="https://i.imgur.com/DbQN1Fi.png" />
                        </div>
                        <div className='col-6 d-flex justify-content-center'>
                            <PortfolioCard title="Basic Tourism App" description="This is a simple html webpage which utilizes various travel and geography-related APIs to cleanly put together information about cities across the globe. The purpose of this project is to build a web application that allows travellers to search for cities and find useful information so they can plan their trips accordingly." link="https://jonathan-oconnor.github.io/Tourism-App/" github="https://github.com/Jonathan-OConnor/Tourism-App" image="https://jonathan-oconnor.github.io/Portfolio/assets/Project1.png" />
                        </div>
                    </div>
                </div>

            </Grow>
        </div>


    )
}

export default Portfolio