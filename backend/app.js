const express = require('express'); // import express
const morgan = require('morgan'); // import morgan

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');

const leaveRoutes = require('./routes/leaveRoutes');
// import leaveRoutes
const userRoutes = require('./routes/userRoutes');
// import userRoutes

const app = express();
// create an express app

// 1) MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json()); // body parser, reading data from body into req.body

app.use(express.static(`${__dirname}/public`)); // serve static files

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// 3) ROUTES
app.use('/api/v1/leaves', leaveRoutes);
app.use('/api/v1/users', userRoutes);

//Handling unhandled routes
app.all('*', (req, res, next) => {
  // const err = new Error(`Can't find ${req.originalUrl} on this server!`);
  // err.status = 'fail';
  // err.statusCode = 404;
  // next(err);

  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
