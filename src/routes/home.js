const express = require('express');
const route = express.Router();

const homeControllers = require('../app/controllers/HomeControllers');

route.use('/', homeControllers.index);

module.exports = route;
