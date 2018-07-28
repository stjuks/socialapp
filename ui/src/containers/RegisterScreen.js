import React, { Component } from 'react';
import { connect } from 'react-redux';

import RegisterForm from '../components/auth/RegisterForm';

import { register } from '../actions/authActions';

class RegisterScreen extends Component {
    state = {
        username: '',
        password: ''
    };

    onSubmit = (e) => {
        e.preventDefault();
        const { dispatch } = this.props;
        const { username, password } = this.state;

        dispatch(register(username, password));
    };

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        return (
            <div className="register container">
                <RegisterForm
                    values={this.state}
                    onSubmit={this.onSubmit}
                    handleChange={this.handleChange}
                />
            </div>
        );
    }
}

export default connect()(RegisterScreen);
