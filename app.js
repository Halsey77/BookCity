const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require("express-session");
const bodyParser = require("body-parser");

const passport = require('./auth/passport');
const homepageRouter = require('./components/homepage/homepageRouter');
const productsRouter = require('./components/products/productsRouter');
const authRouter = require('./components/auth/authRouter');

const app = express();

// view engine setup
app.set('views', [path.join(__dirname, 'views')
                    ,path.join(__dirname, 'components/homepage')
                    ,path.join(__dirname, 'components/products')
                    ,path.join(__dirname, 'components/auth/views')]);
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({ secret: process.env.SESSION_SECRET }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());

app.use(function (req, res, next){
    res.locals.user = req.user;
    next();
});

//Router setup
app.use('/', homepageRouter);
app.use('/', authRouter);
app.use('/products', productsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
