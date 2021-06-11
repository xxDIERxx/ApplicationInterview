const fs = require('fs');
const readline = require('readline');
const path = require('path');
const express = require("express");
const flash = require('express-flash');
const csv = require('csvtojson');

const app = express();
app.use(flash());



const server = app.listen(8080, function () {             //create server and start listening
    var host = server.address().address
    var port = server.address().port
    console.log(`listening on http:/%s:%s/`, host, port);
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/Main.html'));
});



const csvfilePath = path.join(__dirname, '/Interview/Documents.csv');
console.log(csvfilePath);
csv()
.fromFile(csvfilePath)
.then((jsonObj)=>{
    const jsonArray = jsonObj;
    console.log(jsonArray);
})