"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var home_1 = __importDefault(require("./home"));
var order_1 = __importDefault(require("./order"));
var app = express_1.default();
app.use('/', home_1.default);
app.use('/order', order_1.default);
exports.default = app;
