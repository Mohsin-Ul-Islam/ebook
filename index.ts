import express from 'express';
import helmet from 'helmet';
import logger from 'morgan';
import path from 'path';
import sassMiddleware from 'node-sass-middleware';
import routes from './routes/index';
import './utility/databaseConnection';

const app: express.Application = express();

app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use(helmet());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(sassMiddleware({
    debug: true,
    src: path.join(__dirname, '../public/'),
    dest: path.join(__dirname, '../public/'),
    indentedSyntax: false,
    sourceMap: true,
}));
app.use(express.static(path.join(__dirname, '../public')));

app.use(routes);

app.listen(process.env.PORT, function () {
    console.log(`Listening on port ${process.env.PORT}`);
});