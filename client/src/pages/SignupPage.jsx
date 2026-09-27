import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { Lock, Mail, User, Shield, ArrowRight } from 'lucide-react';
import Logo from '../components/Logo';

const SignupPage = ({ onSwitchToLogin }) => {
  const { signup } = useAuth();
  const { success, error } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'VIEWER',
    adminSecret: '',
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const cleanEmail = (formData.email || '').trim().toLowerCase();
    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/.test(cleanEmail)) {
      error('Please enter a valid email address');
      return;
    }

    setLoading(true);
    try {
      await signup({ ...formData, email: cleanEmail });
      success('Account created successfully! Welcome.');
    } catch (err) {
      error(err.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-shell min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute -top-32 -left-20 w-96 h-96 bg-slate-200/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-20 w-96 h-96 bg-slate-200/50 rounded-full blur-3xl pointer-events-none" />

      <div className="auth-frame w-full max-w-5xl grid lg:grid-cols-[.95fr_1.05fr] overflow-hidden rounded-[28px] border border-slate-200 shadow-2xl z-10">
        <div className="auth-showcase hidden lg:flex flex-col justify-between p-10 relative overflow-hidden">
          <div className="relative z-10">
            <Logo size={46} variant="showcase" />
            <p className="text-xs font-bold uppercase tracking-[.2em] text-slate-400 mt-8">ChronoGrid Workspace</p>
            <h2 className="text-4xl font-black tracking-tight text-white mt-3 leading-tight">Create your schedule workspace.</h2>
            <p className="text-sm text-slate-400 mt-4 leading-6">Bring faculty schedules, sections, labs, rooms, availability preferences, and auto-resolvers into a unified dashboard.</p>
          </div>
          <div className="relative z-10 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center"><Shield className="w-4 h-4 text-white" /></div>
              <div><p className="text-xs font-semibold text-white">Role-based Access</p><p className="text-[11px] text-slate-400 mt-0.5">Designed for administrators, faculty, and student viewers.</p></div>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black" />
        </div>

      <div className="w-full max-w-md lg:max-w-none z-10 p-6 sm:p-10 bg-white">
        <div className="text-center mb-8 lg:text-left">
          <div className="mb-4 flex justify-center lg:justify-start">
            <Logo size={44} />
          </div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Create ChronoGrid Account</h1>
          <p className="text-sm text-slate-500 mt-1">
            Join the academic timetable management platform
          </p>
        </div>

        <div className="glass-card rounded-2xl p-8 border border-slate-800 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Full Name
              </label>
              <div className="relative">
                <User className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  placeholder="Prof. John Doe"
                  className="w-full bg-slate-900/80 border border-slate-700 rounded-xl pl-11 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  placeholder="name@college.edu or name@example.com"
                  className="w-full bg-slate-900/80 border border-slate-700 rounded-xl pl-11 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
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
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                  minLength={6}
                  placeholder="At least 6 characters"
                  className="w-full bg-slate-900/80 border border-slate-700 rounded-xl pl-11 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Account Role
              </label>
              <div className="relative">
                <Shield className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <select
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-11 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                >
                  <option value="VIEWER">Viewer (Student / Public)</option>
                  <option value="FACULTY">Faculty Member</option>
                  <option value="ADMIN">Administrator</option>
                </select>
              </div>
            </div>

            {formData.role === 'ADMIN' && (
              <div className="p-3 bg-emerald-950/40 border border-emerald-500/20 rounded-xl space-y-2">
                <label className="block text-xs font-medium text-emerald-200">
                  Admin Passkey (for security, enter "ADMIN_2026")
                </label>
                <input
                  type="password"
                  value={formData.adminSecret}
                  onChange={(e) => setFormData({ ...formData, adminSecret: e.target.value })}
                  placeholder="ADMIN_2026"
                  className="w-full bg-slate-900 border border-emerald-500/30 rounded-lg px-3 py-2 text-xs text-white focus:outline-none"
                />
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-4 py-3 rounded-xl bg-gradient-to-r from-black to-zinc-800 hover:from-zinc-900 hover:to-zinc-900 text-white font-semibold text-sm shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2 transition-all disabled:opacity-50"
            >
              {loading ? (
                <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <span>Create Account</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>

        <p className="text-center text-xs text-slate-400 mt-6">
          Already have an account?{' '}
          <button
            onClick={onSwitchToLogin}
            className="text-emerald-400 hover:text-emerald-300 font-semibold underline underline-offset-4"
          >
            Sign in here
          </button>
        </p>
      </div>
      </div>
    </div>
  );
};

export default SignupPage;
