import { Link } from "react-router-dom";
import { Logo } from "../ui/Logo";

export const Navbar = () => (
  <nav className="sticky top-0 z-50 border-b border-white/10 bg-background-dark/80 backdrop-blur-md">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-3">
        <Logo className="w-14 h-14" />
        <span className="text-xl tracking-tight text-white flex items-center">
          <span className="font-bold">Toggle</span>
          <span className="font-light text-secondary">Flow</span>
        </span>
      </Link>
      <div className="hidden md:flex items-center gap-8">
        <a className="text-sm font-medium hover:text-primary transition-colors" href="/#features">
          Features
        </a>
        <a className="text-sm font-medium hover:text-primary transition-colors" href="/#how-it-works">
          How it Works
        </a>
        <a className="text-sm font-medium hover:text-primary transition-colors" href="/#pricing">
          Pricing
        </a>
        <a
          className="bg-primary hover:bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all flex items-center gap-2"
          href="/#waitlist"
        >
          <span className="material-icons-round text-lg">edit_notifications</span>
          Join Waitlist
        </a>
      </div>
    </div>
  </nav>
);
