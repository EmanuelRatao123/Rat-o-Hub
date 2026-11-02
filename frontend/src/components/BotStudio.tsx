import Editor from '@monaco-editor/react';
import { Play, Save, Settings } from 'lucide-react';

export default function BotStudio() {
  const defaultCode = `// RATAO_HUB Bot Studio
// Programação Tradicional (TypeScript)
// Desenvolvido para rodar de forma isolada e segura.

client.on('message', (message) => {
    if (message.content === '!ping') {
        message.reply('Pong! 🏓');
    }
    
    // Sistema de moderação
    if (message.content.includes('palavrão')) {
        message.delete();
        message.author.warn('Linguagem inapropriada.');
    }
});

client.login(process.env.BOT_TOKEN);
`;

  return (
    <div className="flex flex-col h-full bg-dark-100">
      {/* Header */}
      <div className="h-12 border-b border-dark-400 flex items-center justify-between px-4">
        <div className="font-bold text-white flex items-center gap-2">
          <span>Bot Studio: Programação Avançada</span>
        </div>
        <div className="flex gap-2">
          <button className="bg-dark-300 hover:bg-dark-400 text-white px-3 py-1.5 rounded flex items-center gap-2 text-sm transition-colors">
            <Save size={16} /> Salvar
          </button>
          <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 rounded flex items-center gap-2 text-sm transition-colors">
            <Play size={16} /> Iniciar Bot
          </button>
        </div>
      </div>

      <div className="flex-1 flex">
        {/* Editor Area */}
        <div className="flex-1 border-r border-dark-400">
          <Editor
            height="100%"
            defaultLanguage="typescript"
            theme="vs-dark"
            defaultValue={defaultCode}
            options={{
              minimap: { enabled: false },
              fontSize: 14,
              fontFamily: 'Consolas, monospace',
            }}
          />
        </div>

        {/* Properties Sidebar */}
        <div className="w-64 bg-dark-200 p-4 flex flex-col gap-4">
          <h3 className="text-gray-300 font-bold uppercase text-xs">Propriedades do Bot</h3>
          
          <div>
            <label className="text-xs text-gray-400 mb-1 block">Nome do Bot</label>
            <input type="text" className="w-full bg-dark-400 text-white p-2 rounded border border-dark-100" defaultValue="RATÃO_BOT" />
          </div>

          <div>
            <label className="text-xs text-gray-400 mb-1 block">Status</label>
            <select className="w-full bg-dark-400 text-white p-2 rounded border border-dark-100 outline-none">
              <option>Online</option>
              <option>Ausente</option>
              <option>Não Perturbe</option>
            </select>
          </div>

          <div className="mt-auto">
            <div className="p-3 bg-brand/10 border border-brand/30 rounded-lg">
              <h4 className="text-brand font-bold text-sm mb-1">Limitações de Hospedagem (Render)</h4>
              <p className="text-xs text-gray-300 leading-relaxed">
                Na hospedagem serverless gratuita, bots não podem rodar indefinidamente. Para hospedar bots 24/7 sem interrupções, é necessário um container dedicado ou Workers persistentes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
