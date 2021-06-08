$(document).ready(function(){

    fs.readFile('Documents.csv' ,'urf8', (err, data) =>{
        if (err){
            console.error(err)
            return
        }
        console.log(data)
    })
});




