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

    const sendMessage = async (message: string) => {
        if (!message.trim()) return;

        const userMessage: Message = { role: "user", content: message };
        setMessages((prevMessages) => [...prevMessages, userMessage]);
        setInput("");

        try {
            const response = await fetch("http://localhost:8000/api/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ message: userMessage.content })
            });

            if (!response.ok) throw new Error("Server error");

            const data = await response.json();
            const botMessage: Message = { role: "bot", content: data.reply };
            setMessages((prevMessages) => [...prevMessages, botMessage]);
        } catch (error) {
            console.error("Error:", error);
            setMessages((prevMessages) => [
                ...prevMessages,
                { role: "bot", content: "Sorry, I'm having trouble responding right no." }
            ]);
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
