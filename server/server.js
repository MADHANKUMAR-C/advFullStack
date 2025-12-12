import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import studyPlanRoutes from './routes/studyPlanRoutes.js';

dotenv.config();
connectDB();

const app= express();
app.use(cors());
app.use(express.json());
app.use('/api', authRoutes);
app.use('/api', studyPlanRoutes);

app.listen(process.env.PORT || 5000, ()=>{
    console.log(`Server is running on port ${process.env.PORT || 5000}`);
});