const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const cors = require('cors');
const keys = require('../../config/keys') 

const transport = {
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
    user: keys.email_user,
    pass: keys.email_password
  }
}

const transporter = nodemailer.createTransport(transport)

transporter.verify((errors, success) => {
    if(errors){
        console.log(errors)
    }
    else{
        console.log('Email server is working')
    }
})

router.post('/send', (req, res, next) => {
    const name = req.body.name
    const email = req.body.email
    const message = req.body.msg
    const content = `name: ${name} \n email: ${email} \n message: ${message}`

    const mail ={
        from: name,
        to: 'clubeuniversousa@gmail.com',
        subject: `New message from ${name}'s contact form`,
        text: content
    }

    transporter.sendMail(mail, (err, data) => {
        if(err){
            res.json({
                status: 'fail'
            })
        }
        else{
            res.json({
                status: 'success'
            })
        }
    })
})

router.get("/test", (req, res) => res.json({ msg: "This is the email route" }));

module.exports = router;