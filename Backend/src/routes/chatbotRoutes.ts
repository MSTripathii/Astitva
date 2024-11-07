import express from 'express';
import { getChatResponse } from '../controllers/chatbotController';

const router = express.Router();

// Define the chatbot route
router.post('/chat', getChatResponse);

export default router;