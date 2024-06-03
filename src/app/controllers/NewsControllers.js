class NewsControllers {
  index(req, res) {
    res.render('news');
  }
}

module.exports = new NewsControllers();
