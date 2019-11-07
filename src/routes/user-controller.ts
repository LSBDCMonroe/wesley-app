import { NextFunction, Request, Response } from "express";
import { userModel } from '../models';
import handle from '../utils/errorHandler';
import { userTest } from '../utils/regexValidator'

export default class UserController {
   static async register(req : Request, res : Response, next : NextFunction) : Promise<any>{
    try {
      let { firstName, lastName, email, classification, signature } = req.body;
      let user = { firstName, lastName, email, classification, signature }
      //if(!userTest({ user })) return next("Not a Valid User");

      await new userModel(user).save();
      res.status(200)
         .send({ sucess: true, user })
    }
    catch (err){
      next(err);
    }
  }

  static async searchUser(req : Request, res : Response, next : NextFunction) : Promise<any>{
    try {
      const { email } = req.body;
      const user = await userModel.findOne({ email });
      if(!user) return next('Not a Valid User');
        res.status(200)
           .send({ sucess: true, user})
    }
    catch (err){
      next(err);
    }
  }

  static async addVisit(req : Request, res : Response, next : NextFunction) : Promise<any>{
    try {
      const { email, kayakType } = req.body;
      await userModel.updateOne({ email }, { $push : { visit :  kayakType  }  });
        res.status(200)
           .send({ sucess: true})
    }
    catch (err){
      next(err);
    }
  }

}
