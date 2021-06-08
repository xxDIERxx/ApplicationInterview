const fs = require('fs');
const readline = require('readline');
const path = require('path');




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