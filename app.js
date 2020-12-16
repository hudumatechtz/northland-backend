const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('', {useNewUrlParser: true})

app.use(bodyParser.urlencoded({ extended: false }));

// app.post('/', (req, res, next) => {
//     const email = req.body.email;
//     const password = req.body.password;
//     data = {
//         email: email,
//         password: password
//     }
//     res.status(200).json({message: "User data received", data: data});
// })

app.listen(3000, error => {
    if(error){
        console.log(error);
        return;
    }
    console.log('App listening on 3000');
});