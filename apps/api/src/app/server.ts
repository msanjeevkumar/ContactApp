import feathers from '@feathersjs/feathers';
import express from '@feathersjs/express';
import socketio from '@feathersjs/socketio';
import service from 'feathers-sequelize';
import logger from 'feathers-logger';
import * as morgan from 'morgan';
import { Contact } from './models';
import { sequelize } from './sequelize';

sequelize.addModels([Contact]);

const app = express(feathers());
app.configure(logger(morgan('dev')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.configure(express.rest());
app.configure(socketio());

app.use('/contacts', service({
  Model: Contact
}));

app.use(express.errorHandler());
export { app };
