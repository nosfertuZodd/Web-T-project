import express, { json } from 'express';
import { join, dirname } from 'path';
import { config } from 'dotenv';
import cookieParser from "cookie-parser";
import morgan from "morgan";
import cors from 'cors'
import bodyParser from "body-parser";

//---Routes
import serviceRoutes from "./routes/servicesRoutes.js";
import usersRoutes from "./routes/usersRoutes.js"
import jobRoutes from "./routes/jobRoutes.js"

//---Controllers
import globalErrorController from './controllers/errorController.js';
import AppError from './utils/AppError.js';

const __dirname = dirname('./')
config({
    path: join(__dirname, 'process.env')
})

const app = express();
app.use(morgan("dev"));
app.use(json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());

// Routes Handling

app.use('/api/v1/users', usersRoutes);
app.use('/api/v1/services', serviceRoutes);
app.use('/api/v1/jobs', jobRoutes);

//Invalid Routes Handler
app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
})

//Global Error Handler
app.use(globalErrorController);

export default app;