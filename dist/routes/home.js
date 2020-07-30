"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var home_1 = __importDefault(require("../controllers/home"));
var order_1 = __importDefault(require("../controllers/order"));
var router = express_1.default.Router();
router.get('/', home_1.default.getDefaultPage);
router.get('/:id', home_1.default.getPageById);
router.get('/:id/order/success', order_1.default.getSuccessPage);
router.get('/:id/order/failure', order_1.default.getFailurePage);
exports.default = router;
