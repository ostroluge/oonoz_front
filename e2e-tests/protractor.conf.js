//jshint strict: false
exports.config = {
  seleniumServerJar: "/Users/Jeremy/Downloads/selenium-server-standalone-3.0.1.jar",
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    allScriptsTimeout: 11000,

  specs: [
      //Chemin des fichiers de test
    '../specs/scenario.js'
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
