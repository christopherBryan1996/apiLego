const express = require('express')
const app = express()
const port=6060

app.get('/',(req,res)=>{
    res.send('hola b')
})

app.listen(port,()=>{
    console.log(`Example app listening on port: http://localhost:${port}`)
})