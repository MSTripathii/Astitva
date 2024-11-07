import { Request, Response } from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Define the interface for the expected response data structure from OpenAI
interface OpenAIResponse {
    choices: Array<{
        message: {
            content: string;
        };
    }>;
}

// Define the function with proper types for Request and Response
export const getChatResponse = async (req: Request, res: Response): Promise<void> => {
    const userMessage: string = req.body.message; // Ensure that the message is a string

    try {
        // Get the OpenAI API key from the environment variables
        const openaiApiKey = process.env.OPENAI_API_KEY;

        // Check if the API key is set
        if (!openaiApiKey) {
            res.status(500).json({ reply: "API key is missing." });
            return;
        }

        // Make the API call to OpenAI with the proper headers and body
        const response = await axios.post<OpenAIResponse>('https://api.openai.com/v1/chat/completions', {
            model: "gpt-3.5-turbo",  // The model being used
            messages: [{ role: "user", content: userMessage }] // User message for chat model
        }, {
            headers: {
                'Authorization': `Bearer ${openaiApiKey}`,
                'Content-Type': 'application/json' // Ensure content type is application/json
            }
        });

        // Extract the bot's reply from the response
        const botReply: string = response.data.choices[0].message.content;

        // Send the reply back to the client
        res.json({ reply: botReply });
    } catch (error) {
        // Handle errors and send a generic error message if something goes wrong
        console.error('Error:', error); // Log the error for debugging
        res.status(500).json({ reply: "Sorry, I'm having trouble responding right now." });
    }
};
