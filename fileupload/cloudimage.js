const express = require('express');
const bodyParser = require('body-parser');
const cloudinary = require('cloudinary').v2
const app = express();

app.set('view engine','ejs')

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

cloudinary.config({
    cloud_name: 'aryaattainu',
    api_key: "524616189137948",
    api_secret: 'AajCGAS1KvgH0sRod3fK9Vlu5Ro'
})

app.get('/',(req,res) => {
    res.render('app.ejs')
});

app.post('/profile',(req,res) => {
    const data ={
        image: req.body.image
    }
    
    cloudinary.uploader.upload(data.image)
    .then((result) => {
        res.send({
            message:'success',
            result
        })
    })
    .catch(err => {
        message:'failure',
        err
    })
    
})

app.listen(9800)