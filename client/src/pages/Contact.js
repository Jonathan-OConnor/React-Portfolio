import React, { useState, useEffect } from "react"
import Grow from '@material-ui/core/Grow';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Navbar from "../components/Navbar"
const validator = require("email-validator")


function Contact(props) {


    const [senderEmail, setSenderEmail] = useState("")
    const [senderMessage, setSenderMessage] = useState("")
    const [invalidEmail, setInvalidEmail] = useState(false)
    const [invalidMessage, setInvalidMessage] = useState(false)
    const [messageSent, setMessageSent] = useState(false)
    const [messageError, setMessageError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    function handleEmailChange(e) {
        setSenderEmail(e.target.value)
    }
    function handleMessageChange(e) {
        setSenderMessage(e.target.value)
    }
    async function sendMessage() {
        setInvalidMessage(false)
        setInvalidEmail(false)
        if (validator.validate(senderEmail) && senderMessage !== "") {
            const data = { email: senderEmail, msg: senderMessage }
            setIsLoading(true)
            await fetch('/api/email', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    'Session': localStorage.session || ''
                },
                body: JSON.stringify(data)
            }).then(res => {
                if (res.ok) {
                    setSenderEmail("")
                    setSenderMessage("")
                    setIsLoading(false)
                    setMessageSent(true)
                }
                else {
                    setIsLoading(false)
                    setMessageError(true)
                }
            }).catch((error) => {
                console.log(error)
                setIsLoading(false)
                setMessageError(true)
            })
            setIsLoading(false)
        }
        if (!validator.validate(senderEmail)) {
            setInvalidEmail(true)
        }
        if (senderMessage === "") {
            setInvalidMessage(true)
        }
    }

    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            width: '25ch',
        },
    }));

    const classes = useStyles();

    return (
        <div style={{ minHeight: "100vh" }}>
            <Navbar />
            <Grow in={true}>
                <div className="container">
                    <h1 className="text-center" style={{ marginTop: '50px' }}>Contact Me</h1>
                    <h4 className="text-center">Email: JohnPierreOConnor@gmail.com</h4>
                    <h4 className="text-center">Phone Number: 416-728-5011</h4>
                    <div style={{ backgroundColor: "white", border: "2px solid black", padding: "25px", paddingBottom: "50px", paddingTop: "20px", marginTop: "50px" }}>
                        <form className={classes.root}>
                            <h4>Send me a message:</h4>
                            <TextField id="sender-email"
                                label="Your Email"
                                style={{ margin: 20 }}
                                value={senderEmail}
                                placeholder="Enter your email"
                                fullWidth
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onChange={handleEmailChange} />
                            {invalidEmail ? <p style={{ color: "red", marginLeft: "20px" }}>Enter a valid email</p> : ""}
                            <TextField id="sender-message"
                                label="Your Message"
                                style={{ margin: 20 }}
                                placeholder="Enter a message"
                                value={senderMessage}
                                fullWidth
                                multiline
                                rows={6}
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onChange={handleMessageChange} />
                            {invalidMessage ? <p style={{ color: "red", marginLeft: "20px" }}>Please Enter a Message</p> : ""}

                        </form>
                        <div className="row d-flex justify-content-end">
                            <Button variant="contained" color="primary" style={{ height: "50px", width: "200px", marginRight: "20px" }} onClick={sendMessage}>Send Message</Button>
                        </div>
                        {isLoading ? <CircularProgress /> : ""}
                        {messageSent ? <p style={{ color: "green", marginLeft: "20px" }}>Message sent!</p> : ""}
                        {messageError ? <p style={{ color: "red", marginLeft: "20px" }}>Your message could not be sent at this time, please try emailing me directly</p> : ""}
                    </div>

                </div>

            </Grow>
        </div>
    )
}

export default Contact