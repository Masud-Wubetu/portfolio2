import React, { useState } from 'react'
import { personalInfo, socialLinks } from '../../utils/constants'
import FadeIn from '../animations/FadeIn'
import BubbleText from './BubbleText';


const Contact = () => {

  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setStatus('submitting');
    // Simulate API callr
    setTimeout(() => {
      setStatus('success');
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 px-6 relative bg-transparent">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-6xl md:text-8xl font-medium tracking-tighter text-[var(--theme-text)] mb-20 tracking-tighter font-display text-center lg:text-left leading-[0.9]">
            <BubbleText text="Let's Start a Conversation" className="text-purple-500" />
          </h2>

          <div className="glass-card p-12 md:p-20 relative overflow-hidden">
            {/* Visual accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-primary/50 to-transparent" />

            <div className="flex flex-col lg:flex-row gap-20">
              {/* Left: Engagement Info */}
              <div className="flex-1">
                <p className="text-[var(--theme-text-muted)] text-2xl font-light mb-12 leading-relaxed font-sans">
                  Whether you have a revolutionary startup idea or a complex enterprise system to architect, I am ready to lead the technical vision.
                </p>

                <div className="space-y-10">
                  <div className="group flex items-center gap-8">
                    <div className="w-16 h-16 glass-card flex items-center justify-center group-hover:bg-purple-500/10 transition-all duration-500 border-[var(--theme-card-border)] group-hover:border-purple-500/20 dark:group-hover:border-white/20">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-500 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-[10px] font-medium tracking-tighter text-[var(--theme-text-muted)] uppercase tracking-[0.4em] mb-1">Direct Communication</div>
                      <div className="text-[var(--theme-text)] text-xl font-medium font-sans">wubetumasud@gmail.com</div>
                    </div>
                  </div>

                  <div className="group flex items-center gap-8">
                    <div className="w-16 h-16 glass-card flex items-center justify-center group-hover:bg-cyan-500/10 transition-all duration-500 border-[var(--theme-card-border)] group-hover:border-cyan-500/20 dark:group-hover:border-white/20">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-[10px] font-medium tracking-tighter text-[var(--theme-text-muted)] uppercase tracking-[0.4em] mb-1">HQ Location</div>
                      <div className="text-[var(--theme-text)] text-xl font-medium font-sans">Addis Ababa, Ethiopia</div>
                    </div>
                  </div>
                </div>

                <div className="mt-16 flex flex-wrap gap-6">
                  {[
                    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/masud-wubetu-15ab93363/' },
                    { name: 'Github', url: 'https://github.com/Masud-Wubetu' },
                  ].map(platform => (
                    <a key={platform.name} href={platform.url} target="_blank" rel="noopener noreferrer" className="px-8 py-3 glass-card hover:bg-[var(--theme-card-bg)] text-[var(--theme-text-muted)] text-[10px] font-medium tracking-tighter uppercase tracking-[0.3em] transition-all hover:text-[var(--theme-text)] border-[var(--theme-card-border)] cursor-pointer inline-block">
                      {platform.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Right: Modern Form */}
              <div className="flex-1 w-full bg-[var(--theme-card-bg)] p-0 rounded-3xl relative">
                {status === 'success' && (
                  <div className="absolute inset-0 bg-[var(--theme-card-bg)]/90  z-10 flex flex-col items-center justify-center rounded-3xl p-8 text-center transition-all">
                    <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-6">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-medium text-[var(--theme-text)] mb-2">Transmission Received</h3>
                    <p className="text-[var(--theme-text-muted)]">I'll get back to you as soon as possible.</p>
                  </div>
                )}
                <form className="space-y-10" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-4">
                      <label className="text-[10px] font-medium tracking-tighter text-[var(--theme-text-muted)] uppercase tracking-[0.3em] ml-2">Identity</label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={e => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-8 py-5 bg-[var(--theme-bg)] border border-[var(--theme-card-border)] rounded-2xl text-[var(--theme-text)] font-sans focus:outline-none focus:border-purple-500/30 transition-all placeholder:text-[var(--theme-text-muted)]/30"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="space-y-4">
                      <label className="text-[10px] font-medium tracking-tighter text-[var(--theme-text-muted)] uppercase tracking-[0.3em] ml-2">Email Hook</label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={e => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-8 py-5 bg-[var(--theme-bg)] border border-[var(--theme-card-border)] rounded-2xl text-[var(--theme-text)] font-sans focus:outline-none focus:border-purple-500/30 transition-all placeholder:text-[var(--theme-text-muted)]/30"
                        placeholder="name@domain.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-medium tracking-tighter text-[var(--theme-text-muted)] uppercase tracking-[0.3em] ml-2">Project Vision</label>
                    <textarea
                      rows="5"
                      required
                      value={formState.message}
                      onChange={e => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-8 py-5 bg-[var(--theme-bg)] border border-[var(--theme-card-border)] rounded-2xl text-[var(--theme-text)] font-sans focus:outline-none focus:border-purple-500/30 transition-all resize-none placeholder:text-[var(--theme-text-muted)]/30"
                      placeholder="Briefly describe your objectives..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className={`w-full py-6 bg-[var(--theme-text)] text-[var(--theme-bg)] font-medium tracking-tighter text-xs tracking-[0.4em] uppercase rounded-2xl transition-all shadow-2xl shadow-black/5 flex items-center justify-center ${status === 'submitting' ? 'opacity-70 cursor-not-allowed' : 'hover:scale-[1.02] active:scale-95 cursor-pointer'}`}
                  >
                    {status === 'submitting' ? (
                      <span className="flex items-center gap-3">
                        <svg className="animate-spin h-5 w-5 text-[var(--theme-bg)]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Transmitting...
                      </span>
                    ) : 'Initialize Transmission'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact