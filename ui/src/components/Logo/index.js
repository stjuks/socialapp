import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import { LogoStyled } from './styles';

class Logo extends Component {
    render() {
        return (
            <LogoStyled>
                <Link to="/">
                    <strong>SOC1ALITY</strong>
                </Link>
            </LogoStyled>
        );
    }
}

export default Logo;
