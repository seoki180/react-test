const ctrl = require('./home.ctrl')
const router = require('express').Router()

router.get('/',ctrl.output.login)
router.post('/',ctrl.process.login)

module.exports = router
