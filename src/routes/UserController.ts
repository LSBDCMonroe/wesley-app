import { NextFunction, Request, Response } from "express";
import { urlModel } from '../models';
import handle from '../utils/errorHandler';

class UrlController {

   static async register(req : Request, res : Response, next : NextFunction) : Promise<any>{
    try {
      res.status(200)
         .send({ sucess: true})
    }
    catch (err){
      next(err);
    }
  }
}

export default UrlController;