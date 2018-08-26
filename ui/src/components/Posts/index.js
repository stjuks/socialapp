import React, { Component } from 'react';

import { PostsStyled } from './styles';

import PostItem from '../PostItem';

class Posts extends Component {
    render() {
        return (
            <PostsStyled>
                <PostItem img="http://placepuppy.net/400/300" />
                <PostItem img="http://placepuppy.net/600/300" />
                <PostItem img="http://placepuppy.net/800/600" />
                <PostItem img="http://placepuppy.net/700/650" />
                <PostItem img="http://placepuppy.net/500/500" />
                <PostItem img="http://placepuppy.net/330/450" />
                <PostItem img="http://placepuppy.net/900/800" />
            </PostsStyled>
        );
    }
}

export default Posts;
