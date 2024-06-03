const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');

const app = express();
const port = 3000;

const route = require('./routes');

const db = require('./config/db')
db.connect();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// HTTP LOGGER
app.use(morgan('combined'));

// Template engine
app.engine(
  'hbs',
  engine({
    extname: '.hbs',
  }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// Route
route(app);

// app.get("/", (req, res) => {
//   res.render('home');
// });

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
