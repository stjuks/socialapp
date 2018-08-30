const { Client } = require('pg');

const client = new Client({
	host: 'localhost',
	user: 'steven',
	password: 'password',
	database: 'socialapp',
    port: 5432
});

client.connect();

module.exports = client;