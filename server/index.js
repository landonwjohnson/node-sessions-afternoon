const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

const server = express();

const port = 3000;


server.listen(port, function(req, res, next){
    return `listening to ${port}`;
})