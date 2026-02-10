import { useState } from "react";

export const Waitlist = () => {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);

    // Google Form Submission from Env
    const finalActionUrl = import.meta.env.VITE_GOOGLE_FORM_URL;
    const entryId = import.meta.env.VITE_GOOGLE_FORM_ENTRY_ID;

    const formData = new FormData();
    formData.append(entryId, email);

    try {
      // Use no-cors to prevent redirect and handle success locally
      await fetch(finalActionUrl, {
        method: "POST",
        mode: "no-cors",
        body: formData
      });
      
      setSubmitted(true);
    } catch (error) {
      console.error("Submission error:", error);
      // Even if it fails (due to CORS in some cases), we usually assume success for the UI if it's a Google Form no-cors trick
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="waitlist" className="py-24 bg-background-dark border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      <div className="max-w-3xl mx-auto text-center px-6 relative z-10">
        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-8 shadow-inner transition-all duration-700 ${submitted ? 'rotate-[360deg] scale-110' : ''}`}>
          <span className="material-icons-round text-3xl">{submitted ? 'task_alt' : 'rocket_launch'}</span>
        </div>
        
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 transition-all duration-500">
          {submitted ? 'You\'re on the list! ✨' : 'Get Early Access'}
        </h2>
        
        <p className="text-slate-400 mb-10 text-lg leading-relaxed transition-all duration-500">
          {submitted 
            ? 'Check your inbox, the rocket is already on the way! Join our community to share your feedback.' 
            : 'We are currently in private beta, fine-tuning the 0ms injection engine. Leave your email to get the direct download link and documentation.'
          }
        </p>
        
        {!submitted ? (
          <form className="flex flex-col sm:flex-row gap-4 mb-6 transition-all" onSubmit={handleSubmit}>
            <div className="flex-1 relative group">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 material-icons-round text-slate-500 text-lg group-focus-within:text-primary transition-colors">email</span>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="dev@company.com" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-primary focus:bg-white/[0.08] focus:ring-4 focus:ring-primary/20 transition-all placeholder:text-slate-600"
                required
                disabled={loading}
              />
            </div>
            <button 
              type="submit"
              disabled={loading}
              className={`bg-primary hover:bg-blue-600 text-white font-extrabold px-10 py-4 rounded-2xl transition-all shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] active:scale-95 whitespace-nowrap flex items-center justify-center gap-2 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {loading ? (
                <>
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                  Processing...
                </>
              ) : (
                'Claim My Access'
              )}
            </button>
          </form>
        ) : (
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold animate-in fade-in zoom-in duration-500">
            <span className="material-icons-round text-sm">auto_awesome</span>
            Verification email sent!
          </div>
        )}
        
        <div className="flex flex-col items-center gap-2 mt-8">
          <p className="text-xs text-slate-400 italic flex items-center gap-2">
            <span className="material-icons-round text-[14px] text-emerald-500/60">check_circle</span>
            {submitted ? 'Welcome to ToggleFlow.' : 'Be the first to get the Beta build'}
          </p>
          <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">
            No spam. Just one email when we launch.
          </p>
        </div>
      </div>
      
      {/* Decorative blur */}
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-[100px]"></div>
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-secondary/10 rounded-full blur-[100px]"></div>
    </section>
  );
};
