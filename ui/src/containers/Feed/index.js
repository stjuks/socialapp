import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getFeedPosts } from 'actions/postActions';

import { 
    FeedStyled, 
    FeedTitleStyled, 
    DividerStyled 
} from './styles';

import Posts from 'containers/Posts';

class Feed extends Component {
    componentDidMount() {
        this.props.dispatch(getFeedPosts());
    }

    render() {
        const { feed } = this.props;

        return (
            <FeedStyled>
                <FeedTitleStyled>
                    Your Feed
                </FeedTitleStyled>
                <DividerStyled />
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
