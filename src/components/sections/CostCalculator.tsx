import { useState } from 'react';

export const CostCalculator = () => {
  const [devCount, setDevCount] = useState(10);
  const hourlyRate = 60; // Average dev rate
  const minutesWastedPerDay = 15; // Realistic: context switching + CI waiting + flag propagation
  const workingDays = 22;

  const monthlyLoss = Math.round(
    (devCount * (minutesWastedPerDay / 60) * workingDays * hourlyRate)
  );

  return (
    <section className="py-24 relative overflow-hidden bg-[#050505]">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-red-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            The Cost of <span className="text-red-500">Waiting</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Every minute your team waits for <span className="text-white font-semibold">feature flags to propagate</span> or local configs to reload is pure burning capital.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-stretch glass-card p-8 md:p-12 border-red-500/20 border-2 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
          {/* Subtle Red Warning Stripe */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500/50 to-transparent shadow-[0_4px_12px_rgba(239,68,68,0.3)]"></div>
          
          <div className="flex flex-col justify-between py-2">
            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-end mb-6">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] leading-none">
                    Engineering Team Size
                  </label>
                  <span className="text-4xl font-black text-white leading-none transition-all duration-300">
                    {devCount} <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest ml-1">Devs</span>
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={devCount}
                  onChange={(e) => setDevCount(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-red-500 hover:accent-red-400 transition-all"
                />
                <div className="flex justify-between mt-4 text-[9px] text-slate-600 font-bold uppercase tracking-widest">
                  <span className={devCount < 10 ? 'text-red-500/50' : ''}>Startups</span>
                  <span className={devCount >= 10 && devCount < 50 ? 'text-red-500/50' : ''}>mid-size</span>
                  <span className={devCount >= 50 ? 'text-red-500/50' : ''}>Enterprise</span>
                </div>
              </div>

              <div className="space-y-5">
                {[
                  "15 mins/day lost on flag propagation",
                  "Average developer rate of $60/hour",
                  "22 active working days per month"
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-4 text-slate-400 text-sm font-medium">
                    <div className="w-6 h-6 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-[10px] text-red-500 font-black">
                      {i + 1}
                    </div>
                    <p>{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center text-center p-8 bg-black/40 rounded-3xl border border-white/5 relative group">
             <div className="absolute inset-0 bg-red-500/5 blur-3xl group-hover:bg-red-500/10 transition-colors pointer-events-none"></div>
             
             <div className="relative z-10">
                <p className="text-[10px] font-black text-red-500 uppercase tracking-[0.4em] mb-4">Wasted Budget</p>
                <div className="text-6xl md:text-7xl font-black text-white mb-2 tabular-nums tracking-tighter shadow-sm animate-in zoom-in-95 duration-300">
                    ${monthlyLoss.toLocaleString()}
                </div>
                <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px] mb-8">Monthly Direct Loss</p>
                
                <div className="w-full h-px bg-white/5 mb-8"></div>
                
                <a 
                  href="#waitlist"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-500 text-white font-black rounded-xl text-sm uppercase tracking-widest transition-all shadow-[0_0_25px_rgba(239,68,68,0.3)] hover:shadow-[0_0_35px_rgba(239,68,68,0.5)] hover:-translate-y-1 active:scale-95 whitespace-nowrap"
                >
                  <span className="material-icons-round text-lg">trending_down</span>
                  Stop losing money
                </a>
                
                <p className="mt-8 text-slate-500 text-[11px] font-medium italic opacity-60">
                  "It's not just money. It's the flow state your team loses forever."
                </p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
