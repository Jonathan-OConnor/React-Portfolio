import React from "react"
import Grow from '@material-ui/core/Grow';
import Navbar from "../components/Navbar"

function NotFound(props) {

    return (
        <div style={{minHeight:"100vh"}}>
            <Navbar mobile={props.mobile}/>
            <Grow in={true}>
                <div className="container">
                    <h1 className="text-center" style={{ marginTop: '50px' }}>404 Page Not Found :(</h1>

                </div>

            </Grow>
        </div>
    )
}

export default NotFound