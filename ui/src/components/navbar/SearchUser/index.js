import React, { Component } from 'react';
import { Popover, PopoverBody } from 'reactstrap';
import { Link } from 'react-router-dom';

import {
    SearchUserStyled,
    InputContainerStyled,
    SearchInputStyled,
    SearchIconStyled,
    UserListItemStyled
} from './styles';

import Icon from 'styled/Icon';

class SearchUser extends Component {
    state = {
        isPopoverOpen: false,
        query: ''
    }

    togglePopover = e => {
        this.setState({ isPopoverOpen: !this.state.isPopoverOpen });
    }

    handleInput = e => {
        const { value } = e.target;
        const { handleSearch } = this.props;

        this.setState({ query: value });
        if (value.length > 1) {
            this.setState({ isPopoverOpen: true });
            handleSearch(value);
        }
    }

    render() {
        const { isPopoverOpen, query } = this.state;
        const { searchResults } = this.props;

        return (
            <SearchUserStyled>
                <InputContainerStyled id="searchUsers">
                    <SearchInputStyled
                        name="searchQuery"
                        value={query}
                        onChange={e => this.handleInput(e)}
                        placeholder="Search users..."
                    />
                    <SearchIconStyled>
                        <Icon type="search" />
                    </SearchIconStyled>
                </InputContainerStyled>
                <Popover 
                    toggle={this.togglePopover} 
                    placement="bottom" 
                    target="searchUsers"
                    isOpen={isPopoverOpen && query.length > 1} 
                >
                    <PopoverBody>
                        <ul>
                            {searchResults.map(result => (
                                <UserListItemStyled key={result.id}>
                                    <Link to={`/${result.username}`}>
                                        {result.username}
                                    </Link>
                                </UserListItemStyled>
                            ))}
                        </ul>
                    </PopoverBody>
                </Popover>
            </SearchUserStyled>
        );
    }
}

export default SearchUser;
