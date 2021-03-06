const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const User = require('../../models/User');
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

router.get("/test", (req, res) => res.json({ msg: "This is the users route" }));

router.post('/register', (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }
  
    User.findOne({ email: req.body.email }).then( user => {
        if(user){
            return res.status(400).json({ email: "Email already registered"})
        }
        else {
            // create new user
            const newUser = new User({
                email: req.body.email,
                password: req.body.password,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                accountType: req.body.accountType,
                birthDate: req.body.birthDate
            })

            // salting password
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser.save()
                        .then(user => {
                            const response = {
                                id: user.id,
                                firstName: user.firstName,
                                lastName: user.lastName,
                                accountType: user.accountType
                            }
                            jwt.sign(
                                response,
                                keys.secretOrKey,
                                {expiresIn: 3600},
                                (err, token) => {
                                    res.json({
                                        success: true,
                                        token: 'Bearer ' + token
                                    })
                                }
                            )
                            // res.json(response) Don't need this
                        })
                        .catch(err => console.log(err));
                })
            })
        }
    })
})

router.post('/login', (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }
  
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({email}).then( user => {
        if(!user) return res.status(404).json({email:"User not found"});

        bcrypt.compare(password, user.password)
            .then(isMatch => {
                if(isMatch){
                    const response = {
                        id: user.id,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        accountType: user.accountType
                    }

                    jwt.sign(
                        response,
                        keys.secretOrKey,
                        {expiresIn: 3600},
                        (err, token) => {
                            res.json({
                                success: true,
                                token: 'Bearer ' + token
                            })
                        }
                    )
                }
                else{
                    return res.status(400).json({password: "Senha incorreta"})
                }
            })
    })
})

module.exports = router;