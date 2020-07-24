import client from './databaseConnection';

/**
 * 
 * @param id {number}
 */
function getWebpageDataById(id: Number) {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await client.query('select * from webpages where id=$1;', [id]);

            const headings_id = result.rows[0].headings_id;
            const paragraphs_id = result.rows[0].paragraphs_id;
            const colors_id = result.rows[0].colors_id;
            const images_id = result.rows[0].images_id;

            const headings = await getHeadingsById(headings_id);
            const paragraphs = await getParagraphsById(paragraphs_id);
            const colors = await getColorsById(colors_id);
            const images = await getImagesById(images_id);

            const testimonials_result = await client.query('select * from testimonials');

            const testimonials = testimonials_result.rows;

            const data = {
                headings,
                paragraphs,
                colors,
                testimonials,
                images
            };

            resolve(data);
        }
        catch (err) {
            reject(err);
        }
    });
}


/**
 * 
 * @param id {number}
 */
function getColorsById(id: Number) {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await client.query('select * from colors where id=$1;', [id]);
            resolve(result.rows[0]);
        }
        catch (err) {
            reject(err);
        }
    });
}

/**
 * 
 * @param id {number}
 */
function getImagesById(id: Number) {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await client.query('select * from images where id=$1;', [id]);
            resolve(result.rows[0]);
        }
        catch (err) {
            reject(err);
        }
    });
}

/**
 * 
 * @param id {number}
 */
function getHeadingsById(id: Number) {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await client.query('select * from headings where id=$1;', [id]);
            resolve(result.rows[0]);
        }
        catch (err) {
            reject(err);
        }
    });
}

/**
 * 
 * @param id {number}
 */
function getParagraphsById(id: Number) {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await client.query('select * from paragraphs where id=$1;', [id]);
            resolve(result.rows[0]);
        }
        catch (err) {
            reject(err);
        }
    });
}

export default { getWebpageDataById };