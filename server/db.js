const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost/moyasz')

const db=mongoose.connection
db.once('error',()=>{console.log('error')})

const articleSchema=mongoose.Schema({
  title:String,
  content:String,
  author:String,
  date:Date
})

const Models={
  Article:mongoose.model('Article',articleSchema)
}

module.exports=Models
