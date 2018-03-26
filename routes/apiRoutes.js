// ===============================================================================
// Dependencies
const db = require("../models");
const express = require('express');
const router = express.Router();
const path = require("path");
const uuidv4 = require('uuid/v4');

// Routes
//====================

// POST route for checkingif a user exists. 
module.exports = function (app) {
    // router.post("/api/user/credentialcheck", function (req, res) {
    //     db.User.findOne({
    //         where: {
    //             email: req.body.email,
    //             password: req.body.password
    //         }
    //     }).then(function (data) {
    //         if (data) {
    //             req.session.userId = data.dataValues.id;
    //             res.json({ success: true })
    //         } else {
    //             res.json({ success: false })
    //         };
    //     });
    // });


//========================

// Create NEW USER


app.post("/api/user", function (req, res) {

    console.log('hello', req.body);

    db.User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    }).then(function () {
        res.end();
    }).catch(function(err) {
        console.log("user creation failed");
        res.status(400).send(err);
    })
    // res.json(User);
});

}





























// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

// var tableData = require("../data/tableData");
// var waitListData = require("../data/waitinglistData");


// // ===============================================================================
// // ROUTING
// // ===============================================================================

// module.exports = function(app) {
//   // API GET Requests
//   // Below code handles when users "visit" a page.
//   // In each of the below cases when a user visits a link
//   // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
//   // ---------------------------------------------------------------------------

//   app.get("/api/tables", function(req, res) {
//     res.json(tableData);
//   });

//   app.get("/api/waitlist", function(req, res) {
//     res.json(waitListData);
//   });

//   // API POST Requests
//   // Below code handles when a user submits a form and thus submits data to the server.
//   // In each of the below cases, when a user submits form data (a JSON object)
//   // ...the JSON is pushed to the appropriate JavaScript array
//   // (ex. User fills out a reservation request... this data is then sent to the server...
//   // Then the server saves the data to the tableData array)
//   // ---------------------------------------------------------------------------

//   app.post("/api/tables", function(req, res) {
//     // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
//     // It will do this by sending out the value "true" have a table
//     // req.body is available since we're using the body-parser middleware
//     if (tableData.length < 5) {
//       tableData.push(req.body);
//       res.json(true);
//     }
//     else {
//       waitListData.push(req.body);
//       res.json(false);
//     }
//   });

//   // ---------------------------------------------------------------------------
//   // I added this below code so you could clear out the table while working with the functionality.
//   // Don"t worry about it!

//   app.post("/api/clear", function() {
//     // Empty out the arrays of data
//     tableData = [];
//     waitListData = [];

//     console.log(tableData);
//   });
// };
