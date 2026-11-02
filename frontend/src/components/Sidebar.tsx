import { Hash, Code, Phone, Headphones, Mic, Settings } from 'lucide-react';

export default function Sidebar({ setActiveView, activeView }: any) {
  return (
    <div className="w-60 bg-dark-200 flex flex-col flex-shrink-0">
      {/* Header */}
      <div className="h-12 border-b border-dark-400 flex items-center px-4 font-bold shadow-sm hover:bg-dark-100 cursor-pointer transition-colors">
        RATAO_HUB Server
      </div>

      {/* Canais */}
      <div className="flex-1 overflow-y-auto py-3 px-2 space-y-[2px]">
        <div className="text-xs font-semibold text-gray-400 px-2 mb-1 uppercase">Canais de Texto</div>
        <div 
          onClick={() => setActiveView('chat')}
          className={`flex items-center px-2 py-1.5 rounded cursor-pointer text-gray-400 hover:text-gray-100 hover:bg-dark-100 transition-colors ${activeView === 'chat' ? 'bg-dark-100 text-white' : ''}`}
        >
          <Hash size={18} className="mr-2" />
          geral
        </div>

        <div className="text-xs font-semibold text-gray-400 px-2 mt-4 mb-1 uppercase">Canais de Voz</div>
        <div 
          onClick={() => setActiveView('call')}
          className={`flex items-center px-2 py-1.5 rounded cursor-pointer text-gray-400 hover:text-gray-100 hover:bg-dark-100 transition-colors ${activeView === 'call' ? 'bg-dark-100 text-white' : ''}`}
        >
          <Phone size={18} className="mr-2" />
          Lounge (WebRTC)
        </div>

        <div className="text-xs font-semibold text-gray-400 px-2 mt-4 mb-1 uppercase">Desenvolvimento</div>
        <div 
          onClick={() => setActiveView('bots')}
          className={`flex items-center px-2 py-1.5 rounded cursor-pointer text-gray-400 hover:text-gray-100 hover:bg-dark-100 transition-colors ${activeView === 'bots' ? 'bg-dark-100 text-white' : ''}`}
        >
          <Code size={18} className="mr-2" />
          Bot Studio
        </div>
      </div>

      {/* User Panel */}
      <div className="h-14 bg-dark-300 flex items-center px-2 gap-2">
        <div className="w-8 h-8 rounded-full bg-brand flex-shrink-0 flex items-center justify-center font-bold text-xs">
          ER
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-semibold text-sm truncate text-white">Emanuel Ratão</div>
          <div className="text-xs text-gray-400 truncate">Online</div>
        </div>
        <div className="flex gap-1">
          <Mic size={18} className="text-gray-400 hover:text-gray-100 cursor-pointer" />
          <Headphones size={18} className="text-gray-400 hover:text-gray-100 cursor-pointer" />
          <Settings size={18} className="text-gray-400 hover:text-gray-100 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
