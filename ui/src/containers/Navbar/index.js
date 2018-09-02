import React, { Component } from 'react';
import { connect } from 'react-redux';

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
                />
            </NavbarStyled>
        );
    }
}

const mapStateToProps = store => {
    return {
        searchResults: store.user.userSearchResults
    }
}

export default connect(mapStateToProps)(Navbar);
