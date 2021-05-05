require('dotenv').config()
const nodemailer = require('nodemailer')
const express = require('express')
const apiRouter = require('./app/router')
const path = require('path')
const app = express()

const PORT = process.env.PORT || 8080
const API_URL = process.env.NODE_ENV === 'production' ?
    '?' : `http://localhost:${PORT}`

// production uses REACT production-build content
const STATIC_PATH = process.env.NODE_ENV === 'production' ?
    path.join('client', 'build') : path.join('client', 'public')

// for parsing incoming POST data
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
// static paths (ex. assets, js, images, etc) served automatically from:
app.use(express.static(STATIC_PATH))

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
      clientId: process.env.OAUTH_CLIENTID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN
    }
  });

  let mailOptions = {
    from:  process.env.MAIL_USERNAME,
    to:  process.env.MAIL_RECIEVER_USERNAME,
    subject: 'Message from your Website',
    text: ''
  };

apiRouter(app, API_URL, STATIC_PATH, transporter, mailOptions)



app.listen(PORT, function () {
    console.log(`Serving app on: ${API_URL} (port: ${PORT})`)
 })