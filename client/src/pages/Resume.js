import React, {useEffect} from "react"
import Grow from '@material-ui/core/Grow';
import Navbar from "../components/Navbar"

function Resume(props) {
    useEffect(() => {
        if (window.location.pathname !== "/resume"){
            window.location.pathname="/resume"}
      }, []);
    return (
        <div style={{ minHeight: "100vh" }}>
            <Navbar />
            <Grow in={true}>
                <div className="container">
                    <h1 className="text-center" style={{ marginTop: '50px' }}>Page is under construction</h1>

                </div>

            </Grow>
        </div>
    )
}

export default Resume