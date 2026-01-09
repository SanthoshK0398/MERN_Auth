import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import cookieParser from 'cookie-parser';
import connectDB from './config/mongodb.js';
import authRouter from './routes/authRoutes.js';
import userRouter from './routes/userRoutes.js';

const app = express();
const PORT = process.env.PORT || 4000;
connectDB();

app.use(express.json());

const allowedOrigins = process.env.FRONTEND_URL;
//cors used to send the cookies in the response.
app.use(cookieParser());   
app.use(cors({origin: allowedOrigins, credentials: true}));

// API endpoints
app.get('/', (req, res) => res.send('Welcome to my server!'));
app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);

app.listen(PORT, ()=>{
    console.log(`server is running on port: ${PORT}`)
});

 
