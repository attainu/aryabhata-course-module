import express from 'express';
import request from 'request';
const port = process.env.PORT || 6700;
const app = express();

//static file path
app.use(express.static(__dirname+'/public'));
//html
app.set('views','./src/views');
//view engine
app.set('view engine','ejs');

app.get('/weather',(req,res) => {
    const city = req.query.city?req.query.city:'Delhi';
    const apiUrl = `http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`;
    request(apiUrl,(err,data) => {
        if(err) throw err;
        //res.send(data.body)
        let output = JSON.parse(data.body);
        res.render('index',{title:'Weather App',result:output})
    })
})

app.listen(port,(err)=>{
    if(err) throw err;
    console.log(`Server is running on port ${port}`)
})