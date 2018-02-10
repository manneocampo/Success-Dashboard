const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session)
const dbConnection = require('./db') // loads our connection to the mongo database
const passport = require('./passport');
const request = require('request');
const app = express();
const PORT = process.env.PORT || 8080;

// ===== Middleware ====
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

app.use(
	session({
		secret: process.env.APP_SECRET || 'this is the default passphrase',
		store: new MongoStore({ mongooseConnection: dbConnection }),
		resave: false,
		saveUninitialized: false
	})
);

// ===== Passport ====
app.use(passport.initialize());
app.use(passport.session()); // will call the deserializeUser

/* Express app ROUTING */
app.use('/auth', require('./auth'));

app.get('/trivia', (req, res) => {
	request.get('https://opentdb.com/api.php?amount=1&category=18&difficulty=easy&type=multiple', (err, response, body) => {
		if (err) throw err;

		res.send(body);
	})
});

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.listen(PORT, () => {
	console.log(`App listening on PORT: ${PORT}`);
});

// google client id: 155017138163-lapght4pn915qcn24ha85h9tm2te2ihq.apps.googleusercontent.com
// secret: HDjItQ9jJbyg5XWpY1WG-_A1
