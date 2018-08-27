import React, { Component } from 'react';
import { connect } from 'react-redux';

import { SidebarStyled } from './styles';

import UserStatus from 'components/sidebar/UserStatus';
import ContactList from 'components/sidebar/ContactList';

class Sidebar extends Component {
    render() {
        const { self } = this.props;

        return (
            <SidebarStyled>
                <UserStatus
                    username={self.username}
                />
                <ContactList
                    following={self.following}
                />
            </SidebarStyled>
        );
    }
}

const mapStateToProps = store => {
    return {
        self: store.user.self
    }
};

export default connect(mapStateToProps)(Sidebar);
