export const UseCases = () => {
  const cases = [
    {
      role: 'Quality Assurance',
      title: 'Testing Edge Cases',
      description: 'QA teams can test complex user scenarios and edge cases instantly without needing admin access to LaunchDarkly or Statsig dashboards.',
      icon: 'fact_check',
      accent: 'indigo'
    },
    {
      role: 'Support Engineering',
      title: 'Reproduce User Bugs',
      description: "Quickly reproduce customer-reported bugs by mimicking their specific feature flag state locally, without touching production data.",
      icon: 'bug_report',
      accent: 'emerald'
    },
    {
      role: 'Developers',
      title: 'Zero-Backend Demos',
      description: 'Demonstrate new features on live calls even if the backend work is pending or feature flag configs haven\'t propagated yet.',
      icon: 'present_to_all',
      accent: 'blue'
    }
  ];

  return (
    <section className="py-24 bg-grid" id="use-cases">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6 text-left">
          <div className="max-w-xl">
             <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
               Stop Fighting. <br />
               <span className="text-gradient">Start Overriding.</span>
             </h2>
             <p className="text-slate-400 text-lg leading-relaxed">
               ToggleFlow isn't just a toggle—it's a workflow accelerator for every role in your product cycle.
             </p>
          </div>
          <div className="hidden lg:block">
             <div className="px-4 py-2 rounded-full border border-white/10 text-xs font-bold text-slate-500 uppercase tracking-widest">
                3 Main Verticals
             </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((item, idx) => (
            <div key={idx} className="group relative glass-card p-8 rounded-[2rem] border border-white/5 hover:border-white/10 transition-all duration-500 hover:-translate-y-2">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110 group-hover:rotate-3 ${
                item.accent === 'indigo' ? 'bg-indigo-500/10 text-indigo-400' : 
                item.accent === 'emerald' ? 'bg-emerald-500/10 text-emerald-400' : 
                'bg-blue-500/10 text-blue-400'
              }`}>
                <span className="material-icons-round text-3xl">{item.icon}</span>
              </div>
              
              <div className="space-y-4">
                <span className={`text-[10px] font-black uppercase tracking-[0.2em] px-2 py-0.5 rounded border ${
                    item.accent === 'indigo' ? 'border-indigo-500/30 text-indigo-400 bg-indigo-500/5' : 
                    item.accent === 'emerald' ? 'border-emerald-500/30 text-emerald-400 bg-emerald-500/5' : 
                    'border-blue-500/30 text-blue-400 bg-blue-500/5'
                }`}>
                  {item.role}
                </span>
                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>

              {/* Decorative line */}
              <div className={`absolute bottom-0 left-8 right-8 h-1 rounded-t-full transition-all duration-500 opacity-0 group-hover:opacity-100 ${
                  item.accent === 'indigo' ? 'bg-indigo-500 shadow-[0_-4px_12px_rgba(99,102,241,0.5)]' : 
                  item.accent === 'emerald' ? 'bg-emerald-500 shadow-[0_-4px_12px_rgba(16,185,129,0.5)]' : 
                  'bg-blue-500 shadow-[0_-4px_12px_rgba(59,130,246,0.5)]'
              }`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
