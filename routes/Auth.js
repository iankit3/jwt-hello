const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken");

router
    .post("/", (req, res) => {
        let user = {name: req.body.name, pass: req.body.pass};
        var token = jwt.sign(user, process.env.JWT_SECRET, {
            expiresIn : "30m"
        });

        res.send({token});
    })

module.exports = router;