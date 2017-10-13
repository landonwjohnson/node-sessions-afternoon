const users = require('../models/users');
let id = 1;

module.exports = {
    login: (req, res, next) => {        //This method should use username and password from the request body to find a user object in the users array with the same user/pass combination.
        const { session } = req;    
        const { username, password } = req.body;

        const user = users.find( user => user.username === username && user.password === password );

        if (user) {
            session.user.username = user.username;
            res.status(200).send(session.user);
        } else {
            res.status(500).send('Unauthorized.');
        }  
    },
    register: (req, res, next) => {     //This method should look for a username and password on the request body and then create a user object. 
        const { session } = req;        
        const { username, password } = req.body;

        users.push({ id, username, password });
        id++;

        session.user.username = username;

        res.status(200).send( session.user );

    },
    signout: (req, res, next) => {       //This method is responsible for destroying the session and returning the session
        const { session } = req;       
        session.destroy();
        res.status(200).send( req.session );
    },
    getUser: (req, res, next) => {      //This method is responsible for reading the user object off of session and return it with a status of 200.
        const { session } = req;        
        res.status(200).send( session.user );
    }
}