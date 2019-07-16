// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  database: {
    name: 'db',
    host: 'localhost',
    port: 3306,
    username: 'user',
    password: 'password'
  },
  port: 3000,
};
