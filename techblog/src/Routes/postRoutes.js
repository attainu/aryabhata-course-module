//controller
var express = require('express');
var postRouter = express.Router();
const mongodb = require('mongodb');

const url = "mongodb://localhost:27017";
var mongoClient = new mongodb.MongoClient(url);
let dbobj;
mongoClient.connect((err) => {
    if(err) throw err;
    dbobj = mongoClient.db('aryablog')
});


function postpage(){

    
    postRouter.route('/')
    .get((req,res) => {
        if(!req.session.user){
            res.redirect("/?errmessage=No Session Found! Please try again")
        }
        dbobj.collection('posts').find({isActive:true}).toArray((err,data) => {
                
            res.render('post',{postdata:data,userdata:req.session.user})
        })
    })


    postRouter.route('/displayAdd')
    .get((req,res) => {
        if(!req.session.user){
            res.redirect("/?errmessage=No Session Found! Please try again")
        }else{
            let user = req.session.user;
            res.render('addPost',{userdata:user})
        }
    })

    postRouter.route('/addPost')
        .post((req,res) => {
            
            if(!req.session.user){
                res.redirect("/?errmessage=No Session Found! Please try again")
            }
            let data = {
                title:req.body.title,
                description:req.body.description,
                createBy:req.session.user.name,
                createrId:req.session.user._id,
                isActive:true,
                tags:req.body.tag,
                date:new Date(Date.now()).toISOString(),
                lastupdatedate:new Date(Date.now()).toISOString()
            }

            dbobj.collection('posts').insert(data,(err,result)=>{
                res.redirect('/post')
            })
    })

    return postRouter;
}



module.exports = postpage