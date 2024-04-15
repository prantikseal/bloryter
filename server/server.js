import express from 'express';
import dotenv from 'dotenv';

import middlewares from './middlewares.js';
import cors from 'cors';

import toneAnalysisRoutes from './routes/toneAnalysisRoute.js';
import blogGenerationRoutes from './routes/blogGenerationRoute.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
  origin: '*',
  credentials: true,
}));


app.use(middlewares);
app.use('/analyze-tone', toneAnalysisRoutes);
app.use('/generate-blog', blogGenerationRoutes);

app.listen(port, () => {
  console.log(`Server is running on port https://localhost:${port}`);
});
