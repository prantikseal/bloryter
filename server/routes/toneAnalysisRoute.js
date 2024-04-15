import express from 'express';
import { analyzeTone } from '../controller/ToneAnalysisController.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { sampleBlogPost } = req.body;
    const toneAnalysis = await analyzeTone(sampleBlogPost);
    res.json({ toneAnalysis });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while analyzing the tone' });
  }
});

export default router;
