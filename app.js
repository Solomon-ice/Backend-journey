import { log } from 'console';
import express from 'express'
import { PORT } from './config/env.js';
import authRouter from './routes/auth.route.js';
import SubscriptionsRoutes from './routes/subscription.routes.js';
import UserRouter from './routes/users.routes.js'
import connectToDatabase from './database/mongodb.js';
import errorMiddleware from './middleware/error.middleware.js';
import cookieParser from 'cookie-parser'

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser())
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/subscriptions', SubscriptionsRoutes)
app.use('/api/v1/users', UserRouter)

app.use(errorMiddleware)

app.get('/', (req, res) => {
 res.send("Welcome to this subscription Tracker")
});


app.listen(PORT, async()=>{
    log(`Server is running on Port: ${PORT}`)
   await connectToDatabase();
});

export default app;