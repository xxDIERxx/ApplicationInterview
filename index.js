exports.printMsg = function(){
    console.log("This is a message from the demo package");
}

const express = require("express");                 //main express module
const ejs = require('ejs');                         //for html js templates
const flash = require('express-flash');             //allows for sending messages to ejs - errors, etc.
const session = require('express-session');         //creates and manages sessions
const passport = require('./authentication.js')(    //authentication module that sets up passport and returns it
    Users.getByName,
    Users.getById
);

const app = express();                              //create express app
app.set('view engine', 'ejs');                      //set rendering engine to ejs

app.use(flash());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));

const port = process.env.PORT || 8080;
const server = app.listen(port, () => {             //create server and start listening
    const {address, port} = server.address();
    console.log(`listening on ${address}:${port}`);
});