class HomeControllers {
  index(req, res) {
    res.render('home');
  }
}

module.exports = new HomeControllers();
