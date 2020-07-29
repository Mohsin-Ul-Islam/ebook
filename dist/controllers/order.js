"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getSuccessPage(req, res) {
    res.render('pages/order', { status: true });
}
function getFailurePage(req, res) {
    res.render('pages/order', { status: false });
}
exports.default = { getSuccessPage: getSuccessPage, getFailurePage: getFailurePage };
