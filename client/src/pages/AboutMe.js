import React, { useState, useEffect } from "react"
import Grow from '@material-ui/core/Grow';
import { Redirect } from "react-router-dom"
import Navbar from "../components/Navbar"
import DesktopAboutMe from "../components/DesktopAboutMe"
import MobileAboutMe from "../components/MobileAboutMe"

function AboutMe(props) {


    const [contactRedirect, setContactRedirect] = useState(false)

    function redirect() {
        setContactRedirect(true)
    }

    return (
        <div style={{ minHeight: "100vh" }}>
            <Navbar mobile={props.mobile}/>
            {contactRedirect ? <Redirect to='/contact' /> : ''}
            <Grow in={true}>
                <div>
                    {props.mobile ? <MobileAboutMe redirect={redirect}/>: <DesktopAboutMe redirect={redirect} /> }
                </div>
            </Grow>
        </div>
    )
}

export default AboutMe