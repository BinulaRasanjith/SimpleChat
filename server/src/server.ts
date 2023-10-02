import express, { Express } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import cors from 'cors';

import router from './routes';
import sequelize from './db';

dotenv.config();

// Create a new express application instance
const app: Express = express();

// enable cors
app.use(cors(
    {
        origin: process.env.CLIENT_URL || 'http://localhost:5000',
    }
));

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use('/uploads', express.static(path.join(__dirname, '../uploads')));
app.use('/api', router); // all routes will be prefixed with /api

// get port from environment and store in Express.
const port: number = parseInt(process.env.PORT as string, 10) || 4000;

// sync all models with database
sequelize.sync()
    .then(() => {
        console.log("Database connected");
        // then start the express server
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    })
    .catch((err: Error) => {
        console.log(err);
    });
