import { Sequelize } from 'sequelize-typescript';
import { environment } from '../environments/environment';

const { name: database, host, port, username, password } = environment.database;

export const sequelize = new Sequelize({
  database,
  host,
  port,
  dialect: 'mysql',
  username,
  password
});

