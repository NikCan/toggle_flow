export const Workflow = () => (
  <section className="py-24 bg-background-dark border-y border-border-dark relative overflow-hidden" id="how-it-works">
    {/* Decorative blur */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-white">Three Steps to Flow</h2>
        <p className="text-slate-400">Zero configuration. Pure engineering speed.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 relative">
        {/* Animated Connecting Line */}
        <div className="hidden md:block absolute top-[4.5rem] left-[10%] right-[10%] h-[2px] bg-white/[0.03] overflow-hidden">
          <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-transparent via-primary to-transparent animate-flow-line"></div>
          <style>
            {`
              @keyframes flow-line-pulse {
                0% { left: -100px; opacity: 0; }
                20% { opacity: 1; }
                80% { opacity: 1; }
                100% { left: 100%; opacity: 0; }
              }
              .animate-flow-line {
                animation: flow-line-pulse 4s infinite linear;
              }
            `}
          </style>
        </div>

        {/* Step 1: Install */}
        <div className="group relative z-10 bg-card-dark/50 backdrop-blur-sm p-8 rounded-3xl border border-white/5 hover:border-primary/20 transition-all duration-500 flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 relative">
            <div className="absolute top-[-10px] left-[-10px] w-8 h-8 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center shadow-lg border-2 border-background-dark">
              1
            </div>
            <span className="material-icons-round text-3xl text-primary group-hover:rotate-12 transition-transform">extension</span>
          </div>
          <h4 className="text-xl font-bold mb-3 text-white">Get the Build</h4>
          <p className="text-sm text-slate-500 leading-relaxed">
            Register for Beta and get your early access build via email in seconds.
          </p>
        </div>

        {/* Step 2: Auto-Detect */}
        <div className="group relative z-10 bg-card-dark/50 backdrop-blur-sm p-8 rounded-3xl border border-white/5 hover:border-secondary/20 transition-all duration-500 flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mb-8 relative">
            <div className="absolute top-[-10px] left-[-10px] w-8 h-8 rounded-full bg-secondary text-white text-xs font-bold flex items-center justify-center shadow-lg border-2 border-background-dark">
              2
            </div>
            <span className="material-icons-round text-3xl text-secondary group-hover:scale-110 transition-transform">radar</span>
          </div>
          <h4 className="text-xl font-bold mb-3 text-white">Auto-Detect</h4>
          <p className="text-sm text-slate-500 leading-relaxed">
            Automatic detection for <span className="text-slate-300 font-medium">LaunchDarkly, Statsig</span>, and more. No manual config.
          </p>
        </div>

        {/* Step 3: Toggle */}
        <div className="group relative z-10 bg-card-dark/50 backdrop-blur-sm p-8 rounded-3xl border border-white/5 hover:border-primary/20 transition-all duration-500 flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 relative">
            <div className="absolute top-[-10px] left-[-10px] w-8 h-8 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center shadow-lg border-2 border-background-dark">
              3
            </div>
            <span className="material-icons-round text-3xl text-primary group-hover:-rotate-12 transition-transform">toggle_on</span>
          </div>
          <h4 className="text-xl font-bold mb-3 text-white">Instant Toggle</h4>
          <p className="text-sm text-slate-500 leading-relaxed">
            Changes reflect in <span className="text-emerald-500/80 font-semibold">real-time</span> without page reloads or CDN sync.
          </p>
        </div>
      </div>
    </div>
  </section>
);
