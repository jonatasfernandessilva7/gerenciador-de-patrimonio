import express from 'express';
import bodyParser from 'body-parser';
/*import middleware from './middleware/Middleware.js';*/
import userRouter from './api/UserAPI';
import heritageRouter from './api/HeritageAPI';

import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors({origin: 'http://localhost:8081'}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(morgan('tiny'));

/*app.use(middleware);*/

app.use('/api/v1/user', userRouter);
app.use('/api/v1/user/heritage', heritageRouter);

app.listen(process.env.PORT, () => {
    console.log('running on PORT: ',process.env.PORT);
});