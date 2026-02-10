const PricingCard = ({ title, price, period, features, recommended = false, buttonText = "Get Started" }: any) => (
  <div className={`p-8 rounded-[2rem] flex flex-col transition-all duration-500 ${recommended ? 'bg-[#0f1115] border-2 border-primary relative shadow-[0_20px_50px_rgba(59,130,246,0.15)] transform md:-translate-y-6' : 'bg-card-dark/50 border border-white/5 hover:border-primary/20'}`}>
    {recommended && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg shadow-primary/20">
        Most Popular
      </div>
    )}
    <div className="mb-8">
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <div className="flex items-baseline gap-1">
        <span className="text-4xl font-extrabold text-white">{price}</span>
        <span className="text-slate-500 text-sm font-medium">{period}</span>
      </div>
    </div>
    <ul className="space-y-5 mb-10 flex-1">
      {features.map((f: any, i: number) => (
        <li key={i} className="flex items-start gap-3 text-sm leading-relaxed">
          <span className="material-icons-round text-primary text-[18px] shrink-0">check_circle</span>
          <div className="flex flex-col">
            <span className="text-slate-200 font-medium">{typeof f === 'string' ? f : f.title}</span>
            {f.description && <span className="text-[11px] text-slate-500 mt-0.5">{f.description}</span>}
          </div>
        </li>
      ))}
    </ul>
    <a
      className={`w-full py-4 rounded-2xl font-bold text-center transition-all duration-300 ${recommended ? 'bg-primary hover:bg-blue-600 text-white shadow-xl shadow-primary/20 scale-105 hover:scale-110' : 'border border-primary/30 hover:bg-primary/5 text-slate-200 hover:text-white'}`}
      href="#waitlist"
    >
      {buttonText}
    </a>
  </div>
);

export const Pricing = () => (
  <section className="py-24 bg-background-dark relative overflow-hidden" id="pricing">
    {/* Background elements */}
    <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-white">Simple, Dev-Friendly Pricing</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">Scale with your team, from solo dev to enterprise. Built by engineers, for engineers.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16 items-center">
        <PricingCard
          title="Free"
          price="$0"
          period="/ forever"
          buttonText="Get Early Access"
          features={[
            'Infinite local overrides',
            'LaunchDarkly & Statsig',
            'Standard Side Panel UI'
          ]}
        />
        <PricingCard
          title="Pro"
          price="$12"
          period="/ mo"
          recommended={true}
          buttonText="Go Pro"
          features={[
            'Everything in Free',
            { title: 'Shared Preset Links', description: 'Share your flag setup via a simple URL' },
            { title: 'Custom SDK Adapters', description: 'Support for your internal/legacy flag systems' },
            'Priority Support'
          ]}
        />
        <PricingCard
          title="Team"
          price="$79"
          period="/ mo"
          buttonText="Contact Sales"
          features={[
            'First 10 Seats Included',
            'Centralized Presets',
            'Single Sign-On (SSO)',
            'Custom Security Policy'
          ]}
        />
      </div>

      <div className="text-center">
        <p className="text-xs text-slate-500 font-medium bg-white/5 py-3 px-6 rounded-full inline-block border border-white/5">
          <span className="text-primary mr-1">★</span> Early adopters get a permanent <span className="text-slate-300 font-bold">'Beta' badge</span> and exclusive future perks.
        </p>
      </div>
    </div>
  </section>
);
