// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  apiUrl: 'http://ax.sib-services.ch/',
  assetsUrl: '/assets/',
  localeFormat: 'de-CH',
  defaultLanguage: 'de',
  push: {
    publicKey: '' // It's used to connect with the back-end
  },
  authorization: {
    username: 'eshop-web',
    password: 'eshop-web-yztAhGpFW'
  }
};
