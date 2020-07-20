import { Client } from 'pg';

const clientInstance = new Client();

clientInstance.connect()
    .then(() => {
        console.log('Connected to database');
    })
    .catch((err) => {
        console.log(`Error connecting to database: ${err.message}`);
    });