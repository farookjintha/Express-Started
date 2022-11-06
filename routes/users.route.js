const express = require('express');
const Users = require('../models/user.model');
const router = express.Router();


//Users routes

router.get('/users', (req, res) => {
    try{
        Users.find((err, data) => {
            if(err){
                return res.status(400).send({message: 'Error while retrieving users data'});
            }

            return res.status(200).send(data);
        });
    }catch(error){
        res.status(500).send({message: 'Internal Server Error'});
    }
});

router.get('/users/:userID', (req, res) => {
    try{
        Users.find({_id: req.params.userID}, (err, data) => {
            if(err){
                return res.status(400).send({message: 'Error while retrieving users data'});
            }

            res.status(200).send(data);
        });
    }catch(error){
        res.status(500).send({message: 'Internal Server Error'});
    }
})


router.post('/users', (req, res) => {
    try{
        let user = new Users(req.body);
        user.save((err, data) => {
            if(err){
                return res.status(400).send({message: "Error while adding a new user."});
            }
            res.status(201).send({id: data._id, message: "User has been added successfully."})
        });

    }catch(error){
        res.status(500).send({message: 'Internal Server Error'});
    }
});

router.put('/users/:userID', (req, res) => { //Path Parameter
    try{
        Users.findByIdAndUpdate({_id: req.params.userID}, {$set: req.body}, (err, data) => {
            if(err){
                return res.status(400).send({message: "Error while updating an existing user."});
            }
            res.status(201).send({id: data._id, message: "User has been updated successfully."});
        })
    }catch(error){
        res.status(500).send({message: 'Internal Server Error'});
    }
});

router.delete('/users/:userID',(req, res) => {
    try{
        Users.deleteOne({_id: req.params.userID}, (err, data) => {
            if(err){
                return res.status(400).send({message: "Error while deleting an user."});
            }
            res.status(200).send({message: "User has been deleted successfully."});
        })
    }catch(error){
        res.status(500).send({message: 'Internal Server Error'});
    }
});

module.exports = router;