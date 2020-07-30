import orm from '../utility/orm';

/**
 * 
 * @param req {express.Request}
 * @param res {express.Response}
 */
function getPageById(req: any, res: any): void {
    const pageId: Number = Number.parseInt(req.params.id);
    renderPageById(res, pageId);
}

/**
 * 
 * @param req {express.Request}
 * @param res {express.Response}
 */
function getDefaultPage(req: any, res: any): void {
    const defaultPageId = 1;
    renderPageById(res, defaultPageId);
}

/**
 * 
 * @param res {express.Response}
 * @param id {number}
 */
async function renderPageById(res: any, id: Number) {
    try {
        const data = await orm.getWebpageDataById(id);
        res.render('layout', { page: 'home', data });
    }
    catch (err) {
        console.log(err.message);
        res.render('error');
    }
}

export default { getPageById, getDefaultPage };