const routes = require("express").Router();
const apiRoutes = require("./apiRoutes");
const homeRoutes = require("./htmlRoutes");

routes.use("/", homeRoutes);

routes.use("/api", apiRoutes);

module.exports = routes;