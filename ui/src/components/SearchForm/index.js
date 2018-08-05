import React, { Component } from 'react';
import { Popover, PopoverBody } from 'reactstrap';

import {
    SearchFormStyled,
    SearchInputStyled,
    SearchItemStyled
} from './styles';

class SearchForm extends Component {
    state = {
        isOpen: true
    };

    handleClick = (username) => {
        this.props.handleSubmit(username);
        this.setState({ isOpen: false });
    };

    render() {
        const {
            handleSearch,
            values,
            searchResults
        } = this.props;

        return (
            <SearchFormStyled>
                <SearchInputStyled
                    type="text"
                    placeholder="Search users..."
                    name="searchQuery"
                    id="searchQuery"
                    value={values.searchQuery}
                    onChange={e => { this.setState({ isOpen: true }); handleSearch(e) }}
                />
                <Popover
                    placement="bottom"
                    target="searchQuery"
                    isOpen={searchResults.length > 0 && this.state.isOpen}
                    toggle={() => this.setState({ isOpen: !this.state.isOpen })}
                >
                    <PopoverBody>
                        {searchResults.map((user, i) => (
                            <SearchItemStyled
                                key={i}
                                onClick={() => this.handleClick(user.username)}
                            >
                                {user.username}
                            </SearchItemStyled>
                        ))}
                    </PopoverBody>
                </Popover>
            </SearchFormStyled>
        );
    }
}

export default SearchForm;
