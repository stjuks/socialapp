import React, { Component } from 'react';
import { Popover, PopoverBody } from 'reactstrap';

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
            <div className="navbar-section search-container">
                <input
                    type="text"
                    placeholder="Search users..."
                    className="search-input"
                    name="searchQuery"
                    id="searchQuery"
                    value={values.searchQuery}
                    onChange={e => { this.setState({ isOpen: true }); handleSearch(e) }}
                />
                <Popover
                    placement="bottom"
                    target="searchQuery"
                    isOpen={searchResults.length > 0 && this.state.isOpen}
                    toggle={e => this.setState({ isOpen: !this.state.isOpen })}
                >
                    <PopoverBody>
                        {searchResults.map((user, i) => (
                            <div
                                key={i}
                                onClick={e => this.handleClick(user.username)}
                                className="search-item"
                            >
                                {user.username}
                            </div>
                        ))}
                    </PopoverBody>
                </Popover>
            </div>
        );
    }
}

export default SearchForm;
