const express = require('express')
const createError = require('http-errors')
const path = require('path')

const app = express()

// Extracting arrays from the customers object
const customers = require('./routes/customer')
const { customerDetailsArray, paymentsDetailArray, productDetailsArray } = customers

//Extracting arrays from the plugins object
const plugins = require("./data/jsPlugins")

// Routes initialization
const indexRouter = require('./routes/index')
const sqlRouter = require('./routes/sql')

// Setting views to use the 'views' directory
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

//Using public folder for stylesheet and images
app.use(express.static(path.join(__dirname, 'public')))

//Using views to access the data directory
app.use(express.static(path.join(__dirname, 'data')))

// / and /sql route handlers
app.use('/', indexRouter)
app.use('/sql', sqlRouter)

// // Customer-related routes
// app.get('/customers', (req, res) => {
//   res.send(customerDetailsArray);
// });

// // Payments-related routes
// app.get('/payments', (req, res) => {
//   res.send(paymentsDetailArray);
// });

// // Products-related routes
// app.get('/products', (req, res) => {
//   res.send(productDetailsArray);
// });

// Error handler
app.use(function (req, res, next) {
  next(createError(404))
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get("env") === "development" ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render("error")
})

app.use(express.json())

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
