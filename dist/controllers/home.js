"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getHomePage(req, res) {
    res.render('pages/home');
}
exports.default = { getHomePage: getHomePage };
