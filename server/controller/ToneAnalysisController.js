import model from '../generativeAI.js';
import { TONE_ANALYSIS_PROMPT } from '../utils/promptBuilder.js';

export async function analyzeTone(sampleBlogPost) {
  const prompt = TONE_ANALYSIS_PROMPT(sampleBlogPost);
  const toneAnalysis = await model.invoke([["human", prompt]]);
  return toneAnalysis;
}
