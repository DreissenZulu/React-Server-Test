import React from 'react';

function PostCards(props) {

    return (
        <div>
            {props.posts.map(post => {
                return (
                    <div>
                        {post.post}
                    </div>
                )
            })}
        </div>
    )
}

export default PostCards;