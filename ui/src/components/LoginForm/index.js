import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Button from 'styled/Button';
import { FormGroup, Input, Label } from 'styled/Form';

import { LoginFormStyled, FormFooter } from './styles';

class LoginForm extends Component {
    render() {
        const {
            onSubmit,
            values,
            handleChange
        } = this.props;

        return (
            <LoginFormStyled onSubmit={e => onSubmit(e)}>
                <FormGroup>
                    <Label>Username:</Label>
                    <Input
                        name="username"
                        value={values.username}
                        type="text"
                        onChange={e => handleChange(e)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Password:</Label>
                    <Input
                        name="password"
                        value={values.password}
                        type="password"
                        onChange={e => handleChange(e)}
                    />
                </FormGroup>
                <Button>
                    Log in
                </Button>
                <FormFooter>
                    No account yet?&nbsp;
                    <Link to="/register">
                        Register now!
                    </Link>
                </FormFooter>
            </LoginFormStyled>
        );
    }
}

export default LoginForm;
