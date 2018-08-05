import React, { Component } from 'react';

import { ButtonStyled } from './styles';
import { Loader } from '../Loader';

class Button extends Component {
    render() {
        const {
            children,
            isLoading
        } = this.props;

        return (
            <ButtonStyled {...this.props}>
                {isLoading ? <Loader /> : children}
            </ButtonStyled>
        );
    }
}

export default Button;
