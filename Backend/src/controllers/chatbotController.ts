// import { Request, Response } from 'express';
// import axios from 'axios';
// import dotenv from 'dotenv';
// import { GoogleGenerativeAI } from "@google/generative-ai";

// // Load environment variables from .env file
// dotenv.config();

// // Define the interface for the expected response data structure from OpenAI
// interface OpenAIResponse {
//     choices: Array<{
//         message: {
//             content: string;
//         };
//     }>;
// }

// // Define the function with proper types for Request and Response
// // export const getChatResponse = async (req: Request, res: Response): Promise<void> => {
// //     const userMessage: string = req.body.message; // Ensure that the message is a string

// //     try {
// //         // Get the OpenAI API key from the environment variables
// //         // const genaiApiKey = process.env.GENAI_API_KEY;

// //         // Make sure to include these imports:
// //         // import { GoogleGenerativeAI } from "@google/generative-ai";
// //         const genAI = new GoogleGenerativeAI('AIzaSyBuxEbHDkYtxWOgY-NmhTusJLB6KrsfVg0');
// //         const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// //         const prompt = req.body.message;

// //         const result = await model.generateContent(prompt);
// //         console.log(result.response.text());
// //         const botReply = result.response.text();
// //         // Extract the bot's reply from the response
// //         // const botReply: string = response.data.choices[0].message.content;

// //         // Send the reply back to the client
// //         res.json({ reply: botReply });
// //     } catch (error) {
// //         // Handle errors and send a generic error message if something goes wrong
// //         console.error('Error:', error); // Log the error for debugging
// //         res.status(500).json({ reply: "Sorry, I'm having trouble responding right now." });
// //     }
// // };

// export const getChatResponse = async (req: Request, res: Response): Promise<void> => {
//     const userMessage: string = req.body.message;

//     try {
//         const genAI = new GoogleGenerativeAI('AIzaSyBuxEbHDkYtxWOgY-NmhTusJLB6KrsfVg0');
//         const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

//         const result = await model.generateContent(userMessage);
//         const botReply = result.response.text();

//         res.json({ reply: botReply });
//     } catch (error) {
//         console.error("Error:", error);
//         res.status(500).json({ reply: "Sorry, I'm having trouble responding right now." });
//     }
// };
import { Request, Response } from 'express';
import dotenv from 'dotenv';
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

export const getChatResponse = async (req: Request, res: Response): Promise<void> => {
    const userMessage: string = req.body.message;

    try {
        // Ensure the API key is correctly set
        const apiKey = process.env.GENAI_API_KEY;
        if (!apiKey) {
            throw new Error("API key is missing");
        }

        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const result = await model.generateContent(userMessage);
        console.log("Hello :- ", userMessage)
        
        // Ensure response text exists and is valid
        const botReply = result?.response?.text ? result.response.text() : "Error: Response text not available";

        res.json({ reply: botReply });
    } catch (error: any) {
        console.error("Detailed Error:", error.message || error);
        res.status(500).json({ reply: "Sorry, I'm having trouble responding right now.." });
    }
};
