import React, { Component } from 'react';
import { connect } from 'react-redux';

import LoginForm from 'components/LoginForm';

import { LoginScreenStyled } from './styles';
import { login } from 'actions/authActions';

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
            <LoginScreenStyled>
                <LoginForm
                    values={this.state}
                    onSubmit={this.onSubmit}
                    handleChange={this.handleChange}
                />
            </LoginScreenStyled>
        );
    }
}

export default connect()(LoginScreen);
