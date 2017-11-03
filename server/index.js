const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const massive = require('massive');

//middlware
const checkForSession = require('./middlewares/checkForSession')

const app = express();

app.use(bodyParser.json())
app.use(session({
  secret: "simulation2",
  resave: false,
  saveUninitialized: false
}));
app.use(checkForSession)

//controllers
const auth_controller = require('./controllers/auth_controller')

//Authorization
app.post('api/login', auth_controller.login)

const port = 3000;
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );
