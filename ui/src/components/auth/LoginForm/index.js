import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { routes } from 'helpers/constants';

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

class LoginForm extends Component {
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
            <AuthFormStyled onSubmit={e => onSubmit(e)}>
                <FormTitle>
                    Sign in
                </FormTitle>
                <InputsStyled>
                    <Input
                        required
                        label="Username"
                        type="text"
                        name="username"
                        value={values.username}
                        onChange={e => handleChange(e)}
                        autoComplete="off"
                    />
                    <Input
                        required
                        label="Password"
                        type="password"
                        name="password"
                        value={values.password}
                        onChange={e => handleChange(e)}
                        autoComplete="off"
                    />
                </InputsStyled>
                <ErrorMessage hasError={error.length > 0}>
                    {error}
                </ErrorMessage>
                <BtnContainer>
                    <SubmitBtn isSuccess={isSuccess} isSubmitted={isSubmitted} isLoading={isLoading}>
                        Sign in
                        {isLoading &&
                            <LoaderStyled width="100%" height="100%">
                                <circle r="8" fill="black" cy="50%" cx="50%" />
                            </LoaderStyled>
                        }
                    </SubmitBtn>
                </BtnContainer>
                <SuggestionStyled>
                    No account yet? Register&nbsp;<Link to={routes.register}>here!</Link>
                </SuggestionStyled>
            </AuthFormStyled>
        );
    }
}

export default LoginForm;
