// postController.js

// Logic for post management

const Post = require('../models/Post');

class PostController {
    async createPost(req, res) {
        try {
            const post = new Post(req.body);
            await post.save();
            res.status(201).json(post);
        } catch (error) {
            res.status(400).json({ error: 'Failed to create post' });
        }
    }

    async getPost(req, res) {
        try {
            const post = await Post.findById(req.params.id);
            if (!post) return res.status(404).json({ error: 'Post not found' });
            res.json(post);
        } catch (error) {
            res.status(400).json({ error: 'Failed to retrieve post' });
        }
    }

    async updatePost(req, res) {
        try {
            const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!post) return res.status(404).json({ error: 'Post not found' });
            res.json(post);
        } catch (error) {
            res.status(400).json({ error: 'Failed to update post' });
        }
    }

    async deletePost(req, res) {
        try {
            const post = await Post.findByIdAndDelete(req.params.id);
            if (!post) return res.status(404).json({ error: 'Post not found' });
            res.status(204).send();
        } catch (error) {
            res.status(400).json({ error: 'Failed to delete post' });
        }
    }
}

module.exports = new PostController();