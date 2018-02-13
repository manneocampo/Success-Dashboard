const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session)
const dbConnection = require('./db') // loads our connection to the mongo database
const passport = require('./passport');
const request = require('request');
const path = require('path');
const ToDo = require('./db/models/todo.js');
const Note = require('./db/models/note.js');
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

app.use(express.static('./public'));

// ===== Passport ====
app.use(passport.initialize());
app.use(passport.session()); // will call the deserializeUser

/* Express app ROUTING */
app.use('/auth', require('./auth'));

app.get('/trivia', (req, res) => {
	request.get('https://opentdb.com/api.php?amount=1&category=18&difficulty=easy&type=multiple', (err, response, body) => {
		if (err) console.log('err123: ', err);

		res.send(body);
	})
});

app.get('/techArticles', (req, res) => {
	request.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=da2ac971785e4eaa8fbe780f5927876e', (err, response, body) => {
		if (err) console.log(err);
		console.log('body: ', body);
		res.send(body);
	});
});

app.get('/news', (req, res) => {
	request.get('https://www.reddit.com//r/aww.json', (err, response, body) => {
		if (err) throw err;

		res.send(body);
	});
});

app.get('/getTodos', (req, res) => {
	ToDo.find((err, docs) => {
		res.send(docs);
	});
});

app.post('/createTodo', (req, res) => {
	ToDo.create({todo: req.body.newTodo, description: req.body.description}, function (err, doc) {
		if (err) throw err;

		ToDo.find((err, docs) => {
			res.send(docs);
		});
	});
});

app.delete('/deleteTodo/:todo', (req, res) => {
	ToDo.deleteOne({todo: req.params.todo}, (err, docs) => {
		if (err) console.log(err);

		ToDo.find((err, docs) => {
			res.send(docs);
		});
	});
});

app.post('/createNote', (req, res) => {
	console.log("sanity");
	Note.create({note: req.body.note}, function (err, doc) {
		if (err) throw err;

		ToDo.find((err, docs) => {
			res.send(docs);
		});
	});
});

app.get('/getNotes', (req, res) => {
	Note.find((err, docs) => {
		res.send(docs);
	});
});

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.listen(PORT, () => {
	console.log(`App listening on PORT: ${PORT}`);
});
