const express = require('express');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const app = express();

//static path
app.use(express.static(__dirname+'/public'));
app.set('view engine','ejs')

app.use(bodyParser.json());
app.use(fileUpload());

app.get('/',(req,res) => {
    res.render('app.ejs')
});

app.post('/profile',(req,res) => {
    console.log(req.files)
    console.log(req.body)
    const imagefile = req.files.avatar;
    if(req.files.avatar.mimetype !== 'image/jpeg'){
        res.send("Please upload only jpg")
    }else{
        imagefile.mv(`${__dirname}/public/images/${imagefile.name}`,function(err,data){
            if(err) throw err;
            //res.send({file:`uploads/${imagefile.name}`})
            res.render('abc',{image:`${imagefile.name}`})
        })
    }
    
})

app.listen(9800)