import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getFollowingPosts } from 'actions/postActions';

import { FeedStyled } from './styles';
import Posts from 'components/Posts';

class Feed extends Component {
    componentDidMount() {
        this.props.dispatch(getFollowingPosts());
    }

    render() {
        const { followingPosts } = this.props;

        return (
            <FeedStyled>
                <Posts
                    posts={followingPosts}
                />
            </FeedStyled>
        );
    }
}

const mapStateToProps = store => {
    return {
        followingPosts: store.posts.followingPosts
    }
};

export default connect(mapStateToProps)(Feed);
