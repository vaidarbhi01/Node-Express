const express = require('express')
const path = require('path')
const hogganMiddleware = require('hogan-middleware')

const app = express()
app.set('views',path.join(__dirname,'views'))
app.set('view engine','mustache')
app.engine('mustache',hogganMiddleware.__express)

app.get('/',(req,res,next)=>{
    res.send("Sending response")
})

app.get('/getResponse',(req,res,next)=>{
    const data = {
        'name':'Vaidarbhi'
    }
    res.json(data)
})

app.get('/home',(req,res,next)=>{
    res.render('home',null) //render take 2 arguments ::: 1) template 2) data
})

app.listen(1000)


//Mustache is a logic-less templating engine that works great with Node.js for rendering HTML (or other text formats) from data.