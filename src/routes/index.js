const newsRouter = require('./news');
const postRouter = require('./post');
const homeRouter = require('./home');

function route(app) {
  app.use('/news', newsRouter);
  app.use('/post', postRouter);
  app.use('/', homeRouter);
}

module.exports = route;
