"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pg_1 = require("pg");
var clientInstance = new pg_1.Client({
    connectionString: process.env.DB_URL,
    ssl: process.env.NODE_ENV === 'development' ? { rejectUnauthorized: false } : true
});
clientInstance.connect()
    .then(function () {
    console.log('Connected to database');
})
    .catch(function (err) {
    console.log("Error connecting to database: " + err.message);
});
exports.default = clientInstance;
