const express = require('express')
const router = express.Router();
require('../db/conn');
const User = require("../models/userSchema");
router.get('/', (req, res) => {
    res.send("Homepage");
})

router.get('/about', (req, res) => {
    res.send("About");
})

router.get('/contact', (req, res) => {
    res.send("Contact");
})
router.post('/register', (req, res) => {
    const { name, email, phone, work, password, cpassword } = req.body;
    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.staus(422).json({ error: "Please enter error" });
    }
    User.findOne({ email: email })
        .then((userExist) => {
            if (userExist) {
                return res.staus(422).json({ error: "Email exists" });
            }
            const user = new User({ name, email, phone, work, password, cpassword })
            user.save().then(() => {
                res.status(201).json("Success");
            }).catch((err) => {
                res.status(500).json(err)
            })
        })
    //console.log(name);
    //res.json({message:req.body});
    //res.send("Register");

})

module.exports = router;