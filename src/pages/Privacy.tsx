import { useEffect } from "react";

export const Privacy = () => {
  // Ensure scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 bg-background-dark min-h-screen">
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-12 text-white italic">Privacy & Terms</h1>
        
        <div className="space-y-12">
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-primary flex items-center gap-2">
              <span className="w-1.5 h-6 bg-primary rounded-full"></span>
              Privacy Policy
            </h2>
            <div className="text-slate-400 leading-relaxed space-y-4">
              <p>
                At ToggleFlow, we take your privacy as seriously as our own code. Because our tool works by local injection, your data stays where it belongs: in your browser.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><span className="text-slate-200 font-medium">Data Collection:</span> We only collect your email address when you voluntarily sign up for our waitlist.</li>
                <li><span className="text-slate-200 font-medium">No Tracking:</span> We do not track your feature flag values, your application state, or your browsing habits.</li>
                <li><span className="text-slate-200 font-medium">Zero Leakage:</span> ToggleFlow does not send your internal flag configurations to any external servers. Overrides are 100% local.</li>
                <li><span className="text-slate-200 font-medium">Third Parties:</span> We will never sell, rent, or trade your email to third parties. Period.</li>
              </ul>
            </div>
          </section>

          <section className="space-y-4 pt-8 border-t border-white/5">
            <h2 className="text-xl font-bold text-primary flex items-center gap-2">
              <span className="w-1.5 h-6 bg-primary rounded-full"></span>
              Terms of Service
            </h2>
            <div className="text-slate-400 leading-relaxed space-y-4 text-sm">
              <p>
                ToggleFlow is currently in a Private Beta phase. By using this software or joining the waitlist, you acknowledge the following:
              </p>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/5 italic">
                "The software is provided 'as is', without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose and non-infringement."
              </div>
              <p>
                You are responsible for how you use ToggleFlow in your production environments. While we aim for 100% stability, it is a debugging tool and should be used with appropriate caution.
              </p>
              <p>
                Early adopters who join the waitlist and provide feedback will be granted a permanent "Beta" badge and potential future perks as a token of our appreciation.
              </p>
            </div>
          </section>
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col items-center">
          <p className="text-[10px] text-slate-600 uppercase tracking-widest font-bold">
            Last updated: February 10, 2026
          </p>
          <a href="/" className="mt-12 inline-flex items-center gap-2 text-primary hover:text-blue-400 font-bold transition-all group">
            <span className="material-icons-round text-sm group-hover:-translate-x-1 transition-transform">arrow_back</span>
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};
