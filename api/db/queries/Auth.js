module.exports = {
    login: (username, password) => ({
        text: `
            SELECT * FROM f_login_user($1, $2);
        `, values: [username, password]
    }),
    register: (username, email, password) => ({
        text: `
            SELECT f_register_user($1, $2, $3);
        `, values: [username, email, password]
    })
};