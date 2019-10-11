import { NextFunction, Request, Response } from "express";
import { userModel } from '../models';
import handle from '../utils/errorHandler';
import { userTest } from '../utils/regexValidator'
export default class UserController {
   static async register(req : Request, res : Response, next : NextFunction) : Promise<any>{
    try {
      let { firstName, lastName, email, classification } = req.body;
      let user = { firstName, lastName, email, classification }
      if(!userTest({ user })) return next("Not a Valid User");
      res.status(200)
         .send({ sucess: true})
    }
    catch (err){
      next(err);
    }
  }

  static async searchUser(req : Request, res : Response, next : NextFunction) : Promise<any>{
    try {
      res.status(200)
         .send({ sucess: true})
    }
    catch (err){
      next(err);
    }
  }

}