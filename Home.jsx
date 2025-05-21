
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Post from '../components/Post';

export default function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('/api/posts').then(res => setPosts(res.data));
    }, []);

    return (
        <div>
            <h1>Feed</h1>
            {posts.map(post => <Post key={post._id} post={post} />)}
        </div>
    );
}
