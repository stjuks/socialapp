module.exports = {
    login: username => ({
        text: `
            SELECT * FROM users WHERE username=$1;
        `, values: [username]
    }),
    register: (username, password, email) => ({
        text: `
            INSERT INTO users (username, password, email) 
            VALUES ($1, $2, $3);
        `, values: [username, password, email]
    })
};