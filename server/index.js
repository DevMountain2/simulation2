const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const massive = require('massive');
const cors = require('cors');
require('dotenv').config();

//middlware
const checkForSession = require('./middlewares/checkForSession')

const app = express();

app.use(cors())
app.use(bodyParser.json())
app.use(session({
  secret: "simulation2",
  resave: false,
  saveUninitialized: false
}));
app.use(checkForSession)
massive( process.env.CONNECTION_STRING ).then( dbInstance => app.set('db', dbInstance) );

//controllers
const auth_controller = require('./controllers/auth_controller')

//Authorization
app.post('/api/login', auth_controller.login)

const port = 3000;
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );
