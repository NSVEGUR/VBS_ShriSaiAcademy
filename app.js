const fs = require('fs');
const express = require('express');
const morgan = require('morgan');
const app = express();

const entryPage = fs.readFileSync('./static/index.html', 'utf8');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorHandler');
const paymentManagerRouter = require('./routes/paymentRouter');
const ordersRouter = require('./routes/ordersRouter');

app.use(morgan('dev'));
app.use(express.json());

//JUST FOR Registering RazorPay and to be implemented clearly after wards
app.get('/', (req, res) => {
	res.end(entryPage);
});

app.use('/api/v1/paymentManager', paymentManagerRouter);
app.use('/api/v1/orders', ordersRouter);

//Unused route handler Middleware
app.use('*', (req, res, next) => {
	next(new AppError(`can't find the ${req.originalUrl} on this server`, 404));
})

//Error handling Middleware(Global Error Handler)
app.use(globalErrorHandler);

module.exports = app;

