import { Link } from "react-router-dom";
import { Logo } from "../ui/Logo";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-background-dark pt-20 pb-10 border-t border-border-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
          <div className="max-w-sm">
            <div className="flex items-center gap-3 mb-6">
              <Logo className="w-8 h-8 opacity-70 grayscale" />
              <span className="text-lg font-bold text-white">ToggleFlow</span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed mb-6">
              Built for Engineers by Engineers. We’re on a mission to make feature flag management invisible during the
              development process.
            </p>
            <div className="flex gap-5">
              <a 
                className="text-slate-400 hover:text-white transition-all transform hover:scale-110" 
                href={import.meta.env.VITE_GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                </svg>
              </a>
              <a 
                className="text-slate-400 hover:text-white transition-all transform hover:scale-110" 
                href={import.meta.env.VITE_TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                title="Telegram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.11.02-1.89 1.2-5.32 3.52-.5.34-.96.51-1.37.5-.45-.01-1.32-.26-1.96-.46-.79-.25-1.42-.39-1.37-.82.03-.22.33-.45.91-.71 3.55-1.55 5.92-2.57 7.1-3.06 3.38-1.41 4.08-1.65 4.54-1.66.1 0 .33.02.48.15.12.1.16.23.17.33 0 .09.01.22 0 .33z"></path>
                </svg>
              </a>
              <a 
                className="text-slate-400 hover:text-white transition-all transform hover:scale-110" 
                href={import.meta.env.VITE_LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-12 gap-y-6">
            <div>
              <h4 className="text-white font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                <li><a className="hover:text-primary transition-colors" href="/#features">Features</a></li>
                <li><a className="hover:text-primary transition-colors" href="/#how-it-works">Security</a></li>
                <li><a className="hover:text-primary transition-colors" href={import.meta.env.VITE_GITHUB_URL} target="_blank" rel="noopener noreferrer">API Docs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                <li><a className="hover:text-primary transition-colors" href="#">Blog</a></li>
                <li><Link className="hover:text-primary transition-colors" to="/privacy">Terms</Link></li>
                <li><Link className="hover:text-primary transition-colors" to="/privacy">Privacy</Link></li>
                <li><a className="hover:text-primary transition-colors text-xs opacity-70" href="mailto:toggleflow.dev@gmail.com">toggleflow.dev@gmail.com</a></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-start md:items-end justify-between">
            <div className="text-right">
              <p className="text-[10px] text-slate-600 uppercase tracking-[0.2em] font-bold mb-4">Systems Status</p>
              <div className="flex items-center gap-2 px-3 py-1 bg-emerald-500/10 rounded-full border border-emerald-500/20">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="text-[10px] text-emerald-500 font-bold uppercase tracking-wider">All Systems Operational</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border-dark text-[10px] text-slate-500 uppercase tracking-widest font-bold">
          <p>© {year} ToggleFlow Inc. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <span className="material-icons-round text-[12px] text-red-500">favorite</span> by the open source
            community
          </p>
        </div>
      </div>
    </footer>
  )
}
