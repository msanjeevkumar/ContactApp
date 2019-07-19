import express from '@feathersjs/express';
import feathers from '@feathersjs/feathers';
import cors from 'cors';
import logger from 'feathers-logger';
import service from 'feathers-sequelize';
import * as morgan from 'morgan';
import { Contact } from './models';

// tslint:disable-next-line:no-var-requires
require('./sequelize');

const app = express(feathers());
app.use(cors());
app.configure(logger(morgan('dev')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.configure(express.rest());

app.use('/contacts', service({
  Model: Contact,
  paginate: {
    default: 10,
    max: 10
  }
}));


app.use(express.errorHandler());
export { app };
