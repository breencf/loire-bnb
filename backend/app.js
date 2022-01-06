//import packages needed
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const csurf = require("csurf");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const { ValidationError } = require("sequelize");
const indexRouter = require("./routes/index");

//import the environment to check if its dev or prod
const { environment } = require("./config");
const isProduction = environment === "production";
//initialize express
const app = express();
//load the middleware
app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.json());
//security middleware
app.use(cors());
app.use(helmet({ contentSecurityPolicy: false }));
//send the csurf cookie for any http besides GET
app.use(
  csurf({
    cookie: {
      secure: isProduction,
      sameSite: isProduction && "Lax",
      httpOnly: true,
    },
  })
);
//ROUTERS

app.use(indexRouter);

//Error Handling

app.use((_req, _res, next) => {
  const e = new Error("The requested resource couldn't be found");
  e.title = "Resource Not Found";
  e.errors = ["The requested resource couldn't be found"];
  e.status = 404;
  next(e);
});
app.use((e, _req, _res, next) => {
  if (e instanceof ValidationError) {
    e.errors = e.errors.map((e) => e.message);
    e.tltle = "Validation Error";
  }
  next(e);
});
app.use((e, _req, res, _next) => {
  res.status(e.status || 500);
  console.error(e);
  res.json({
    title: e.title || "Server Error",
    message: e.message,
    errors: e.errors,
    stack: isProduction ? null : e.stack,
  });
});

module.exports = app;
