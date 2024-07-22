const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const apiUsuario = require('./api/Usuario');

import cors from 'cors';
import morgan from 'morgan';

require("dotenv").config();

app.use(cors({origin: 'http://localhost:8081'}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use('/', apiUsuario);

app.listen(process.env.PORT, () => {
    console.log('rodando na porta: ',process.env.PORT);
});