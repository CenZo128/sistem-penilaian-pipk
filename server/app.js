require('dotenv').config()
const express = require('express');
const app = express()
const PORT = process.env.PORT || 3000;

const cors = require('cors')
app.use(cors())

const path = require('path')
app.use(express.static(path.join(__dirname, '')))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const routes = require('./routes')
app.use(routes)

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`)
})