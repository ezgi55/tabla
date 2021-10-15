const express = require("express");

const port = process.env.PORT || 4000;
const app = express();

app.use(express.json());

const router = require("./apps/platform/routes");

app.use(router);

app.listen(port, () => monitoring.log(`API listening on port ${port}!`));

module.exports = app;
