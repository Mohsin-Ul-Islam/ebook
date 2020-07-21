import { Client } from 'pg';

const clientInstance: Client = new Client(
    {
        connectionString: process.env.DATABASE_URL,
        ssl: process.env.NODE_ENV === 'development' ? { rejectUnauthorized: false } : true
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