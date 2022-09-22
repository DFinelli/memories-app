import express from 'express';

import { getPosts } from '../controllers/posts'

const router = express.Router();

// localhost:5000/posts ~~~ has the prefix /posts from index.js
// calls the controller function getPosts imported
router.get('/', getPosts);

export default router;