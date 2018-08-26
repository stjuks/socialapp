import React, { Component } from 'react';

import {
    SearchUserStyled,
    InputContainerStyled,
    SearchInputStyled,
    SearchIconStyled
} from './styles';

import Icon from 'styled/Icon';

class SearchUser extends Component {
    render() {
        return (
            <SearchUserStyled>
                <InputContainerStyled>
                    <SearchInputStyled
                        placeholder="Search users..."
                    />
                    <SearchIconStyled>
                        <Icon type="search" />
                    </SearchIconStyled>
                </InputContainerStyled>
            </SearchUserStyled>
        );
    }
}

export default SearchUser;
