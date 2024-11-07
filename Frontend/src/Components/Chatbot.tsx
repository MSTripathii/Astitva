import React, { useState } from 'react';
import './Chatbot.css';

interface Message {
    role: 'user' | 'bot';
    content: string;
}

const Chatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState<string>("");

    const toggleChat = () => setIsOpen(!isOpen);

    // Predefined questions
    const predefinedQuestions: string[] = [
        "What assistance can I provide until help arrives?",
        "What medicines can I give the animal?",
        "How do I report a critical case?",
    ];

    const sendMessage = async (message: string) => {
        // Add user's message to the chat
        const userMessage: Message = { role: "user", content: message };
        setMessages((prevMessages) => [...prevMessages, userMessage]);
        setInput("");

        // Send message to the backend API
        try {
            const response = await fetch('http://localhost:8000', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message })
            });

            const data = await response.json();
            const botMessage: Message = { role: "bot", content: data.reply };

            // Add bot's reply to the chat
            setMessages((prevMessages) => [...prevMessages, botMessage]);
        } catch (error) {
            console.error("Error:", error);
            const errorMessage: Message = { role: "bot", content: "Sorry, I'm having trouble responding right now." };
            setMessages((prevMessages) => [...prevMessages, errorMessage]);
        }
    };

    return (
        <div className="chatbot-container">
            {!isOpen ? (
                <button className="chatbot-icon" onClick={toggleChat}>💬</button>
            ) : (
                <div className="chatbot">
                    <div className="chatbot-header">
                        <h4>Ask Astitva</h4>
                        <button onClick={toggleChat}>✖️</button>
                    </div>
                    <div className="chat-window">
                        {messages.map((msg, index) => (
                            <div key={index} className={`message ${msg.role}`}>
                                {msg.content}
                            </div>
                        ))}
                    </div>
                    <div className="predefined-questions">
                        {predefinedQuestions.map((question, index) => (
                            <button key={index} onClick={() => sendMessage(question)}>
                                {question}
                            </button>
                        ))}
                    </div>
                    <div className="input-area">
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Type your question..."
                            onKeyPress={(e) => e.key === 'Enter' && sendMessage(input)}
                        />
                        <button onClick={() => sendMessage(input)}>Send</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;
