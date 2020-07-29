function getSuccessPage(req: any, res: any) {
    res.render('pages/order', { status: true });
}

function getFailurePage(req: any, res: any) {
    res.render('pages/order', { status: false });
}

export default { getSuccessPage, getFailurePage };