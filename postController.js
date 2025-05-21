
const Post = require('../models/Post');

exports.createPost = async (req, res) => {
    try {
        const post = new Post(req.body);
        await post.save();
        res.status(201).json(post);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate('author');
        res.json(posts);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
