import mongoose from "mongoose";
import express from "express";
import doctorroutes from './routes/doctor-router.js';
import patientroutes from './routes/patient-router.js';
import medicalroutes from './routes/medical-router.js';

const app = express();
app.use(express.json());

app.use('/doctor',doctorroutes);
app.use('/patient',patientroutes);
app.use('/medical',medicalroutes);


mongoose.connect("mongodb://127.0.0.1:27017/she")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("Connection error:", err));


app.listen(3000,()=>{
    console.log("server connected");
})

