const mysql = require('mysql');

const db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'password',
	database: 'socialapp'
});

db.connect((err) => {
	if (err) {
		console.log(err);
	}
	console.log('MySQL connected...');
});

module.exports = db;