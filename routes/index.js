const express = require('express')
const router = express.Router()


router.get('/', (req, res, next) => {
    res.send("Sending response from Routes folder")
})


router.get('/home', (req, res, next) => {
    res.render('home', null) //render take 2 arguments ::: 1) template 2) data
})


router.get('/getResponse', (req, res, next) => {
    const data = {
        'name': 'Vaidarbhi'
    }
    res.json(data)
})

module.exports = router

