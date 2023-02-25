const express = require('express');
const { routes } = require('./routes/routes');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT
const cors = require('cors')
const mongoose  = require('mongoose')
const nodemailer = require("nodemailer");
const { getMaxListeners } = require('./models/usersModel');

app.use(cors());
app.use(express.urlencoded({extended:true}))
app.use(express.json());

const URI = process.env.MONGODB_URI
mongoose.connect(URI, (err)=> {
    {!err ? console.log("Connected Successfully") : console.log(err);}
})
mongoose.Promise = global.Promise;

// const sendMail = async () =>{

//     // Mine
//     return new Promise((resolve, reject) => {
//         let transporter = nodemailer.createTransport({
//             service: 'gmail',
//             auth: {
//                 user: 'folagbadeolowofela05@gmail.com',
//                 pass: 'mzmotuydegrjwuvx'
//             }
//         })


//         const mail_options = {
//             from: 'folagbadeolowofela05@gmail.com',
//             to: 'marvelpro788@gmail.com',
//             subject: 'Banka App',
//             text: `Welcome to Bank App Your Verification code is shown below Code`
//         }

//         transporter.sendMail(mail_options, function(err, info){
//             if (err) {
//                 console.log(err);
//                 return reject({msg: `An error occured while sending`})
//             }
//             return resolve({msg: `Email sent successfully`})
//         } )

//     })

// }

app.get('/', (req,res) =>{
    res.json("Fola is a good girl")
  
})
app.use('/api', routes)

app.listen(PORT)
