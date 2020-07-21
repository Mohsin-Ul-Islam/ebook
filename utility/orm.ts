import client from './databaseConnection';

function getWebpageDataById(id: Number) {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await client.query('select * from webpage where id=$1;', [id]);
            const testimonials = await client.query('select * from testimonials');
            result.rows[0].testimonials = testimonials.rows;
            resolve(result.rows[0]);
        }
        catch (err) {
            reject(err);
        }
    });
}

export default { getWebpageDataById };