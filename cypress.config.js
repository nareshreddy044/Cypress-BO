const { defineConfig } = require("cypress");



module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      pageLoadTimeout: 10000
      //experimentalSessionAndOrigin: true
      // implement node event listeners here
    },
  },
});
// module.exports = {
//   projectId: "hkzhdd"
//   // The rest of the Cypress config options go here...
// }
