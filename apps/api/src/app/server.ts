import feathers from '@feathersjs/feathers';
import express from '@feathersjs/express';
import service from 'feathers-sequelize';
import logger from 'feathers-logger';
import * as morgan from 'morgan';
import { Contact } from './models';
require('./sequelize');

const app = express(feathers());
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
