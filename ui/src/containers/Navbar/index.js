import React, { Component } from 'react';
import { connect } from 'react-redux';
import { routes } from 'helpers/constants';
import history from 'helpers/history';

import { NavbarStyled } from './styles';

import SearchUser from 'components/navbar/SearchUser';
import MenuBar from 'components/navbar/MenuBar';

import { searchUsers } from 'actions/userActions';

class Navbar extends Component {
    toggleModal = actionType => {
        this.props.dispatch(actionType);
    };

    handleSearch = value => {
        this.props.dispatch(searchUsers(value));
    }

    handleProfile = () => {
        const { self } = this.props;
        history.push(routes.profile(self.username));
    }

    handleHome = () => {
        history.push(routes.app);
    }

    render() {
        const { searchResults } = this.props;

        return (
            <NavbarStyled>
                <SearchUser 
                    handleSearch={this.handleSearch}
                    searchResults={searchResults}
                />
                <MenuBar
                    toggleModal={this.toggleModal}
                    handleProfile={this.handleProfile}
                    handleHome={this.handleHome}
                />
            </NavbarStyled>
        );
    }
}

const mapStateToProps = store => {
    return {
        searchResults: store.user.userSearchResults,
        self: store.user.self
    }
}

export default connect(mapStateToProps)(Navbar);
