import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { Lock, Mail, ArrowRight } from 'lucide-react';
import Logo from '../components/Logo';

const LoginPage = ({ onSwitchToSignup }) => {
  const { login } = useAuth();
  const { success, error } = useToast();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const cleanEmail = (email || '').trim().toLowerCase();
    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/.test(cleanEmail)) {
      error('Please enter a valid email address');
      return;
    }

    setLoading(true);
    try {
      await login(cleanEmail, password);
      success('Welcome back! Logged in successfully.');
    } catch (err) {
      error(err.message || 'Invalid credentials');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-shell min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute -top-32 -right-20 w-96 h-96 bg-slate-200/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-20 w-96 h-96 bg-slate-200/50 rounded-full blur-3xl pointer-events-none" />

      <div className="auth-frame w-full max-w-5xl grid lg:grid-cols-[1.05fr_.95fr] overflow-hidden rounded-[28px] border border-slate-200 shadow-2xl z-10">
        <div className="auth-showcase hidden lg:flex flex-col justify-between p-10 relative overflow-hidden">
          <div className="relative z-10">
            <Logo size={46} variant="showcase" />
            <div className="mt-8 max-w-md">
              <p className="text-xs font-bold uppercase tracking-[.2em] text-slate-400">Intelligent Scheduling Engine</p>
              <h2 className="text-4xl font-black tracking-tight text-white mt-3 leading-tight">ChronoGrid</h2>
              <p className="text-lg font-medium text-slate-300 mt-1">Autonomous academic timetable optimization & conflict resolver.</p>
              <p className="text-sm text-slate-400 mt-4 leading-6">Plan multi-department schedules, detect collisions in real-time, balance faculty workloads, and resolve constraints effortlessly.</p>
            </div>
          </div>
          <div className="relative z-10 grid grid-cols-3 gap-3">
            {['Conflict Detection', 'Smart Scheduling', 'Instant Export'].map((item) => (
              <div key={item} className="rounded-2xl bg-white/10 border border-white/10 px-3 py-3 backdrop-blur-md">
                <div className="w-2 h-2 rounded-full bg-white mb-2" />
                <span className="text-[11px] font-semibold text-white/90">{item}</span>
              </div>
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black" />
        </div>

      <div className="w-full max-w-md lg:max-w-none z-10 p-6 sm:p-10 bg-white">
        {/* Header Branding */}
        <div className="text-center mb-8 lg:text-left">
          <div className="mb-4 flex justify-center lg:justify-start">
            <Logo size={44} />
          </div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Sign In to ChronoGrid</h1>
          <p className="text-sm text-slate-500 mt-1">
            Dynamic college timetable optimization & conflict resolution engine
          </p>
        </div>

        {/* Login Card */}
        <div className="glass-card rounded-2xl p-8 border border-slate-800 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="name@college.edu or name@example.com"
                  className="w-full bg-slate-900/80 border border-slate-700 rounded-xl pl-11 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="••••••••"
                  className="w-full bg-slate-900/80 border border-slate-700 rounded-xl pl-11 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-2 py-3 rounded-xl bg-gradient-to-r from-black to-zinc-800 hover:from-zinc-900 hover:to-zinc-900 text-white font-semibold text-sm shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2 transition-all disabled:opacity-50"
            >
              {loading ? (
                <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <span>Sign In</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Switch to Signup */}
        <p className="text-center text-xs text-slate-400 mt-6">
          Don't have an account?{' '}
          <button
            onClick={onSwitchToSignup}
            className="text-black hover:underline font-semibold underline-offset-4"
          >
            Create one here
          </button>
        </p>
      </div>
      </div>
    </div>
  );
};

export default LoginPage;
