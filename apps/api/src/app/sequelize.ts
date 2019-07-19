import { Sequelize } from 'sequelize-typescript';
import { environment } from '../environments/environment';
import { Contact } from './models';
const models = [Contact];
const sequelize = new Sequelize(environment.dbConnectionString);
sequelize.addModels(models);

const syncModelSchemas = async () => Promise.all(models.map(model => model.sync()));
export { sequelize, syncModelSchemas }

