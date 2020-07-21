import orm from '../utility/orm';

function getPageById(req: any, res: any): void {
    const pageId: Number = Number.parseInt(req.params.id);
    renderPageById(res, pageId);
}

function getDefaultPage(req: any, res: any): void {
    const defaultPageId = 1;
    renderPageById(res, defaultPageId);
}

async function renderPageById(res: any, id: Number) {
    try {
        const data = await orm.getWebpageDataById(id);
        res.render('pages/home', { data });
    }
    catch (err) {
        console.log(err.message);
        res.render('pages/error');
    }
}

export default { getPageById, getDefaultPage };