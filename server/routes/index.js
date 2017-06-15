var express = require('express')
var router = express.Router()

var userctrl = require('../controllers/userctrl')
var articlectrl = require('../controllers/articlectrl')

router.post('/signup', userctrl.signup)
router.post('/login', userctrl.login)

router.get('/api/articles', articlectrl.get)
router.get('/api/articles/:id', articlectrl.getOne)
router.post('/api/articles', userctrl.userInfo, articlectrl.create)
router.put('/api/articles/:id', userctrl.userInfo, articlectrl.update)
router.delete('/api/articles/:id', userctrl.userInfo, articlectrl.remove)

module.exports = router