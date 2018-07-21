import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Button from '../helpers/Button';

class RegisterForm extends Component {
    render() {
        const {
            onSubmit,
            values,
            handleChange
        } = this.props;

        return (
            <form className="login form" onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <label className="form-label">Username:</label>
                    <input name="username" value={values.username} type="text" onChange={e => handleChange(e)}/>
                </div>
                <div className="form-group">
                    <label className="form-label">Password:</label>
                    <input name="password" value={values.password} type="password" onChange={e => handleChange(e)}/>
                </div>
                <Button
                    value="Register"
                />
                <div className="tip">
                    Already have an account?&nbsp;
                    <Link to="/login">
                        Login!
                    </Link>
                </div>
            </form>
        );
    }
}

export default RegisterForm;
