const express=require('express');
const app=express();
const nodemailer = require('nodemailer');
require('dotenv').config();

const PORT=process.env.PORT || 6000;

app.get('/',(req,res)=>{
    res.send('hello')
})

app.listen(PORT,()=>{
    console.log('Server ')
})
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'nizuthasli15@gmail.com',
    pass: process.env.GMAILPASSWORD
  }
});

var mailOptions = {
  from: 'nizuthasli15@gmail.com',
  to: 'thaslibanujas7@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});