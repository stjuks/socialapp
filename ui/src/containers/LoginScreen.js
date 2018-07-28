import React, { Component } from 'react';
import { connect } from 'react-redux';

import LoginForm from '../components/auth/LoginForm';

import { login } from '../actions/authActions';

class LoginScreen extends Component {
    state = {
        username: '',
        password: ''
    };

    onSubmit = (e) => {
        e.preventDefault();
        const { dispatch } = this.props;
        const { username, password } = this.state;

        dispatch(login(username, password));
    };

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        return (
            <div className="login container">
                <LoginForm
                    values={this.state}
                    onSubmit={this.onSubmit}
                    handleChange={this.handleChange}
                />
            </div>
        );
    }
}

export default connect()(LoginScreen);
