//import router pacage
const router = require("express").Router();
const { request } = require("express");

//import nodemailer
const nodemailer = require('nodemailer');


let contact = require("../models/contact.js");
//import models student js

const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const path = require("path");


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './Appoinment_slip');
    },
    filename: function (req, file, cb) {
        cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"];
    if (allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}




let upload = multer({ storage: storage });



//Create a transporter object
let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'medixoehealth',
        pass: 'boupdtqanzqxslcg'
    }
});



//add data 
router.route("/addContact").post(upload.single("file_path"), (req, res) => {

    res.send(req.file);

    const name = req.body.name;
    const email = req.body.email;
    const subject = req.body.subject;
    const massage = req.body.massage;


    const newlabAppoinment = new contact({
        name,
        email,
        subject,
        massage
    });

    /*
        const mailOptions = {
            from: 'medixoehealth@gmail.com',
            to: email,
            subject: 'Appointment details',
            text: `Dear ${first_name},\n\nYour Lab appointment Number is ${appNo}. it has been scheduled for ${date} at ${appTime}.\n\nThank you for choosing our hospital.
            (This is a system generated email)`
        };
    
    */


    //then() js promice
    newlabAppoinment.save().then(function () {


        /*
                transporter.sendMail(mailOptions, function (error, info) {
                    if (error) {
                        console.log(error);
                    } else {
                        console.log('Email sent: ' + info.response);
                    }
                });
        
        */

        //give response json format
        res.json("Employee added success");




    }).catch(function (err) {

        console.log(err);

    })



})


//read data
router.route("/readlabAppoinment").get(function (req, res) {

    labAppoinment.find().then((labAppoinments) => {

        res.json(labAppoinments);

    }).catch(function (err) {

        console.log(err);

    })
})






//export module
module.exports = router;