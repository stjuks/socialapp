export const routes = {
    login: '/login',
    app: '/',
    register: '/register'
};

export const validate = {
    username: username => username.length >= 3 && username.length <= 25,
    password: password => password.length >= 6 && password.length <= 30,
    confirmPassword: (lhs, rhs) => lhs.length >= 6 && lhs.length <= 30 && lhs === rhs,
    email: email => email.indexOf('@') >= 0
};