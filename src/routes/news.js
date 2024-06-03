const express = require('express');
const route = express.Router();

const newsController = require('../app/controllers/NewsControllers');

route.use('/', newsController.index);

module.exports = route;