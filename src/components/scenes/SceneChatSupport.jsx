import { useEffect, useState, useRef } from 'react';
import { Send, X } from 'lucide-react';
import { styles } from '../../constants/colors';

const SceneChatSupport = ({ onNext, onEnd, addLog }) => {
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState('');
    const [showContinue, setShowContinue] = useState(false);
    const [initialized, setInitialized] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        // Only run once when component mounts
        if (initialized) return;
        setInitialized(true);

        // Initial logs
        addLog('Support Agent', 'Chat session opened for Nimal', true);
        addLog('Queue Manager', 'User placed in HITL Queue Level 2', false);

        // Auto-send agent message after short delay
        setTimeout(() => {
            const agentMsg = {
                id: 1,
                sender: 'agent',
                text: 'Hi Nimal 👋 A credit officer will be with you soon. Please hold on.',
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };
            setMessages([agentMsg]);
            addLog('Support Agent', 'Auto message sent: officer will be with you soon', true);
            
            // Show continue button after message appears
            setTimeout(() => {
                setShowContinue(true);
            }, 1000);
        }, 500);
    }, [initialized, addLog]);

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = () => {
        if (!userInput.trim()) return;
        
        const newMsg = {
            id: messages.length + 1,
            sender: 'user',
            text: userInput,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages([...messages, newMsg]);
        addLog('Customer', `Message sent: "${userInput}"`, false);
        setUserInput('');
    };

    const handleEndChat = () => {
        addLog('Orchestrator', 'User ended chat - session reset', false);
        onEnd();
    };

    const handleContinue = () => {
        addLog('Support Agent', 'Transferring customer to officer console', true);
        onNext();
    };

    return (
        <div className={`flex flex-col h-full ${styles.bgWhite}`}>
            {/* Header */}
            <div className={`${styles.bgDeep} ${styles.textWhite} p-4 flex items-center justify-between shadow-deep`}>
                <div>
                    <h2 className="font-bold text-lg">Support Chat</h2>
                    <p className={`text-xs ${styles.textSoft}`}>Connected to HNB Support</p>
                </div>
                <button
                    onClick={handleEndChat}
                    className={`p-2 ${styles.bgWhite} rounded-full hover:opacity-80 transition-opacity`}
                >
                    <X size={20} className={styles.textDeep} />
                </button>
            </div>

            {/* Messages Container */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {messages.map((msg) => (
                    <div
                        key={msg.id}
                        className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        <div
                            className={`max-w-[75%] rounded-2xl px-4 py-2 shadow-sm ${
                                msg.sender === 'agent'
                                    ? `${styles.bgSoft} ${styles.textDeep}`
                                    : `${styles.bgPrimary} ${styles.textWhite}`
                            }`}
                        >
                            <p className="text-sm">{msg.text}</p>
                            <p 
                                className={`text-xs mt-1 ${
                                    msg.sender === 'agent' ? 'opacity-60' : 'opacity-80'
                                }`}
                            >
                                {msg.timestamp}
                            </p>
                        </div>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>

            {/* Continue Button */}
            {showContinue && (
                <div className="p-4 border-t-2" style={{ borderColor: '#BADFEC' }}>
                    <button
                        onClick={handleContinue}
                        className={`w-full py-3 ${styles.bgDeep} ${styles.textWhite} rounded-full font-bold shadow-deep hover:scale-105 transition-transform`}
                    >
                        Continue to Officer Console →
                    </button>
                </div>
            )}

            {/* Input Area */}
            <div className="p-4 border-t-2" style={{ borderColor: '#BADFEC' }}>
                <div className="flex gap-2">
                    <input
                        type="text"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                        placeholder="Type a message..."
                        className={`flex-1 px-4 py-2 rounded-full border-2 ${styles.borderPrimary} ${styles.textDeep} focus:outline-none focus:border-accent`}
                        style={{ backgroundColor: '#FFFFFF' }}
                    />
                    <button
                        onClick={handleSendMessage}
                        disabled={!userInput.trim()}
                        className={`p-3 ${styles.bgPrimary} ${styles.textWhite} rounded-full shadow-primary hover:scale-110 transition-transform disabled:opacity-40 disabled:cursor-not-allowed`}
                    >
                        <Send size={20} />
                    </button>
                </div>
            </div>

            {/* End Chat Footer */}
            <div className="p-3 text-center">
                <button
                    onClick={handleEndChat}
                    className={`text-sm ${styles.bgWhite} ${styles.textDeep} px-6 py-2 rounded-full font-medium hover:opacity-80 transition-opacity`}
                    style={{ border: `2px solid #FADD02` }}
                >
                    End Chat & Exit
                </button>
            </div>
        </div>
    );
};

export default SceneChatSupport;
