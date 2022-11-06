const express = require('express');

const router = express.Router();


//Users routes

router.get('/users', (req, res) => {
    res.send('Getting all data');
});

router.get('/users/:userID', (req, res) => {
    res.send(`Getting the user details of ID: ${req.params.userID}`);
})


router.post('/users', (req, res) => {
    res.send(req.body);
});

router.put('/users/:userID', (req, res) => { //Path Parameter
    console.log('Path Params: ', req.params.userID);
    console.log('Query Params: ', req.query);
    res.send(req.body);
});

router.delete('/users/:userID',(req, res) => {
    res.send('Data is deleted successfully')
});

module.exports = router;