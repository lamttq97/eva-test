import express, { Express, Request, Response, NextFunction } from "express";

// import helmet from "helmet";
import mongoSanitize from 'express-mongo-sanitize'
import cors from "cors";
// const config = require('./config/config');
import { authLimiter } from "./middlewares/rateLimiter";
import routes from "./routes/v1";

const app : Express = express();

// set security HTTP headers
// app.use(helmet());

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// sanitize request data
app.use(mongoSanitize());

// enable cors
app.use(cors());
app.options("*", cors());

// v1 api routes
app.use("/v1", authLimiter, routes);

// send back a 404 error for any unknown api request


export default app;
