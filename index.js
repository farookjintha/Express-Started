const express = require('express');

const app = express();

app.use(express.json()); //middleware

app.get('/users', (req, res) => {
    res.send('Getting all data');
});

app.get('/users/:userID', (req, res) => {
    res.send(`Getting the user details of ID: ${req.params.userID}`);
})

app.post('/users', (req, res) => {
    res.send(req.body);
});

app.put('/users/:userID', (req, res) => { //Path Parameter
    console.log('Path Params: ', req.params.userID);
    console.log('Query Params: ', req.query);
    res.send(req.body);
});

app.delete('/users/:userID',(req, res) => {
    res.send('Data is deleted successfully')
});


const PORT = 8000;

app.listen(PORT, () => {
    console.log(`Running on PORT ${PORT}`);
});