require('dotenv').config();
const express = require('express');
const db = require('./db/connect');

const userRoutes = require('./routes/users.route');

const app = express();

//Connecting DB
db();

app.use(express.json()); //middleware
app.use(userRoutes); //custom middleware

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Running on PORT ${PORT}`);
});