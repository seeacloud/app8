var express=require('express')
var app=express()

var data=require('./db.json')

var apiRoutes=express.Router()
apiRoutes.get('/api/article/:id',function (req,res) {
  var id=req.params.id
  res.send(data.articles[id])
})

app.use(apiRoutes)

app.listen('8888',function () {
  console.log('ready at 8888')
})

