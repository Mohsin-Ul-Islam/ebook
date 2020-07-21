import { Client } from 'pg';

const clientInstance: Client = new Client(
    {
        connectionString: process.env.DB_URL,
        ssl: true
    }
);

clientInstance.connect()
    .then(() => {
        console.log('Connected to database');
    })
    .catch((err) => {
        console.log(`Error connecting to database: ${err.message}`);
    });

export default clientInstance;