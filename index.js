const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./controller/index.routes');
const orderouter = require('./controller/orderlines.routes');
const login = require('./controller/login.routes');
const register = require('./controller/register.routes');
const coat = require('./controller/coat.routes');
const skirt = require('./controller/skirt.routes');
const pants = require('./controller/pants.routes');
const searchRouter = require('./controller/search.routes');
const addCartRouter = require('./controller/add-cart.routes');
const veiwCartRouter = require('./controller/view-cart.routes');
const adminRouter = require('./controller/admin.routes');

var cors = require('cors');
const { search } = require('./controller/index.routes');
const app = express();
const port = 3000;

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

app.use(cors());
app.options('*', cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/skirt', skirt);
app.use('/pants', pants);
app.use('/coat', coat);
app.use('/order', orderouter);
app.use('/login', login);
app.use('/register', register);
app.use('/search', searchRouter);
app.use('/add-cart', addCartRouter);
app.use('/view-cart', veiwCartRouter);
app.use('/admin', adminRouter);

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

});


// render the error page
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
