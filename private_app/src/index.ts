// const mongoose = require('mongoose');
import app from './server';

import next from 'next';

import { config } from "./config/config";
import { logger } from "./config/logger";
import { Request, Response, NextFunction } from 'express';
import { errorConverter, errorHandler } from "./middlewares/error";
import ApiError from "./utils/ApiError";
import httpStatus from "http-status";

let server: any;
const dev = process.env.NODE_ENV !== 'production'
const next_server = next({ dev })
const handle = next_server.getRequestHandler()

// mongoose.connect(config.mongoose.url, config.mongoose.options).then(() => {
//   logger.info('Connected to MongoDB');
// });
next_server.prepare().then(() => {
  app.all('*', (req: Request, res: Response) => {
    return handle(req, res)
  })

  app.use((req: Request, res: Response, next: NextFunction) => {
    next(new ApiError(httpStatus.NOT_FOUND, "Not found"));
  });
  
  
  // convert error to ApiError, if needed
  app.use(errorConverter);
  
  // handle error
  app.use(errorHandler);

  server = app.listen(config.port, () => {
    logger.info(`Listening to port ${config.port}`);
  });

  
  // const exitHandler = () => {
  //   if (server) {
  //     server.close(() => {
  //       logger.info("Server closed");
  //       process.exit(1);
  //     });
  //   } else {
  //     process.exit(1);
  //   }
  // };
  
  // const unexpectedErrorHandler = (error : any) => {
  //   logger.error(error);
  //   exitHandler();
  // };
  
  // process.on("uncaughtException", unexpectedErrorHandler);
  // process.on("unhandledRejection", unexpectedErrorHandler);
  

  
})