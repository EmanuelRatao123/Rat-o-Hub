import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import BotStudio from './components/BotStudio';
import VideoCall from './components/VideoCall';
import { Settings, Phone, Code } from 'lucide-react';

function App() {
  const [activeView, setActiveView] = useState<'chat' | 'call' | 'bots'>('chat');

  return (
    <div className="flex h-screen w-full bg-dark-300">
      {/* Sidebar de Servidores */}
      <div className="w-[72px] bg-dark-400 flex flex-col items-center py-3 gap-3 flex-shrink-0">
        <div className="w-12 h-12 bg-brand rounded-2xl flex items-center justify-center cursor-pointer hover:rounded-xl transition-all duration-200">
          <span className="font-bold text-xl text-white">RH</span>
        </div>
        <div className="w-8 h-[2px] bg-dark-200 rounded-full"></div>
        <div className="w-12 h-12 bg-dark-100 rounded-[24px] hover:rounded-xl transition-all duration-200 cursor-pointer flex items-center justify-center group hover:bg-brand">
          <span className="text-gray-300 group-hover:text-white text-lg">+</span>
        </div>
      </div>

      {/* Sidebar do Servidor Atual */}
      <Sidebar setActiveView={setActiveView} activeView={activeView} />

      {/* Área Principal */}
      <main className="flex-1 flex flex-col bg-dark-100 min-w-0">
        {activeView === 'chat' && <Chat />}
        {activeView === 'call' && <VideoCall />}
        {activeView === 'bots' && <BotStudio />}
      </main>
    </div>
  );
}

export default App;
