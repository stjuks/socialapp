const { escape } = require('mysql');

module.exports = {
    login: username => `
        SELECT * FROM users WHERE username=${escape(username)};
    `,
    register: (username, password, email) => `
        INSERT INTO users (username, password, email) 
        VALUES (${escape(username)}, ${escape(password)}, ${escape(email)});
    `
};