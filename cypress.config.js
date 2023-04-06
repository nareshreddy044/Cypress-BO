const { defineConfig } = require("cypress");



module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",//for html report
  e2e: {
    setupNodeEvents(on, config) {

      require('cypress-mochawesome-reporter/plugin')(on);// for html report
      this.screenshotOnRunFailure=true;
      //experimentalSessionAndOrigin: true
      // implement node event listeners here
    },
  },
});

