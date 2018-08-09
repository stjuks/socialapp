import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FeedStyled } from './styles';

class Feed extends Component {
    render() {
        return (
            <FeedStyled>

            </FeedStyled>
        );
    }
}

export default connect()(Feed);
