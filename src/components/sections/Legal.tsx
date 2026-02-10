export const PrivacyPolicy = () => (
  <section id="privacy" className="py-24 bg-background-dark border-t border-white/5 relative overflow-hidden">
    <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
      <h2 className="text-2xl font-bold text-white mb-8 italic">Privacy & Terms</h2>
      <div className="bg-card-dark/30 border border-white/5 p-8 rounded-3xl space-y-6 text-left">
        <div>
          <h4 className="text-primary font-bold text-xs uppercase tracking-widest mb-2">Privacy Policy</h4>
          <p className="text-slate-400 text-sm leading-relaxed">
            We only collect your email to notify you about the ToggleFlow launch and project updates. 
            We will never sell your data or spam you. Your local flag overrides stay 100% local — we do not sync or store your application's internal feature flag state on our servers.
          </p>
        </div>
        
        <div className="pt-6 border-t border-white/5">
          <h4 className="text-primary font-bold text-xs uppercase tracking-widest mb-2">Terms of Service</h4>
          <p className="text-slate-400 text-sm leading-relaxed">
            ToggleFlow is currently in private beta. The software is provided "as is" without any warranties. 
            By joining the waitlist, you agree to receive beta invitations. Early adopters get a permanent "Beta" badge as a thank you.
          </p>
        </div>
      </div>
      <p className="mt-8 text-[10px] text-slate-600 uppercase tracking-widest font-bold">
        Last updated: February 2026
      </p>
    </div>
  </section>
);
