var express = require('express')
var router = express.Router()

var userctrl = require('../controllers/userctrl')
var articlectrl = require('../controllers/articlectrl')

router.post('/signup', userctrl.signup)
router.post('/login', userctrl.login)

module.exports = router