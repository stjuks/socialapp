import React, { Component } from 'react';
import { connect } from 'react-redux';
import history from 'helpers/history';

import { logout } from 'actions/authActions';
import { searchUsers, getUserProfile } from 'actions/userActions';

import Logo from 'components/Logo';
import Menu from 'components/Menu';
import SearchForm from 'components/SearchForm';

import NewPostModal from '../NewPostModal';
import SettingsModal from '../SettingsModal';

import { NavbarStyled } from './styles';
import { UPLOAD } from 'actions/types/modal';

class Navbar extends Component {
    state = {
        searchQuery: ''
    };

    handleSearchInput = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        this.props.dispatch(searchUsers(e.target.value));
    };

    handleSearchSubmit = (username) => {
        this.props.dispatch(getUserProfile(username));
        history.push(`/${username}`);
    };

    toggleModal = (type) => {
        this.props.dispatch(type.OPEN);
    };

    render() {
        const {
            dispatch,
            userSearchResults,
            showUploadModal,
            showSettingsModal
        } = this.props;

        return (
            <NavbarStyled>
                <Logo />
                <SearchForm
                    handleSubmit={this.handleSearchSubmit}
                    handleSearch={this.handleSearchInput}
                    values={this.state}
                    searchResults={userSearchResults}
                />
                <Menu
                    toggleModal={this.toggleModal}
                    handleLogOut={() => dispatch(logout())}
                />
                <NewPostModal
                    show={showUploadModal}
                />
                <SettingsModal
                    show={showSettingsModal}
                />
            </NavbarStyled>
        );
    }
}

const stateMap = (store) => {
    return {
        userSearchResults: store.user.userSearchResults,
        showUploadModal: store.modal.upload,
        showSettingsModal: store.modal.settings
    }
};

export default connect(stateMap)(Navbar);
