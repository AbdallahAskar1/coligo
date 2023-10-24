import {config}from 'dotenv'
import express from "express";
import { connectToDatabase } from './config/database.js';
import quizRoutes from './routes/quizRoutes.js';
import announcementRoutes from './routes/announcementRoutes.js'
config();

const port = process.env.PORT || 3000;
const app = express()

await connectToDatabase()

app.use(express.json())

app.use('/api/quiz',quizRoutes)
app.use('/api/announcements', announcementRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})

export default app;
