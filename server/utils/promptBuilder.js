

export const TONE_ANALYSIS_PROMPT = (sampleBlogPost) => `
% INSTRUCTIONS
- You are an AI Bot that is excellent at mimicking an author's writing style.
- Your goal is to create a new blog post with a tone and style that closely matches the provided sample.
- Do not deviate from the tone instructions and writing samples provided.

% SAMPLE BLOG POST [how the user writes]
${sampleBlogPost}

% YOUR TASK
Analyze the provided sample blog post and generate a detailed description of the author's tone, including elements such as:
- Pace (fast-paced, leisurely, etc.)
- Mood (optimistic, serious, humorous, etc.)
- Voice (confident, conversational, formal, etc.)
- Diction (choice of words, use of jargon, colloquialisms, etc.)
- Sentence structure and syntax
- Use of imagery, metaphors, or analogies
- Overall writing style (storytelling, persuasive, informative, etc.)
- Recurring themes or topics
- online personalities the text is similar to (for eg. writes like : gary vaynerchuck, elon musk, etc.)
reply with analysis as detailed as possible
}`;

export const BLOG_GENERATION_PROMPT = (toneAnalysis, topic, additionalDetails) =>
`
% INSTRUCTIONS
- You are an AI Bot that is excellent at mimicking an author's writing style.
- Your goal is to create a new blog post with a tone and style that closely matches the provided sample.
- Do not deviate from the tone instructions and writing samples provided.

% BLOG POST TONE ANALYSIS
${toneAnalysis}

% TOPIC AND ADDITIONAL DETAILS
Topic: ${topic}
Additional Details: ${additionalDetails}

% YOUR TASK
Write a new blog post on topic given with the addional details discussed (approximately 1000 words) on the following topic and using the provided additional details, carefully emulating the author's tone, voice, and writing style as described in the tone analysis. Ensure that the new blog post maintains a consistent and authentic tone throughout. Keep it very simple and please don't deviate from the tone analysis.
`;
