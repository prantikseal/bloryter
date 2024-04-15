import model from '../generativeAI.js';
import { BLOG_GENERATION_PROMPT } from '../utils/promptBuilder.js';

export async function generateBlogPost(topic, additionalDetails, toneAnalysis) {
  const prompt = BLOG_GENERATION_PROMPT(topic, additionalDetails, toneAnalysis);
  const newBlogPost = await model.invoke([["human", prompt]]);
  return newBlogPost;
}
