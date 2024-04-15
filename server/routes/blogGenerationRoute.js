import { Router } from 'express';
import { generateBlogPost } from '../controller/BlogGenerationController.js';

const router = Router();


router.post('/', async (req, res) => {
  try {
    const { topic, additionalDetails, toneAnalysis } = req.body;
    const newBlogPost = await generateBlogPost(topic, additionalDetails, toneAnalysis);
    res.json({ newBlogPost });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while generating the new blog post' });
  }
});

export default router;
