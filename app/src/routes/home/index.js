"use strict";

const router = require('express').Router()
const ctrl = require('./home.ctrl')

router.get('/',ctrl.output.hello)
router.get('/login',ctrl.output.login)
router.post('/login',ctrl.process.login)

module.exports = router
