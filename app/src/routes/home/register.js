const router = require("express").Router()
const ctrl = require('./home.ctrl')


router.get('/',ctrl.output.register)
router.post('/',ctrl.process.register)

module.exports = router