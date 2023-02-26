"use strict";
const express = require('express')
const body_parser = require('body-parser')
const Router = require('./src/routes/home/index')
const loginRouter = require('./src/routes/home/login')
const registerRouter = require("./src/routes/home/register")
const app = express()

app.set("views","./src/views")
app.set("view engine", "ejs")
app.use(body_parser.json())
app.use(body_parser.urlencoded({extended:true}))
app.use(express.static(__dirname + "/src/public"))

app.use('/',Router)
app.use('/login',loginRouter)
app.use('/register',registerRouter)

module.exports = app
