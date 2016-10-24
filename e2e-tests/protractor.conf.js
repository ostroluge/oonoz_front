//jshint strict: false
exports.config = {
  seleniumServerJar: "C:/Users/vincent/AppData/Roaming/npm/node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-2.53.1.jar",
  allScriptsTimeout: 11000,

  specs: [
    '../app/components/login/*Spec.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://localhost:8000/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }

};
