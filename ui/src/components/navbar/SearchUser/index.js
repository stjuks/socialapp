import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Popover, PopoverBody } from 'reactstrap';
import { Link } from 'react-router-dom';

import history from 'helpers/history';
import { routes } from 'helpers/constants';

import {
    SearchUserStyled,
    InputContainerStyled,
    SearchInputStyled,
    SearchIconStyled,
    UserListStyled,
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

    handleClick = () => {
        this.setState({ isPopoverOpen: false });
        ReactDOM.findDOMNode(this.input).focus();
    }

    render() {
        const { isPopoverOpen, query } = this.state;
        const { searchResults } = this.props;

        return (
            <SearchUserStyled>
                <InputContainerStyled id="searchUsers">
                    <SearchInputStyled
                        name="searchQuery"
                        ref={el => this.input = el}
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
                    container="searchUsers"
                    isOpen={isPopoverOpen && query.length > 1} 
                >
                    <PopoverBody>
                        <UserListStyled>
                            {searchResults.map(result => (
                                <UserListItemStyled 
                                    onClick={() => this.handleClick(result)}
                                    key={result.user_id}
                                    to={routes.profile(result.username)}
                                >
                                    {result.username}
                                </UserListItemStyled>
                            ))}
                        </UserListStyled>
                    </PopoverBody>
                </Popover>
            </SearchUserStyled>
        );
    }
}

export default SearchUser;
