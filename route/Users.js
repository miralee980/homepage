const express = require("express");
const users = express.Router();
const cors = require('cors');
// const jwt = require("jsonwebtoken");
// const bcrypt = require('bcrypt');

users.use(cors());

// process.env.SECRET_KEY = 'secret';

users.post('/register', (req, res) => {
    // const userData = {
    //     name : req.body.name,
    //     job_position : req.body.job_position,
    //     job_dept : req.body.job_dept,
    //     job_description : req.body.job_description,
    //     motto : req.body.job_motto,
    //     auth_level : req.body.auth_level,
    //     profile_img : req.body.profile_img,
    //     password : req.body.password
    // }
    res.send({message: "Register User"});
});

users.post('/login', (req, res) =>{
    res.send({message: "User Login"});
});

module.exports = users;