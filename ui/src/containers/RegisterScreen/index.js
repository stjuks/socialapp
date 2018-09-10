import React, { Component } from 'react';
import { connect } from 'react-redux';
import history from 'helpers/history';
import { routes } from 'helpers/constants';

import RegisterForm from 'components/auth/RegisterForm';

import { RegisterScreenStyled } from './styles';
import { register } from 'actions/authActions';

import { REGISTER } from 'actions/types';

class RegisterScreen extends Component {
    state = {
        username: '',
        password: '',
        confirmPassword: '',
        email: '',
        isSubmitted: false,
        isSuccess: null
    };

    onSubmit = (e) => {
        e.preventDefault();
        const { dispatch } = this.props;
        const { username, password, confirmPassword, email } = this.state;

        if (password !== confirmPassword) {
            return dispatch(REGISTER.ERROR('Passwords do not match!'));
        }

        this.setState({ isSubmitted: true });

        setTimeout(async () => {
            let res = await dispatch(register(username, password, email));
            this.setState({ isSuccess: res });
            setTimeout(() => {
                this.setState({ isSubmitted: false });
                res && history.push(routes.login);
            }, 600);
        }, 200);
    };

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        const { isLoading, error } = this.props;
        const { isSuccess, isSubmitted } = this.state;

        return (
            <RegisterScreenStyled>
                <RegisterForm
                    values={this.state}
                    onSubmit={this.onSubmit}
                    handleChange={this.handleChange}
                    isLoading={isLoading}
                    isSubmitted={isSubmitted}
                    error={error || ''}
                    isSuccess={isSuccess}
                />
            </RegisterScreenStyled>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        isLoading: store.loading.register,
        error: store.error.register
    }
};

export default connect(mapStateToProps)(RegisterScreen);
