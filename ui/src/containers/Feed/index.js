import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FeedStyled } from './styles';

import Posts from 'components/Posts';

class Feed extends Component {
    render() {
        return (
            <FeedStyled>
                <Posts />
            </FeedStyled>
        );
    }
}

export default connect()(Feed);
