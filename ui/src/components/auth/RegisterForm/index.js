import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Button from 'styled/Button';
import { FormGroup, Label, Input } from 'styled/Form';
import { RegisterFormStyled, FormFooter } from './styles';

class RegisterForm extends Component {
    render() {
        const {
            onSubmit,
            values,
            handleChange
        } = this.props;

        return (
            <RegisterFormStyled onSubmit={e => onSubmit(e)}>
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
                    Register
                </Button>
                <FormFooter>
                    Already have an account?&nbsp;
                    <Link to="/login">
                        Login!
                    </Link>
                </FormFooter>
            </RegisterFormStyled>
        );
    }
}

export default RegisterForm;
