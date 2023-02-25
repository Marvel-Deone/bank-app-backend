require('dotenv').config()
const nodemailer = require("nodemailer")

// const sendMail = async ({email, otp, subject}) =>{

//     // Mine
//     return new Promise((resolve, reject) => {
//         let transporter = nodemailer.createTransport({
//             service: 'gmail',
//             auth: {
//                 user: 'folagbadeolowofela05@gmail.com',
//                 pass: 'Folagbade626261@08066573156'
//             }
//         })


//         const mail_options = {
//             from: 'folagbadeolowofela05@gmail.com',
//             to: email,
//             subject,
//             text: `Welcome to Bank App Your Verification code is shown below Code:${otp}`
//         }

//         transporter.sendMail(mail_options, function(err, info){
//             if (err) {
//                 console.log(err);
//                 return reject({msg: `An error occured while sending`})
//             }
//             return resolve({msg: `Email sent successfully`})
//         } )

//         // let _resp = await mailTransporter.sendMail(mail)
//     //    if(_resp){
//     //     let msg = "A code has been send to your email"
//     //     return msg
//     //    }
//     //    return true
//     // } catch (error) {
//     //     throw error
//     // }


//     })






















//     // try {
//     //     let mailTransporter = await nodemailer.createTransport({
//     //         service: 'gmail',
//     //         host: 'smtp.gmail.com',
//     //         port: 465,
//     //         secure: true,
//     //         auth: {
//     //             user:process.env.EMAIL,
//     //             pass:process.env.PASS,
//     //         },
//     //     });

//     //     // let mailTransporter = await nodemailer.createTransport({
//     //     //     service: 'gmail',
//     //     //     auth: {
//     //     //         type: 'OAuth2',
//     //     //         user:process.env.EMAIL,
//     //     //         pass:process.env.PASS,
//     //     //         clientId: process.env.OAUTH_CLIENTID,
//     //     //         clientSecret: process.env.OAUTH_CLIENT_SECRET,
//     //     //     },
//     //     // });
//     //     const mail = {
//     //         from:process.env.EMAIL,
//     //         to:email,
//     //         subject,
//     //         text:`Welcome to Bank App Your Verification code is shown below Code:${otp}`
//     //     }
//     //    let _resp = await mailTransporter.sendMail(mail)
//     //    if(_resp){
//     //     let msg = "A code has been send to your email"
//     //     return msg
//     //    }
//     //    return true
//     // } catch (error) {
//     //     throw error
//     // }
// }

const sendMail = async () =>{

    // Mine
    return new Promise((resolve, reject) => {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'folagbadeolowofela05@gmail.com',
                pass: 'mzmotuydegrjwuvx'
            }
        })


        const mail_options = {
            from: 'folagbadeolowofela05@gmail.com',
            to: 'marvelpro788@gmail.com',
            subject: 'Banka App',
            text: `Welcome to Bank App Your Verification code is shown below Code`
        }

        transporter.sendMail(mail_options, function(err, info){
            if (err) {
                console.log(err);
                return reject({msg: `An error occured while sending`})
            }
            return resolve({msg: `Email sent successfully`})
        } )

    })

}
module.exports = sendMail
