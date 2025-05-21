
import React from 'react';
export default function Post({ post }) {
    return (
        <div>
            <p><strong>{post.author.username}</strong></p>
            <p>{post.content}</p>
        </div>
    );
}
