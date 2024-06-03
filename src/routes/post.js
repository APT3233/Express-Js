const express = require('express');
const route = express.Router();

const postControllers = require('../app/controllers/PostControllers');

route.use('/', postControllers.index);
module.exports = route;