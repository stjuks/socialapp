import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { routes, validate } from 'helpers/constants';

import Input from 'styled/Input';

import {
    AuthFormStyled,
    FormTitle,
    InputsStyled,
    ErrorMessage,
    SubmitBtn,
    BtnContainer,
    SuggestionStyled,
    LoaderStyled
} from '../styles';

class RegisterForm extends Component {
    render() {
        const {
            onSubmit,
            values,
            handleChange,
            isSubmitted,
            isLoading,
            isSuccess,
            error
        } = this.props;

        return (
            <AuthFormStyled height="45rem" onSubmit={e => onSubmit(e)}>
                <FormTitle>
                    Register
                </FormTitle>
                <InputsStyled flex="4">
                    <Input
                        required
                        validated={validate.username(values.username)}
                        label="Username"
                        type="text"
                        name="username"
                        value={values.username}
                        onChange={e => handleChange(e)}
                        autoComplete="off"
                    />
                    <Input
                        required
                        validated={validate.password(values.password)}
                        label="Password"
                        type="password"
                        name="password"
                        value={values.password}
                        onChange={e => handleChange(e)}
                        autoComplete="off"
                    />
                    <Input
                        required
                        validated={validate.confirmPassword(values.password, values.confirmPassword)}
                        label="Confirm Password"
                        type="password"
                        name="confirmPassword"
                        value={values.confirmPassword}
                        onChange={e => handleChange(e)}
                        autoComplete="off"
                    />
                    <Input
                        required
                        validated={validate.email(values.email)}
                        label="Email"
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={e => handleChange(e)}
                        autoComplete="off"
                    />
                </InputsStyled>
                <ErrorMessage hasError={error.length > 0}>
                    {error}
                </ErrorMessage>
                <BtnContainer flex="1">
                    <SubmitBtn isSuccess={isSuccess} isSubmitted={isSubmitted} isLoading={isLoading}>
                        Register
                        {isLoading &&
                        <LoaderStyled width="100%" height="100%">
                            <circle r="8" fill="black" cy="50%" cx="50%" />
                        </LoaderStyled>
                        }
                    </SubmitBtn>
                </BtnContainer>
                <SuggestionStyled>
                    Already have an account? Login&nbsp;<Link to={routes.login}>here!</Link>
                </SuggestionStyled>
            </AuthFormStyled>
        );
    }
}

export default RegisterForm;
