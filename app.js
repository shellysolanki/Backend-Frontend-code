import mongoose from "mongoose";
import express from "express";
import doctorRouter from './routes/doctor-routes.js';
import patientRouter from './routes/patient-routes.js';
import medicalRouter from './routes/medical-routes.js';

// const routes = Router();
const app = express();
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/test').then(()=>{console.log("aaai gayooooo")}).catch((err)=>{console.log(err)})

app.use('/doctor',doctorRouter);
app.use('/medical',medicalRouter);
app.use('/patient',patientRouter);

app.listen(3000,()=>{
    console.log("server connected");
})

export default app;