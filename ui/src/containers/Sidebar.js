import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getUserProfile } from '../actions/userActions';

import ContactList from '../components/sidebar/ContactList';

class Sidebar extends Component {
    getProfile = (username) => {
        this.props.dispatch(getUserProfile(username));
    };

    render() {
        const {
            self
        } = this.props;

        return (
            <div className="sidebar-container">
                <ContactList
                    getProfile={this.getProfile}
                    contacts={self.following}
                />
            </div>
        );
    }
}

const stateMap = (store) => {
    return {
        self: store.user.self
    }
};

export default connect(stateMap)(Sidebar);
