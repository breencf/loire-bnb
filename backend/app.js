//import packages needed
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const csurf = require("csurf");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
//import the environment to check if its dev or prod
const {environment} = require("./config");
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
const indexRouter = require ("./routes/index");

app.use(indexRouter);

module.exports = app;
