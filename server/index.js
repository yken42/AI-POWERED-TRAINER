import express from 'express';
import cors from 'cors';
import { GoogleGenerativeAI } from '@google/generative-ai';
import 'dotenv/config';

const app = express();
const PORT = 3000;

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

async function run(){
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = "need your help building a training plan for me at the gym, I have 4 days a week to train, devide it to upper-lower workouts and send a json back devided by group of muslces";
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
}

run();

app.use(cors());

app.listen(PORT, () => {
    console.log(`app is running on localhost:${PORT}`);
})