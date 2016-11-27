//jshint strict: false
exports.config = {
  seleniumServerJar: "C:/Users/vincent/AppData/Roaming/npm/node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-2.53.1.jar",
  allScriptsTimeout: 11000,

  specs: [
      //Chemin des fichiers de test
    '../app/components/login/*Spec.js'
  ],

  capabilities: {
    //Liste des navigateurs
    'browserName': 'chrome'
  },

  baseUrl: 'http://localhost:8000/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }

};
