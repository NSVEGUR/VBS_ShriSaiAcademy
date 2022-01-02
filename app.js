//REQUIRED NODE MODULES
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const app = express();

//REQUIRED CREATED MODULES
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorHandler');
const viewRouter = require('./routes/viewRouter');
const paymentManagerRouter = require('./routes/paymentRouter');
const ordersRouter = require('./routes/ordersRouter');
const mailerRouter = require('./routes/mailerRouter');

app.use(morgan('dev'));
app.use(express.json());

//SETTING VIEW ENGINE
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

//SERVING STATIC FILES
app.use(express.static(path.join(__dirname, 'public')));

//ROUTES
app.use('/', viewRouter);
app.use('/api/v1/paymentManager', paymentManagerRouter);
app.use('/api/v1/orders', ordersRouter);
app.use('/api/v1/sendMail', mailerRouter);

//UNUSED ROUTES MIDDLEWARE
app.use('*', (req, res, next) => {
	next(new AppError(`can't find the ${req.originalUrl} on this server`, 404));
})

//GLOBAL ERROR HANDLING MIDDLEWARE
app.use(globalErrorHandler);

module.exports = app;

