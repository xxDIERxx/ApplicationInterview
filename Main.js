$(document).ready(function(){

});

const fs = require('fs)')

fs.readFile('/Interview/Documents.csv' ,'urf8', (err, data) =>{
    if (err){
        console.error(err)
        return
    }
    console.log(data)
})




