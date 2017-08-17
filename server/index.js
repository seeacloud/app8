const express=require('express')
const app=new express()
const api=require('./api')
const fs=require('fs')
const path=require('path')
const bodyParser=require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(api)
app.use(express.static(path.resolve(__dirname,'../dist')))


app.listen(8088)
console.log('8088 ready')




