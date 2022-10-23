const express = require('express')
const app = express()

const {PORT}=require('./config.js')

app.get('/',(req,res)=>{
    res.send('hola b')
})

app.listen(PORT,()=>{
    console.log(`Example app listening on port: http://localhost:${PORT}`)
})