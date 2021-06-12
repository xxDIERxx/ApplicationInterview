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
const csvfilePath = path.join(__dirname, '/Interview/Documents.csv');

myFile = fs.readFileSync(csvfilePath)
var array = myFile.toString().split("\r");
console.log(array);
let result = [];
let headers = array[0].split(",");
console.log(headers);

for (let i = 1; i < array.length - 1; i++) {
  var obj = {};
  var currentLine = array[i].split(",");
  console.log(currentLine);
  for(var j=0;j<headers.length;j++){
    obj[headers[j]] = currentLine[j];
  }
  result.push(obj);

}
   //console.log(result);
// Convert the resultant array to json and
// generate the JSON output file.
let json = JSON.stringify(result);
fs.writeFileSync('output.json', json);
console.log(json);

app.get('/Home', (req, res) => {
    res.sendFile(path.join(__dirname, '/Main.html'));
});

app.get('/getJSON',(req, res) =>{
  res.send(json);
});


