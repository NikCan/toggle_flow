export const FeatureHighlights = () => (
  <section className="py-24 bg-background-dark border-y border-border-dark relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="grid md:grid-cols-3 gap-8">
        {/* Feature 1: End the Wait */}
        <div className="group p-8 rounded-3xl bg-card-dark/30 border border-white/5 hover:border-primary/30 hover:bg-primary/5 transition-all duration-500">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 transition-transform group-hover:scale-110">
            <span className="material-icons-round">timer_off</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">End the Wait. <span className="text-primary block text-sm mt-1 uppercase tracking-tighter italic">Results in 0ms.</span></h3>
          <p className="text-slate-400 leading-relaxed text-sm mb-4">
            Stop waiting 5-10 minutes for CDN propagation. ToggleFlow overrides happen locally and instantly in your session.
          </p>
          <div className="pt-4 border-t border-white/5">
            <code className="text-[10px] text-slate-500 font-mono">
              // Proof: Works by monkey-patching variation and allFlags methods.
            </code>
          </div>
        </div>

        {/* Feature 2: Bypass Access */}
        <div className="group p-8 rounded-3xl bg-card-dark/30 border border-white/5 hover:border-secondary/30 hover:bg-secondary/5 transition-all duration-500">
          <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary mb-6 transition-transform group-hover:scale-110">
            <span className="material-icons-round">admin_panel_settings</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Bypass Access Hurdles</h3>
          <p className="text-slate-400 leading-relaxed text-sm mb-4">
            Don't have admin access to LaunchDarkly or Statsig? Overwrite any flag context for local testing without bothering your PM.
          </p>
          <div className="pt-4 border-t border-white/5">
            <code className="text-[10px] text-slate-500 font-mono">
              // Proof: Pure JS-context injection. No backend permissions required.
            </code>
          </div>
        </div>

        {/* Feature 3: QA at Scale */}
        <div className="group p-8 rounded-3xl bg-card-dark/30 border border-white/5 hover:border-primary/30 hover:bg-primary/5 transition-all duration-500">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 transition-transform group-hover:scale-110">
            <span className="material-icons-round">biotech</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">QA at Scale, Solo</h3>
          <p className="text-slate-400 leading-relaxed text-sm mb-4">
            Simulate complex user segments and multi-flag combinations with a single click. No infrastructure needed.
          </p>
          <div className="pt-4 border-t border-white/5">
            <code className="text-[10px] text-slate-500 font-mono">
              // Proof: Session-level persistence with non-destructive overrides.
            </code>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const DetailedFeatures = () => (
  <section className="py-24 bg-background-dark relative overflow-hidden" id="features">
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-white">Engineered for DevX</h2>
        <p className="text-slate-400">Everything you need to master your application state.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {/* Functional: Overrides */}
        <div className="group p-8 rounded-3xl bg-card-dark border border-border-dark hover:border-primary/50 transition-all flex flex-col">
          <div className="flex items-start justify-between mb-6">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
              <span className="material-icons-round">settings_input_component</span>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary/60 bg-primary/5 px-2 py-1 rounded">
              Functional
            </span>
          </div>
          <h4 className="text-xl font-bold mb-3 text-white">Instant Context Overrides</h4>
          <p className="text-slate-400 text-sm leading-relaxed mb-4">
            Intercept and override flag values during or after SDK initialization. Support for JSON, String, Boolean, and Number flag types across all environments.
          </p>
          <div className="mt-auto pt-4 border-t border-white/5">
            <code className="text-[10px] text-primary/60 font-mono italic">// Supports: LaunchDarkly, Statsig, Optimizely</code>
          </div>
        </div>

        {/* Functional: Detection */}
        <div className="group p-8 rounded-3xl bg-card-dark border border-border-dark hover:border-primary/50 transition-all flex flex-col">
          <div className="flex items-start justify-between mb-6">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
              <span className="material-icons-round">radar</span>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary/60 bg-primary/5 px-2 py-1 rounded">
              Detection
            </span>
          </div>
          <h4 className="text-xl font-bold mb-3 text-white">Universal SDK Detection</h4>
          <p className="text-slate-400 text-sm leading-relaxed mb-4">
            Automatically hooks into Split, Statsig, and custom internal providers using our proxy-safe architecture. No manual configuration required.
          </p>
          <div className="mt-auto pt-4 border-t border-white/5">
            <code className="text-[10px] text-primary/60 font-mono italic">// Tech: Proxy-safe hook architecture</code>
          </div>
        </div>

        {/* UI: Side Panel */}
        <div className="group p-8 rounded-3xl bg-card-dark border border-border-dark hover:border-secondary/50 transition-all flex flex-col">
          <div className="flex items-start justify-between mb-6">
            <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary border border-secondary/20">
              <span className="material-icons-round">widgets</span>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-secondary/60 bg-secondary/5 px-2 py-1 rounded">
              Interface
            </span>
          </div>
          <h4 className="text-xl font-bold mb-3 text-white">Intuitive Side Panel UI</h4>
          <p className="text-slate-400 text-sm leading-relaxed mb-2">
            Native Chrome side panel integration that stays open as you navigate. No more switching tabs or losing your debugging context.
          </p>
          
          {/* Mini UI Schema */}
          <div className="mt-4 p-3 rounded-xl bg-black/40 border border-white/5 space-y-3 group-hover:border-secondary/20 transition-colors">
            <div className="h-6 w-full bg-white/5 rounded-md flex items-center px-2">
              <span className="material-icons-round text-[10px] text-white/20 mr-2">search</span>
              <div className="w-20 h-1.5 bg-white/10 rounded"></div>
            </div>
            <div className="space-y-2">
              {[1, 2].map(i => (
                <div key={i} className="flex justify-between items-center p-2 rounded bg-white/[0.02]">
                  <div className={`h-1.5 rounded bg-white/10 ${i === 1 ? 'w-24' : 'w-16'}`}></div>
                  <div className={`w-7 h-3.5 rounded-full flex items-center px-0.5 transition-colors ${i === 1 ? 'bg-secondary/40' : 'bg-white/10'}`}>
                    <div className={`w-2.5 h-2.5 rounded-full shadow-sm ${i === 1 ? 'bg-secondary ml-auto' : 'bg-white/30'}`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Functional: Latency */}
        <div className="group p-8 rounded-3xl bg-card-dark border border-border-dark hover:border-primary/50 transition-all flex flex-col">
          <div className="flex items-start justify-between mb-6">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
              <span className="material-icons-round">bolt</span>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary/60 bg-primary/5 px-2 py-1 rounded">
              Performance
            </span>
          </div>
          <h4 className="text-xl font-bold mb-3 text-white">Zero Latency Impact</h4>
          <p className="text-slate-400 text-sm leading-relaxed mb-4">
            Bundled size &lt; 50kb. Zero execution overhead when the panel is closed. Designed for daily use without browser degradation.
          </p>
          <div className="mt-auto pt-4 border-t border-white/5">
            <code className="text-[10px] text-primary/60 font-mono italic">// Benchmark: &lt; 0.1ms injection overhead</code>
          </div>
        </div>
      </div>
    </div>
  </section>
);
