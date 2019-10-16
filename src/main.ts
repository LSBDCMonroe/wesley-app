import * as express from "express";
import { NextFunction, Request, Response } from "express";
import { SetRoutes } from "./routes";
import { InitMiddleWare, ConnectDB } from "./middlewares";
import { Port, MongoURI } from "./config";

const app = express();
InitMiddleWare(app);
SetRoutes(app);
// app.use('/', 
//   express.static((require('path').resolve('./client/dist/wesleyApp/')))
// )

app.listen(Port, "localhost");
console.log(`Running on Port : ${Port}`);

ConnectDB(MongoURI).catch((err: Error) => {
  console.log("Unable to Connect");
});

//app.get('*', (req: Request, res: Response)=> res.redirect('/'));

app.use((err: any, req: Request, res: Response, next: NextFunction): void => {

    res.status(400)
        .send({ success: false, message: err.message || err });
  }
);

export default app;