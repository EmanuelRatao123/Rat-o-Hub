import { useState, useEffect } from 'react';
import { Hash, Send } from 'lucide-react';
import { io, Socket } from 'socket.io-client';

export default function Chat() {
  const [messages, setMessages] = useState<{user: string, text: string}[]>([
    { user: 'Emanuel Ratão', text: 'Bem-vindo ao RATAO_HUB! Sistema de chat inicializado.' }
  ]);
  const [input, setInput] = useState('');
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    // Connect to backend (adjust URL in production)
    const newSocket = io(import.meta.env.VITE_API_URL || 'http://localhost:3001');
    setSocket(newSocket);
    
    newSocket.on('receive_message', (data) => {
      setMessages(prev => [...prev, { user: data.userId, text: data.content }]);
    });

    return () => { newSocket.close(); };
  }, []);

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    const newMsg = { channelId: 'general', userId: 'Emanuel Ratão', content: input };
    socket?.emit('send_message', newMsg);
    setMessages(prev => [...prev, { user: newMsg.userId, text: newMsg.content }]);
    setInput('');
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="h-12 border-b border-dark-400 flex items-center px-4 shadow-sm flex-shrink-0">
        <Hash size={24} className="text-gray-400 mr-2" />
        <span className="font-bold text-white">geral</span>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, i) => (
          <div key={i} className="flex gap-4 hover:bg-dark-200/50 p-2 rounded transition-colors">
            <div className="w-10 h-10 rounded-full bg-brand flex-shrink-0 flex items-center justify-center font-bold">
              {msg.user.substring(0, 2).toUpperCase()}
            </div>
            <div>
              <div className="flex items-baseline gap-2">
                <span className="font-semibold text-white">{msg.user}</span>
                <span className="text-xs text-gray-400">Hoje às 12:00</span>
              </div>
              <div className="text-gray-300">{msg.text}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="px-4 pb-6 pt-2 flex-shrink-0">
        <form onSubmit={sendMessage} className="bg-dark-200 rounded-lg flex items-center px-4 py-2">
          <input 
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Conversar em #geral"
            className="flex-1 bg-transparent border-none outline-none text-gray-100 placeholder-gray-500"
          />
          <button type="submit" className="text-gray-400 hover:text-white transition-colors">
            <Send size={20} />
          </button>
        </form>
      </div>
    </div>
  );
}
