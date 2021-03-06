require('dotenv').config()
const express = require('express')
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

app.get('*', function(req, res) {
  res.sendFile('index.html', {root: STATIC_PATH});
});

app.listen(PORT, function () {
  console.log(`Serving app on: ${API_URL} (port: ${PORT})`)
})