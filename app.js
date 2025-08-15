import createError from 'http-errors';
import express, { json, urlencoded } from 'express';
import { resolve } from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import session from 'express-session';
import storeBuilder from 'connect-session-sequelize';
import indexRouter from './routes/index.js';
import sequelize from './database/main.js';
import { initializeDatabase } from './database/index.js';
const app = express();
let SequelizeStore = storeBuilder(session.Store);
let SessionStore = new SequelizeStore({ db: sequelize });
SessionStore.sync();
// view engine setup
app.set('views', resolve('views'));
app.set('view engine', 'hbs');
initializeDatabase()
app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret: "1234",
  resave: false,
  saveUninitialized: true,
  store: SessionStore
}));
app.use(function (req, res, next) {
  if (req.session.user) {
    res.locals.Librarian = Boolean(req.session.user.authority);
    res.locals.Member = !Boolean(req.session.user.authority);
  }
  next();
})
app.use(express.static(resolve('node_modules/bootstrap/dist')));
app.use(express.static(resolve('public')));
app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;
