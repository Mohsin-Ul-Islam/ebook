"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var databaseConnection_1 = __importDefault(require("./databaseConnection"));
/**
 *
 * @param id {number}
 */
function getWebpageDataById(id) {
    var _this = this;
    return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
        var result, headings_id, paragraphs_id, colors_id, images_id, links_id, headings, paragraphs, colors, images, links, dynamic_assets, testimonials_result, testimonials, data, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 9, , 10]);
                    return [4 /*yield*/, databaseConnection_1.default.query('select * from webpages where id=$1;', [id])];
                case 1:
                    result = _a.sent();
                    headings_id = result.rows[0].headings_id;
                    paragraphs_id = result.rows[0].paragraphs_id;
                    colors_id = result.rows[0].colors_id;
                    images_id = result.rows[0].images_id;
                    links_id = result.rows[0].links_id;
                    return [4 /*yield*/, getHeadingsById(headings_id)];
                case 2:
                    headings = _a.sent();
                    return [4 /*yield*/, getParagraphsById(paragraphs_id)];
                case 3:
                    paragraphs = _a.sent();
                    return [4 /*yield*/, getColorsById(colors_id)];
                case 4:
                    colors = _a.sent();
                    return [4 /*yield*/, getImagesById(images_id)];
                case 5:
                    images = _a.sent();
                    return [4 /*yield*/, getLinksById(links_id)];
                case 6:
                    links = _a.sent();
                    return [4 /*yield*/, getAssetsByWebpageId(id)];
                case 7:
                    dynamic_assets = _a.sent();
                    return [4 /*yield*/, databaseConnection_1.default.query('select * from testimonials')];
                case 8:
                    testimonials_result = _a.sent();
                    testimonials = testimonials_result.rows;
                    data = {
                        headings: headings,
                        paragraphs: paragraphs,
                        colors: colors,
                        testimonials: testimonials,
                        images: images,
                        links: links,
                        dynamic_assets: dynamic_assets
                    };
                    resolve(data);
                    return [3 /*break*/, 10];
                case 9:
                    err_1 = _a.sent();
                    reject(err_1);
                    return [3 /*break*/, 10];
                case 10: return [2 /*return*/];
            }
        });
    }); });
}
/**
 *
 * @param id {number}
 */
function getLinksById(id) {
    var _this = this;
    return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
        var result, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, databaseConnection_1.default.query('select * from links where id=$1;', [id])];
                case 1:
                    result = _a.sent();
                    resolve(result.rows[0]);
                    return [3 /*break*/, 3];
                case 2:
                    err_2 = _a.sent();
                    reject(err_2);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); });
}
/**
 *
 * @param id {number}
 */
function getColorsById(id) {
    var _this = this;
    return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
        var result, err_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, databaseConnection_1.default.query('select * from colors where id=$1;', [id])];
                case 1:
                    result = _a.sent();
                    resolve(result.rows[0]);
                    return [3 /*break*/, 3];
                case 2:
                    err_3 = _a.sent();
                    reject(err_3);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); });
}
/**
 *
 * @param id {number}
 */
function getAssetsByWebpageId(id) {
    var _this = this;
    return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
        var result, scripts, stylesheets, err_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, databaseConnection_1.default.query('select * from dynamic_assets where webpages_id=$1;', [id])];
                case 1:
                    result = _a.sent();
                    scripts = result.rows.filter(function (a) { return a.asset_type === 'script'; });
                    stylesheets = result.rows.filter(function (a) { return a.asset_type === 'stylesheet'; });
                    resolve({ scripts: scripts, stylesheets: stylesheets });
                    return [3 /*break*/, 3];
                case 2:
                    err_4 = _a.sent();
                    reject(err_4);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); });
}
/**
 *
 * @param id {number}
 */
function getImagesById(id) {
    var _this = this;
    return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
        var result, err_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, databaseConnection_1.default.query('select * from images where id=$1;', [id])];
                case 1:
                    result = _a.sent();
                    resolve(result.rows[0]);
                    return [3 /*break*/, 3];
                case 2:
                    err_5 = _a.sent();
                    reject(err_5);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); });
}
/**
 *
 * @param id {number}
 */
function getHeadingsById(id) {
    var _this = this;
    return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
        var result, err_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, databaseConnection_1.default.query('select * from headings where id=$1;', [id])];
                case 1:
                    result = _a.sent();
                    resolve(result.rows[0]);
                    return [3 /*break*/, 3];
                case 2:
                    err_6 = _a.sent();
                    reject(err_6);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); });
}
/**
 *
 * @param id {number}
 */
function getParagraphsById(id) {
    var _this = this;
    return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
        var result, err_7;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, databaseConnection_1.default.query('select * from paragraphs where id=$1;', [id])];
                case 1:
                    result = _a.sent();
                    resolve(result.rows[0]);
                    return [3 /*break*/, 3];
                case 2:
                    err_7 = _a.sent();
                    reject(err_7);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); });
}
exports.default = { getWebpageDataById: getWebpageDataById };
