import orm from '../utility/orm';

/**
 * 
 * @param req {express.Request}
 * @param res {express.Response}
 */
function getSuccessPage(req: any, res: any) {
    getOrderPage(req.params.id, true, res);
}


/**
 * 
 * @param req {express.Request}
 * @param res {express.Response}
 */
function getFailurePage(req: any, res: any) {
    console.log(req.params.id);
    getOrderPage(req.params.id, false, res);
}

/**
 * 
 * @param id {number}
 * @param orderStatus {boolean}
 * @param res {express.Response}
 */
async function getOrderPage(id: Number, orderStatus: boolean, res: any) {
    try {
        const data: any = await orm.getWebpageDataById(id);
        data.orderStatus = orderStatus;
        res.render('layout', { page: 'order', data });
    }
    catch (err) {
        console.log(err.message);
        res.render('error');
    }
}

export default { getSuccessPage, getFailurePage };