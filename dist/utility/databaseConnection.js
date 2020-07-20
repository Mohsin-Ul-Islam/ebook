"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pg_1 = require("pg");
var clientInstance = new pg_1.Client();
clientInstance.connect()
    .then(function () {
    console.log('Connected to database');
})
    .catch(function (err) {
    console.log("Error connecting to database: " + err.message);
});
