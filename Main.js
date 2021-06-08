$(document).ready(function(){

    fs.readFile('Interview/Documents.csv' ,'urf8', (err, data) =>{
        if (err){
            console.error(err)
            return
        }
        console.log(data)
    })
});




