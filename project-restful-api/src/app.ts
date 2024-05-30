import express, { Express, Request, Response, NextFunction } from 'express';
import createError from 'http-errors'

const app: Express = express();

import routerOrder from "./routes/v1/orders.route";
import routerCustomer from "./routes/v1/customers.route";
import routerUser from "./routes/v1/user.route";
import routerAuth from "./routes/v1/auth.route";
import routerProduct from "./routes/v1/products.route";
import routeCategories from './routes/v1/categories.route'
import routerBrand from "./routes/v1/brands.route";
import routerCount from "./routes/v1/count.route";
import cors from "cors";

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({message: 'Express + TypeScript Server'});
});

app.use("/api/v1/orders", routerOrder);
app.use("/api/v1/customers", routerCustomer);
app.use("/api/v1/user", routerUser);
app.use("/api/v1/auth", routerAuth);
app.use("/api/v1/products", routerProduct);
app.use('/api/v1/categories', routeCategories)
app.use("/api/v1/brands", routerBrand);
app.use("/api/v1/count", routerCount);


// catch 404 and forward to error handler
app.use(function (req: Request, res: Response, next: NextFunction) {
  next(createError(404));
});

// error handler
app.use(function (err: any, req: Request, res: Response, next: NextFunction) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  const statusCode = err.status || 500;
  res.status(statusCode).json({ 
    statusCode: statusCode, 
    message: err.message 
  })
});

export default app;