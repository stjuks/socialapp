import React, { Component } from 'react';
import { connect } from 'react-redux';
import history from 'helpers/history';
import { routes } from 'helpers/constants';
import { RESET_STATE } from 'actions/types';

import LoginForm from 'components/auth/LoginForm';

import { LoginScreenStyled } from './styles';
import { login } from 'actions/authActions';

class LoginScreen extends Component {
    state = {
        username: '',
        password: '',
        isSubmitted: false,
        isSuccess: null
    };

    componentDidMount() {
        this.props.dispatch(RESET_STATE);
    }

    onSubmit = e => {
        e.preventDefault();
        const { dispatch } = this.props;
        const { username, password } = this.state;

        this.setState({ isSubmitted: true });

        setTimeout(async () => {
            let res = await dispatch(login(username, password));
            this.setState({ isSuccess: res, isSubmitted: res });
            res && setTimeout(() => { history.push(routes.app); }, 600);
        }, 200);
    };

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        const { isLoading, error } = this.props;
        const { isSuccess, isSubmitted } = this.state;

        return (
            <LoginScreenStyled>
                <LoginForm
                    values={this.state}
                    onSubmit={this.onSubmit}
                    handleChange={this.handleChange}
                    isLoading={isLoading}
                    isSubmitted={isSubmitted}
                    error={error}
                    isSuccess={isSuccess}
                />
            </LoginScreenStyled>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        isLoading: store.loading.login,
        error: store.error.login
    }
};

export default connect(mapStateToProps)(LoginScreen);
