const express = require('express');
const moduleRegistry = require("../../shared/module_registry");
const app = express();
const portNumber = moduleRegistry.search.port;
const sourceDir = 'dist';

app.use(express.static(sourceDir));

app.listen(portNumber, () => {
    console.log(`Express web server started: http://localhost:${portNumber}`);
    console.log(`Serving content from /${sourceDir}/`);
});