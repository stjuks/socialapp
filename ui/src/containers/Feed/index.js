import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getFeedPosts } from 'actions/postActions';

import { FeedStyled } from './styles';
import Posts from 'components/Posts';

class Feed extends Component {
    componentDidMount() {
        this.props.dispatch(getFeedPosts());
    }

    render() {
        const { feed } = this.props;

        return (
            <FeedStyled>
                <Posts
                    posts={feed}
                />
            </FeedStyled>
        );
    }
}

const mapStateToProps = store => {
    return {
        feed: store.posts.feed
    }
};

export default connect(mapStateToProps)(Feed);
