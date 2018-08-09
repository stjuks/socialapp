import React, { Component } from 'react';
import { connect } from 'react-redux';

import { NavbarStyled } from './styles';

class Navbar extends Component {
    render() {
        return (
            <NavbarStyled>

            </NavbarStyled>
        );
    }
}

export default connect()(Navbar);
