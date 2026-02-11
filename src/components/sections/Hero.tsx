import { useState } from "react";
import { Logo } from "../ui/Logo";

const FlagToggle = ({ label, active, onToggle }: { label: string, active: boolean, onToggle: () => void }) => (
  <div 
    onClick={onToggle}
    className={`flex items-center justify-between p-3 rounded-lg border cursor-pointer transition-all duration-300 ${active ? 'bg-primary/10 border-primary/50' : 'bg-white/5 border-white/5 hover:bg-white/10'}`}
  >
    <div className="flex flex-col">
      <span className={`text-[11px] font-mono leading-none mb-1 ${active ? 'text-primary' : 'text-slate-400'}`}>
        {label}
      </span>
      <span className="text-[9px] text-slate-500 uppercase tracking-tighter">Boolean Flag</span>
    </div>
    <div className={`w-8 h-4 rounded-full relative transition-colors duration-300 ${active ? 'bg-primary' : 'bg-slate-700'}`}>
      <div className={`absolute top-0.5 w-3 h-3 rounded-full bg-white transition-all duration-300 shadow-sm ${active ? 'left-4.5' : 'left-0.5'}`}></div>
    </div>
  </div>
);

const WebsitePreview = ({ flags }: { flags: { ai_features: boolean, discount_active: boolean, experimental_theme: boolean } }) => (
  <div className={`flex-1 min-h-[300px] rounded-xl border transition-all duration-700 overflow-hidden relative shadow-2xl ${flags.experimental_theme ? 'border-indigo-500/30' : 'border-emerald-500/30'}`}>
    {/* Browser Header */}
    <div className="h-8 bg-[#111113] border-b border-white/5 flex items-center px-4 gap-2">
      <div className="flex gap-1.5">
        <div className="w-2 h-2 rounded-full bg-white/10"></div>
        <div className="w-2 h-2 rounded-full bg-white/10"></div>
        <div className="w-2 h-2 rounded-full bg-white/10"></div>
      </div>
      <div className="mx-auto bg-white/5 h-4 w-48 rounded text-[8px] flex items-center justify-center px-2 text-slate-500 font-mono tracking-tight">
        https://your-app.com/dashboard
      </div>
    </div>

    {/* Website Content */}
    <div className={`p-5 h-full transition-all duration-500 ${flags.experimental_theme ? 'bg-[#0a0a0f]' : 'bg-[#050505]'}`}>
      <div className="flex justify-between items-center mb-8">
        <div className={`h-4 w-28 rounded-md ${flags.experimental_theme ? 'bg-indigo-500/20' : 'bg-emerald-500/20'}`}></div>
        <div className="flex gap-2">
          <div className="h-5 w-5 rounded-full bg-white/5 border border-white/5 flex items-center justify-center">
             <div className="w-2 h-2 rounded-full bg-slate-600"></div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {/* Main Card */}
        <div className={`p-4 rounded-2xl border transition-all duration-500 ${flags.ai_features ? 'bg-indigo-500/5 border-indigo-500/30 shadow-[0_0_20px_rgba(99,102,241,0.1)]' : 'bg-white/[0.02] border-white/5'}`}>
          <div className="flex items-start gap-4">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${flags.ai_features ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/40' : 'bg-slate-800 text-slate-600'}`}>
              <span className="material-icons-round text-lg">{flags.ai_features ? 'psychology' : 'lock'}</span>
            </div>
            <div className="flex-1 pt-1">
              <div className="h-3 w-24 bg-white/20 rounded mb-2"></div>
              <div className="h-2 w-full bg-white/10 rounded"></div>
            </div>
          </div>
          {flags.ai_features && (
            <div className="mt-4 pt-4 border-t border-white/5 animate-in fade-in slide-in-from-top-2 duration-500">
               <div className="h-8 w-full bg-indigo-600 hover:bg-indigo-500 text-[10px] font-bold text-white rounded-lg flex items-center justify-center cursor-default transition-colors">
                  Run AI Diagnostics
               </div>
            </div>
          )}
        </div>

        {/* Action Bar */}
        <div className={`p-3 rounded-2xl border transition-all duration-500 flex items-center justify-between ${flags.discount_active ? 'bg-emerald-500/10 border-emerald-500/40' : 'bg-white/[0.02] border-white/5'}`}>
          <div className="flex items-center gap-3">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${flags.discount_active ? 'bg-emerald-500/20 text-emerald-400' : 'bg-white/5 text-slate-700'}`}>
              <span className="material-icons-round text-sm">payments</span>
            </div>
            <div className="h-2 w-20 bg-white/10 rounded"></div>
          </div>
          <div className="flex items-center gap-2">
            {flags.discount_active && (
              <span className="text-[9px] text-slate-500 line-through tracking-tighter">$999</span>
            )}
            <span className={`text-xs font-black tracking-tight transition-all duration-500 ${flags.discount_active ? 'text-emerald-400 scale-125' : 'text-slate-500'}`}>
              {flags.discount_active ? '$499' : '$999'}
            </span>
          </div>
        </div>
      </div>
      
      {flags.ai_features && (
        <div className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-[0_0_25px_rgba(99,102,241,0.5)] animate-bounce cursor-default">
           <span className="material-icons-round">bolt</span>
        </div>
      )}
    </div>
  </div>
);

export const Hero = () => {
  const [logs, setLogs] = useState<{msg: string, id: number}[]>([]);
  const [flags, setFlags] = useState({
    ai_features: false,
    discount_active: false,
    experimental_theme: false
  });

  const addLog = (msg: string) => {
    const id = Date.now();
    setLogs(prev => [ { msg, id }, ...prev].slice(0, 4));
  };

  const toggleFlag = (flag: keyof typeof flags) => {
    const newState = !flags[flag];
    setFlags(prev => ({ ...prev, [flag]: newState }));
    // Compact log format
    addLog(`var('${flag}') → ${newState.toString().toUpperCase()}`);
  };

  return (
    <section className="relative overflow-hidden pt-24 pb-20 bg-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background-dark/50 to-background-dark pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-primary text-xs font-bold uppercase tracking-widest mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Side Panel API v1.2.0
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
          No more code changes. <br />
          <span className="text-gradient">Just toggle and test.</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
          The ultimate side panel for browser feature flag manipulation. 
          Intercept <span className="text-white font-semibold">LaunchDarkly, Statsig</span>, and more in real-time. 
          Sync UI state across your app with zero latency.
        </p>

        {/* CTA Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full mb-20">
          <a
            className="w-full sm:w-auto px-10 py-4 bg-primary hover:bg-blue-600 text-white font-bold rounded-2xl transition-all flex items-center justify-center gap-2 text-lg shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] group hover:-translate-y-1"
            href="#waitlist"
          >
            <span className="material-icons-round transition-transform group-hover:rotate-12">bolt</span>
            Start Overriding Now
          </a>
          <a
            className="w-full sm:w-auto px-10 py-4 bg-card-dark border border-border-dark hover:border-slate-700 text-white font-bold rounded-2xl transition-all flex items-center justify-center gap-2 text-lg hover:-translate-y-1"
            href="#features"
          >
            Try for Free
          </a>
        </div>

        {/* Interactive Playground */}
        <div className="max-w-5xl mx-auto relative group">
          {/* Decorative Glow */}
          <div className="absolute -top-24 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
          <div className="absolute -bottom-24 -right-20 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>

          <div className="relative glass-card rounded-[2.5rem] border border-white/10 shadow-2xl overflow-hidden p-6 md:p-8 flex flex-col md:flex-row gap-8 items-stretch">
            
            {/* Left: Mock Site */}
            <div className="flex-1 relative order-2 md:order-1">
               <div className="absolute inset-0 bg-indigo-500/5 rounded-2xl blur-[120px] pointer-events-none"></div>
               <div className="relative group/site">
                  <WebsitePreview flags={flags} />
                  
                  {/* Overlay Tooltip */}
                  <div className="absolute -top-4 -left-4 bg-[#0a0a0c] border border-white/10 p-4 rounded-2xl shadow-2xl hidden lg:block animate-in slide-in-from-left duration-500 z-30 backdrop-blur-3xl">
                    <div className="flex items-center gap-2 text-[10px] font-black text-indigo-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.5)]"></span>
                      HOT RELOADING
                    </div>
                    <p className="text-[9px] text-slate-500 mt-1.5 leading-relaxed max-w-[130px] font-medium text-left">
                      React state updated in real-time via <span className="text-white font-bold">Monkey Patch</span>.
                    </p>
                  </div>
               </div>
            </div>

            {/* Right: Extension Mockup (Chrome Side Panel Style) */}
            <div className="w-full md:w-80 flex flex-col shrink-0 relative order-1 md:order-2">
              <div className="flex items-center gap-3 mb-6 px-1">
                 <Logo scroll={false} className="w-10 h-10" />
                 <span className="text-lg tracking-tight text-white flex items-center">
                   <span className="font-bold">Toggle</span>
                   <span className="font-light text-secondary">Flow</span>
                 </span>
              </div>

              <div className="bg-[#0c0c0e]/90 rounded-2xl p-4 border border-white/5 space-y-3 relative z-10 backdrop-blur-3xl shadow-2xl">
                 <div className="flex items-center justify-between mb-2">
                    <span className="text-[9px] uppercase tracking-[0.2em] text-slate-600 font-bold">Overrides</span>
                    <span className="material-icons-round text-slate-600 text-sm">tune</span>
                 </div>
                 
                 <FlagToggle 
                   label="ai_features_enabled" 
                   active={flags.ai_features} 
                   onToggle={() => toggleFlag('ai_features')} 
                 />
                 <FlagToggle 
                   label="discount_active" 
                   active={flags.discount_active} 
                   onToggle={() => toggleFlag('discount_active')} 
                 />
                 <FlagToggle 
                   label="experimental_theme_v2" 
                   active={flags.experimental_theme} 
                   onToggle={() => toggleFlag('experimental_theme')} 
                 />

                 <div className="pt-2">
                    <div className="h-px bg-white/5 mb-4"></div>
                    
                    {/* Interception Logs */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[9px] uppercase tracking-widest text-slate-500 font-bold">Runtime Hook</span>
                        <div className="flex items-center gap-1.5">
                           <span className="text-[8px] text-emerald-500/80 font-mono">LIVE</span>
                           <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)] animate-pulse"></div>
                        </div>
                      </div>
                      <div className="bg-black/60 rounded-xl p-2 font-mono text-[7px] space-y-1 min-h-[64px] border border-white/5 overflow-hidden text-left">
                        {logs.length === 0 ? (
                          <div className="text-slate-700 italic">Listening for SDK calls...</div>
                        ) : (
                          logs.map(log => (
                            <div key={log.id} className="text-emerald-400/80 flex gap-1 items-center animate-in fade-in slide-in-from-left-1 duration-300 whitespace-nowrap">
                              <span className="text-slate-600 shrink-0">[{new Date(log.id).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', second:'2-digit'})}]</span>
                              <span className="truncate">{log.msg}</span>
                            </div>
                          ))
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors cursor-pointer group px-1">
                       <span className="material-icons-round text-xs group-hover:rotate-180 transition-transform">refresh</span>
                       <span className="text-[9px] uppercase tracking-widest font-bold">Purge Local Cache</span>
                    </div>
                 </div>
              </div>

              <div className="mt-4 hidden md:flex items-center gap-2 text-[9px] text-slate-600 font-bold uppercase tracking-widest px-1">
                 <div className="h-px flex-1 bg-white/5"></div>
                 <span className="shrink-0 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20 text-indigo-400">BETA v1.2</span>
              </div>
            </div>

          </div>
          
          <div className="mt-8 flex flex-wrap justify-center items-center gap-8 md:gap-12 text-slate-500 opacity-50 grayscale transition-all hover:opacity-80 hover:grayscale-0">
            <span className="text-xs font-bold font-mono tracking-tighter">LAUNCHDARKLY</span>
            <span className="text-xs font-bold font-mono tracking-tighter">STATSIG</span>
            <span className="text-xs font-bold font-mono tracking-tighter">OPTIMIZELY</span>
            <span className="text-xs font-bold font-mono tracking-tighter">AMPLITUDE</span>
            <span className="text-xs font-bold font-mono tracking-tighter">VWO</span>
          </div>
        </div>
      </div>
    </section>
  );
};

