import React, { Component } from 'react';

import { PostsStyled } from './styles';

import PostItem from '../PostItem';

class Posts extends Component {
    render() {
        const {
            posts,
            withDetails,
            itemsPerRow
        } = this.props;

        return (
            <PostsStyled itemsPerRow={itemsPerRow}>
                {posts.map((post, i) => (
                    <PostItem
                        key={i}
                        post={post}
                        withDetails={withDetails}
                    />
                ))}
            </PostsStyled>
        );
    }
}

export default Posts;
