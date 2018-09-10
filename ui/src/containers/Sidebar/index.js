import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getFollowing } from 'actions/userActions';

import { SidebarStyled } from './styles';
import UserStatus from 'components/sidebar/UserStatus';
import ContactList from 'components/sidebar/ContactList';

class Sidebar extends Component {
    componentDidMount() {
        const { dispatch, self } = this.props;
        dispatch(getFollowing(self.user_id));
    }

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
