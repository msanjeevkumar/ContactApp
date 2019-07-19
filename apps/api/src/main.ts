import { app } from './app';
import { environment } from './environments/environment';
import { syncModelSchemas } from './app/sequelize';
const { port } = environment;
(async () => {
  await syncModelSchemas();
  app.listen(port, () => {
    console.log(`Feathers server listening on port ${port}`);
  });
})();

