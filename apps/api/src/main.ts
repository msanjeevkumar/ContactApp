import { app } from './app';
import { environment } from './environments/environment';
const { port } = environment;
(async () => {
  sync();
  app.listen(port, () => {
    console.log(`Feathers server listening on port ${port}`);
  });
})();

