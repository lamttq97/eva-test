declare namespace Express {
    export interface Request {
        query: any;
        user: any;
    }
    export interface Response {
        query: any;
    }
  }