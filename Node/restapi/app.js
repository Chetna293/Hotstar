let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let cors = require('cors')
let dotenv = require('dotenv');
dotenv.config()
let port = process.env.PORT || 9870;
let mongo = require('mongodb');
const { query } = require('express');
let MongoClient = mongo.MongoClient;
//let mongoUrl = process.env.MongoUrl;
let mongoUrl = process.env.MongoLiveUrl;
let db;

//middleware (supporting lib)
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors())

app.get('/',(req,res) => {
    res.send('Express Server default')
})

app.get('/items/:collections',(req,res) => {
  db.collection(req.params.collections).find().toArray((err,result) => {
    if(err) throw err;
    res.send(result)
  })
})

app.get('/tv',(req,res) => {
    db.collection('tv').find().toArray((err,result) => {
      if(err) throw err;
      res.send(result)
    })
})

app.get('/movies',(req, res) => {
  let languageId = Number(req.query.languageId)
  let movieId = Number(req.query.movieId)
  let query = {}
  if(languageId && movieId){
    query = {language_id:languageId,movie_id:movieId}
  }else if(languageId){
    query = {language_id:languageId}
  }else if(movieId){
    query = {movie_id:movieId}
  }
  db.collection('movies').find(query).toArray((err,result) =>{
    if(err) throw err;
    res.send(result)
  })
})

app.get('/sports',(req,res) => {
  db.collection('sports').find().toArray((err,result) => {
    if(err) throw err;
    res.send(result)
  })
})

app.get('/trendingshows',(req,res) => {
  db.collection('trendingshows').find().toArray((err,result) => {
    if(err) throw err;
    res.send(result)
  })
})

app.get('/showepisode',(req,res) => {
  db.collection('showepisode').find().toArray((err,result) => {
    if(err) throw err;
    res.send(result)
  })
})

app.get('/subscription',(req,res) => {
  let email = req.query.email;
  let query = {}
  if(email){
    //query = {email:email}
    query = {email}
  }
  db.collection('subscription').find(query).toArray((err,result) => {
    if(err) throw err;
    res.send(result)
  })
})

app.post('/subscribe',(req,res) => {
  console.log(req.body)
  db.collection('subscription').insert(req.body,(err,result) => {
    if(err) throw err;
    res.send(result)
  })
})

app.put('/updateSubscription/:id',(req,res) => {
  let oid = Number(req.params.id);
  db.collection('subscription').updateOne(
    {id:oid},
    {
      $set:{
        "status":req.body.status,
        "bank_name":req.body.bank_name,
        "date":req.body.date
      }
    },(err,result) => {
      if(err) throw err;
      res.send('Subscription Updated')
    }
  )
})

app.delete('/unsubscribe/:id',(req,res) => {
  let oid =  mongo.ObjectId(req.params.id)
  db.collection('subscription').remove({_id:oid},(err,result) => {
    if(err) throw err;
    res.send('Unsubscribe Successfully')
  })
})

//Connection with db
MongoClient.connect(mongoUrl,(err,client) => {
  if(err) console.log(`Error While Connecting`);
  db = client.db('hotstar');
  app.listen(port,function (err) {
      if (err)
        throw err;
      console.log(`Express Server listening on port ${port}`);
    })
})


