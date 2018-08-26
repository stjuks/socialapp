import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {
    LoginFormStyled,
    FormTitle,
    InputContainer,
    FormInput,
    InputLabel,
    InputsStyled,
    AnimatedBorder,
    ErrorMessage,
    SubmitBtn,
    BtnContainer,
    SuggestionStyled,
    LoaderStyled
} from './styles';

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

        console.log(isSuccess);

        return (
            <LoginFormStyled onSubmit={e => onSubmit(e)}>
                <FormTitle>
                    Sign in
                </FormTitle>
                <InputsStyled>
                    <InputContainer>
                        <FormInput type="text" required name="username" value={values.username} onChange={e => handleChange(e)} autoComplete="off" id="username" />
                        <InputLabel htmlFor="username">
                            Username
                        </InputLabel>
                        <AnimatedBorder />
                    </InputContainer>
                    <InputContainer>
                        <FormInput type="password" required name="password" value={values.password} onChange={e => handleChange(e)} autoComplete="off" id="password" />
                        <InputLabel htmlFor="password">
                            Password
                        </InputLabel>
                        <AnimatedBorder />
                    </InputContainer>
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
                    No account yet? Register&nbsp;<Link to="">here!</Link>
                </SuggestionStyled>
            </LoginFormStyled>
        );
    }
}

export default LoginForm;
