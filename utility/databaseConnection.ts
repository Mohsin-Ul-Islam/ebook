import { Client } from 'pg';

const clientInstance = new Client({
    connectionString: 'postgres://fsctjldaibsffr:03e8fe08783f66c234106a3223b04c0c967831730f4b0fb9531fdcbf53219769@ec2-52-72-221-20.compute-1.amazonaws.com:5432/dfo2ckfo3togjp',
    ssl: {
        rejectUnauthorized: false
    }
});



clientInstance.connect()
    .then(() => {
        console.log('Connected to database');
    })
    .catch((err) => {
        console.log(`Error connecting to database: ${err.message}`);
    });

export default clientInstance;