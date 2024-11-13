import express from 'express';
import { getChatResponse } from '../controllers/chatbotController';

const router = express.Router();

// Define the chatbot route
router.post('/chat', getChatResponse);
router.get('/chat', async(req:any,res:any)=> {
    res.send('Hello from chatbot');
});

export default router;