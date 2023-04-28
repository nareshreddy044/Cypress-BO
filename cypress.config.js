const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      this.screenshotOnRunFailure=true;

      // implement node event listeners here
    },
  },
  // reporter: "cypress-mochawesome-reporter",//for html report
  // e2e: {
  //   setupNodeEvents(on, config) {
  //     require('cypress-mochawesome-reporter/plugin')(on);// for html report
      
  //     //experimentalSessionAndOrigin: true
  //     // implement node event listeners here
  //   },
  // },
  reporter: "../node_modules/mochawesome/src/mochawesome.js",
  reporterOptions: {
      overwrite: false,
      html: true,
      json: true,
      video: true,
      screenshotOnRunFailure:true,
  }
  // reporter: "cypress-mochawesome-reporter",

  // reporterOptions: {
  //   reportDir: "cypress/reports",
  //   reportFilaname : "report",
  //   charts: true,
  //   html:true,
  //   json: false,
  //   overwrite: false,
  //   reportPageTitle: "My Test Suite",
  //   embeddedScreenshots: true,
  //   inlineAssets: true,
  // },

   

  
});
