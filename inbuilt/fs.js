var fs = require('fs');
var os = require('os')
//writeFile
/*
fs.writeFile('mytext.txt',"Developer Funnel",function(err){
    if(err) throw err;
    console.log("File Created")
})*/

//appendFile
/*
fs.appendFile('mytext1.pdf',"Developer Funnel1 \n",function(err){
    if(err) throw err;
    console.log("Data Addedd")
});*/

//ReadFile
/*
fs.readFile('mytext1.txt','utf-8',function(err,data){
    if(err) throw err;
    console.log(data)
})
*/

/*
fs.rename('myfile1.txt','myfile1.pdf',function(err){
    if(err) throw err;
    console.log('file rename')
})
*/

fs.unlink('mytext1.csv',function(err){
    if(err) throw err;
    console.log('file deleted')
})