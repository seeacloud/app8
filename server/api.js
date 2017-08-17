/**
 * Created by alex on 8/15/17.
 */
const express=require('express')
const router=express.Router()

router.get('/',(req,res)=>{
  res.send('hello alex')
})

router.get('/api/:name',(req,res)=>{
  res.send('hello, '+req.params.name)
})



module.exports=router
