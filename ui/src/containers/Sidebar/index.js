import React, { Component } from 'react';
import { connect } from 'react-redux';

import { SidebarStyled } from './styles';

import UserStatus from 'components/UserStatus';
import ContactList from 'components/ContactList';

class Sidebar extends Component {
    render() {
        return (
            <SidebarStyled>
                <UserStatus />
                <ContactList />
            </SidebarStyled>
        );
    }
}

export default connect()(Sidebar);
