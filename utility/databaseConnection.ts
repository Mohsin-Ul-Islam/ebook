import { Client } from 'pg';

const clientInstance = new Client({
    connectionString: process.env.DB_URL,
    ssl: {
        rejectUnauthorized: false
    }
});



clientInstance.connect()
    .then(() => {
        console.log('Connected to database');
    })
    .catch((err) => {
        console.log(`Error connecting to database: ${err}`);
    });

export default clientInstance;