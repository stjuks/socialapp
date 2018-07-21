const express = require('express');
const bodyParser = require('body-parser');

const auth = require('./routes/auth');
const posts = require('./routes/posts');
const follow = require('./routes/follow');
const users = require('./routes/users');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/auth', auth);
app.use('/api/posts', posts);
app.use('/api/users', follow);
app.use('/api/users', users);

app.listen('5000', () => {
	console.log('Server started on port 5000...');
});