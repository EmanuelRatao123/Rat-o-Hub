import { Video, MicOff, MonitorUp, PhoneOff } from 'lucide-react';

export default function VideoCall() {
  return (
    <div className="flex flex-col h-full bg-black">
      {/* Header */}
      <div className="h-12 border-b border-dark-400 flex items-center px-4 bg-dark-200">
        <span className="font-bold text-white">Lounge de Voz e Vídeo</span>
        <span className="ml-2 text-xs bg-brand text-white px-2 py-0.5 rounded">WebRTC Ready</span>
      </div>

      {/* Video Grid Placeholder */}
      <div className="flex-1 p-4 flex items-center justify-center grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-dark-300 rounded-xl border border-dark-400 aspect-video flex items-center justify-center relative overflow-hidden group">
          <div className="w-20 h-20 bg-brand rounded-full flex items-center justify-center text-2xl font-bold">ER</div>
          <div className="absolute bottom-2 left-2 bg-black/60 px-2 py-1 rounded text-xs text-white">Emanuel Ratão</div>
        </div>
      </div>

      {/* Controls */}
      <div className="h-20 bg-dark-200 flex items-center justify-center gap-4">
        <button className="w-12 h-12 rounded-full bg-dark-100 hover:bg-dark-400 flex items-center justify-center transition-colors text-white">
          <MicOff size={20} />
        </button>
        <button className="w-12 h-12 rounded-full bg-dark-100 hover:bg-dark-400 flex items-center justify-center transition-colors text-white">
          <Video size={20} />
        </button>
        <button className="w-12 h-12 rounded-full bg-dark-100 hover:bg-dark-400 flex items-center justify-center transition-colors text-white">
          <MonitorUp size={20} />
        </button>
        <button className="w-12 h-12 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center transition-colors text-white">
          <PhoneOff size={20} />
        </button>
      </div>
    </div>
  );
}
