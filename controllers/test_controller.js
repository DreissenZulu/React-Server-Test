const express = require("express");
// Import the test module to access database functions
const model = require("../models/test_models.js");

// The router is like using app = express(), where the server is defined in another file
let router = express.Router();

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

router.get("/api/value", (req, res) => {
    model.selectAll(result => {
        res.status(200).send(result);
    })
});

router.post("/api/value", (req, res) => {
    model.insertOne(req.body.value, result => {
        res.status(200).send(result);
    })
});

module.exports = router;