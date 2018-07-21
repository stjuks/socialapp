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
        this.props.dispatch(register(this.state));
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
