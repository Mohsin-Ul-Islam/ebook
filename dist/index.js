"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var helmet_1 = __importDefault(require("helmet"));
var morgan_1 = __importDefault(require("morgan"));
var path_1 = __importDefault(require("path"));
var node_sass_middleware_1 = __importDefault(require("node-sass-middleware"));
var index_1 = __importDefault(require("./routes/index"));
require("./utility/databaseConnection");
var app = express_1.default();
app.set('views', path_1.default.join(__dirname, '../views'));
app.set('view engine', 'ejs');
app.use(helmet_1.default());
app.use(morgan_1.default('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(node_sass_middleware_1.default({
    debug: process.env.NODE_ENV === 'development',
    src: path_1.default.join(__dirname, '../public/'),
    dest: path_1.default.join(__dirname, '../public/'),
    indentedSyntax: false,
    sourceMap: true,
}));
app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
app.use(index_1.default);
app.listen(process.env.PORT, function () {
    console.log("Listening on port " + process.env.PORT);
});
