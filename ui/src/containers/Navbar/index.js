import React, { Component } from 'react';
import { connect } from 'react-redux';

import { NavbarStyled } from './styles';

import SearchUser from 'components/navbar/SearchUser';
import MenuBar from 'components/navbar/MenuBar';

class Navbar extends Component {

    toggleModal = actionType => {
        this.props.dispatch(actionType);
    };

    render() {
        return (
            <NavbarStyled>
                <SearchUser />
                <MenuBar
                    toggleModal={this.toggleModal}
                />
            </NavbarStyled>
        );
    }
}

export default connect()(Navbar);
