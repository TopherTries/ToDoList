const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient
const uri = 'mongodb+srv://TopherToDo:It5g9HmXTHinmlmq@cluster0.b37zk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

  MongoClient.connect(uri, { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')
    const db = client.db('list-of-todos')
    const taskCollection = db.collection('tasks')
    
  app.set('view engine', 'ejs')

  app.use(bodyParser.urlencoded({ extended: true }))

  app.listen(3000, function() {
    console.log('listening on 3000')
  })

  app.get('/', (req, res) => {
    db.collection('tasks').find().toArray()
      .then(results => {
        res.render('index.ejs', { tasks: results })
      })
      .catch(error => console.error(error))
  })

  app.post('/todo', (req, res) => {
    taskCollection.insertOne(req.body)
    .then(result => {
      res.redirect('/')
    })
  })
  })
  .catch(error => console.error(error))