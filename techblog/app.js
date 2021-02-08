const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongodb = require('mongodb');
const session = require('express-session');
const url = "mongodb://localhost:27017";
const port = process.env.PORT || 6700;
//make object of express so that we can use methods
let app = express();
let dbobj;
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

///use session
app.use(session({
    secret:'mytokensecert'
}))

//we connect with mongo
var mongoClient = new mongodb.MongoClient(url);
mongoClient.connect((err) => {
    if(err) throw err;
    dbobj = mongoClient.db('aryablog')
});

app.get('/health',(req,res) => {
    res.send("Health Ok")
})

app.listen(port,(err) => {
    if(err) throw err;
    console.log(`App is running on port ${port}`)
})