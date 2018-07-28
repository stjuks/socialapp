import React, { Component } from 'react';
import { connect } from 'react-redux';
import history from '../helpers/history';

import { logout } from '../actions/authActions';
import { searchUsers, getUserProfile } from '../actions/userActions';

import Logo from '../components/navbar/Logo';
import Menu from '../components/navbar/Menu';
import SearchForm from '../components/navbar/SearchForm';

import NewPostModal from './NewPostModal';

import { UPLOAD } from '../actions/types/modal';

class Navbar extends Component {
    state = {
        searchQuery: ''
    };

    handleSearchInput = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        this.props.dispatch(searchUsers(e.target.value));
    };

    handleSearchSubmit = (username) => {
        this.props.dispatch(getUserProfile(username))
        history.push(`/${username}`);
    };

    toggleModal = () => {
        this.props.dispatch(UPLOAD.OPEN);
    };

    render() {
        const {
            dispatch,
            userSearchResults,
            showUploadModal
        } = this.props;

        return (
            <div className="navbar-container">
                <Logo />
                <SearchForm
                    handleSubmit={this.handleSearchSubmit}
                    handleSearch={this.handleSearchInput}
                    values={this.state}
                    searchResults={userSearchResults}
                />
                <Menu
                    toggleModal={this.toggleModal}
                    handleLogOut={e => dispatch(logout())}
                />
                <NewPostModal
                    show={showUploadModal}
                />
            </div>
        );
    }
}

const stateMap = (store) => {
    return {
        userSearchResults: store.user.userSearchResults,
        showUploadModal: store.modal.upload
    }
};

export default connect(stateMap)(Navbar);
