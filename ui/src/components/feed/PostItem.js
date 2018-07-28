import React, { Component } from 'react';

import { API_URL } from '../../config';

class PostItem extends Component {
    render() {
        const {
            post,
            withDetails
        } = this.props;

        const style = {
            height: !withDetails ? '100%' : null
        };

        return (
            <div className="post-item-wrapper">
                <div className="post-item">
                    <div className="post-content">
                        <div style={style} className="post-image-container">
                            <img className="post-image" src={`${API_URL}/posts/image/${post.image}`} />
                        </div>
                        {withDetails &&
                            <div className="post-details">
                                <div className="post-username">{post.username}</div>
                                <div className="post-likes">{post.like_count} likes</div>
                                <div className="post-caption">{post.caption}</div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default PostItem;
