import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getFollowingPosts } from 'actions/postActions';

import Posts from 'components/Posts';
import { FeedStyled } from './styles';

class Feed extends Component {
    componentDidMount() {
        this.props.dispatch(getFollowingPosts());
    };

    render() {
        const {
            followingPosts
        } = this.props;

        return (
            <FeedStyled>
                <Posts
                    itemsPerRow={4}
                    posts={followingPosts}
                    withDetails
                />
            </FeedStyled>
        );
    }
}

const stateMap = (store) => {
    return {
        followingPosts: store.posts.followingPosts
    }
};

export default connect(stateMap)(Feed);
