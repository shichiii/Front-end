const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '3pzvus',
  e2e: {
    setupNodeEvents(on, config) {
      defaultCommandTimeout: 10000;
      execTimeout : 10000;
      taskTimeout : 10000;
      pageLoadTimeout : 10000;
      requestTimeout : 10000;
      responseTimeout : 10000;
      // implement node event listeners here
    },
  },
});
