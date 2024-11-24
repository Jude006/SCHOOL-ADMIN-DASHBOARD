import React, { useState, useEffect } from "react";
import { FaPaperPlane, FaRegUser } from "react-icons/fa";

const ChatSection = () => {
  const [messages, setMessages] = useState([
    { id: 1, user: "Admin", message: "Hello, how can I assist you today?", type: "admin" },
    { id: 2, user: "Student", message: "I need help with my homework.", type: "user" },
    { id: 3, user: "Admin", message: "Sure! What subject is it?", type: "admin" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        { id: messages.length + 1, user: "Admin", message: newMessage, type: "admin" },
      ]);
      setNewMessage("");
    }
  };

  const handleUserMessage = (message) => {
    setMessages([
      ...messages,
      { id: messages.length + 1, user: "Student", message, type: "user" },
    ]);
  };

  return (
    <div className="chat-section bg-white shadow-md rounded-lg p-6 flex flex-col h-[60vh] max-w-lg mx-auto">
      <div className="flex flex-col flex-grow space-y-4 overflow-y-auto">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.type === "admin" ? "justify-start" : "justify-end"}`}
          >
            <div
              className={`flex items-center space-x-2 ${msg.type === "admin" ? "text-left" : "text-right"}`}
            >
              {msg.type === "user" ? (
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">
                  <FaRegUser />
                </div>
              ) : (
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white">
                  <FaRegUser />
                </div>
              )}
              <div className={`p-3 rounded-lg ${msg.type === "admin" ? "bg-gray-100" : "bg-blue-100"}`}>
                <p>{msg.message}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center">
        <input
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-full mr-4 focus:outline-none"
        />
        <button
          onClick={handleSendMessage}
          className="bg-blue-600 text-white p-3 rounded-full disabled:opacity-50"
          disabled={!newMessage.trim()}
        >
          <FaPaperPlane />
        </button>
      </div>
    </div>
  );
};

export default ChatSection;
