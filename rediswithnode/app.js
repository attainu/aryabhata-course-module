let express = require('express');
let axios = require('axios');
let redis = require('redis');
let app = express();
let port = 8777;

const client = redis.createClient({
    host:'localhost',
    port:6379
})

app.get('/data',(req,res) => {
    const userinput = (req.query.country).trim();
    const url = `https://en.wikipedia.org/w/api.php?action=parse&format=json&section=0&page=${userinput}`;
    
    // check in redis
    return client.get(`wiki:${userinput}`,(err,result) => {
        if(result){
            const output = JSON.parse(result);
            //return res as found in redis
            return res.send(output)
        }else{
            return axios.get(url)
                .then(response => {
                    //got response form api
                    const output = response.data;
                    // save in redis
                    client.setex(`wiki:${userinput}`,3600,JSON.stringify({source:'Redis',output}))
                    //return api response as data was not in redis
                    res.send({source:'api',output})
                })
        }
    })

})

app.listen(port,(err) => {
    console.log(`Server is running on port ${port}`)
})