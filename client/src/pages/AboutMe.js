import React, { useState, useEffect } from "react"
import Grow from '@material-ui/core/Grow';
import { Redirect } from "react-router-dom"
import Navbar from "../components/Navbar"
import DesktopAboutMe from "../components/DesktopAboutMe"

function AboutMe(props) {


    const [contactRedirect, setContactRedirect] = useState(false)
    // const [isMobile, setIsMobile] = useState(false)
    // const mql = window.matchMedia('(max-width: 600px)')
    // let mobileView = mql.matches

    // mql.addEventListener('change', (e) => {
    //     const mobileView = e.matches;
    //     if (mobileView) {
    //       setIsMobile(true);
    //     } else {
    //       setIsMobile(false);
    //     }
    //   });

    // useEffect(() => {
    //     if(mobileView) {
    //         setIsMobile(true)
    //     } else {
    //         setIsMobile(false)
    //     }
    // }, [])

    function redirect() {
        setContactRedirect(true)
    }

    return (
        <div style={{ minHeight: "100vh" }}>
            <Navbar mobile={props.mobile}/>
            {contactRedirect ? <Redirect to='/contact' /> : ''}
            <Grow in={true}>
                <div>
                    {props.mobile ? <h1>mobile</h1>: <DesktopAboutMe redirect={redirect} /> }
                </div>

            </Grow>
        </div>
    )
}

export default AboutMe