import { useState, useEffect } from "react";
import { Logo } from "../ui/Logo";

const CodeWindow = ({ title, code, color = "text-emerald-400", highlight = false }: { title: string, code: string, color?: string, highlight?: boolean }) => (
  <div className={`flex-1 bg-[#010101] rounded-xl border transition-all duration-700 p-4 text-left font-mono text-xs shadow-2xl relative group overflow-hidden ${highlight ? 'border-primary/50 shadow-[0_0_30px_rgba(59,130,246,0.15)] scale-[1.02]' : 'border-white/5'}`}>
    {highlight && <div className="absolute inset-0 bg-primary/5 animate-pulse pointer-events-none"></div>}
    <div className="absolute top-0 left-0 w-1 h-full bg-primary/20 group-hover:bg-primary/40 transition-colors"></div>
    <div className="flex justify-between items-center mb-3">
      <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">{title}</span>
      <div className="flex gap-1">
        <div className="w-1.5 h-1.5 rounded-full bg-white/10"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-white/10"></div>
      </div>
    </div>
    <div className="space-y-1">
      <span className="text-slate-500">// {title} state</span>
      <div className="flex gap-2 text-[11px]">
        <span className="text-purple-400">ldClient</span>
        <span className="text-slate-300">.</span>
        <span className="text-blue-400">variation</span>
        <span className="text-slate-300">(</span>
        <span className="text-amber-200">'new_feature'</span>
        <span className="text-slate-300">)</span>
      </div>
      <div className={`mt-2 font-bold transition-all duration-300 ${color} ${highlight ? 'text-lg' : ''}`}>
        {code}
      </div>
    </div>
  </div>
);

export const Hero = () => {
  const [isInjected, setIsInjected] = useState(false);
  const [showHighlight, setShowHighlight] = useState(false);

  useEffect(() => {
    if (isInjected) {
      setShowHighlight(true);
      const timer = setTimeout(() => setShowHighlight(false), 1500);
      return () => clearTimeout(timer);
    }
  }, [isInjected]);

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
          v1.2.0 is now live
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
          Stop Refreshing. <br />
          <span className="text-gradient">Start Overriding.</span>
        </h1>

        {/* Updated Description */}
        <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
          Instant overrides for <span className="text-white font-semibold">LaunchDarkly, Statsig, and more</span>. <br className="hidden md:block" />
          Debug production features in real-time <span className="text-primary font-medium">without touching the dashboard</span> or waiting for sync.
        </p>

        {/* CTA Section */}
        <div className="flex flex-col items-center gap-8 mb-24">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            <a
              className="w-full sm:w-auto px-10 py-4 bg-primary hover:bg-blue-600 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 text-lg shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] group"
              href="#waitlist"
            >
              <span className="material-icons-round transition-transform group-hover:rotate-12">edit_notifications</span>
              Get Early Access
            </a>
            <a
              className="w-full sm:w-auto px-10 py-4 bg-card-dark border border-border-dark hover:border-slate-700 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 text-lg"
              href="#features"
            >
              How it works
            </a>
          </div>

          {/* Social Proof & Trust */}
          <div className="flex flex-col gap-6 items-center">
            <p className="text-xs text-slate-600 font-bold uppercase tracking-[0.2em]">
              Trusted by engineers at
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-6 opacity-30 grayscale pointer-events-none">
              <span className="text-slate-300 font-bold tracking-tight text-2xl">stripe</span>
              <span className="text-slate-300 font-bold tracking-tighter text-2xl uppercase">Vercel</span>
              <span className="text-slate-300 font-extrabold tracking-tight text-2xl">airbnb</span>
            </div>
            
            <div className="flex gap-4 text-[10px] uppercase tracking-widest text-slate-600 font-bold">
              <span className="flex items-center gap-1.5 text-emerald-500/80">
                <span className="material-icons-round text-[12px]">verified_user</span>
                Security first: 100% Local Injection. No data leaves your browser.
              </span>
              <span className="flex items-center gap-1">
                <span className="material-icons-round text-[12px] text-primary/60">code</span>
                Coming to GitHub
              </span>
            </div>
          </div>
        </div>

        {/* Interactive Playground */}
        <div className="max-w-4xl mx-auto relative group">
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-[2rem] blur-2xl opacity-50"></div>
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 p-8 glass-card rounded-3xl border border-white/10 shadow-2xl">
            <CodeWindow 
              title="Current" 
              code={`// returns ${isInjected ? 'true' : 'false'}`} 
              color={isInjected ? "text-emerald-400" : "text-red-400/80"}
            />
            
            <div className="relative flex flex-col items-center gap-4">
              <div 
                className={`relative p-1 rounded-3xl bg-slate-900 border transition-all duration-500 cursor-pointer ${isInjected ? 'border-primary shadow-[0_0_30px_rgba(59,130,246,0.3)] scale-110' : 'border-white/10 hover:border-white/30'}`}
                onClick={() => setIsInjected(!isInjected)}
              >
                <Logo scroll={false} className={`w-28 h-28 transform transition-transform duration-700 ${isInjected ? 'rotate-180' : ''}`} />
                <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary flex items-center justify-center animate-bounce ${isInjected ? 'hidden' : ''}`}>
                  <span className="material-icons-round text-white text-xs">touch_app</span>
                </div>
              </div>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500 animate-pulse">
                {isInjected ? 'Engine Active' : 'Click to Inject'}
              </span>
            </div>

            <CodeWindow 
              title="Injected" 
              code={`// returns ${isInjected ? 'true! 🚀' : 'forced to true'}`} 
              color={isInjected ? "text-emerald-400" : "text-slate-600/50"}
              highlight={showHighlight}
            />
          </div>
          
          <p className="mt-6 text-[11px] text-slate-500 font-medium tracking-wide">
            Works with <span className="text-slate-400 uppercase text-[10px] font-bold">LaunchDarkly, Statsig, Optimizely</span> and custom SDKs.
          </p>
        </div>
      </div>
    </section>
  );
};
